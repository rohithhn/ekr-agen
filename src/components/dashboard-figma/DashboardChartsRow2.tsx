import { useCallback, useEffect, useRef, useState } from 'react'

const imgIcon = 'https://www.figma.com/api/mcp/asset/45fc99cb-ea14-4128-8b99-8f474012e89d'

function jitter(base: number, range: number, min: number, max: number) {
  return Math.max(min, Math.min(max, +(base + (Math.random() - 0.5) * range).toFixed(1)))
}

function ChartHeader({ title }: { title: string }) {
  return (
    <div className="flex h-[34px] w-full shrink-0 items-center overflow-clip rounded-tl-[12px] rounded-tr-[12px] bg-[#fafafa] px-3">
      <div className="flex flex-1 items-center gap-3 border-b border-[#d5d7da] py-2">
        <div
          className="size-4 shrink-0 rounded-[10px]"
          style={{
            backgroundImage:
              'linear-gradient(133deg, rgba(255,117,0,0.2) 13%, rgba(255,59,162,0.2) 85%)',
          }}
        >
          <div className="flex size-full items-center justify-center">
            <img alt="" className="size-[7px]" src={imgIcon} />
          </div>
        </div>
        <p className="whitespace-nowrap text-xs font-semibold leading-[18px] text-[#181d27]">{title}</p>
      </div>
    </div>
  )
}

function Legend({ items }: { items: { name: string; color: string }[] }) {
  return (
    <div className="flex shrink-0 flex-wrap items-center justify-end gap-x-3 gap-y-1 pr-2">
      {items.map((it) => (
        <div key={it.name} className="flex items-center gap-1.5">
          <div className="size-[7px] shrink-0 rounded-full" style={{ backgroundColor: it.color }} />
          <p className="whitespace-nowrap text-[11px] font-normal leading-4 text-[#535862]">{it.name}</p>
        </div>
      ))}
    </div>
  )
}

function buildSmoothPath(
  values: number[],
  yMax: number,
  padX: number,
  padY: number,
  innerW: number,
  innerH: number,
) {
  const n = values.length
  if (n < 2) return ''
  const pts = values.map((v, i) => ({
    x: padX + (i / (n - 1)) * innerW,
    y: padY + innerH - (v / yMax) * innerH,
  }))
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1]
    const cur = pts[i]
    const cpx = (prev.x + cur.x) / 2
    d += ` C ${cpx} ${prev.y}, ${cpx} ${cur.y}, ${cur.x} ${cur.y}`
  }
  return d
}

