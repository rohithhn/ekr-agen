import { useEffect, useState } from 'react';

import type { TraceRowContext, TraceTypeLabel } from '../../traceContext';
import { LiveSpanTimeline } from './LiveSpanTimeline';
import { TraceTreeV2NestedTraceCard, TraceTreeV2Toolbar } from './TraceTreeV2View';

const imgIcon = "https://www.figma.com/api/mcp/asset/c7c5c82f-cb42-4fba-a20f-4eb7c7131c28";
const imgGroup = "https://www.figma.com/api/mcp/asset/a031ea76-61b4-4f3c-8752-19553791ac69";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/4c304a5b-9d4c-4423-a776-1cc266391b57";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/2031b47f-7dae-408b-8729-bf8bffd85f34";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/f97f6311-8c53-4f29-b082-5183c3a9dfaf";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/599c348b-38dd-4468-8faa-c1f9d8ca5cde";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/4e2356b3-00dc-44d0-a67b-25116cd82a38";
const imgDot = "https://www.figma.com/api/mcp/asset/ff7833d9-970e-44cd-8802-feb691050e25";
const imgDot1 = "https://www.figma.com/api/mcp/asset/bc4e5eee-6217-47e9-a885-6a8cf0a554d8";
const imgIcon6 = "https://www.figma.com/api/mcp/asset/da74ed04-c630-4f68-b4f6-906ef054664c";
const imgDot2 = "https://www.figma.com/api/mcp/asset/fd07d740-f6ca-42da-b18e-e8f8f22cbc12";
export function SheetTypeBadge({ typeLabel }: { typeLabel: TraceTypeLabel }) {
  if (typeLabel === 'framework') {
    return (
      <div className="border border-[var(--component-colors\/utility\/blue\/utility-blue-200,#b2ddff)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0 bg-[var(--component-colors\/utility\/blue\/utility-blue-50,#eff8ff)]" data-name="Badge">
        <div className="relative shrink-0 size-[8px]">
          <div className="absolute left-px top-px size-[6px]">
            <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
          </div>
        </div>
        <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap text-[color:var(--component-colors\/utility\/blue\/utility-blue-700,#175cd3)]">
          Framework
        </p>
      </div>
    );
  }
  return (
    <div
      className="border border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0"
      style={{
        backgroundImage: 'linear-gradient(156.04806842298416deg, rgba(255, 117, 0, 0.1) 12.826%, rgba(255, 59, 162, 0.1) 84.859%)',
      }}
      data-name="Badge"
    >
      <div className="relative shrink-0 size-[8px]">
        <div className="absolute left-px top-px size-[6px]">
          <img alt="" className="absolute block max-w-none size-full" src={imgDot} />
        </div>
      </div>
      <p
        className="bg-clip-text font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(148.95316392779716deg, var(--colors\\/brand-old\\/900-orange,rgb(255, 116, 4)) 12.826%, rgb(255, 59, 162) 84.859%)',
        }}
      >
        IDE
      </p>
    </div>
  );
}

export function ClaudeSummaryBanner({ trace }: { trace: TraceRowContext }) {
  const { variant, tag, body } = trace.summaryBanner;
  if (variant === 'success' && !tag) {
    return (
      <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-md,8px)] items-center pl-[var(--spacing-xs,4px)] pr-[var(--spacing-md,8px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-full,9999px)] shrink-0 w-full" data-name="Badge group">
        <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)]" data-name="Badge">
          <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)]">
            {body}
          </p>
        </div>
      </div>
    );
  }
  const outer =
    variant === 'error'
      ? 'bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)]'
      : 'bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)]';
  const innerBorder =
    variant === 'error'
      ? 'border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]'
      : 'border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)]';
  const textCls =
    variant === 'error'
      ? 'text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]'
      : 'text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)]';
  return (
    <div
      className={`content-stretch flex gap-[var(--spacing-md,8px)] items-center border border-solid pl-[var(--spacing-xs,4px)] pr-[var(--spacing-md,8px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-full,9999px)] shrink-0 w-full ${outer}`}
      data-name="Badge group"
    >
      {tag ? (
        <div
          className={`bg-[var(--colors\/background\/bg-primary,white)] border border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0 ${innerBorder}`}
          data-name="Badge"
        >
          <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap">
            {tag}
          </p>
        </div>
      ) : null}
      <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Content">
        <p className={`font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap ${textCls}`}>
          {body}
        </p>
      </div>
    </div>
  );
}

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

