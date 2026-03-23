import { useCallback, useMemo, useState, memo } from 'react'

import { durationTone, type V2TreeNode, useLiveV2Tree } from './claudeTraceLive'

function IconSearch() {
  return (
    <svg className="size-4 shrink-0 text-[#717680]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
      <path strokeLinecap="round" d="M16.5 16.5 21 21" />
    </svg>
  )
}

function IconCrosshair() {
  return (
    <svg className="size-[18px] shrink-0 text-[#414651]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 5v2M12 17v2M5 12h2M17 12h2" />
    </svg>
  )
}

function IconSliders() {
  return (
    <svg className="size-[18px] shrink-0 text-[#414651]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" d="M4 7h4M14 7h6M4 17h10M18 17h2M10 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM8 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg className="size-[18px] shrink-0 text-[#414651]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0-3.5-3.5M12 15l3.5-3.5M5 19h14" />
    </svg>
  )
}

function IconSparkle() {
  return (
    <svg className="size-[15px] shrink-0 text-[#a855f7]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.2 4.2L17 7l-3.8 1.8L12 13l-1.2-4.2L7 7l3.8-1.8L12 2zm6 9l.7 2.5 2.5.7-2.5.7-.7 2.5-.7-2.5-2.5-.7 2.5-.7.7-2.5z" />
    </svg>
  )
}

function IconArrows() {
  return (
    <svg className="size-[14px] shrink-0 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M7 12h10M14 9l3 3-3 3M10 9l-3 3 3 3" />
    </svg>
  )
}

function IconWrench() {
  return (
    <svg className="size-[14px] shrink-0 text-[#ea580c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  )
}

function IconList() {
  return (
    <svg className="size-[14px] shrink-0 text-[#535862]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M8 6h13M8 12h13M8 18h13M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  )
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 shrink-0 text-[#717680] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}

function IconChatBubble() {
  return (
    <svg className="size-3 shrink-0 text-[#717680]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )
}

function formatDuration(ms: number) {
  if (ms >= 1000) return `${(ms / 1000).toFixed(2)}s`
  return `${ms}ms`
}

function DurationText({ ms }: { ms: number }) {
  const tone = durationTone(ms)
  const cls =
    tone === 'red' ? 'text-[#b42318] font-semibold' : tone === 'amber' ? 'text-[#b45309] font-semibold' : 'text-[#717680] text-[11px]'
  return <span className={`tabular-nums ${cls}`}>{formatDuration(ms)}</span>
}

function filterTree(node: V2TreeNode, q: string): V2TreeNode | null {
  if (!q.trim()) return node
  const lower = q.toLowerCase()
  const selfMatch = node.name.toLowerCase().includes(lower)
  const kids = node.children?.map((c) => filterTree(c, q)).filter(Boolean) as V2TreeNode[] | undefined
  if (selfMatch) return { ...node, children: node.children }
  if (kids?.length) return { ...node, children: kids }
  return null
}

function maxDurationInTree(n: V2TreeNode): number {
  let m = n.durationMs
  for (const c of n.children ?? []) m = Math.max(m, maxDurationInTree(c))
  return m
}

function RelativeDurationBar({ ms, scaleMs }: { ms: number; scaleMs: number }) {
  const denom = Math.max(scaleMs, 1)
  const pct = Math.min(100, Math.round((ms / denom) * 100))
  return (
    <div
      className="flex h-9 w-[52px] shrink-0 flex-col justify-center gap-0.5 px-0.5"
      title={`${ms.toLocaleString()} ms · ${pct}% of slowest span in this tree`}
    >
      <span className="text-center text-[9px] font-semibold tabular-nums text-[#717680]">{pct}%</span>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#e9eaeb]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#175cd3] to-[#1570ef] transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

const NodeRow = memo(function NodeRow({
  node,
  depth,
  expanded,
  onToggle,
  showTimeline,
  timelineScaleMs,
}: {
  node: V2TreeNode
  depth: number
  expanded: boolean
  onToggle: () => void
  showTimeline: boolean
  timelineScaleMs: number
}) {
  const [metricsExpanded, setMetricsExpanded] = useState(false)
  const hasKids = Boolean(node.children?.length)
  const isRoot = node.kind === 'root'
  const metrics = node.metrics ?? []
  const metricsOverflow = isRoot && metrics.length > METRICS_PREVIEW
  const metricsVisible =
    !isRoot || !metrics.length
      ? []
      : metricsExpanded
        ? metrics
        : metrics.slice(0, METRICS_PREVIEW)

  const icon =
    node.kind === 'root' ? (
      <IconList />
    ) : node.kind === 'tool' ? (
      <IconWrench />
    ) : node.kind === 'io' ? (
      <IconArrows />
    ) : (
      <IconSparkle />
    )

  return (
    <div className="select-none">
      <button
        type="button"
        onClick={() => hasKids && onToggle()}
        className={`flex w-full items-start gap-2 rounded-lg border px-2 py-2 text-left transition-colors ${
          isRoot ? 'border-[#e9eaeb] bg-[#f0f4f8]' : 'border-transparent hover:bg-[#fafafa]'
        } ${hasKids ? 'cursor-pointer' : 'cursor-default'}`}
        style={{ paddingLeft: 8 + depth * 14 }}
      >
        {showTimeline && <RelativeDurationBar ms={node.durationMs} scaleMs={timelineScaleMs} />}
        <div className="mt-0.5 shrink-0">{icon}</div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-medium text-[#181d27]">{node.name}</span>
            <DurationText ms={node.durationMs} />
          </div>
          {node.tokens && (
            <p className="mt-0.5 text-[11px] text-[#535862]">
              {node.tokens.in.toLocaleString()} → {node.tokens.out.toLocaleString()} (Σ {node.tokens.sum.toLocaleString()})
            </p>
          )}
          {metricsVisible.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {metricsVisible.map((m) => (
                <span
                  key={m.key}
                  className="inline-flex items-center gap-1 rounded-full border border-[#e9eaeb] bg-white px-2 py-0.5 text-[10px] text-[#414651]"
                >
                  <IconChatBubble />
                  <span className="max-w-[140px] truncate">
                    {m.key}: {m.value}
                  </span>
                </span>
              ))}
              {metricsOverflow ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setMetricsExpanded((v) => !v)
                  }}
                  className="rounded-full border border-dashed border-[#d5d7da] bg-[#fafafa] px-2 py-0.5 text-[10px] font-medium text-[#175cd3] hover:bg-[#f0f4ff]"
                >
                  {metricsExpanded ? 'Show fewer' : `+${metrics.length - METRICS_PREVIEW} more`}
                </button>
              ) : null}
            </div>
          )}
        </div>
        {hasKids && <IconChevron open={expanded} />}
      </button>
    </div>
  )
})

function siblingVisibleCount(parentId: string, total: number, limits: Record<string, number>) {
  if (total <= SIBLING_CHUNK) return total
  const cap = limits[parentId] ?? SIBLING_CHUNK
  return Math.min(total, cap)
}

function TreeBranch({
  node,
  depth,
  expandedSet,
  toggle,
  showTimeline,
  timelineScaleMs,
  siblingLimits,
  onShowMoreSiblings,
}: {
  node: V2TreeNode
  depth: number
  expandedSet: Set<string>
  toggle: (id: string) => void
  showTimeline: boolean
  timelineScaleMs: number
  siblingLimits: Record<string, number>
  onShowMoreSiblings: (parentId: string) => void
}) {
  const expanded = expandedSet.has(node.id)
  const children = node.children ?? []
  const hasKids = children.length > 0
  const visibleN = siblingVisibleCount(node.id, children.length, siblingLimits)
  const hiddenSiblings = children.length - visibleN

  return (
    <div className={depth > 0 ? 'relative pl-2' : ''}>
      {depth > 0 && <div className="absolute bottom-0 left-[9px] top-0 w-px bg-[#e9eaeb]" aria-hidden />}
      <NodeRow
        node={node}
        depth={depth}
        expanded={expanded}
        onToggle={() => toggle(node.id)}
        showTimeline={showTimeline}
        timelineScaleMs={timelineScaleMs}
      />
      {hasKids && expanded && (
        <div className="mt-1 space-y-1 border-l border-[#e9eaeb] pl-2" style={{ marginLeft: 8 + depth * 14 }}>
          {children.slice(0, visibleN).map((ch) => (
            <TreeBranch
              key={ch.id}
              node={ch}
              depth={depth + 1}
              expandedSet={expandedSet}
              toggle={toggle}
              showTimeline={showTimeline}
              timelineScaleMs={timelineScaleMs}
              siblingLimits={siblingLimits}
              onShowMoreSiblings={onShowMoreSiblings}
            />
          ))}
          {hiddenSiblings > 0 ? (
            <button
              type="button"
              onClick={() => onShowMoreSiblings(node.id)}
              className="ml-1 rounded-lg border border-dashed border-[#d5d7da] bg-[#fafafa] px-2 py-1.5 text-left text-[11px] font-medium text-[#175cd3] hover:bg-[#f0f4ff]"
              style={{ marginLeft: 8 + (depth + 1) * 14 }}
            >
              Show {Math.min(SIBLING_CHUNK, hiddenSiblings)} more ({hiddenSiblings} hidden)
            </button>
          ) : null}
        </div>
      )}
    </div>
  )
}

const cardShadow = 'shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'

/** Scroll the tree body so the side sheet stays usable when there are hundreds of nodes. */
const TREE_BODY_MAX_H = 'max-h-[min(56vh,520px)]'

/** Max direct children rendered at once; "Show more" reveals the next chunk (keeps DOM small). */
const SIBLING_CHUNK = 48

/** Root metric chips before "Show all" (hundreds of eval keys would otherwise blow layout). */
const METRICS_PREVIEW = 10

/** Top toolbar (search + actions). Wire `search` to `TraceTreeV2NestedTraceCard` for filtering. */
export function TraceTreeV2Toolbar({
  search,
  onSearchChange,
}: {
  search: string
  onSearchChange: (value: string) => void
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 rounded-[12px] border border-[#e9eaeb] bg-white p-2 ${cardShadow}`}>
      <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-lg border border-[#d5d7da] bg-[#fafafa] px-3 py-2">
        <IconSearch />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
          className="min-w-0 flex-1 bg-transparent text-sm text-[#181d27] outline-none placeholder:text-[#717680]"
          aria-label="Search trace tree"
        />
      </div>
      <div className="flex items-center gap-1">
        <button type="button" className="rounded-lg p-2 text-[#414651] transition-colors hover:bg-[#f5f5f5]" aria-label="Focus span">
          <IconCrosshair />
        </button>
        <button type="button" className="rounded-lg p-2 transition-colors hover:bg-[#f5f5f5]" aria-label="Filters">
          <IconSliders />
        </button>
        <button type="button" className="rounded-lg p-2 transition-colors hover:bg-[#f5f5f5]" aria-label="Export trace">
          <IconDownload />
        </button>
      </div>
    </div>
  )
}

/** Nested hierarchical trace; place directly above `LiveSpanTimeline` on the V2 tab. */
export function TraceTreeV2NestedTraceCard({ searchQuery }: { searchQuery: string }) {
  const liveTree = useLiveV2Tree(2400)
  const [timelineOn, setTimelineOn] = useState(true)
  const [expandedSet, setExpandedSet] = useState(() => new Set(['root', 'h1', 'st1']))
  const [siblingLimits, setSiblingLimits] = useState<Record<string, number>>({})

  const filtered = useMemo(() => filterTree(liveTree, searchQuery) ?? liveTree, [liveTree, searchQuery])
  const timelineScaleMs = useMemo(() => maxDurationInTree(filtered), [filtered])

  const toggle = useCallback((id: string) => {
    setExpandedSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const onShowMoreSiblings = useCallback((parentId: string) => {
    setSiblingLimits((prev) => {
      const current = prev[parentId] ?? SIBLING_CHUNK
      return { ...prev, [parentId]: current + SIBLING_CHUNK }
    })
  }, [])

  return (
    <div className={`overflow-hidden rounded-[12px] border border-[#e9eaeb] bg-white ${cardShadow}`}>
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e9eaeb] bg-[#fdfdfd] px-3 py-2">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-[#181d27]">Nested trace</p>
          <p className="mt-0.5 text-[11px] leading-snug text-[#535862]">
            Same card chrome as the span timeline below. The optional load strip is{' '}
            <span className="font-medium text-[#414651]">not</span> wall-clock (unlike the Gantt): each row’s duration
            as a % of the slowest node in this tree. Large trees scroll inside this panel; wide sibling lists load in
            chunks of {SIBLING_CHUNK}.
          </p>
        </div>
        <label className="flex max-w-[200px] cursor-pointer flex-col gap-1 border-l border-[#e9eaeb] pl-3 sm:max-w-none sm:flex-row sm:items-center">
          <span className="text-xs font-medium leading-tight text-[#535862]">Load strip</span>
          <button
            type="button"
            role="switch"
            aria-checked={timelineOn}
            onClick={() => setTimelineOn((v) => !v)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${timelineOn ? 'bg-[#175cd3]' : 'bg-[#d5d7da]'}`}
          >
            <span
              className={`absolute top-1 size-4 rounded-full bg-white shadow transition-transform ${timelineOn ? 'left-6' : 'left-1'}`}
            />
          </button>
          <span className="hidden text-[10px] leading-snug text-[#a4a7ae] sm:ml-1 sm:inline sm:max-w-[120px]">vs slowest</span>
        </label>
      </div>
      <div className={`overflow-y-auto overflow-x-auto overscroll-contain p-3 ${TREE_BODY_MAX_H}`}>
        <TreeBranch
          node={filtered}
          depth={0}
          expandedSet={expandedSet}
          toggle={toggle}
          showTimeline={timelineOn}
          timelineScaleMs={timelineScaleMs}
          siblingLimits={siblingLimits}
          onShowMoreSiblings={onShowMoreSiblings}
        />
      </div>
    </div>
  )
}
