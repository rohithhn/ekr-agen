import { LiveSpanTimeline } from './LiveSpanTimeline'
import { TraceTreeV2NestedTraceCard, TraceTreeV2Toolbar } from './TraceTreeV2View'

/** Chevron for timeline expand control (matches Claude detail sheet). */
export const IMG_TIMELINE_EXPAND =
  'https://www.figma.com/api/mcp/asset/da74ed04-c630-4f68-b4f6-906ef054664c'

export type TraceSheetTab = 'v1' | 'v2'

export function TraceSheetTabBar({
  sheetTab,
  onTabChange,
}: {
  sheetTab: TraceSheetTab
  onTabChange: (t: TraceSheetTab) => void
}) {
  return (
    <div className="flex min-w-0 flex-1 justify-center px-2" role="tablist" aria-label="Trace detail view">
      <div className="inline-flex rounded-lg border border-[#d5d7da] bg-[#fafafa] p-0.5 shadow-[0_1px_2px_rgba(10,13,18,0.05)]">
        {(['v1', 'v2'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={sheetTab === tab}
            aria-label={tab === 'v1' ? 'Timeline view' : 'Trace tree V2'}
            onClick={() => onTabChange(tab)}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-all active:scale-[0.98] ${
              sheetTab === tab
                ? 'bg-white text-[#181d27] shadow-sm ring-1 ring-[#e9eaeb]'
                : 'text-[#717680] hover:text-[#414651]'
            }`}
          >
            {tab === 'v1' ? 'Timeline' : 'V2'}
          </button>
        ))}
      </div>
    </div>
  )
}

export function TraceSheetV2ToolbarRow({
  visible,
  v2Search,
  onV2SearchChange,
}: {
  visible: boolean
  v2Search: string
  onV2SearchChange: (q: string) => void
}) {
  if (!visible) return null
  return (
    <div className="w-full shrink-0 px-[12px] pt-[12px]">
      <TraceTreeV2Toolbar search={v2Search} onSearchChange={onV2SearchChange} />
    </div>
  )
}

export function TraceDetailSpanPanels({
  traceId,
  sheetTab,
  v2Search,
  timelineExpanded,
  onToggleTimelineExpanded,
}: {
  traceId: string
  sheetTab: TraceSheetTab
  v2Search: string
  timelineExpanded: boolean
  onToggleTimelineExpanded: () => void
}) {
  return (
    <>
      {sheetTab === 'v2' && (
        <div className="w-full shrink-0 px-[12px]">
          <TraceTreeV2NestedTraceCard searchQuery={v2Search} />
        </div>
      )}
      {sheetTab === 'v1' && (
        <LiveSpanTimeline
          key={traceId}
          expanded={timelineExpanded}
          onToggleExpanded={onToggleTimelineExpanded}
          imgIcon6={IMG_TIMELINE_EXPAND}
        />
      )}
    </>
  )
}
