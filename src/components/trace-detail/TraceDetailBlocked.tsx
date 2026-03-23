import { useState } from 'react';

import type { TraceRowContext } from '../../traceContext';
import { ClaudeSummaryBanner, SheetTypeBadge } from './TraceDetailClaude';

const imgIcon = "https://www.figma.com/api/mcp/asset/083b1273-ff09-4dd7-b5c3-96e62dc7bfa7";
const imgGroup = "https://www.figma.com/api/mcp/asset/b2f82abb-c0b4-4644-8b64-153b98824c07";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/1e1908d6-f65a-4583-b93e-74fccc257195";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/8ad25927-0379-43e0-aef9-ba58dd3e027d";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/d9dbbdef-1264-4b16-84db-eaee4269f929";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/7a1f64a8-a422-48cb-9486-39c1df291c87";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/160af23d-096e-4a40-ba7c-defbf770e682";
const imgDot1 = "https://www.figma.com/api/mcp/asset/15ce0ea4-451b-40a8-89e6-2295255504c3";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/2db30d15-4857-4ff0-9bdd-5251bdb0c206";
const imgDot2 = "https://www.figma.com/api/mcp/asset/60040158-fa69-45c7-abf4-27d0f69d0ced";
type PaginationProps = {
  className?: string;
  showPerPage?: boolean;
};

