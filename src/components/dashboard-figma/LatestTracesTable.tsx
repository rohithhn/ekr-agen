import { useState } from 'react'

import { LATEST_TRACES, type TraceRowContext } from '../../traceContext'

const imgIcon = "https://www.figma.com/api/mcp/asset/483fee7f-cf38-4c20-a49b-805402006bde";
const imgGroup = "https://www.figma.com/api/mcp/asset/c530b5ca-d021-4f80-97e9-d7553d4fd46b";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/70ddc5a5-7875-43bd-96f7-a42f0016c5ee";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/d4503b19-9391-425a-a3ae-08067084dbdb";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/57e1e773-a687-43bb-89bf-6f5f0e4e4dae";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/5dac42b9-b284-44a2-aee1-13ac5da4f102";
const imgDot = "https://www.figma.com/api/mcp/asset/0480818e-e412-4f59-9d08-8bb55788c5c0";
const imgDot1 = "https://www.figma.com/api/mcp/asset/7937ac40-73f8-4abd-93a8-1b984dcba3bf";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/e4d2ce47-d47a-48e7-958b-698c597c21dc";

function IdeTypeBadge() {
  return (
    <div
      className="flex shrink-0 items-center gap-[var(--spacing-xs,4px)] rounded-[var(--radius-sm,6px)] border border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)]"
      style={{
        backgroundImage:
          'linear-gradient(156deg, rgba(255, 117, 0, 0.1) 12.826%, rgba(255, 59, 162, 0.1) 84.859%)',
      }}
    >
      <div className="relative size-[8px] shrink-0">
        <div className="absolute left-px top-px size-[6px]">
          <img alt="" className="absolute block size-full max-w-none" src={imgDot} />
        </div>
      </div>
      <p
        className="relative shrink-0 bg-clip-text text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[12px] font-medium leading-[18px] text-transparent whitespace-nowrap"
        style={{
          backgroundImage:
            'linear-gradient(149deg, var(--colors\\/brand-old\\/900-orange,rgb(255, 116, 4)) 12.826%, rgb(255, 59, 162) 84.859%)',
        }}
      >
        IDE
      </p>
    </div>
  )
}

