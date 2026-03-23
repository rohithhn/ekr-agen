import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

/** Header check icon — [Figma Enkrypt 3.1](https://www.figma.com/design/IlIELyhyfGPc2Ga5hoIzxx/Enkrypt-3.1?node-id=1537-188478) */
const imgHeaderIcon = 'https://www.figma.com/api/mcp/asset/8a473075-a3e7-4ea9-a49d-05aeffffd85e'

function jitter(base: number, range: number, min: number, max: number) {
  return Math.max(min, Math.min(max, +(base + (Math.random() - 0.5) * range).toFixed(1)))
}

function niceYMax(values: number[], step = 4) {
  const raw = Math.max(...values, 0)
  const withHeadroom = raw <= 0 ? step : raw * 1.12
  return Math.max(step, Math.ceil(withHeadroom / step) * step)
}

function useContainerWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [width, setWidth] = useState(320)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(Math.max(160, el.clientWidth)))
    ro.observe(el)
    setWidth(Math.max(160, el.clientWidth))
    return () => ro.disconnect()
  }, [])
  return { ref, width }
}

/** Distinct bar fills per IDE (Figma: yellow-orange, gold, dark, brand orange); cycles for n > length. */
const IDE_BAR_FILLS = ['#fcd34d', '#f59e0b', '#181d27', '#ff7404', '#38bdf8', '#a78bfa', '#059669', '#ec4899']

function ChartHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-[1] flex h-[34px] w-full shrink-0 items-center overflow-hidden rounded-tl-[8px] rounded-tr-[8px] bg-[#fafafa] px-px">
      <div className="flex h-full w-full items-center border-b border-[#e9eaeb] px-[9px] py-2">
        <div className="flex items-center gap-3">
          <div
            className="flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-[10px]"
            style={{
              backgroundImage: 'linear-gradient(133deg, rgba(255,117,0,0.2) 12.826%, rgba(255,59,162,0.2) 84.859%)',
            }}
          >
            <img alt="" className="size-[10px]" src={imgHeaderIcon} />
          </div>
          <p className="text-xs font-semibold leading-[18px] text-[#181d27]">{title}</p>
        </div>
      </div>
    </div>
  )
}

function YAxisColumn({ yMax, tickCount = 6 }: { yMax: number; tickCount?: number }) {
  const step = yMax / (tickCount - 1)
  const ticks = Array.from({ length: tickCount }, (_, i) => Math.round(yMax - i * step))
  return (
    <div
      className="flex h-[288px] w-12 shrink-0 flex-col justify-between self-stretch pb-[25px] pt-0"
      aria-hidden
    >
      {ticks.map((t) => (
        <div key={t} className="flex h-[17px] min-h-[17px] w-full items-center gap-2 first:h-[22px] first:min-h-[22px]">
          <span className="w-10 shrink-0 text-right text-[10px] leading-[18px] text-[#181d27] tabular-nums">
            {t}
          </span>
          <div className="h-px min-w-0 flex-1 bg-[#e9eaeb]" />
        </div>
      ))}
    </div>
  )
}

function ChartTooltip({ x, y, title, subtitle }: { x: number; y: number; title: string; subtitle?: string }) {
  return (
    <div
      className="pointer-events-none fixed z-[10000] max-w-[240px] rounded-lg border border-[#d5d7da] bg-white px-3 py-2 text-left shadow-[0_8px_24px_rgba(10,13,18,0.12)]"
      style={{ left: x, top: y, transform: 'translate(-50%, calc(-100% - 10px))' }}
    >
      <p className="text-sm font-semibold tabular-nums text-[#181d27]">{title}</p>
      {subtitle ? <p className="mt-0.5 text-xs leading-snug text-[#535862]">{subtitle}</p> : null}
    </div>
  )
}

type IdeDatum = { label: string; value: number }

