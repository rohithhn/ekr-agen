import type { TraceRowContext } from '../traceContext'

import { BrowserToolbar } from './dashboard-figma/BrowserToolbar'
import { DashboardAgentsViolationsTable } from './dashboard-figma/DashboardAgentsViolationsTable'
import { DashboardChartsRow1 } from './dashboard-figma/DashboardChartsRow1'
import { DashboardChartsRow2 } from './dashboard-figma/DashboardChartsRow2'
import { DashboardPageHeader } from './dashboard-figma/DashboardPageHeader'
import { DashboardUsersViolationsTable } from './dashboard-figma/DashboardUsersViolationsTable'
import { HeaderNavigation } from './dashboard-figma/HeaderNavigation'
import { LatestTracesTable } from './dashboard-figma/LatestTracesTable'
import { MetricGroup } from './dashboard-figma/MetricGroup'
import { SidebarNavigation } from './dashboard-figma/SidebarNavigation'

export function Dashboard({ onOpenTrace }: { onOpenTrace: (trace: TraceRowContext) => void }) {
  return (
    <div
      className="flex h-[min(900px,100vh)] w-full max-w-[1440px] flex-col overflow-hidden rounded-xl border border-[#d5d7da] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <BrowserToolbar />
      <HeaderNavigation />
      <div className="flex min-h-0 min-w-0 flex-1">
        <SidebarNavigation />
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto bg-[#fafafa] p-2">
          <div className="flex min-h-full flex-col rounded-lg border border-[#d5d7da] bg-[#fafafa]">
            <DashboardPageHeader />
            <div className="flex flex-col gap-3 p-3">
              <MetricGroup />
              <DashboardChartsRow1 />
              <DashboardChartsRow2 />
              <LatestTracesTable onOpenTrace={onOpenTrace} />
              <DashboardUsersViolationsTable />
              <DashboardAgentsViolationsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