function Pagination({ className, showPerPage = true }: PaginationProps) {
  const [page, setPage] = useState(1);
  const [perPageOpen, setPerPageOpen] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const pages = [1, 2, 3, '...', 8, 9, 10] as const;
  return (
    <div className={className || ""} data-name="Pagination" data-node-id="1348:178646">
      <div className="border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid border-t content-stretch flex gap-[var(--spacing-lg,12px)] items-center justify-center pb-[var(--spacing-xl,16px)] pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative w-[1216px]" data-name="Type=Card default, Shape=Square, Breakpoint=Desktop" data-node-id="1348:178661">
        <div className="content-stretch flex flex-[1_0_0] h-[36px] items-center min-h-px min-w-px relative" data-name="Button wrap" data-node-id="1348:178765">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors-border-border-primary,#d5d7da)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[var(--spacing-lg,12px)] py-[var(--spacing-md,8px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0 cursor-pointer hover:bg-[#fafafa]"
            data-name="Buttons/Button"
            data-node-id="1348:178766"
          >
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left" data-node-id="I1348:178766;3466:438465">
              <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1348:178766;3466:438465;3463:404456">
                <div className="absolute inset-[-7.14%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-name="Text padding" data-node-id="I1348:178766;6421:271250">
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#414651)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1348:178766;3287:433057">
                Previous
              </p>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(10,13,18,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(10,13,18,0.05))]" />
          </button>
        </div>
        <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-start relative shrink-0" data-name="Pagination numbers" data-node-id="1348:178767">
          {pages.map((p, i) => (
            <button
              type="button"
              key={i}
              disabled={p === '...'}
              onClick={() => typeof p === 'number' && setPage(p)}
              className={`overflow-clip relative rounded-[var(--radius-md,8px)] shrink-0 size-[40px] ${
                p === page ? 'bg-[var(--colors\/background\/bg-primary_hover,#fafafa)]' : ''
              } ${p === '...' ? 'cursor-default' : 'cursor-pointer hover:bg-[#fafafa]'}`}
              data-name="_Pagination number base"
            >
              <div className="absolute content-stretch flex items-center justify-center left-0 p-[var(--spacing-md,8px)] rounded-[var(--spacing-md,8px)] size-[40px] top-0" data-name="Content">
                <p
                  className={`font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[length:var(--font-size\/text-sm,14px)] text-center whitespace-nowrap ${
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
          <div className="relative">
            <button
              type="button"
              onClick={() => setPerPageOpen((o) => !o)}
              className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors-border-border-primary,#d5d7da)] border-solid content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#fafafa]"
              data-name="Type=Number of results, Outlined=Yes"
              data-node-id="1348:178775"
            >
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-[color:var(--Colors/Text/text-primary(900),#181d27)] tracking-[-0.5px] whitespace-nowrap" data-node-id="1348:178776">
                {perPage} per page
              </p>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon/16/Chevron down" data-node-id="1348:178777">
                <div className="absolute inset-[37.5%_15.63%_31.25%_15.63%]" data-name="Group" data-node-id="I1348:178777;101:1107">
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
                        setPerPage(n);
                        setPerPageOpen(false);
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
        <div className="content-stretch flex flex-[1_0_0] h-[36px] items-center justify-end min-h-px min-w-px relative" data-name="Button wrap" data-node-id="1348:178778">
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(10, p + 1))}
            className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors-border-border-primary,#d5d7da)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[var(--spacing-lg,12px)] py-[var(--spacing-md,8px)] relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0 cursor-pointer hover:bg-[#fafafa]"
            data-name="Buttons/Button"
            data-node-id="1348:178779"
          >
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-name="Text padding" data-node-id="I1348:178779;6421:271250">
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-secondary-\(700\),#414651)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1348:178779;3287:433057">
                Next
              </p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right" data-node-id="I1348:178779;3466:448437">
              <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1348:178779;3466:448437;3463:404483">
                <div className="absolute inset-[-7.14%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon1} />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(10,13,18,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(10,13,18,0.05))]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TraceDetailBlocked({ trace, onClose }: { trace: TraceRowContext; onClose?: () => void }) {
  const [timelineExpanded, setTimelineExpanded] = useState(false);
  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-primary,#d5d7da)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="Filters bar" data-node-id="1467:190436">
      <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-primary,#d5d7da)] border-b border-solid content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="Table header cell" data-node-id="1467:190437">
        <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Header Container" data-node-id="1467:190438">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Title Container" data-node-id="1467:190439">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fingerprint-01" data-node-id="1467:190440">
              <div className="absolute inset-[8.33%_8.33%_9.65%_8.33%]" data-name="Icon" data-node-id="I1467:190440;3463:404025">
                <div className="absolute inset-[-5.08%_-5%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header" data-node-id="1467:190441">
              <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/text-primary-\(900\),#181d27)] whitespace-nowrap" data-node-id="I1467:190441;1221:106889">
                Traces Details
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onClose?.()}
          aria-label="Close panel"
          data-trace-panel-close
          className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[var(--spacing-md,8px)] relative rounded-[var(--radius-md,8px)] shrink-0 size-[20px] transition-all duration-150 hover:bg-[#e9eaeb] hover:scale-110 active:scale-95"
          data-name="Buttons/Button close X"
          data-node-id="1467:190443"
        >
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close" data-node-id="I1467:190443;2763:420457">
            <div className="absolute inset-1/4" data-name="Icon" data-node-id="I1467:190443;2763:420457;3463:405166">
              <div className="absolute inset-[-8.33%]">
                <img alt="" className="block max-w-none size-full" src={imgIcon3} />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-[12px] w-full" data-node-id="1490:193127">
        <div className="content-stretch flex flex-col gap-[12px] items-start pt-[12px] px-[12px] relative shrink-0 w-full" data-node-id="1490:193128">
          <div className="border-2 border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="1490:193691">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1490:193692">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,0px)] h-[44px] items-center min-h-px min-w-px px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative" data-name="Table header cell" data-node-id="1490:193693">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193693;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193693;1224:4556;1221:106781">
                    Name
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[137px]" data-name="Table header cell" data-node-id="1490:193694">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193694;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193694;1224:4556;1221:106889">
                    Type
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1490:193694;1224:4556;1221:106890">
                    <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1490:193694;1224:4556;1221:106890;3463:404447">
                      <div className="absolute inset-[-10.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[113px]" data-name="Table header cell" data-node-id="1490:193695">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193695;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193695;1224:4556;1221:106889">
                    Warning
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1490:193695;1224:4556;1221:106890">
                    <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1490:193695;1224:4556;1221:106890;3463:404447">
                      <div className="absolute inset-[-10.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[92px]" data-name="Table header cell" data-node-id="1490:193696">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193696;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193696;1224:4556;1221:106889">
                    Pass
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1490:193696;1224:4556;1221:106890">
                    <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1490:193696;1224:4556;1221:106890;3463:404447">
                      <div className="absolute inset-[-10.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[103px]" data-name="Table header cell" data-node-id="1490:193697">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193697;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193697;1224:4556;1221:106790">
                    Time
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Help icon" data-node-id="I1490:193697;1224:4556;1221:106791">
                    <div className="absolute inset-0 overflow-clip" data-name="help-circle" data-node-id="I1490:193697;1224:4556;1221:106791;1054:3">
                      <div className="absolute inset-[8.33%]" data-name="Icon" data-node-id="I1490:193697;1224:4556;1221:106791;1054:3;3463:405412">
                        <div className="absolute inset-[-5%]">
                          <img alt="" className="block max-w-none size-full" src={imgIcon5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[98px]" data-name="Table header cell" data-node-id="1490:193698">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193698;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193698;1224:4556;1221:106781">
                    Cost
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1490:193699">
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,12px)] h-[72px] items-center min-h-px min-w-px px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative" data-name="Table cell" data-node-id="1490:193700">
                <div className="bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[40px]" data-name="Avatar" data-node-id="1490:193701">
                  <p className="-translate-x-1/2 absolute font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-md,24px)] left-1/2 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-md,16px)] text-center top-[calc(50%-12px)] w-[40px]" data-node-id="I1490:193701;19:1257">
                    {trace.avatar}
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-name="Text and supporting text" data-node-id="1490:193702">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)]" data-node-id="1490:193703">
                    <span className="font-['Inter:Bold',sans-serif] font-bold">{trace.traceIdLabel}</span>
                    {trace.name}
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]" data-node-id="1490:193704">
                    {trace.model}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[137px]" data-name="Table cell" data-node-id="1490:193705">
                <SheetTypeBadge typeLabel={trace.typeLabel} />
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[113px]" data-name="Table cell" data-node-id="1490:193706">
                <div className="bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193706;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193706;1224:173;4825:409549">
                    {trace.warning}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[92px]" data-name="Table cell" data-node-id="1490:193707">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193707;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193707;1224:173;4825:409533">
                    {trace.pass}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[103px]" data-name="Table cell" data-node-id="1490:193708">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193708;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193708;1223:41">
                    {trace.time}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[98px]" data-name="Table cell" data-node-id="1490:193709">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193709;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193709;1222:107485">
                    {trace.cost}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ClaudeSummaryBanner trace={trace} />
        </div>
        <div className="content-stretch flex flex-col gap-[11px] items-center px-[12px] relative shrink-0 w-full" data-node-id="1525:184788">
          <div
            className={`content-stretch flex flex-col items-start px-[12px] relative shrink-0 w-full overflow-hidden transition-[max-height] duration-300 ease-out ${
              timelineExpanded ? 'max-h-[2200px]' : 'max-h-[340px]'
            }`}
            data-node-id="1525:184789"
          >
            <div className="content-stretch flex flex-col gap-[11px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Container" data-node-id="1525:184790">
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184791">
                <div className="absolute content-stretch flex items-start left-0 pr-[6px] top-[5.5px]" data-name="Container" data-node-id="1525:184792">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right whitespace-nowrap" data-node-id="1525:184793">
                    14200ms
                  </p>
                </div>
                <div className="absolute bg-[#2a3350] content-stretch flex h-[20px] items-center left-[78px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0 w-[1292px]" data-name="Container" data-node-id="1525:184794">
                  <div className="opacity-90 relative shrink-0 w-[130.047px]" data-name="Text" data-node-id="1525:184795">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184796">
                        Session Start (Multi-Agent)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184797">
                <div className="absolute bg-[#a78bfa] content-stretch flex h-[20px] items-center left-[96px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0 w-[273px]" data-name="Container" data-node-id="1525:184798">
                  <div className="opacity-90 relative shrink-0 w-[269.719px]" data-name="Text" data-node-id="1525:184799">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184800">{`User: "Create migration to add 2FA columns to users tab…`}</p>
                    </div>
                  </div>
                </div>
                <p className="-translate-x-full absolute font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] left-[55px] text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right top-[0.5px] whitespace-nowrap" data-node-id="1525:184801">
                  13200ms
                </p>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184802">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184803">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184804">
                    2200ms
                  </p>
                </div>
                <div className="absolute h-[20px] left-[96px] top-0 w-[1270px]" data-name="Container" data-node-id="1525:184805">
                  <div className="absolute bg-[#38bdf8] content-stretch flex h-[20px] items-center left-[8.94px] opacity-75 overflow-clip pl-[4px] rounded-[3px] shadow-[0px_0px_0px_1.5px_#34d399] top-0 w-[200.75px]" data-name="Container" data-node-id="1525:184806">
                    <div className="opacity-90 relative shrink-0 w-[303.438px]" data-name="Text" data-node-id="1525:184807">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                        <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184808">
                          LLM → claude-opus-4 (orchestrator planning) (2.1k→1.4k) $0.0180
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex gap-[4px] items-center left-[225px] top-[-1px] w-[94px]" data-node-id="1525:184809">
                    <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center pl-[var(--spacing-sm,6px)] pr-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="1525:184810">
                      <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1525:184810;3918:412868">
                        <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1525:184810;3918:412868;1046:12312">
                          <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                        </div>
                      </div>
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1525:184810;3918:412869">
                        Pass
                      </p>
                    </div>
                    <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="1525:184811">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1525:184811;3918:415771">
                        0.03
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184812">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184813">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184814">
                    5800ms
                  </p>
                </div>
                <div className="absolute bg-[#c084fc] content-stretch flex h-[20px] items-center left-[310.64px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0 w-[522.719px]" data-name="Container" data-node-id="1525:184815">
                  <div className="opacity-90 relative shrink-0 w-[144.5px]" data-name="Text" data-node-id="1525:184816">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184817">
                        SubagentStart → MigrationAgent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184818">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184819">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184820">
                    1800ms
                  </p>
                </div>
                <div className="absolute bg-[#38bdf8] content-stretch flex h-[20px] items-center left-[334.42px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184821">
                  <div className="opacity-90 relative shrink-0 w-[264.906px]" data-name="Text" data-node-id="1525:184822">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184823">
                        LLM → claude-opus-4 (migration gen) (1.8k→1.2k) $0.0150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184824">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184825">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184826">
                    80ms
                  </p>
                </div>
                <div className="absolute h-[20px] left-[114px] top-0 w-[1252px]" data-name="Container" data-node-id="1525:184827">
                  <div className="absolute bg-[#fbbf24] content-stretch flex h-[20px] items-center left-[387.94px] opacity-75 overflow-clip pl-[4px] rounded-[3px] shadow-[0px_0px_0px_1.5px_#34d399] top-0" data-name="Container" data-node-id="1525:184828">
                    <div className="opacity-90 relative shrink-0" data-name="Text" data-node-id="1525:184829">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                        <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184830">
                          CreateFile → migrations/20260318_add_2fa.sql
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex gap-[4px] items-center left-[674px] top-[-2px] w-[94px]" data-node-id="1525:184831">
                    <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center pl-[var(--spacing-sm,6px)] pr-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="1525:184832">
                      <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1525:184832;3918:412868">
                        <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1525:184832;3918:412868;1046:12312">
                          <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                        </div>
                      </div>
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1525:184832;3918:412869">
                        Pass
                      </p>
                    </div>
                    <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="1525:184833">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1525:184833;3918:415771">
                        0.03
                      </p>
                    </div>
                  </div>
                  <div className="absolute h-[16px] left-[604px] top-0 w-[61.156px]" data-name="Container" data-node-id="1525:184834" />
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184835">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184836">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184837">
                    1200ms
                  </p>
                </div>
                <div className="absolute bg-[#fbbf24] content-stretch flex h-[20px] items-center left-[512.52px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184838">
                  <div className="opacity-90 relative shrink-0 w-[221.563px]" data-name="Text" data-node-id="1525:184839">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184840">
                        Bash → psql -f migrations/20260318_add_2fa.sql
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184841">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184842">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184843">
                    900ms
                  </p>
                </div>
                <div className="absolute bg-[#fbbf24] content-stretch flex items-center left-[623.61px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184844">
                  <div className="opacity-90 relative shrink-0 w-[260.094px]" data-name="Text" data-node-id="1525:184845">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184846">
                        Bash → psql -f migrations/20260318_add_2fa_rollback.s…
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184847">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184848">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184849">
                    800ms
                  </p>
                </div>
                <div className="absolute bg-[#fbbf24] content-stretch flex items-center left-[709.14px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184850">
                  <div className="opacity-90 relative shrink-0 w-[221.563px]" data-name="Text" data-node-id="1525:184851">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184852">
                        Bash → psql -f migrations/20260318_add_2fa.sql
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184853">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184854">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184855">
                    20ms
                  </p>
                </div>
                <div className="absolute bg-[#2a3350] content-stretch flex h-[20px] items-center left-[829.38px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184856">
                  <div className="opacity-90 relative shrink-0 w-[149.313px]" data-name="Text" data-node-id="1525:184857">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184858">
                        SubagentStop → MigrationAgent ✓
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184859">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184860">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184861">
                    4800ms
                  </p>
                </div>
                <div className="absolute bg-[#c084fc] content-stretch flex h-[20px] items-center left-[838.31px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184862">
                  <div className="opacity-90 relative shrink-0 w-[115.594px]" data-name="Text" data-node-id="1525:184863">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184864">
                        SubagentStart → APIAgent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184865">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184866">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184867">
                    2000ms
                  </p>
                </div>
                <div className="absolute h-[20px] left-[114px] top-0 w-[1252px]" data-name="Container" data-node-id="1525:184868">
                  <div className="absolute bg-[#38bdf8] content-stretch flex h-[20px] items-center left-[740.61px] opacity-75 overflow-clip pl-[4px] rounded-[3px] shadow-[0px_0px_0px_1.5px_#34d399] top-0" data-name="Container" data-node-id="1525:184869">
                    <div className="opacity-90 relative shrink-0 w-[250.453px]" data-name="Text" data-node-id="1525:184870">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
                        <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184871">
                          LLM → claude-opus-4 (API update) (3.2k→1.8k) $0.0250
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[16px] left-[919.45px] top-[2px] w-[61.156px]" data-name="Container" data-node-id="1525:184872" />
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184873">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184874">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184875">
                    120ms
                  </p>
                </div>
                <div className="absolute h-[20px] left-[114px] top-0 w-[1252px]" data-name="Container" data-node-id="1525:184876">
                  <div className="absolute bg-[#fbbf24] content-stretch flex h-[20px] items-center left-[925.77px] opacity-75 overflow-clip pl-[4px] rounded-[3px] shadow-[0px_0px_0px_1.5px_#fbbf24] top-0" data-name="Container" data-node-id="1525:184877">
                    <div className="opacity-90 relative shrink-0" data-name="Text" data-node-id="1525:184878">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                        <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184879">
                          EditFile → src/routes/auth.ts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[1368px]" data-name="SpanRow" data-node-id="1525:184880">
                <div className="absolute content-stretch flex h-[9px] items-start left-0 pr-[6px] top-[5.5px] w-[58px]" data-name="Container" data-node-id="1525:184881">
                  <p className="flex-[1_0_0] font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] min-h-px min-w-px relative text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-xs,12px)] text-right" data-node-id="1525:184882">
                    80ms
                  </p>
                </div>
                <div className="absolute bg-[#fbbf24] content-stretch flex h-[20px] items-center left-[1053px] opacity-75 overflow-clip pl-[4px] rounded-[3px] top-0" data-name="Container" data-node-id="1525:184883">
                  <div className="opacity-90 relative shrink-0" data-name="Text" data-node-id="1525:184884">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-white whitespace-nowrap" data-node-id="1525:184885">
                        EditFile → src/models/user.ts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setTimelineExpanded((v) => !v)}
            className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center justify-center overflow-clip px-[var(--spacing-lg,12px)] py-[var(--spacing-md,8px)] relative rounded-[var(--radius-md,8px)] shrink-0 cursor-pointer hover:bg-[#fafafa]"
            data-name="Buttons/Button"
            data-node-id="1525:184886"
          >
            <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-name="Text padding" data-node-id="I1525:184886;6421:271794">
              <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1525:184886;3287:433249">
                {timelineExpanded ? 'Show less' : 'View All'}
              </p>
            </div>
            <div
              className={`overflow-clip relative shrink-0 size-[20px] transition-transform duration-300 ${timelineExpanded ? 'rotate-180' : ''}`}
              data-name="arrow-circle-down"
              data-node-id="I1525:184886;3468:418654"
            >
              <div className="absolute inset-[8.33%]" data-name="Icon" data-node-id="I1525:184886;3468:418654;3463:404423">
                <div className="absolute inset-[-5%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon6} />
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid content-stretch flex flex-col isolate items-start overflow-clip relative shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0 w-full" data-name="Table" data-node-id="1490:193246">
          <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col gap-[var(--spacing-lg,12px)] isolate items-start relative shrink-0 w-full z-[3]" data-name="Card header" data-node-id="1490:193247">
            <div className="content-stretch flex gap-[var(--spacing-xl,16px)] items-start pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative shrink-0 w-full z-[2]" data-name="Content" data-node-id="I1490:193247;1211:74">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-xxs,2px)] items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text" data-node-id="I1490:193247;1211:75">
                <div className="content-stretch flex gap-[var(--spacing-md,8px)] items-center relative shrink-0 w-full" data-name="Text and badge" data-node-id="I1490:193247;1213:102753">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-lg,18px)] whitespace-nowrap" data-node-id="I1490:193247;1211:76">
                    Guardrail Evaluations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="Content" data-node-id="1490:193248">
            <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Column" data-node-id="1490:193249">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1490:193250">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193250;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193250;1224:4556;1221:106781">
                    Session ID
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1490:193251">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193251;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193251;1222:107485">
                    on_llm_start → claude-sonnet-4 (que
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1490:193252">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193252;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193252;1222:107485">
                    on_llm_start → claude-sonnet-4 (syn
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1490:193253">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193253;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193253;1222:107485">
                    Chain Complete → 200 OK
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1490:193254">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193254;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193254;1222:107485">
                    EditFile → src/routes/auth.ts
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0" data-name="Column" data-node-id="1490:193255">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1490:193256">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193256;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193256;1224:4556;1221:106781">
                    Policy
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[4]" data-name="Table cell" data-node-id="1490:193257">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1490:193257;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193257;1224:173;3918:407462">
                    Prompt Injection
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[3]" data-name="Table cell" data-node-id="1490:193258">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1490:193258;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193258;1224:173;3918:407462">
                    Destructive Cmd
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[2]" data-name="Table cell" data-node-id="1490:193259">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1490:193259;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193259;1224:173;3918:407462">
                    Prompt Injection
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1490:193260">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1490:193260;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193260;1224:173;3918:407462">
                    Destructive Cmd
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[102px]" data-name="Column" data-node-id="1490:193261">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1490:193262">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193262;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193262;1224:4556;1221:106781">
                    Type
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1490:193263">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193263;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1490:193263;1224:173;4825:409559">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1490:193263;1224:173;4825:409559;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193263;1224:173;4825:409560">
                    Pass
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1490:193264">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193264;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1490:193264;1224:173;4825:409559">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1490:193264;1224:173;4825:409559;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193264;1224:173;4825:409560">
                    Pass
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1490:193265">
                <div className="bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193265;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1490:193265;1224:173;4825:409556">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1490:193265;1224:173;4825:409556;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot2} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193265;1224:173;4825:409557">
                    Warn
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1490:193266">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193266;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1490:193266;1224:173;4825:409559">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1490:193266;1224:173;4825:409559;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193266;1224:173;4825:409560">
                    Pass
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[94px]" data-name="Column" data-node-id="1490:193267">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1490:193268">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193268;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193268;1224:4556;1221:106781">
                    Score
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1490:193269">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193269;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193269;1224:173;4825:409533">
                    0.03
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1490:193270">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193270;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193270;1224:173;4825:409533">
                    0.15
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1490:193271">
                <div className="bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193271;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193271;1224:173;4825:409531">
                    0.062
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1490:193272">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1490:193272;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1490:193272;1224:173;4825:409533">
                    0.00
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[103px]" data-name="Column" data-node-id="1490:193273">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1490:193274">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193274;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193274;1224:4556;1221:106781">
                    Time
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1490:193275">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193275;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193275;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1490:193276">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193276;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193276;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1490:193277">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193277;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193277;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1490:193278">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193278;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193278;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[179px]" data-name="Column" data-node-id="1490:193279">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1490:193280">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1490:193280;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1490:193280;1224:4556;1221:106781">
                    Detail
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1490:193281">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193281;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193281;1222:107485">
                    Clean
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1490:193282">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193282;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193282;1222:107485">
                    ALTER TABLE is expected for migration
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1490:193283">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193283;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193283;1222:107485">
                    No PII
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1490:193284">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1490:193284;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1490:193284;1222:107485">
                    Safe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Pagination className="border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid border-t content-stretch flex gap-[var(--spacing-lg,12px)] items-center justify-center pb-[var(--spacing-xl,16px)] pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative shrink-0 w-full z-[1]" />
        </div>
      </div>
    </div>
  );
}