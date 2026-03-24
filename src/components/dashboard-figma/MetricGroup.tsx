import { useEffect, useRef, useState } from 'react'

/** [Figma Enkrypt 3.1 — Metric group](https://www.figma.com/design/IlIELyhyfGPc2Ga5hoIzxx/Enkrypt-3.1?node-id=1530-187583) */
const imgTrendUp = 'https://www.figma.com/api/mcp/asset/f50d3ad5-e736-4702-93d4-9afca96caad8'
const imgArrowUp = 'https://www.figma.com/api/mcp/asset/a05824e2-f444-4f87-b09c-18212ffbe0bf'
const imgArrowDown = 'https://www.figma.com/api/mcp/asset/827b3574-6e79-4d18-ba52-e69ccb8201d1'

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

function formatCompactCount(n: number): string {
  const v = Math.abs(n)
  const sign = n < 0 ? '−' : ''
  if (v >= 1_000_000) return `${sign}${parseFloat((v / 1_000_000).toFixed(2))}M`
  if (v >= 1000) {
    const k = v / 1000
    const digits = v >= 10_000 ? 2 : 1
    return `${sign}${parseFloat(k.toFixed(digits))}k`
  }
  return `${sign}${Math.round(v)}`
}

function formatCostDisplay(n: number): string {
  const v = Math.abs(n)
  if (v >= 1000) return `$ ${parseFloat((v / 1000).toFixed(2))}k`
  return `$ ${parseFloat(v.toFixed(2))}`
}

type ChangeVariant = 'trend-up' | 'arrow-up' | 'arrow-down'

type MetricItemProps = {
  title: string
  /** Pre-formatted main metric (already compact / currency) */
  valueDisplay: string
  changeVariant: ChangeVariant
  /** e.g. +6.1%; omit when `tokenInOut` is set (Figma Token Estimate row) */
  changePercent?: string
  changePositive: boolean
  /** Right-hand gray label (Figma: Last 24 hrs, Prevented, …) */
  subtitle?: string
  /** Figma Token Estimate: trend + green "… in, " then gray `subtitle` */
  tokenInOut?: { green: string }
}

