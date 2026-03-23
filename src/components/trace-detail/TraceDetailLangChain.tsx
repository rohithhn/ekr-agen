import { useEffect, useState } from 'react';

import type { TraceRowContext } from '../../traceContext';
import { ClaudeSummaryBanner, SheetTypeBadge } from './TraceDetailClaude';
import {
  TraceDetailSpanPanels,
  TraceSheetTabBar,
  TraceSheetV2ToolbarRow,
  type TraceSheetTab,
} from './traceDetailSheetDynamics';

const imgIcon = "https://www.figma.com/api/mcp/asset/6c6eaad2-7777-4966-a336-511627d51bee";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/853a6275-6fe9-44fd-8dc7-62bf1c8b437d";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/e1d7d688-032a-41ea-9984-c3c91d2a5dfe";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/7f17cf75-de2f-4b9f-84ba-31faf7f8aeb6";
const imgDot1 = "https://www.figma.com/api/mcp/asset/0d3f79aa-f0ce-4a32-9e85-65737b767904";
const imgDot2 = "https://www.figma.com/api/mcp/asset/6674a568-1b7d-42ba-8fa1-f8647b4cc78a";

export function TraceDetailLangChain({ trace, onClose }: { trace: TraceRowContext; onClose?: () => void }) {
  const [timelineExpanded, setTimelineExpanded] = useState(false);
  const [sheetTab, setSheetTab] = useState<TraceSheetTab>('v1');
  const [v2Search, setV2Search] = useState('');

  useEffect(() => {
    setSheetTab('v1');
    setV2Search('');
    setTimelineExpanded(false);
  }, [trace.id]);

  return (
    <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-primary,#d5d7da)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="sidesheet" data-node-id="1467:190062">
      <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-primary,#d5d7da)] border-b border-solid content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative shrink-0 w-full" data-name="Table header cell" data-node-id="1467:190063">
        <div className="content-stretch flex min-h-px min-w-0 flex-[1_0_0] items-center gap-3 relative" data-name="Header Container" data-node-id="1467:190064">
          <div className="content-stretch flex shrink-0 gap-[12px] items-center relative" data-name="Title Container" data-node-id="1467:190065">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fingerprint-01" data-node-id="1467:190066">
              <div className="absolute inset-[8.33%_8.33%_9.65%_8.33%]" data-name="Icon" data-node-id="I1467:190066;3463:404025">
                <div className="absolute inset-[-5.08%_-5%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header" data-node-id="1467:190067">
              <p className="font-['Inter:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[color:var(--colors\/text\/text-primary-\(900\),#181d27)] whitespace-nowrap" data-node-id="I1467:190067;1221:106889">
                Traces Details
              </p>
            </div>
          </div>
          <TraceSheetTabBar sheetTab={sheetTab} onTabChange={setSheetTab} />
        </div>
        <button
          type="button"
          onClick={() => onClose?.()}
          aria-label="Close panel"
          data-trace-panel-close
          className="content-stretch cursor-pointer flex items-center justify-center overflow-clip p-[var(--spacing-md,8px)] relative rounded-[var(--radius-md,8px)] shrink-0 size-[20px] transition-all duration-150 hover:bg-[#e9eaeb] hover:scale-110 active:scale-95"
          data-name="Buttons/Button close X"
          data-node-id="1467:190069"
        >
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close" data-node-id="I1467:190069;2763:420457">
            <div className="absolute inset-1/4" data-name="Icon" data-node-id="I1467:190069;2763:420457;3463:405166">
              <div className="absolute inset-[-8.33%]">
                <img alt="" className="block max-w-none size-full" src={imgIcon1} />
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-[12px] w-full" data-node-id="1467:190072">
        <TraceSheetV2ToolbarRow
          visible={sheetTab === 'v2'}
          v2Search={v2Search}
          onV2SearchChange={setV2Search}
        />
        <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-node-id="1525:184762">
          <div
            className={`content-start flex flex-wrap items-start px-[12px] relative shrink-0 w-full ${sheetTab === 'v1' ? 'pt-[12px]' : 'pt-0'}`}
            data-node-id="1467:190073"
          >
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-node-id="1490:192899">
              <div className="border-2 border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="1467:190074">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1467:190075">
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,0px)] items-center min-h-px min-w-px px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative" data-name="Table header cell" data-node-id="1467:190076">
                    <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190076;1224:4556">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190076;1224:4556;1221:106781">
                        Name
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[137px]" data-name="Table header cell" data-node-id="1467:190077">
                    <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190077;1224:4556">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190077;1224:4556;1221:106889">
                        Type
                      </p>
                      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1467:190077;1224:4556;1221:106890">
                        <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1467:190077;1224:4556;1221:106890;3463:404447">
                          <div className="absolute inset-[-10.71%]">
                            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[113px]" data-name="Table header cell" data-node-id="1467:190078">
                    <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190078;1224:4556">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190078;1224:4556;1221:106889">
                        Warning
                      </p>
                      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1467:190078;1224:4556;1221:106890">
                        <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1467:190078;1224:4556;1221:106890;3463:404447">
                          <div className="absolute inset-[-10.71%]">
                            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[92px]" data-name="Table header cell" data-node-id="1467:190079">
                    <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190079;1224:4556">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190079;1224:4556;1221:106889">
                        Pass
                      </p>
                      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="arrow-down" data-node-id="I1467:190079;1224:4556;1221:106890">
                        <div className="absolute inset-[20.83%]" data-name="Icon" data-node-id="I1467:190079;1224:4556;1221:106890;3463:404447">
                          <div className="absolute inset-[-10.71%]">
                            <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[103px]" data-name="Table header cell" data-node-id="1467:190080">
                    <div className="content-stretch flex gap-[var(--spacing-xs,4px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190080;1224:4556">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190080;1224:4556;1221:106790">
                        Time
                      </p>
                      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Help icon" data-node-id="I1467:190080;1224:4556;1221:106791">
                        <div className="absolute inset-0 overflow-clip" data-name="help-circle" data-node-id="I1467:190080;1224:4556;1221:106791;1054:3">
                          <div className="absolute inset-[8.33%]" data-name="Icon" data-node-id="I1467:190080;1224:4556;1221:106791;1054:3;3463:405412">
                            <div className="absolute inset-[-5%]">
                              <img alt="" className="block max-w-none size-full" src={imgIcon3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-[98px]" data-name="Table header cell" data-node-id="1467:190081">
                    <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190081;1224:4556">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190081;1224:4556;1221:106781">
                        Cost
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1467:190390">
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex flex-[1_0_0] gap-[var(--spacing-lg,12px)] items-center min-h-px min-w-px px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative" data-name="Table cell" data-node-id="1467:190391">
                    <div className="bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid overflow-clip relative rounded-[var(--radius-full,9999px)] shrink-0 size-[40px]" data-name="Avatar" data-node-id="1467:190392">
                      <p className="-translate-x-1/2 absolute font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-md,24px)] left-1/2 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-md,16px)] text-center top-[calc(50%-12px)] w-[40px]" data-node-id="I1467:190392;19:1257">
                        {trace.avatar}
                      </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-name="Text and supporting text" data-node-id="1467:190393">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[0] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)]" data-node-id="1467:190394">
                        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[var(--line-height\/text-sm,20px)] not-italic">{trace.traceIdLabel}</span>
                        <span className="leading-[var(--line-height\/text-sm,20px)]">{trace.name}</span>
                      </p>
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]" data-node-id="1467:190395">
                        {trace.model}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[137px]" data-name="Table cell" data-node-id="1467:190396">
                    <SheetTypeBadge typeLabel={trace.typeLabel} />
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[113px]" data-name="Table cell" data-node-id="1467:190398">
                    <div className="bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190398;1224:173">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190398;1224:173;4825:409549">
                        {trace.warning}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[92px]" data-name="Table cell" data-node-id="1467:190399">
                    <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190399;1224:173">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190399;1224:173;4825:409533">
                        {trace.pass}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[103px]" data-name="Table cell" data-node-id="1467:190400">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190400;13415:40209">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190400;1223:41">
                        {trace.time}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-[98px]" data-name="Table cell" data-node-id="1467:190401">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190401;13415:43499">
                      <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190401;1222:107485">
                        {trace.cost}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ClaudeSummaryBanner trace={trace} />
            </div>
          </div>
          <TraceDetailSpanPanels
            traceId={trace.id}
            sheetTab={sheetTab}
            v2Search={v2Search}
            timelineExpanded={timelineExpanded}
            onToggleTimelineExpanded={() => setTimelineExpanded((v) => !v)}
          />
          <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid content-stretch flex flex-col isolate items-start overflow-clip relative shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0 w-full" data-name="Table" data-node-id="1467:190197">
            <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-col gap-[var(--spacing-lg,12px)] isolate items-start relative shrink-0 w-full z-[2]" data-name="Card header" data-node-id="1467:190198">
              <div className="content-stretch flex gap-[var(--spacing-xl,16px)] items-start pt-[var(--spacing-lg,12px)] px-[var(--spacing-3xl,24px)] relative shrink-0 w-full z-[2]" data-name="Content" data-node-id="I1467:190198;1211:74">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[var(--spacing-xxs,2px)] items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text" data-node-id="I1467:190198;1211:75">
                  <div className="content-stretch flex gap-[var(--spacing-md,8px)] items-center relative shrink-0 w-full" data-name="Text and badge" data-node-id="I1467:190198;1213:102753">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-lg,28px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-lg,18px)] whitespace-nowrap" data-node-id="I1467:190198;1211:76">
                      Guardrail Evaluations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full z-[1]" data-name="Content" data-node-id="1467:190199">
              <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start min-h-px min-w-px relative" data-name="Column" data-node-id="1467:190200">
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[4]" data-name="Table header cell" data-node-id="1467:190201">
                  <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190201;1224:4556">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190201;1224:4556;1221:106781">
                      Session ID
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:190202">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190202;13415:43499">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190202;1222:107485">
                      on_llm_start → claude-sonnet-4 (que
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:190203">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190203;13415:43499">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190203;1222:107485">
                      on_llm_start → claude-sonnet-4 (syn
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:190204">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190204;13415:43499">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190204;1222:107485">
                      Chain Complete → 200 OK
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col isolate items-start relative shrink-0" data-name="Column" data-node-id="1467:190205">
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[4]" data-name="Table header cell" data-node-id="1467:190206">
                  <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190206;1224:4556">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190206;1224:4556;1221:106781">
                      Policy
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[3]" data-name="Table cell" data-node-id="1467:190207">
                  <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:190207;1224:173">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190207;1224:173;3918:407462">
                      Prompt Injection
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[2]" data-name="Table cell" data-node-id="1467:190208">
                  <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:190208;1224:173">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190208;1224:173;3918:407462">
                      Destructive Cmd
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 z-[1]" data-name="Table cell" data-node-id="1467:190209">
                  <div className="bg-[var(--component-colors\/utility\/gray\/utility-gray-50,#fafafa)] border border-[var(--component-colors\/utility\/gray\/utility-gray-200,#e9eaeb)] border-solid content-stretch flex items-center px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-full,9999px)] shrink-0" data-name="Badge" data-node-id="I1467:190209;1224:173">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/gray\/utility-gray-700,#414651)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190209;1224:173;3918:407462">
                      Toxicity
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[102px]" data-name="Column" data-node-id="1467:190210">
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[4]" data-name="Table header cell" data-node-id="1467:190211">
                  <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190211;1224:4556">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190211;1224:4556;1221:106781">
                      Type
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:190212">
                  <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190212;1224:173">
                    <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:190212;1224:173;4825:409559">
                      <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:190212;1224:173;4825:409559;1046:12312">
                        <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                      </div>
                    </div>
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190212;1224:173;4825:409560">
                      Pass
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:190213">
                  <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190213;1224:173">
                    <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:190213;1224:173;4825:409559">
                      <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:190213;1224:173;4825:409559;1046:12312">
                        <img alt="" className="absolute block max-w-none size-full" src={imgDot1} />
                      </div>
                    </div>
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190213;1224:173;4825:409560">
                      Pass
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:190214">
                  <div className="bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] border-solid content-stretch flex gap-[var(--spacing-xs,4px)] items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190214;1224:173">
                    <div className="relative shrink-0 size-[8px]" data-name="_Dot" data-node-id="I1467:190214;1224:173;4825:409556">
                      <div className="absolute left-px size-[6px] top-px" data-name="Dot" data-node-id="I1467:190214;1224:173;4825:409556;1046:12312">
                        <img alt="" className="absolute block max-w-none size-full" src={imgDot2} />
                      </div>
                    </div>
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190214;1224:173;4825:409557">
                      Warn
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[94px]" data-name="Column" data-node-id="1467:190215">
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[4]" data-name="Table header cell" data-node-id="1467:190216">
                  <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190216;1224:4556">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190216;1224:4556;1221:106781">
                      Score
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:190217">
                  <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190217;1224:173">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190217;1224:173;4825:409533">
                      0.03
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:190218">
                  <div className="bg-[var(--component-colors\/utility\/success\/utility-success-50,#ecfdf3)] border border-[var(--component-colors\/utility\/success\/utility-success-200,#abefc6)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190218;1224:173">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/success\/utility-success-700,#067647)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190218;1224:173;4825:409533">
                      0.15
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:190219">
                  <div className="bg-[var(--component-colors\/utility\/warning\/utility-warning-50,#fffaeb)] border border-[var(--component-colors\/utility\/warning\/utility-warning-200,#fedf89)] border-solid content-stretch flex items-center px-[var(--spacing-sm,6px)] py-[var(--spacing-xxs,2px)] relative rounded-[var(--radius-sm,6px)] shrink-0" data-name="Badge" data-node-id="I1467:190219;1224:173">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--component-colors\/utility\/warning\/utility-warning-700,#b54708)] text-[length:var(--font-size\/text-xs,12px)] text-center whitespace-nowrap" data-node-id="I1467:190219;1224:173;4825:409531">
                      0.062
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[103px]" data-name="Column" data-node-id="1467:190220">
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[4]" data-name="Table header cell" data-node-id="1467:190221">
                  <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190221;1224:4556">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190221;1224:4556;1221:106781">
                      Time
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:190222">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190222;13415:40209">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190222;1223:41">
                      2:25 PM
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:190223">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190223;13415:40209">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190223;1223:41">
                      2:25 PM
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:190224">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190224;13415:40209">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-[var(--font-weight\/regular,normal)] font-normal leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190224;1223:41">
                      2:25 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[179px]" data-name="Column" data-node-id="1467:190225">
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex gap-[var(--spacing-lg,0px)] h-[44px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)] relative shrink-0 w-full z-[4]" data-name="Table header cell" data-node-id="1467:190226">
                  <div className="content-stretch flex gap-[var(--spacing-xs,0px)] items-center relative shrink-0" data-name="Table header" data-node-id="I1467:190226;1224:4556">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] relative shrink-0 text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)] text-[length:var(--font-size\/text-xs,12px)] whitespace-nowrap" data-node-id="I1467:190226;1224:4556;1221:106781">
                      Detail
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[3]" data-name="Table cell" data-node-id="1467:190227">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190227;13415:43499">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190227;1222:107485">
                      Clean customer query
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[2]" data-name="Table cell" data-node-id="1467:190228">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190228;13415:43499">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190228;1222:107485">
                      Policy text only
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--colors\/background\/bg-secondary_subtle,#fdfdfd)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[72px] items-center px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] relative shrink-0 w-full z-[1]" data-name="Table cell" data-node-id="1467:190229">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1467:190229;13415:43499">
                    <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-[var(--font-weight\/medium,normal)] font-medium leading-[var(--line-height\/text-sm,20px)] relative shrink-0 text-[color:var(--Colors/Text/text-primary(900),#181d27)] text-[length:var(--font-size\/text-sm,14px)] whitespace-nowrap" data-node-id="I1467:190229;1222:107485">
                      Professional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}