export function TraceDetailClaude({ trace, onClose }: { trace: TraceRowContext; onClose?: () => void }) {
  const [timelineExpanded, setTimelineExpanded] = useState(false);
  const [sheetTab, setSheetTab] = useState<'v1' | 'v2'>('v1');
  const [v2Search, setV2Search] = useState('');

  useEffect(() => {
    setSheetTab('v1');
    setV2Search('');
    setTimelineExpanded(false);
  }, [trace.id]);

  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-primary,#d5d7da)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="Side sheet" data-node-id="1467:182946">
      <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-primary,#d5d7da)] border-b border-solid content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="Table header cell" data-node-id="1467:182947">
        <div className="content-stretch flex min-h-px min-w-0 flex-[1_0_0] items-center gap-3 relative" data-name="Header Container" data-node-id="1467:182948">
          <div className="content-stretch flex shrink-0 gap-[12px] items-center relative" data-name="Title Container" data-node-id="1467:182949">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fingerprint-01" data-node-id="1467:183645">
              <div className="absolute inset-[8.33%_8.33%_9.65%_8.33%]" data-name="Icon" data-node-id="I1467:183645;3463:404025">
                <div className="absolute inset-[-5.08%_-5%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header" data-node-id="1467:182955">
              <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/text-primary-\(900\),#181d27)] whitespace-nowrap" data-node-id="I1467:182955;1221:106889">
                Traces Details
              </p>
            </div>
          </div>
          <div
            className="flex flex-1 justify-center px-2"
            role="tablist"
            aria-label="Trace detail view"
          >
            <div className="inline-flex rounded-lg border border-[#d5d7da] bg-[#fafafa] p-0.5 shadow-[0_1px_2px_rgba(10,13,18,0.05)]">
              {(['v1', 'v2'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={sheetTab === tab}
                  aria-label={tab === 'v1' ? 'Timeline view' : 'Trace tree V2'}
                  onClick={() => setSheetTab(tab)}
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
        </div>
        <button
          type="button"
          onClick={() => onClose?.()}
          aria-label="Close panel"
          data-trace-panel-close
          className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[var(--spacing-md,8px)] relative rounded-[var(--radius-md,8px)] shrink-0 size-[20px] transition-all duration-150 hover:bg-[#e9eaeb] hover:scale-110 active:scale-95"
          data-name="Buttons/Button close X"
          data-node-id="1467:182957"
        >
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close" data-node-id="I1467:182957;2763:420457">
            <div className="absolute inset-1/4" data-name="Icon" data-node-id="I1467:182957;2763:420457;3463:405166">
              <div className="absolute inset-[-8.33%]">
                <img alt="" className="block max-w-none size-full" src={imgIcon3} />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-[12px] w-full" data-node-id="1467:183007">
        {sheetTab === 'v2' && (
          <div className="w-full shrink-0 px-[12px] pt-[12px]">
            <TraceTreeV2Toolbar search={v2Search} onSearchChange={setV2Search} />
          </div>
        )}
        <>
        <div
          className={`content-stretch flex flex-col gap-[12px] items-start px-[12px] relative shrink-0 w-full ${sheetTab === 'v1' ? 'pt-[12px]' : 'pt-0'}`}
          data-node-id="1467:183558"
        >
          <div className="border-2 border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="1467:183640">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1467:183621">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,0px)] h-[44px] items-center min-h-px min-w-px px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative" data-name="Table header cell" data-node-id="1467:183559">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183559;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183559;1224:4556;1221:106781">
                    Name
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[137px]" data-name="Table header cell" data-node-id="1467:183560">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183560;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183560;1224:4556;1221:106889">
                    Type
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1467:183560;1224:4556;1221:106890">
                    <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1467:183560;1224:4556;1221:106890;3463:404447">
                      <div className="absolute inset-[-10.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[113px]" data-name="Table header cell" data-node-id="1467:183561">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183561;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183561;1224:4556;1221:106889">
                    Warning
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1467:183561;1224:4556;1221:106890">
                    <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1467:183561;1224:4556;1221:106890;3463:404447">
                      <div className="absolute inset-[-10.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[92px]" data-name="Table header cell" data-node-id="1467:183562">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183562;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183562;1224:4556;1221:106889">
                    Pass
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1467:183562;1224:4556;1221:106890">
                    <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1467:183562;1224:4556;1221:106890;3463:404447">
                      <div className="absolute inset-[-10.71%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[103px]" data-name="Table header cell" data-node-id="1467:183563">
                <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183563;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183563;1224:4556;1221:106790">
                    Time
                  </p>
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Help icon" data-node-id="I1467:183563;1224:4556;1221:106791">
                    <div className="absolute inset-0 overflow-clip" data-name="help-circle" data-node-id="I1467:183563;1224:4556;1221:106791;1054:3">
                      <div className="absolute inset-[8.33%]" data-name="Icon" data-node-id="I1467:183563;1224:4556;1221:106791;1054:3;3463:405412">
                        <div className="absolute inset-[-5%]">
                          <img alt="" className="block max-w-none size-full" src={imgIcon5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[98px]" data-name="Table header cell" data-node-id="1467:183564">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183564;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183564;1224:4556;1221:106781">
                    Cost
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1467:183639">
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,12px)] h-[72px] items-center min-h-px min-w-px px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative" data-name="Table cell" data-node-id="1467:188770">
                <div className="bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[40px]" data-name="Avatar" data-node-id="1467:188771">
                  <p className="-translate-x-1/2 absolute font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-md,24px)] left-1/2 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-md,16px)] text-center top-[calc(50%-12px)] w-[40px]" data-node-id="I1467:188771;19:1257">
                    {trace.avatar}
                  </p>
                </div>
                <div className="content-stretch flex flex-col font-[var(--font-weight\/bold,normal)] items-start relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] whitespace-nowrap" data-name="Text and supporting text" data-node-id="1467:188772">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Bold',sans-serif)] font-bold leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[length:var(--font-size\/text-sm,14px)]" data-node-id="1467:188773">
                    <span className="font-['Inter:Bold',sans-serif] font-bold">{trace.traceIdLabel}</span>
                    {trace.name}
                  </p>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[14px]" data-node-id="1467:188774">
                    {trace.model}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[137px]" data-name="Table cell" data-node-id="1467:183566">
                <SheetTypeBadge typeLabel={trace.typeLabel} />
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[113px]" data-name="Table cell" data-node-id="1467:183567">
                <div className="bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183567;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183567;1224:173;4825:409549">
                    {trace.warning}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[92px]" data-name="Table cell" data-node-id="1467:183568">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183568;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183568;1224:173;4825:409533">
                    {trace.pass}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[103px]" data-name="Table cell" data-node-id="1467:183569">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183569;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183569;1223:41">
                    {trace.time}
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[98px]" data-name="Table cell" data-node-id="1467:183570">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183570;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183570;1222:107485">
                    {trace.cost}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ClaudeSummaryBanner trace={trace} />
        </div>
        {sheetTab === 'v2' && (
          <div className="w-full shrink-0 px-[12px]">
            <TraceTreeV2NestedTraceCard searchQuery={v2Search} />
          </div>
        )}
        {sheetTab === 'v1' && (
          <LiveSpanTimeline
            key={trace.id}
            expanded={timelineExpanded}
            onToggleExpanded={() => setTimelineExpanded((v) => !v)}
            imgIcon6={imgIcon6}
          />
        )}
        <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid content-stretch flex flex-col isolate items-start overflow-clip relative shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0 w-full" data-name="Table" data-node-id="1467:183111">
          <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col gap-[var(--spacing-lg,12px)] isolate items-start relative shrink-0 w-full z-[3]" data-name="Card header" data-node-id="1467:183112">
            <div className="content-stretch flex gap-[var(--spacing-xl,16px)] items-start pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative shrink-0 w-full z-[2]" data-name="Content" data-node-id="I1467:183112;1211:74">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-xxs,2px)] items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text" data-node-id="I1467:183112;1211:75">
                <div className="content-stretch flex gap-[var(--spacing-md,8px)] items-center relative shrink-0 w-full" data-name="Text and badge" data-node-id="I1467:183112;1213:102753">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-lg,18px)] whitespace-nowrap" data-node-id="I1467:183112;1211:76">
                    Guardrail Evaluations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full z-[2]" data-name="Content" data-node-id="1467:183113">
            <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Column" data-node-id="1467:183114">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1467:183115">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183115;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183115;1224:4556;1221:106781">
                    Session ID
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1467:183116">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183116;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183116;1222:107485">
                    on_llm_start → claude-sonnet-4 (que
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:183117">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183117;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183117;1222:107485">
                    on_llm_start → claude-sonnet-4 (syn
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:183118">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183118;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183118;1222:107485">
                    Chain Complete → 200 OK
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:183119">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183119;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183119;1222:107485">
                    EditFile → src/routes/auth.ts
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0" data-name="Column" data-node-id="1467:183120">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1467:183121">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183121;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183121;1224:4556;1221:106781">
                    Policy
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[4]" data-name="Table cell" data-node-id="1467:183122">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:183122;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183122;1224:173;3918:407462">
                    Prompt Injection
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[3]" data-name="Table cell" data-node-id="1467:183123">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:183123;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183123;1224:173;3918:407462">
                    Destructive Cmd
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[2]" data-name="Table cell" data-node-id="1467:183124">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:183124;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183124;1224:173;3918:407462">
                    Prompt Injection
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:183125">
                <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:183125;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183125;1224:173;3918:407462">
                    Destructive Cmd
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[102px]" data-name="Column" data-node-id="1467:183126">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1467:183127">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183127;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183127;1224:4556;1221:106781">
                    Type
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1467:183128">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183128;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:183128;1224:173;4825:409559">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:183128;1224:173;4825:409559;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183128;1224:173;4825:409560">
                    Pass
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:183129">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183129;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:183129;1224:173;4825:409559">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:183129;1224:173;4825:409559;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183129;1224:173;4825:409560">
                    Pass
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:183130">
                <div className="bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183130;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:183130;1224:173;4825:409556">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:183130;1224:173;4825:409556;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot2} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183130;1224:173;4825:409557">
                    Warn
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:183131">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183131;1224:173">
                  <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:183131;1224:173;4825:409559">
                    <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:183131;1224:173;4825:409559;1046:12312">
                      <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                    </div>
                  </div>
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183131;1224:173;4825:409560">
                    Pass
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[94px]" data-name="Column" data-node-id="1467:183132">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1467:183133">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183133;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183133;1224:4556;1221:106781">
                    Score
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1467:183134">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183134;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183134;1224:173;4825:409533">
                    0.03
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:183135">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183135;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183135;1224:173;4825:409533">
                    0.15
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:183136">
                <div className="bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183136;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183136;1224:173;4825:409531">
                    0.062
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:183137">
                <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:183137;1224:173">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:183137;1224:173;4825:409533">
                    0.00
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[103px]" data-name="Column" data-node-id="1467:183138">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1467:183139">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183139;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183139;1224:4556;1221:106781">
                    Time
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1467:183140">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183140;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183140;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:183141">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183141;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183141;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:183142">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183142;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183142;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:183143">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183143;13415:40209">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183143;1223:41">
                    2:25 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[179px]" data-name="Column" data-node-id="1467:183144">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[5]" data-name="Table header cell" data-node-id="1467:183145">
                <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:183145;1224:4556">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:183145;1224:4556;1221:106781">
                    Detail
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[4]" data-name="Table cell" data-node-id="1467:183146">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183146;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183146;1222:107485">
                    Clean
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:183147">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183147;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183147;1222:107485">
                    ALTER TABLE is expected for migration
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:183148">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183148;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183148;1222:107485">
                    No PII
                  </p>
                </div>
              </div>
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:183149">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:183149;13415:43499">
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:183149;1222:107485">
                    Safe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Pagination className="border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid border-t content-stretch flex gap-[var(--spacing-lg,12px)] items-center justify-center pb-[var(--spacing-xl,16px)] pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative shrink-0 w-full z-[1]" />
        </div>
        </>
      </div>
    </div>
  );
}