function MetricItem({
  title,
  valueDisplay,
  changeVariant,
  changePercent,
  changePositive,
  subtitle,
  tokenInOut,
}: MetricItemProps) {
  const icon =
    changeVariant === 'trend-up' ? (
      <div className="relative size-4 shrink-0 overflow-hidden">
        <div className="absolute inset-[29.17%_8.33%]">
          <div className="absolute inset-[-15%_-7.5%]">
            <img alt="" className="block size-full max-w-none" src={imgTrendUp} />
          </div>
        </div>
      </div>
    ) : changeVariant === 'arrow-up' ? (
      <div className="relative size-4 shrink-0 overflow-hidden">
        <div className="absolute inset-[20.83%]">
          <div className="absolute inset-[-10.71%]">
            <img alt="" className="block size-full max-w-none" src={imgArrowUp} />
          </div>
        </div>
      </div>
    ) : (
      <div className="relative size-4 shrink-0 overflow-hidden">
        <div className="absolute inset-[20.83%]">
          <div className="absolute inset-[-10.71%]">
            <img alt="" className="block size-full max-w-none" src={imgArrowDown} />
          </div>
        </div>
      </div>
    )

  const changeGap = changeVariant === 'trend-up' ? 'gap-1' : 'gap-0.5'
  const pctColor = changePositive ? 'text-[#079455]' : 'text-[#d92d20]'

  return (
    <div
      className="relative flex min-h-0 min-w-0 flex-1 flex-col gap-1 rounded-xl border border-[#e9eaeb] bg-white px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
      data-name="Metric item"
    >
      {/* Line 1 */}
      <p className="line-clamp-1 min-h-6 w-full shrink-0 text-center text-base font-semibold leading-6 text-[#181d27]">
        {title}
      </p>
      {/* Line 2 */}
      <p className="line-clamp-1 w-full shrink-0 overflow-hidden text-center text-ellipsis whitespace-nowrap text-[28px] font-semibold leading-8 tracking-normal text-[#181d27] tabular-nums sm:text-[30px] sm:leading-[38px]">
        {valueDisplay}
      </p>
      {/* Line 3 — never wrap; truncate if needed */}
      <div className="flex min-h-5 w-full min-w-0 shrink-0 flex-nowrap items-center justify-center gap-1.5 text-xs font-medium leading-4 sm:gap-2 sm:text-sm sm:leading-5">
        {tokenInOut ? (
          <>
            <span className={`flex shrink-0 items-center ${changeGap}`}>
              {icon}
              <span className="whitespace-nowrap text-[#079455]">{tokenInOut.green}</span>
            </span>
            {subtitle ? (
              <span className="min-w-0 truncate text-[#535862]" title={subtitle}>
                {subtitle}
              </span>
            ) : null}
          </>
        ) : (
          <>
            <span className={`flex shrink-0 items-center ${changeGap}`}>
              {icon}
              {changePercent ? <span className={`whitespace-nowrap ${pctColor}`}>{changePercent}</span> : null}
            </span>
            {subtitle ? (
              <span className="min-w-0 truncate text-[#535862]" title={subtitle}>
                {subtitle}
              </span>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}

function MetricItemAnimatedNumber({
  title,
  rawValue,
  decimals,
  format,
  changeVariant,
  changePercent,
  changePositive,
  subtitle,
  tokenInOut,
}: {
  title: string
  rawValue: number
  decimals?: number
  format: 'compact' | 'currency' | 'plain'
  changeVariant: ChangeVariant
  changePercent?: string
  changePositive: boolean
  subtitle?: string
  tokenInOut?: { green: string }
}) {
  const d = decimals ?? 0
  const displayed = useCountUp(rawValue, d)
  let valueDisplay: string
  if (format === 'currency') valueDisplay = formatCostDisplay(displayed)
  else if (format === 'compact') valueDisplay = formatCompactCount(displayed)
  else valueDisplay = d > 0 ? displayed.toFixed(d) : String(Math.round(displayed))

  return (
    <MetricItem
      title={title}
      valueDisplay={valueDisplay}
      changeVariant={changeVariant}
      changePercent={changePercent}
      changePositive={changePositive}
      subtitle={subtitle}
      tokenInOut={tokenInOut}
    />
  )
}

export function MetricGroup() {
  return (
    <div
      className="flex w-full flex-wrap items-stretch gap-2"
      data-name="Metric group"
      data-node-id="1530:187583"
    >
      <MetricItemAnimatedNumber
        title="Agent IDE Sessions"
        rawValue={1247}
        format="compact"
        changeVariant="trend-up"
        changePercent="+6.1%"
        changePositive
        subtitle="Last 24h"
      />
      <MetricItemAnimatedNumber
        title="Agents"
        rawValue={38}
        format="plain"
        changeVariant="arrow-up"
        changePercent="+2%"
        changePositive
        subtitle="Last 24h"
      />
      <MetricItemAnimatedNumber
        title="Traces"
        rawValue={18432}
        format="compact"
        changeVariant="arrow-up"
        changePercent="+12%"
        changePositive
        subtitle="Last 24h"
      />
      <MetricItemAnimatedNumber
        title="Blocks"
        rawValue={47}
        format="plain"
        changeVariant="arrow-down"
        changePercent="−8%"
        changePositive={false}
        subtitle="Prevented"
      />
      <MetricItemAnimatedNumber
        title="Cost"
        rawValue={1284.56}
        decimals={2}
        format="currency"
        changeVariant="trend-up"
        changePercent="+3.4%"
        changePositive
      />
      <MetricItemAnimatedNumber
        title="Token Estimate"
        rawValue={2840000}
        format="compact"
        changeVariant="trend-up"
        changePositive
        tokenInOut={{ green: '1.82M in, ' }}
        subtitle="1.02M out"
      />
    </div>
  )
}
