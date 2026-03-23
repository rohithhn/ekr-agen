import { useEffect, useRef, useState, type ReactNode } from 'react'

const imgTrend = 'https://www.figma.com/api/mcp/asset/c5c8b944-3f43-4bca-8f90-ed4b940cc89a'
const imgArrowUp = 'https://www.figma.com/api/mcp/asset/0ec1de3d-8f27-4ed9-8794-ae1d3bcbdbac'
const imgArrowDown = 'https://www.figma.com/api/mcp/asset/e3ccb9d4-a07d-408c-91d6-8747d8b49467'

function useCountUp(target: number, decimals = 0, duration = 900) {
  const [value, setValue] = useState(0)
  const raf = useRef(0)
  useEffect(() => {
    const start = performance.now()
    const from = 0
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setValue(+(from + (target - from) * ease).toFixed(decimals))
      if (t < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [target, decimals, duration])
  return value
}

type CardProps = {
  title: string
  value: number
  prefix?: string
  decimals?: number
  sub?: ReactNode
  delay?: number
}

function MetricCard({ title, value, prefix = '', decimals = 0, sub, delay = 0 }: CardProps) {
  const displayed = useCountUp(value, decimals)
  return (
    <div
      className="animate-fade-in-up group flex flex-1 flex-col items-start gap-1 rounded-xl border border-[#e9eaeb] bg-white px-5 py-3 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] transition-shadow duration-200 hover:shadow-md"
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="w-full shrink-0 text-center text-base font-semibold leading-6 text-[#181d27]">
        {title}
      </p>
      <div className="flex w-full shrink-0 items-center justify-center gap-4">
        <div className="flex flex-1 flex-col items-center gap-3">
          <p className="animate-count-up w-full text-center text-[30px] font-semibold leading-[38px] text-[#181d27] tabular-nums" style={{ animationDelay: `${delay + 0.15}s` }}>
            {prefix}{decimals > 0 ? displayed.toFixed(decimals) : displayed}
          </p>
          {sub}
        </div>
      </div>
    </div>
  )
}

function TrendBadge({ percent, label, up = true }: { percent: string; label: string; up?: boolean }) {
  return (
    <div className="flex w-full shrink-0 items-center justify-center gap-2">
      <div className="flex shrink-0 items-center justify-center gap-0.5">
        <div className="relative size-4 shrink-0 overflow-clip">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-10.71%]">
              <img alt="" className="block size-full max-w-none" src={up ? imgArrowUp : imgArrowDown} />
            </div>
          </div>
        </div>
        <p className={`text-sm font-medium leading-5 ${up ? 'text-[#079455]' : 'text-[#d92d20]'}`}>{percent}</p>
      </div>
      <p className="text-sm font-medium leading-5 text-[#535862]">{label}</p>
    </div>
  )
}

function SparkBadge({ percent, label }: { percent: string; label?: string }) {
  return (
    <div className="flex w-full shrink-0 items-center justify-center gap-2">
      <div className="flex shrink-0 items-center justify-center gap-1">
        <div className="relative size-4 shrink-0 overflow-clip">
          <div className="absolute inset-[29.17%_8.33%]">
            <div className="absolute inset-[-15%_-7.5%]">
              <img alt="" className="block size-full max-w-none" src={imgTrend} />
            </div>
          </div>
        </div>
        <p className="text-sm font-medium leading-5 text-[#079455]">{percent}</p>
      </div>
      {label && <p className="text-sm font-medium leading-5 text-[#535862]">{label}</p>}
    </div>
  )
}

export function MetricGroup() {
  return (
    <div className="flex w-full flex-wrap items-start gap-2">
      <MetricCard title="Agent Sessions" value={15} delay={0.05}
        sub={<SparkBadge percent="2%" label="Last 24 hrs" />}
      />
      <MetricCard title="Agents" value={30} delay={0.1}
        sub={<TrendBadge percent="2%" label="Last 24 Hrs" up />}
      />
      <MetricCard title="Traces" value={30} delay={0.15}
        sub={<TrendBadge percent="2%" label="Last 24 Hrs" up />}
      />
      <MetricCard title="Blocks" value={2} delay={0.2}
        sub={<TrendBadge percent="2%" label="Prevented" up={false} />}
      />
      <MetricCard title="Cost" value={0.48} prefix="$ " decimals={2} delay={0.25}
        sub={<SparkBadge percent="1%" />}
      />
      <MetricCard title="Token Estimate" value={0.48} prefix="$ " decimals={2} delay={0.3}
        sub={<SparkBadge percent="158K in," label="47k out" />}
      />
    </div>
  )
}