function LineChartSvg({
  yMax,
  seriesA,
  seriesB,
  colorA,
  colorB,
  xLabels,
}: {
  yMax: number
  seriesA: number[]
  seriesB: number[]
  colorA: string
  colorB: string
  xLabels: string[]
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathARef = useRef<SVGPathElement>(null)
  const pathBRef = useRef<SVGPathElement>(null)
  const [hover, setHover] = useState<{ series: 'a' | 'b'; idx: number } | null>(null)

  /** Wider viewBox: left gutter for Y ticks (same y as grid, avoids flex mis-alignment). */
  const vbW = 320
  const vbH = 150
  const padLeft = 34
  const padRight = 12
  const padY = 12
  const padB = 16
  const innerW = vbW - padLeft - padRight
  const innerH = vbH - padY - padB

  const pathA = buildSmoothPath(seriesA, yMax, padLeft, padY, innerW, innerH)
  const pathB = buildSmoothPath(seriesB, yMax, padLeft, padY, innerW, innerH)

  const gridLines = 5
  const gridYs = Array.from({ length: gridLines + 1 }, (_, i) => padY + (i / gridLines) * innerH)
  const yTickValues = gridYs.map((_, i) => Math.round(yMax - (i / gridLines) * yMax))

  const getPoint = (vals: number[], idx: number) => ({
    x: padLeft + (idx / (vals.length - 1)) * innerW,
    y: padY + innerH - (vals[idx] / yMax) * innerH,
  })

  useEffect(() => {
    ;[pathARef, pathBRef].forEach((ref) => {
      const el = ref.current
      if (!el) return
      const len = el.getTotalLength()
      el.style.setProperty('--path-length', String(len))
      el.classList.remove('animate-draw-line')
      void el.getBoundingClientRect()
      el.classList.add('animate-draw-line')
    })
  }, [seriesA, seriesB])

  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 })
  useEffect(() => {
    if (!hover || !svgRef.current) return
    const vals = hover.series === 'a' ? seriesA : seriesB
    const pt = getPoint(vals, hover.idx)
    const svg = svgRef.current
    const svgPt = svg.createSVGPoint()
    svgPt.x = pt.x; svgPt.y = pt.y
    const ctm = svg.getScreenCTM()
    if (!ctm) return
    const screen = svgPt.matrixTransform(ctm)
    const rect = svg.getBoundingClientRect()
    setTooltipPos({ left: screen.x - rect.left, top: screen.y - rect.top })
  }, [hover, seriesA, seriesB])

  return (
    <div className="relative h-full w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="h-full w-full text-xs"
        preserveAspectRatio="xMidYMid meet"
        onMouseLeave={() => setHover(null)}
      >
        {gridYs.map((gy, i) => (
          <line
            key={i}
            x1={padLeft}
            y1={gy}
            x2={vbW - padRight}
            y2={gy}
            stroke="#e9eaeb"
            strokeWidth={0.5}
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {yTickValues.map((val, i) => (
          <text
            key={`y-${i}-${val}`}
            x={padLeft - 6}
            y={gridYs[i]!}
            textAnchor="end"
            dominantBaseline="central"
            className="fill-[#717680]"
            style={{ fontSize: 8 }}
          >
            {val}
          </text>
        ))}

        {/* area fills */}
        <path
          d={pathA + ` L ${padLeft + innerW} ${padY + innerH} L ${padLeft} ${padY + innerH} Z`}
          fill={colorA}
          opacity={0.06}
        />
        <path
          d={pathB + ` L ${padLeft + innerW} ${padY + innerH} L ${padLeft} ${padY + innerH} Z`}
          fill={colorB}
          opacity={0.06}
        />

        <path
          ref={pathBRef}
          d={pathB}
          fill="none" stroke={colorB} strokeWidth={2}
          strokeLinecap="round" strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="animate-draw-line"
        />
        <path
          ref={pathARef}
          d={pathA}
          fill="none" stroke={colorA} strokeWidth={2}
          strokeLinecap="round" strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="animate-draw-line"
        />

        {/* dots series A */}
        {seriesA.map((_, i) => {
          const p = getPoint(seriesA, i)
          const isHov = hover?.series === 'a' && hover.idx === i
          return (
            <g key={`a-${i}`}>
              <circle
                cx={p.x} cy={p.y} r={isHov ? 5 : 3.5}
                fill="white" stroke={colorA} strokeWidth={2}
                vectorEffect="non-scaling-stroke"
                className="animate-dot-pop cursor-pointer transition-[r] duration-150"
                style={{ animationDelay: `${0.8 + i * 0.08}s` }}
                onMouseEnter={() => setHover({ series: 'a', idx: i })}
              />
              {isHov && (
                <circle
                  cx={p.x} cy={p.y} r={8}
                  fill="none" stroke={colorA} strokeWidth={1}
                  opacity={0.3} vectorEffect="non-scaling-stroke"
                >
                  <animate attributeName="r" from="5" to="12" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.4" to="0" dur="0.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )
        })}

        {/* dots series B */}
        {seriesB.map((_, i) => {
          const p = getPoint(seriesB, i)
          const isHov = hover?.series === 'b' && hover.idx === i
          return (
            <g key={`b-${i}`}>
              <circle
                cx={p.x} cy={p.y} r={isHov ? 5 : 3.5}
                fill="white" stroke={colorB} strokeWidth={2}
                vectorEffect="non-scaling-stroke"
                className="animate-dot-pop cursor-pointer transition-[r] duration-150"
                style={{ animationDelay: `${0.8 + i * 0.08}s` }}
                onMouseEnter={() => setHover({ series: 'b', idx: i })}
              />
              {isHov && (
                <circle cx={p.x} cy={p.y} r={8}
                  fill="none" stroke={colorB} strokeWidth={1}
                  opacity={0.3} vectorEffect="non-scaling-stroke"
                >
                  <animate attributeName="r" from="5" to="12" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.4" to="0" dur="0.8s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          )
        })}

        {/* x labels */}
        {xLabels.map((t, i) => (
          <text
            key={t}
            x={padLeft + (i / (xLabels.length - 1)) * innerW}
            y={vbH - 4}
            textAnchor="middle"
            className="fill-[#535862] text-[7px]"
          >
            {t}
          </text>
        ))}
      </svg>

      {hover !== null && (() => {
        const vals = hover.series === 'a' ? seriesA : seriesB
        const seriesName = hover.series === 'a' ? 'Blocks' : 'Warnings'
        return (
          <div
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-md border border-[#d5d7da] bg-white px-2.5 py-1.5 text-xs shadow-lg transition-all duration-150"
            style={{ left: tooltipPos.left, top: tooltipPos.top - 10 }}
          >
            <p className="font-semibold text-[#181d27]">{vals[hover.idx]}</p>
            <p className="text-[#717680]">{seriesName}</p>
          </div>
        )
      })()}
    </div>
  )
}

function LineChartCard({
  title,
  blocks,
  warnings,
}: {
  title: string
  blocks: number[]
  warnings: number[]
}) {
  const xLabels = ['2', '6', '10', '14', '18', '22', '26', '30']
  const yMax = 28
  const colorBlocks = '#b42318'
  const colorWarnings = '#175cd3'

  return (
    <div className="flex min-w-[280px] flex-1 flex-col overflow-hidden rounded-xl border border-[#d5d7da] bg-white shadow-sm">
      <ChartHeader title={title} />
      <div className="flex flex-1 flex-col gap-1 px-1 pb-1">
        <Legend items={[
          { name: 'Blocks', color: colorBlocks },
          { name: 'Warnings', color: colorWarnings },
        ]} />
        <div className="relative flex-1 min-h-[180px] py-1 pr-2 pl-0.5">
          <LineChartSvg
            yMax={yMax}
            seriesA={blocks}
            seriesB={warnings}
            colorA={colorBlocks}
            colorB={colorWarnings}
            xLabels={xLabels}
          />
        </div>
      </div>
    </div>
  )
}

export function DashboardChartsRow2() {
  const [monthBlocks, setMonthBlocks] = useState([5, 9, 7, 12, 10, 16, 14, 19])
  const [monthWarnings, setMonthWarnings] = useState([3, 6, 5, 9, 8, 11, 10, 13])
  const [actionsBlocks, setActionsBlocks] = useState([8, 11, 9, 15, 13, 18, 16, 21])
  const [actionsWarnings, setActionsWarnings] = useState([4, 7, 6, 10, 9, 12, 11, 14])

  const tick = useCallback(() => {
    const j = (arr: number[]) => arr.map((v) => jitter(v, 3, 1, 26))
    setMonthBlocks(j)
    setMonthWarnings(j)
    setActionsBlocks(j)
    setActionsWarnings(j)
  }, [])

  useEffect(() => {
    const id = setInterval(tick, 5000)
    return () => clearInterval(id)
  }, [tick])

  return (
    <div className="flex w-full flex-col items-stretch gap-3 min-[1100px]:flex-row">
      <div className="animate-fade-in-up flex-1" style={{ animationDelay: '0.3s' }}>
        <LineChartCard title="Guardrail Events / Month" blocks={monthBlocks} warnings={monthWarnings} />
      </div>
      <div className="animate-fade-in-up flex-1" style={{ animationDelay: '0.4s' }}>
        <LineChartCard title="Actions/Guardrail Events" blocks={actionsBlocks} warnings={actionsWarnings} />
      </div>
    </div>
  )
}