function FrameworkTypeBadge() {
  return (
    <div className="flex shrink-0 items-center gap-[var(--spacing-xs,4px)] rounded-[var(--radius-sm,6px)] border border-[var(--component-colors\/utility\/blue\/utility-blue-200,#b2ddff)] border-solid bg-[var(--component-colors\/utility\/blue\/utility-blue-50,#eff8ff)] px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)]">
      <div className="relative size-[8px] shrink-0">
        <div className="absolute left-px top-px size-[6px]">
          <img alt="" className="absolute block size-full max-w-none" src={imgDot1} />
        </div>
      </div>
      <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[12px] font-medium leading-[18px] text-[color:var(--component-colors\/utility\/blue\/utility-blue-700,#175cd3)]">
        Framework
      </p>
    </div>
  )
}

type PaginationProps = {
  className?: string
  showPerPage?: boolean
}

function Pagination({ className, showPerPage = true }: PaginationProps) {
  const [page, setPage] = useState(1)
  const [perPageOpen, setPerPageOpen] = useState(false)
  const [perPage, setPerPage] = useState(10)
  const pages = [1, 2, 3, '...', 8, 9, 10] as const
  return (
    <div className={className || ''} data-name="Pagination" data-node-id="1348:178646">
      <div
        className="border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid border-t content-stretch flex w-full min-w-0 flex-wrap gap-[var(--spacing-lg,12px)] items-center justify-center pb-[var(--spacing-xl,16px)] pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative"
        data-name="Type=Card default, Shape=Square, Breakpoint=Desktop"
        data-node-id="1348:178661"
      >
        <div className="content-stretch flex flex-[1_0_0] h-[36px] items-center min-h-px min-w-px relative" data-name="Button wrap" data-node-id="1348:178765">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="relative shrink-0 cursor-pointer border border-[var(--colors-border-border-primary,#d5d7da)] border-solid bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[var(--spacing-lg,12px)] py-[var(--spacing-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] hover:bg-[#fafafa] rounded-[var(--radius-md,8px)]"
            data-name="Buttons/Button"
            data-node-id="1348:178766"
          >
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-7.14%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0">
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#414651)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap">
                Previous
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(10,13,18,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(10,13,18,0.05))]" />
          </button>
        </div>
        <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-start relative shrink-0" data-name="Pagination numbers">
          {pages.map((p, i) => (
            <button
              type="button"
              key={i}
              disabled={p === '...'}
              onClick={() => typeof p === 'number' && setPage(p)}
              className={`relative shrink-0 overflow-clip rounded-[var(--radius-md,8px)] size-[40px] ${
                p === page ? 'bg-[var(--colors\/background\/bg-primary_hover,#fafafa)]' : ''
              } ${p === '...' ? 'cursor-default' : 'cursor-pointer hover:bg-[#fafafa]'}`}
              data-name="_Pagination number base"
            >
              <div className="absolute left-0 top-0 flex size-[40px] items-center justify-center rounded-[var(--spacing-md,8px)] p-[var(--spacing-md,8px)]">
                <p
                  className={`relative shrink-0 text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[length:var(--font-size\/text-sm,14px)] font-medium leading-[var(--line-height\/text-sm,20px)] whitespace-nowrap ${
                    p === page
                      ? 'text-[color:var(--colors\/text\/text-secondary-\(700\),#414651)]'
                      : 'text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]'
                  }`}
                >
                  {p}
                </p>
              </div>
            </button>
          ))}
        </div>
        {showPerPage && (
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setPerPageOpen((o) => !o)}
              className="flex h-[32px] shrink-0 cursor-pointer items-center justify-center gap-[8px] overflow-clip rounded-[4px] border border-[var(--colors-border-border-primary,#d5d7da)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[8px] hover:bg-[#fafafa]"
              data-name="Type=Number of results, Outlined=Yes"
            >
              <p className="relative shrink-0 whitespace-nowrap font-['Inter:Regular',sans-serif] text-[14px] font-normal leading-[24px] tracking-[-0.5px] not-italic text-[#181d27]">
                {perPage} per page
              </p>
              <div className="relative shrink-0 size-[16px] overflow-clip">
                <div className="absolute inset-[37.5%_15.63%_31.25%_15.63%]">
                  <div className="absolute inset-[-10%_-4.55%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup} />
                  </div>
                </div>
              </div>
            </button>
            {perPageOpen && (
              <ul className="absolute bottom-full left-0 z-10 mb-1 w-full rounded border border-[#d5d7da] bg-white py-1 shadow-md">
                {[10, 25, 50].map((n) => (
                  <li key={n}>
                    <button
                      type="button"
                      className="w-full px-2 py-1.5 text-left text-sm hover:bg-[#fafafa]"
                      onClick={() => {
                        setPerPage(n)
                        setPerPageOpen(false)
                      }}
                    >
                      {n} per page
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <div className="content-stretch flex flex-[1_0_0] h-[36px] min-h-px min-w-px items-center justify-end relative" data-name="Button wrap">
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(10, p + 1))}
            className="relative shrink-0 cursor-pointer border border-[var(--colors-border-border-primary,#d5d7da)] border-solid bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[var(--spacing-lg,12px)] py-[var(--spacing-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] hover:bg-[#fafafa] rounded-[var(--radius-md,8px)]"
            data-name="Buttons/Button"
          >
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0">
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#414651)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap">
                Next
              </p>
            </div>
            <div className="relative shrink-0 size-[20px] overflow-clip">
              <div className="absolute inset-[20.83%]">
                <div className="absolute inset-[-7.14%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(10,13,18,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(10,13,18,0.05))]" />
          </button>
        </div>
      </div>
    </div>
  )
}

function ActionColumnHeader() {
  return (
    <div
      className="h-[44px] w-full shrink-0 border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)]"
      aria-hidden
    />
  )
}

const ROW_Z = ['z-[4]', 'z-[3]', 'z-[2]', 'z-[1]'] as const

/** Static strings so Tailwind can emit valid `var(--colors\/...)` arbitrary values. */
const ROW_STRIPE_BG = [
  'bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)]',
  'bg-[var(--colors\/background\/bg-primary,white)]',
] as const

export function LatestTracesTable({ onOpenTrace }: { onOpenTrace: (trace: TraceRowContext) => void }) {
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid content-stretch flex w-full min-w-0 flex-col isolate items-start overflow-x-auto overflow-y-clip relative rounded-[var(--radius-xl,12px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))]" data-name="Table" data-node-id="1537:188572">
      <div className="bg-[var(--colors\/background\/bg-secondary_alt,#fafafa)] content-stretch flex h-[34px] items-center justify-center overflow-clip px-px rounded-tl-[20px] rounded-tr-[20px] shrink-0 sticky top-0 w-full z-[3]" data-name="Header" data-node-id="1537:188573">
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="border-[var(--colors-border-border-primary,#d5d7da)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center min-h-px min-w-px overflow-clip px-[9px] py-[8px] relative" data-name="Table header cell" data-node-id="1537:188574">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Title" data-node-id="1537:188576">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Header Title" data-node-id="1537:188577">
                <div className="overflow-clip relative rounded-[30px] shrink-0 size-[16px]" data-name="fingerprint-01" data-node-id="1537:188578" style={{ backgroundImage: "linear-gradient(133.05851123517837deg, rgba(255, 117, 0, 0.2) 12.826%, rgba(255, 59, 162, 0.2) 84.859%)" }}>
                  <div className="absolute inset-[8.33%_8.33%_9.65%_8.33%]" data-name="Icon" data-node-id="I1537:188578;3463:404025">
                    <div className="absolute inset-[-7.62%_-7.5%]">
                      <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header" data-node-id="1537:188579">
                  <p className="font-['Inter:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[#181d27] whitespace-nowrap" data-node-id="I1537:188579;1221:106889">
                    Latest Traces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch relative z-[2] w-full shrink-0 overflow-x-auto"
        data-name="Content"
        data-node-id="1537:188580"
      >
        <div className="content-stretch flex min-w-[980px] items-start">
          {/* Name — Figma column; flex-1 */}
          <div
            className="content-stretch relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,0px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Name
                </p>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`name-${row.id}`}
                type="button"
                tabIndex={0}
                aria-label={`Open trace details for ${row.name}`}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center gap-[var(--spacing-lg,12px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#ff7404] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative size-[40px] shrink-0 overflow-clip rounded-[var(--radius-full,9999px)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)]">
                  <p className="absolute left-1/2 top-[calc(50%-12px)] w-[40px] -translate-x-1/2 text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-md,16px)] leading-[var(--line-height\/text-md,24px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                    {row.avatar}
                  </p>
                </div>
                <div className="relative shrink-0 content-stretch flex flex-col items-start text-left text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)] whitespace-nowrap">
                  <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium text-[#181d27]">
                    {row.name}
                  </p>
                  <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]">
                    {row.model}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Type 137px */}
          <div
            className="content-stretch relative flex w-[137px] shrink-0 flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,4px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Type
                </p>
                <div className="relative size-[12px] shrink-0 overflow-clip">
                  <div className="absolute inset-[20.83%]">
                    <div className="absolute inset-[-10.71%]">
                      <img alt="" className="block size-full max-w-none" src={imgIcon5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`type-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                {row.typeLabel === 'ide' ? <IdeTypeBadge /> : <FrameworkTypeBadge />}
              </button>
            ))}
          </div>

          {/* Guardrail 118px */}
          <div
            className="content-stretch relative flex w-[118px] shrink-0 flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,4px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Guardrail
                </p>
                <div className="relative size-[12px] shrink-0 overflow-clip">
                  <div className="absolute inset-[20.83%]">
                    <div className="absolute inset-[-10.71%]">
                      <img alt="" className="block size-full max-w-none" src={imgIcon5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`gr-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative shrink-0 content-stretch flex items-center rounded-[var(--radius-sm,6px)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)]">
                  <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)]">
                    {row.guardrail}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Warning 113px */}
          <div
            className="content-stretch relative flex w-[113px] shrink-0 flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,4px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Warning
                </p>
                <div className="relative size-[12px] shrink-0 overflow-clip">
                  <div className="absolute inset-[20.83%]">
                    <div className="absolute inset-[-10.71%]">
                      <img alt="" className="block size-full max-w-none" src={imgIcon5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`warn-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative shrink-0 content-stretch flex items-center rounded-[var(--radius-sm,6px)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)]">
                  <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]">
                    {row.warning}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Pass 92px */}
          <div
            className="content-stretch relative flex w-[92px] shrink-0 flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,4px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Pass
                </p>
                <div className="relative size-[12px] shrink-0 overflow-clip">
                  <div className="absolute inset-[20.83%]">
                    <div className="absolute inset-[-10.71%]">
                      <img alt="" className="block size-full max-w-none" src={imgIcon5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`pass-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative shrink-0 content-stretch flex items-center rounded-[var(--radius-sm,6px)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)]">
                  <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)]">
                    {row.pass}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Time 103px */}
          <div
            className="content-stretch relative flex w-[103px] shrink-0 flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,4px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Time
                </p>
                <div className="relative size-[16px] shrink-0 overflow-clip">
                  <div className="absolute inset-[8.33%]">
                    <div className="absolute inset-[-5%]">
                      <img alt="" className="block size-full max-w-none" src={imgIcon2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`time-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative shrink-0 content-stretch flex items-center gap-[8px]">
                  <p className="relative shrink-0 whitespace-nowrap text-left font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)] text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]">
                    {row.time}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Cost 98px */}
          <div
            className="content-stretch relative flex w-[98px] shrink-0 flex-col items-start isolate"
            data-name="Column"
          >
            <div className="relative z-[5] flex h-[44px] w-full shrink-0 content-stretch items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
              <div className="relative shrink-0 content-stretch flex items-center gap-[var(--spacing-xs,0px)]">
                <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] text-[length:var(--font-size\/text-xs,12px)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                  Cost
                </p>
              </div>
            </div>
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`cost-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative shrink-0 content-stretch flex items-center gap-[8px]">
                  <p className="relative shrink-0 whitespace-nowrap text-left font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)] text-[#181d27]">
                    {row.cost}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Action 60px */}
          <div
            className="content-stretch relative flex w-[60px] shrink-0 flex-col items-start"
            data-name="Column"
          >
            <ActionColumnHeader />
            {LATEST_TRACES.map((row, i) => (
              <button
                key={`act-${row.id}`}
                type="button"
                tabIndex={-1}
                onClick={() => onOpenTrace(row)}
                className={`relative ${ROW_Z[i]} isolate flex h-[72px] w-full shrink-0 cursor-pointer content-stretch items-center gap-[var(--spacing-xxs,2px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid p-[var(--spacing-xl,16px)] outline-none ${ROW_STRIPE_BG[i % 2]} hover:brightness-[0.99]`}
                data-name="Table cell"
              >
                <div className="relative z-[1] flex shrink-0 content-stretch items-center justify-center overflow-clip rounded-[var(--radius-sm,6px)] p-[var(--spacing-sm,6px)]">
                  <div className="relative size-[16px] shrink-0 overflow-clip">
                    <div className="absolute inset-[8.33%]">
                      <div className="absolute inset-[-5.63%_-5.62%_-5.62%_-5.63%]">
                        <img alt="" className="block size-full max-w-none" src={imgIcon6} />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Pagination className="border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid border-t content-stretch flex gap-[var(--spacing-lg,12px)] items-center justify-center pb-[var(--spacing-xl,16px)] pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative shrink-0 w-full z-[1]" />
    </div>
  );
}