const imgIcon = 'https://www.figma.com/api/mcp/asset/1ba0fed5-d15d-4cd7-b329-461d8a1dae3f'
const imgIcon1 = 'https://www.figma.com/api/mcp/asset/721a5dbe-cdc6-4fc5-8107-3c72dbe79ead'

export function DashboardAgentsViolationsTable() {
  return (
    <div
      className="relative isolate flex w-full min-w-0 flex-col items-start overflow-x-auto overflow-y-clip rounded-[var(--radius-xl,12px)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))]"
      data-name="Table"
      data-node-id="1537:188665"
    >
      <div
        className="sticky top-0 z-[2] flex h-[34px] w-full shrink-0 items-center justify-center overflow-clip rounded-tl-[20px] rounded-tr-[20px] bg-[var(--colors\/background\/bg-secondary_alt,#fafafa)] px-px"
        data-name="Header"
      >
        <div className="flex flex-[1_0_0] flex-row items-stretch self-stretch">
          <div className="relative flex min-h-px min-w-px flex-[1_0_0] items-center gap-[12px] overflow-clip border-b border-[var(--colors-border-border-primary,#d5d7da)] border-solid px-[9px] py-[8px]">
            <div className="relative flex shrink-0 items-center">
              <div className="relative flex shrink-0 items-center gap-[12px]">
                <div
                  className="relative size-[16px] shrink-0 overflow-clip rounded-[50px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(133.05851123517837deg, rgba(255, 117, 0, 0.2) 12.826%, rgba(255, 59, 162, 0.2) 84.859%)',
                  }}
                >
                  <div className="absolute inset-[12.5%_8.64%_12.5%_8.56%]">
                    <div className="absolute inset-[-4.17%_-3.77%]">
                      <img alt="" className="block size-full max-w-none" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="relative flex shrink-0 items-center gap-[4px]">
                  <p className="relative shrink-0 whitespace-nowrap font-['Inter:Semibold',sans-serif] text-[12px] leading-[18px] not-italic text-[color:var(--Colors/Text/text-primary(900),#181d27)]">
                    Agents with Most Violations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex w-full shrink-0 items-start" data-name="Content">
        <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start isolate" data-name="Column">
          <div className="relative z-[4] flex h-[44px] w-full shrink-0 items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-secondary,#fafafa)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
            <div className="relative flex shrink-0 items-center gap-[var(--spacing-xs,0px)]">
              <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                Name
              </p>
            </div>
          </div>
          <div className="relative z-[3] flex h-[50px] w-full shrink-0 cursor-pointer items-center gap-[var(--spacing-lg,12px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]">
            <div className="relative size-[40px] shrink-0 overflow-clip rounded-[var(--radius-full,9999px)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)]">
              <p className="absolute left-1/2 top-[calc(50%-12px)] w-[40px] -translate-x-1/2 text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-md,16px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-md,24px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                CC
              </p>
            </div>
            <div className="relative flex shrink-0 flex-col items-start text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)] whitespace-nowrap">
              <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium text-[color:var(--Colors/Text/text-primary(900),#181d27)]">
                Customer Care
              </p>
              <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-normal text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]">
                Lanchain
              </p>
            </div>
          </div>
          <div className="relative z-[2] flex h-[50px] w-full shrink-0 cursor-pointer items-center gap-[var(--spacing-lg,12px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]">
            <div className="relative size-[40px] shrink-0 overflow-clip rounded-[var(--radius-full,9999px)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)]">
              <p className="absolute left-1/2 top-[calc(50%-12px)] w-[40px] -translate-x-1/2 text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-md,16px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-md,24px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                MK
              </p>
            </div>
            <div className="relative flex shrink-0 flex-col items-start text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)] whitespace-nowrap">
              <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium text-[color:var(--Colors/Text/text-primary(900),#181d27)]">{`Marketing `}</p>
              <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-normal text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]">
                CrewAI
              </p>
            </div>
          </div>
          <div className="relative z-[1] flex h-[50px] w-full shrink-0 cursor-pointer items-center gap-[var(--spacing-lg,12px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]">
            <div className="relative size-[40px] shrink-0 overflow-clip rounded-[var(--radius-full,9999px)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-tertiary,#f5f5f5)]">
              <p className="absolute left-1/2 top-[calc(50%-12px)] w-[40px] -translate-x-1/2 text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-md,16px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-md,24px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                CD
              </p>
            </div>
            <div className="relative flex shrink-0 flex-col items-start text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)] whitespace-nowrap">
              <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium text-[color:var(--Colors/Text/text-primary(900),#181d27)]">
                Coding
              </p>
              <p className="relative shrink-0 font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-normal text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]">
                Openclaw
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex w-[176px] shrink-0 flex-col items-start isolate" data-name="Column">
          <div className="relative z-[4] flex h-[44px] w-full shrink-0 items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-secondary,#fafafa)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]">
            <div className="relative flex shrink-0 items-center gap-[var(--spacing-xs,4px)]">
              <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                Blocked Frequency
              </p>
              <div className="relative size-[12px] shrink-0 overflow-clip">
                <div className="absolute inset-[16.67%_29.17%]">
                  <div className="absolute inset-[-9.38%_-15%]">
                    <img alt="" className="block size-full max-w-none" src={imgIcon1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[3] flex h-[50px] w-full shrink-0 items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]">
            <div className="relative flex shrink-0 items-center rounded-[var(--radius-full,9999px)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)]">
              <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-medium leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]">
                100
              </p>
            </div>
          </div>
          <div className="relative z-[2] flex h-[50px] w-full shrink-0 items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]">
            <div className="relative flex shrink-0 items-center rounded-[var(--radius-full,9999px)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)]">
              <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-medium leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]">
                200
              </p>
            </div>
          </div>
          <div className="relative z-[1] flex h-[50px] w-full shrink-0 items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]">
            <div className="relative flex shrink-0 items-center rounded-[var(--radius-full,9999px)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)]">
              <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-medium leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]">
                50
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