function IdeSessionsChart({ data, yMax }: { data: IdeDatum[]; yMax: number }) {
  const { ref: measureRef, width: cw } = useContainerWidth<HTMLDivElement>()
  const [hover, setHover] = useState<{ i: number; px: number; py: number } | null>(null)
  const n = data.length
  const padL = 8
  const padR = 16
  const padT = 16
  const padB = 36
  const minSlot = 44
  const plotInnerW = Math.max(cw - padL - padR, n * minSlot)
  const vbW = padL + plotInnerW + padR
  const vbH = 252
  const plotW = plotInnerW
  const plotH = vbH - padT - padB
  const gap = n > 0 ? plotW / n : plotW
  const barW = Math.max(6, gap * 0.58)

  const gridTicks = 5
  const gridYs = useMemo(
    () => Array.from({ length: gridTicks + 1 }, (_, i) => padT + (i / gridTicks) * plotH),
    [padT, plotH],
  )

  return (
    <div className="relative min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-hidden pr-1">
      <div ref={measureRef} className="min-h-[288px] min-w-full">
        <svg
          width={vbW}
          height={vbH}
          className="min-w-full touch-pan-x"
          role="img"
          aria-label="IDE sessions by tool"
          onMouseLeave={() => setHover(null)}
        >
          <defs>
            <filter id="ide-bar-shadow" x="-20%" y="-10%" width="140%" height="130%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.08" />
            </filter>
          </defs>
          {gridYs.map((gy, i) => (
            <line
              key={i}
              x1={padL}
              y1={gy}
              x2={vbW - padR}
              y2={gy}
              stroke="#f5f5f5"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {data.map((d, i) => {
            const h = (d.value / yMax) * plotH
            const cx = padL + gap * i + gap / 2
            const x = cx - barW / 2
            const y = padT + plotH - h
            const fill = IDE_BAR_FILLS[i % IDE_BAR_FILLS.length]
            const isH = hover?.i === i
            return (
              <g key={`${d.label}-${i}`}>
                <rect
                  x={padL + gap * i}
                  y={padT}
                  width={gap}
                  height={plotH}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={(e) => setHover({ i, px: e.clientX, py: e.clientY })}
                  onMouseMove={(e) => setHover((prev) => (prev?.i === i ? { i, px: e.clientX, py: e.clientY } : prev))}
                />
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={Math.max(h, d.value > 0 ? 1.5 : 0)}
                  rx={4}
                  ry={4}
                  fill={fill}
                  opacity={hover === null || isH ? 1 : 0.38}
                  filter="url(#ide-bar-shadow)"
                  className="transition-[y,height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transformOrigin: `${cx}px ${padT + plotH}px` }}
                />
                {isH ? (
                  <rect
                    x={x - 1}
                    y={y - 1}
                    width={barW + 2}
                    height={Math.max(h, 2) + 2}
                    rx={5}
                    fill="none"
                    stroke="#ff7404"
                    strokeWidth={1.5}
                    opacity={0.45}
                    vectorEffect="non-scaling-stroke"
                  />
                ) : null}
              </g>
            )
          })}
          {data.map((d, i) => {
            const cx = padL + gap * i + gap / 2
            const short = d.label.length > 12 ? `${d.label.slice(0, 11)}…` : d.label
            return (
              <text
                key={`t-${d.label}-${i}`}
                x={cx}
                y={vbH - 8}
                textAnchor="middle"
                className="fill-[#535862] text-[11px]"
              >
                <title>{d.label}</title>
                {short}
              </text>
            )
          })}
        </svg>
      </div>
      {hover !== null ? (
        <ChartTooltip
          x={hover.px}
          y={hover.py}
          title={`${data[hover.i].value.toLocaleString()} sessions`}
          subtitle={data[hover.i].label}
        />
      ) : null}
    </div>
  )
}

type AgentSeries = { name: string; color: string; values: number[] }

function AgentSessionsChart({
  botNames,
  series,
  hiddenSeries,
  onToggleSeries,
  yMax,
}: {
  botNames: string[]
  series: AgentSeries[]
  hiddenSeries: Set<string>
  onToggleSeries: (name: string) => void
  yMax: number
}) {
  const { ref: measureRef, width: cw } = useContainerWidth<HTMLDivElement>()
  const [hover, setHover] = useState<{ bot: number; fw: number; px: number; py: number } | null>(null)

  const visibleSeries = useMemo(() => series.filter((s) => !hiddenSeries.has(s.name)), [series, hiddenSeries])

  const n = botNames.length
  const m = visibleSeries.length
  const padL = 8
  const padR = 16
  const padT = 8
  const padB = 36
  const legendH = 36
  const minSlot = 52
  const plotInnerW = Math.max(cw - padL - padR, n * minSlot)
  const vbW = padL + plotInnerW + padR
  const plotTop = padT + legendH
  const vbH = plotTop + 200 + padB
  const plotW = plotInnerW
  const plotH = vbH - plotTop - padB
  const gap = n > 0 ? plotW / n : plotW
  const groupW = gap * 0.82
  const innerGap = Math.min(3, groupW / Math.max(4 * m, 1))
  const barW = m > 0 ? Math.max(3, (groupW - innerGap * (m - 1)) / m) : 0

  const gridYs = useMemo(
    () => Array.from({ length: 6 }, (_, i) => plotTop + (i / 5) * plotH),
    [plotTop, plotH],
  )

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-1 pb-1 pt-0.5">
        {series.map((s) => {
          const off = hiddenSeries.has(s.name)
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => onToggleSeries(s.name)}
              className={`flex items-center gap-2 rounded-md px-1.5 py-1 text-sm transition-colors ${
                off ? 'opacity-45 grayscale' : 'opacity-100'
              } text-[#535862] hover:bg-[#fafafa]`}
              aria-pressed={!off}
            >
              <span className="size-2 shrink-0 rounded-full ring-1 ring-black/5" style={{ backgroundColor: s.color }} />
              <span className="whitespace-nowrap">{s.name}</span>
            </button>
          )
        })}
      </div>
      <div className="relative min-h-0 min-w-0 flex-1 overflow-x-auto overflow-y-hidden pr-1">
        <div ref={measureRef} className="min-h-[252px] min-w-full">
          <svg
            width={vbW}
            height={vbH}
            className="min-w-full touch-pan-x"
            role="img"
            aria-label="Agent sessions by bot and framework"
            onMouseLeave={() => setHover(null)}
          >
            {gridYs.map((gy, i) => (
              <line
                key={i}
                x1={padL}
                y1={gy}
                x2={vbW - padR}
                y2={gy}
                stroke="#f5f5f5"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {m === 0 ? (
              <text x={vbW / 2} y={plotTop + plotH / 2} textAnchor="middle" className="fill-[#a4a7ae] text-xs">
                Select a framework in the legend
              </text>
            ) : null}
            {botNames.map((bot, botIdx) => {
              const cx = padL + gap * botIdx + gap / 2
              const gLeft = cx - groupW / 2
              return (
                <g key={bot}>
                  {visibleSeries.map((s, fwIdx) => {
                    const v = s.values[botIdx] ?? 0
                    const h = (v / yMax) * plotH
                    const x = gLeft + fwIdx * (barW + innerGap)
                    const y = plotTop + plotH - h
                    const isH = hover?.bot === botIdx && hover?.fw === fwIdx
                    const dim = hover !== null && !isH
                    return (
                      <g key={s.name}>
                        <rect
                          x={gLeft + fwIdx * (barW + innerGap)}
                          y={plotTop}
                          width={barW}
                          height={plotH}
                          fill="transparent"
                          className="cursor-pointer"
                          onMouseEnter={(e) =>
                            setHover({ bot: botIdx, fw: fwIdx, px: e.clientX, py: e.clientY })
                          }
                          onMouseMove={(e) =>
                            setHover((prev) =>
                              prev?.bot === botIdx && prev.fw === fwIdx
                                ? { bot: botIdx, fw: fwIdx, px: e.clientX, py: e.clientY }
                                : prev,
                            )
                          }
                        />
                        <rect
                          x={x}
                          y={y}
                          width={barW}
                          height={Math.max(h, v > 0 ? 1.5 : 0)}
                          rx={3}
                          ry={3}
                          fill={s.color}
                          opacity={dim ? 0.28 : isH ? 1 : 0.88}
                          className="transition-[y,height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        />
                        {isH && h > 0 ? (
                          <rect
                            x={x - 0.5}
                            y={y - 0.5}
                            width={barW + 1}
                            height={h + 1}
                            rx={4}
                            fill="none"
                            stroke="#181d27"
                            strokeWidth={1}
                            opacity={0.25}
                            vectorEffect="non-scaling-stroke"
                          />
                        ) : null}
                      </g>
                    )
                  })}
                </g>
              )
            })}
            {botNames.map((bot, i) => {
              const cx = padL + gap * i + gap / 2
              const short = bot.length > 11 ? `${bot.slice(0, 10)}…` : bot
              return (
                <text
                  key={`x-${bot}`}
                  x={cx}
                  y={vbH - 8}
                  textAnchor="middle"
                  className="fill-[#535862] text-[11px]"
                >
                  <title>{bot}</title>
                  {short}
                </text>
              )
            })}
          </svg>
        </div>
        {hover !== null && m > 0 ? (
          <ChartTooltip
            x={hover.px}
            y={hover.py}
            title={`${(visibleSeries[hover.fw]?.values[hover.bot] ?? 0).toFixed(1)} sessions`}
            subtitle={`${botNames[hover.bot]} · ${visibleSeries[hover.fw]?.name ?? ''}`}
          />
        ) : null}
      </div>
    </div>
  )
}

/** Demo: extendable lists — charts scroll horizontally when there are many categories */
const DEFAULT_IDE: IdeDatum[] = [
  { label: 'Cursor', value: 15 },
  { label: 'Antigravity', value: 15 },
  { label: 'Kiro', value: 17 },
  { label: 'Claude Code', value: 18 },
]

const DEFAULT_BOTS = ['Marketing', 'Devops', 'Coding', 'Basic bot']

const DEFAULT_AGENT_SERIES: AgentSeries[] = [
  { name: 'LangGraph', color: '#175cd3', values: [2.5, 3.2, 4.1, 1.8] },
  { name: 'Langchain', color: '#a78bfa', values: [3.0, 2.8, 5.2, 2.4] },
  { name: 'CrewAI', color: '#64748b', values: [1.8, 4.0, 3.1, 3.6] },
  { name: 'Openclaw', color: '#ff7404', values: [2.2, 2.5, 2.4, 2.0] },
]

export function DashboardChartsRow1() {
  const [ideData, setIdeData] = useState<IdeDatum[]>(DEFAULT_IDE)
  const [agentBotNames] = useState(DEFAULT_BOTS)
  const [agentSeries, setAgentSeries] = useState<AgentSeries[]>(DEFAULT_AGENT_SERIES)
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(() => new Set())

  const ideYMax = useMemo(() => niceYMax(ideData.map((d) => d.value)), [ideData])

  const agentYMax = useMemo(() => {
    const vals: number[] = []
    for (const s of agentSeries) {
      if (hiddenSeries.has(s.name)) continue
      for (const v of s.values) vals.push(v)
    }
    return niceYMax(vals.length ? vals : [4], 4)
  }, [agentSeries, hiddenSeries])

  const tick = useCallback(() => {
    setIdeData((prev) => prev.map((d) => ({ ...d, value: jitter(d.value, 2.2, 1, 22) })))
    setAgentSeries((prev) =>
      prev.map((s) => ({
        ...s,
        values: s.values.map((v) => jitter(v, 1.2, 0.3, 9)),
      })),
    )
  }, [])

  useEffect(() => {
    const id = window.setInterval(tick, 3200)
    return () => clearInterval(id)
  }, [tick])

  const toggleSeries = useCallback((name: string) => {
    setHiddenSeries((prev) => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }, [])

  return (
    <div className="flex w-full flex-col items-stretch gap-[11px] min-[1100px]:flex-row">
      <div
        className="animate-fade-in-up flex min-h-[340px] min-w-0 flex-1 flex-col overflow-hidden rounded-[8px] border border-[#d5d7da] bg-white pb-2 shadow-sm"
        style={{ animationDelay: '0.1s' }}
      >
        <ChartHeader title="IDE Sessions" />
        <div className="flex min-h-0 min-w-0 flex-1 items-end gap-0 pr-3">
          <YAxisColumn yMax={ideYMax} />
          <IdeSessionsChart data={ideData} yMax={ideYMax} />
        </div>
      </div>

      <div
        className="animate-fade-in-up flex min-h-[340px] min-w-0 flex-1 flex-col overflow-hidden rounded-[8px] border border-[#d5d7da] bg-white pb-2 shadow-sm"
        style={{ animationDelay: '0.2s' }}
      >
        <ChartHeader title="Agent Sessions" />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col px-1 pt-1">
          <div className="flex min-h-0 min-w-0 flex-1 items-end gap-0 pr-2">
            <YAxisColumn yMax={agentYMax} />
            <AgentSessionsChart
              botNames={agentBotNames}
              series={agentSeries}
              hiddenSeries={hiddenSeries}
              onToggleSeries={toggleSeries}
              yMax={agentYMax}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
