const imgAvatar = 'https://www.figma.com/api/mcp/asset/3a0fda09-69d1-4318-b8b8-43fca17d440f'
const imgAvatar1 = 'https://www.figma.com/api/mcp/asset/e7eb966a-5021-4c35-b444-e22273a4db55'
const imgAvatar2 = 'https://www.figma.com/api/mcp/asset/76fa6cc9-7e55-4676-97ad-887f2b3aca05'
const imgIcon = 'https://www.figma.com/api/mcp/asset/b0853953-fd28-4a90-b263-e4f7b85b0b00'
const imgIcon1 = 'https://www.figma.com/api/mcp/asset/666c3342-a261-4460-8a21-ac6a92775e1d'

const USER_ROWS = [
  {
    name: 'Olivia Chen',
    handle: 'olivia.chen@acmecorp.io',
    avatar: imgAvatar,
    tint: '#cfcbdc',
    blocked: 134,
  },
  {
    name: 'Marcus Webb',
    handle: 'm.webb@acmecorp.io',
    avatar: imgAvatar1,
    tint: '#d6cfb7',
    blocked: 98,
  },
  {
    name: 'Priya Nair',
    handle: 'pnair@contractor.dev',
    avatar: imgAvatar2,
    tint: '#d7e3e8',
    blocked: 61,
  },
] as const

const ROW_Z = ['z-[3]', 'z-[2]', 'z-[1]'] as const

export function DashboardUsersViolationsTable() {
  return (
    <div
      className="relative isolate flex w-full min-w-0 flex-col items-start overflow-x-auto overflow-y-clip rounded-[var(--radius-xl,12px)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-primary,white)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))]"
      data-name="Table"
      data-node-id="1537:188646"
    >
      <div
        className="sticky top-0 z-[2] flex h-[34px] w-full shrink-0 items-center justify-center overflow-clip rounded-tl-[20px] rounded-tr-[20px] bg-[var(--colors\/background\/bg-secondary_alt,#fafafa)] px-px"
        data-name="Header"
      >
        <div className="flex flex-[1_0_0] flex-row items-stretch self-stretch">
          <div
            className="relative flex min-h-px min-w-px flex-[1_0_0] items-center gap-[12px] overflow-clip border-b border-[var(--colors-border-border-primary,#d5d7da)] border-solid px-[9px] py-[8px]"
            data-name="Table header cell"
          >
            <div className="relative flex shrink-0 items-center" data-name="Title">
              <div className="relative flex shrink-0 items-center gap-[12px]" data-name="Header Title">
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
                    Users · IDE & agent coding sessions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[1] flex w-full shrink-0 items-start" data-name="Content">
        <div className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start isolate" data-name="Column">
          <div
            className="relative z-[4] flex h-[44px] w-full shrink-0 items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-secondary,#fafafa)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]"
            data-name="Table header cell"
          >
            <div className="relative flex shrink-0 items-center gap-[var(--spacing-xs,0px)]">
              <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                Name
              </p>
            </div>
          </div>
          {USER_ROWS.map((row, i) => (
            <div
              key={row.handle}
              className={`relative ${ROW_Z[i]} flex h-[50px] w-full shrink-0 cursor-pointer items-center gap-[var(--spacing-lg,12px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]`}
              data-name="Table cell"
            >
              <div className="relative size-[40px] shrink-0 rounded-[var(--radius-full,9999px)] border border-[rgba(0,0,0,0.08)] border-solid">
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--radius-full,9999px)]">
                  <div className="absolute inset-0 rounded-[var(--radius-full,9999px)]" style={{ backgroundColor: row.tint }} />
                  <img
                    alt=""
                    className="absolute size-full max-w-none rounded-[var(--radius-full,9999px)] object-cover"
                    src={row.avatar}
                  />
                </div>
              </div>
              <div className="relative flex min-w-0 shrink-0 flex-col items-start text-[length:var(--font-size\/text-sm,14px)] leading-[var(--line-height\/text-sm,20px)]">
                <p className="relative max-w-full shrink-0 truncate font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] font-medium text-[color:var(--Colors/Text/text-primary(900),#181d27)]">
                  {row.name}
                </p>
                <p className="relative max-w-full shrink-0 truncate font-[family-name:var(--font-family\/font-family-body,'Inter:Regular',sans-serif)] font-normal text-[color:var(--colors\/text\/text-tertiary-\(600\),#535862)]">
                  {row.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex w-[176px] shrink-0 flex-col items-start isolate" data-name="Column">
          <div
            className="relative z-[4] flex h-[44px] w-full shrink-0 items-center gap-[var(--spacing-lg,0px)] border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid bg-[var(--colors\/background\/bg-secondary,#fafafa)] px-[var(--spacing-3xl,24px)] py-[var(--spacing-lg,12px)]"
            data-name="Table header cell"
          >
            <div className="relative flex shrink-0 items-center gap-[var(--spacing-xs,4px)]">
              <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-[var(--font-weight\/semibold,normal)] leading-[var(--line-height\/text-xs,18px)] text-[color:var(--colors\/text\/text-quaternary-\(500\),#717680)]">
                Blocks (30d)
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
          {USER_ROWS.map((row, i) => (
            <div
              key={`${row.handle}-freq`}
              className={`relative ${ROW_Z[i]} flex h-[50px] w-full shrink-0 items-center border-b border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid px-[var(--spacing-3xl,24px)] py-[var(--spacing-xl,16px)] transition-colors duration-150 hover:bg-[#fafafa]`}
              data-name="Table cell"
            >
              <div className="relative flex shrink-0 items-center rounded-[var(--radius-full,9999px)] border border-[var(--component-colors\/utility\/error\/utility-error-200,#fecdca)] border-solid bg-[var(--component-colors\/utility\/error\/utility-error-50,#fef3f2)] px-[var(--spacing-md,8px)] py-[var(--spacing-xxs,2px)]">
                <p className="relative shrink-0 whitespace-nowrap text-center font-[family-name:var(--font-family\/font-family-body,'Inter:Medium',sans-serif)] text-[length:var(--font-size\/text-xs,12px)] font-medium leading-[var(--line-height\/text-xs,18px)] text-[color:var(--component-colors\/utility\/error\/utility-error-700,#b42318)]">
                  {row.blocked.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
