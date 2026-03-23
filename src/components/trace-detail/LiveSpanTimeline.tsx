import { useCallback, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import {
  cumulativeStartMs,
  DEMO_TIMELINE_SPAN_TARGET,
  durationTone,
  spanBarColor,
  useLiveClaudeSpans,
} from './claudeTraceLive'

const imgDot1 = 'https://www.figma.com/api/mcp/asset/bc4e5eee-6217-47e9-a885-6a8cf0a554d8'

const ROW_H = 44
const COL_IDX = 40
const COL_DUR = 76
const OVERSCAN = 6

/** Floor so short steps stay visible on long traces; % of the Gantt track. */
const MIN_BAR_WIDTH_PCT = 2.25
/** Absolute minimum bar width so labels stay readable (applies when % resolves smaller). */
const MIN_BAR_WIDTH_PX = 44

function formatMs(ms: number) {
  return ms >= 1000 ? `${(ms / 1000).toFixed(2)}s` : `${Math.round(ms)}ms`
}

function formatAxisMs(ms: number) {
  if (ms >= 120_000) return `${(ms / 60_000).toFixed(1)}m`
  if (ms >= 10_000) return `${(ms / 1000).toFixed(0)}s`
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)}s`
  return `${Math.round(ms)}ms`
}

type TimelineTooltipState = {
  spanId: string
  label: string
  startMs: number
  endMs: number
  durationMs: number
  rowIndex: number
  kind: string
  x: number
  y: number
}

function formatKind(k: string) {
  return k.replace(/_/g, ' ')
}

function SpanTimelineTooltip({ tip }: { tip: TimelineTooltipState }) {
  const pad = 14
  const maxW = 400
  const left = Math.min(tip.x + pad, typeof window !== 'undefined' ? window.innerWidth - maxW - pad : tip.x)
  const top = Math.min(tip.y + pad, typeof window !== 'undefined' ? window.innerHeight - 160 : tip.y)

  return (
    <div
      role="tooltip"
      className="pointer-events-none fixed z-[100000] max-w-[min(400px,calc(100vw-24px))] rounded-lg border border-[#d5d7da] bg-white px-3 py-2.5 text-left shadow-lg"
      style={{ left: Math.max(pad, left), top: Math.max(pad, top) }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#a4a7ae]">
        Row {tip.rowIndex} · {formatKind(tip.kind)}
      </p>
      <p className="mt-1 break-words text-sm font-semibold leading-snug text-[#181d27]">{tip.label}</p>
      <dl className="mt-2 space-y-1 text-xs text-[#535862]">
        <div className="flex justify-between gap-4">
          <dt className="shrink-0 text-[#717680]">Wall time</dt>
          <dd className="text-right font-medium tabular-nums text-[#181d27]">
            {formatAxisMs(tip.startMs)} → {formatAxisMs(tip.endMs)}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-[#717680]">Duration</dt>
          <dd className="text-right font-medium tabular-nums text-[#181d27]">{formatMs(tip.durationMs)}</dd>
        </div>
      </dl>
    </div>
  )
}

function TimeAxisRuler({ totalMs }: { totalMs: number }) {
  const ticks = useMemo(() => {
    const t = Math.max(totalMs, 1)
    return [0, 0.25, 0.5, 0.75, 1].map((f) => ({ frac: f, ms: f * t }))
  }, [totalMs])

  return (
    <div className="relative h-7 w-full border-b border-[#e9eaeb] bg-[#fafafa]">
      <div className="absolute inset-x-0 bottom-0 top-2 flex items-end">
        {ticks.map(({ frac, ms }) => (
          <div
            key={frac}
            className="absolute flex flex-col items-center"
            style={{ left: `${frac * 100}%`, transform: 'translateX(-50%)' }}
          >
            <span className="text-[10px] font-medium tabular-nums text-[#717680]">{formatAxisMs(ms)}</span>
            <div className="mt-0.5 h-2 w-px bg-[#d5d7da]" />
          </div>
        ))}
      </div>
      <p className="absolute left-0 top-0 pl-1 text-[9px] font-semibold uppercase tracking-wide text-[#a4a7ae]">
        Wall time →
      </p>
    </div>
  )
}

export function LiveSpanTimeline({
  expanded,
  onToggleExpanded,
  imgIcon6,
}: {
  expanded: boolean
  onToggleExpanded: () => void
  imgIcon6: string
}) {
  const { spans, totalTraceMs } = useLiveClaudeSpans(2200)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoverTip, setHoverTip] = useState<TimelineTooltipState | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)

  const longestMs = useMemo(
    () => (spans.length ? Math.max(...spans.map((s) => s.durationMs)) : 0),
    [spans],
  )
  const starts = useMemo(() => cumulativeStartMs(spans), [spans])
  const totalH = spans.length * ROW_H
  const viewportH = expanded ? 520 : 300

  const { startIdx, endIdx } = useMemo(() => {
    const start = Math.max(0, Math.floor(scrollTop / ROW_H) - OVERSCAN)
    const vis = Math.ceil(viewportH / ROW_H) + OVERSCAN * 2
    const end = Math.min(spans.length, start + vis)
    return { startIdx: start, endIdx: end }
  }, [scrollTop, viewportH, spans.length])

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (el) setScrollTop(el.scrollTop)
  }, [])

  const tMax = Math.max(totalTraceMs, 1)

  const showTipForSpan = useCallback(
    (
      span: (typeof spans)[number],
      idx: number,
      startMs: number,
      clientX: number,
      clientY: number,
    ) => {
      setHoverTip({
        spanId: span.id,
        label: span.label,
        startMs,
        endMs: startMs + span.durationMs,
        durationMs: span.durationMs,
        rowIndex: idx + 1,
        kind: span.kind,
        x: clientX,
        y: clientY,
      })
    },
    [],
  )

  return (
    <div className="content-stretch flex w-full flex-col gap-2 px-[12px] relative shrink-0" data-node-id="1525:184752">
      <div
        className={`flex w-full flex-col overflow-hidden rounded-[12px] border border-[#e9eaeb] bg-white shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-[max-height] duration-300 ease-out ${
          expanded ? 'max-h-[900px]' : 'max-h-[420px]'
        }`}
      >
        <div className="border-b border-[#e9eaeb] bg-[#fdfdfd] px-3 py-2">
          <p className="text-xs font-semibold text-[#181d27]">Span timeline (Gantt)</p>
          <p className="mt-0.5 text-[11px] leading-snug text-[#535862]">
            <span className="font-medium text-[#414651]">Y-axis:</span> row index (operation order).{' '}
            <span className="font-medium text-[#414651]">X-axis:</span> wall time from trace start — bar length is how long
            each step ran. Showing {spans.length} spans (demo target {DEMO_TIMELINE_SPAN_TARGET}); list is virtualized for
            performance.
          </p>
        </div>

        <div className="sticky top-0 z-[2] flex min-w-0 border-b border-[#e9eaeb] bg-white">
          <div
            className="flex shrink-0 items-end border-r border-[#e9eaeb] bg-[#fafafa] pb-1 pl-2 pr-1 pt-6"
            style={{ width: COL_IDX }}
          >
            <span className="text-[9px] font-bold uppercase leading-none text-[#a4a7ae]">#</span>
          </div>
          <div
            className="flex shrink-0 items-end border-r border-[#e9eaeb] bg-[#fafafa] pb-1 pl-1 pr-1 pt-6"
            style={{ width: COL_DUR }}
          >
            <span className="text-[9px] font-bold uppercase leading-none text-[#a4a7ae]">Dur.</span>
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <TimeAxisRuler totalMs={tMax} />
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="min-w-0 overflow-x-auto overflow-y-auto"
          style={{ maxHeight: viewportH }}
          role="list"
          aria-label="Trace spans, virtualized"
        >
          <div className="relative w-full" style={{ height: totalH }}>
            {spans.slice(startIdx, endIdx).map((span, i) => {
              const idx = startIdx + i
              const startMs = starts[idx]!
              const leftPct = (startMs / tMax) * 100
              const rawWidthPct = span.durationMs > 0 ? (span.durationMs / tMax) * 100 : 0
              const widthPct = span.durationMs > 0 ? Math.max(MIN_BAR_WIDTH_PCT, rawWidthPct) : 0
              const durTone = durationTone(span.durationMs)
              const durClass =
                durTone === 'red' ? 'text-[#b42318]' : durTone === 'amber' ? 'text-[#b45309]' : 'text-[#535862]'

              return (
                <div
                  key={span.id}
                  role="listitem"
                  className="absolute left-0 right-0 flex min-w-[520px] border-b border-[#f5f5f5]"
                  style={{ top: idx * ROW_H, height: ROW_H }}
                >
                  <div
                    className="flex shrink-0 items-center justify-end border-r border-[#f5f5f5] bg-[#fafafa]/80 pr-2 text-[11px] tabular-nums text-[#717680]"
                    style={{ width: COL_IDX }}
                  >
                    {idx + 1}
                  </div>
                  <div
                    className="flex shrink-0 items-center justify-end border-r border-[#f5f5f5] pr-2 text-right text-[11px] font-semibold tabular-nums"
                    style={{ width: COL_DUR }}
                  >
                    <span className={durClass}>{formatMs(span.durationMs)}</span>
                  </div>
                  <div className="relative min-w-0 flex-1 py-1.5 pl-2 pr-3">
                    <button
                      type="button"
                      aria-label={`Span ${idx + 1}: ${span.label}`}
                      onClick={() => setSelectedId((id) => (id === span.id ? null : span.id))}
                      onMouseEnter={(e) => showTipForSpan(span, idx, startMs, e.clientX, e.clientY)}
                      onMouseMove={(e) => {
                        setHoverTip((prev) =>
                          prev && prev.spanId === span.id ? { ...prev, x: e.clientX, y: e.clientY } : prev,
                        )
                      }}
                      onMouseLeave={() => setHoverTip((t) => (t?.spanId === span.id ? null : t))}
                      className={`relative h-[28px] w-full rounded-md text-left transition-all ${
                        selectedId === span.id ? 'ring-2 ring-[#ff7404] ring-offset-1' : 'hover:bg-[#fafafa]'
                      }`}
                    >
                      <div className="absolute inset-y-1 left-0 right-0 overflow-hidden rounded-sm">
                        <div
                          className={`absolute top-0 flex h-[20px] max-w-full items-center overflow-hidden rounded px-1.5 text-[11px] font-semibold text-white shadow-sm transition-[left,width,opacity,box-shadow] duration-500 ease-out ${
                            hoverTip?.spanId === span.id ? 'z-[3] opacity-100 ring-2 ring-white/40' : ''
                          }`}
                          style={{
                            left: `${leftPct}%`,
                            width: span.durationMs > 0 ? `max(${widthPct}%, ${MIN_BAR_WIDTH_PX}px)` : '2px',
                            backgroundColor: spanBarColor(span.kind),
                            opacity: hoverTip?.spanId === span.id ? 1 : 0.92,
                            paddingLeft: 4 + span.indent * 8,
                          }}
                          title={span.label}
                        >
                          <span className="min-w-0 flex-1 truncate">{span.label}</span>
                        </div>
                      </div>
                    </button>
                    {span.pass !== undefined && (
                      <div className="pointer-events-none absolute bottom-1 right-3 flex gap-1">
                        <span className="inline-flex items-center gap-0.5 rounded-full border border-[#abefc6] bg-[#ecfdf3] px-1.5 py-px text-[9px] font-medium text-[#067647]">
                          <span className="relative size-1.5">
                            <img alt="" className="size-full" src={imgDot1} />
                          </span>
                          Pass
                        </span>
                        {span.score !== undefined && (
                          <span className="rounded-full border border-[#abefc6] bg-[#ecfdf3] px-1.5 py-px text-[9px] font-medium text-[#067647]">
                            {span.score}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e9eaeb] bg-[#fafafa] px-3 py-2 text-[11px] text-[#535862]">
          <span>
            Wall time Σ <span className="font-semibold tabular-nums text-[#181d27]">{formatAxisMs(totalTraceMs)}</span>
            {' · '}
            Longest step <span className="font-semibold tabular-nums text-[#181d27]">{formatMs(longestMs)}</span>
          </span>
          <span className="text-[#717680]">
            Rows {startIdx + 1}–{Math.min(endIdx, spans.length)} visible
          </span>
        </div>
      </div>

      {typeof document !== 'undefined' &&
        hoverTip &&
        createPortal(<SpanTimelineTooltip tip={hoverTip} />, document.body)}

      <button
        type="button"
        onClick={onToggleExpanded}
        className="content-stretch flex cursor-pointer items-center justify-center gap-1 overflow-clip rounded-lg px-3 py-2 hover:bg-[#fafafa]"
      >
        <span className="text-sm font-semibold text-[#535862]">{expanded ? 'Show less' : 'Expand timeline height'}</span>
        <div className={`relative size-5 shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          <div className="absolute inset-[8.33%]">
            <div className="absolute inset-[-5%]">
              <img alt="" className="block size-full max-w-none" src={imgIcon6} />
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
