const imgIcon = 'https://www.figma.com/api/mcp/asset/17e43ef6-0327-44a7-a468-d8e063fbb487'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/8c545acb-b245-4032-9eba-5dbe74ba0e25'
const imgIcon1 = 'https://www.figma.com/api/mcp/asset/04c9edcd-8415-4d32-b5b7-cf974012846c'
const imgGroup = 'https://www.figma.com/api/mcp/asset/3629b8d9-a356-44a5-8a7c-ce9f1d46f160'
const imgGroup1 = 'https://www.figma.com/api/mcp/asset/81479b8d-4a08-4105-9ab3-195935a05f8f'
const imgGroup2 = 'https://www.figma.com/api/mcp/asset/7ae9318f-d888-45c8-ab3c-6441901953d9'
const imgIcon2 = 'https://www.figma.com/api/mcp/asset/84c1b0ce-cd46-4527-ae10-a0949fddec8d'
const imgIcon3 = 'https://www.figma.com/api/mcp/asset/5daa459e-929f-485c-b157-2124bea3a76a'
const imgIcon4 = 'https://www.figma.com/api/mcp/asset/34f2ca73-7766-4a88-b53c-1187e6a0e8e6'
const imgIcon5 = 'https://www.figma.com/api/mcp/asset/d619d532-0cac-4921-96a7-25fa61a4afd0'
const imgIcon6 = 'https://www.figma.com/api/mcp/asset/86d61772-7e97-4d38-9b42-98ce3bc0ad7b'

function NavItemButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className || 'content-stretch cursor-pointer flex items-start relative'}
    >
      <div className="content-stretch flex items-center justify-center overflow-clip p-[var(--spacing-md,8px)] relative rounded-[var(--radius-sm,6px)] shrink-0 w-[40px]">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[8.52%_8.52%_8.33%_8.33%]">
            <div className="absolute inset-[-5.01%]">
              <img alt="" className="block max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

export function HeaderNavigation() {
  return (
    <div
      className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-b border-solid content-stretch flex h-[44px] flex-col items-center justify-between relative shrink-0 w-full"
      data-name="Header navigation"
      data-node-id="1467:188776"
    >
      <div className="content-stretch flex h-full items-center px-[var(--container-padding-mobile,16px)] relative shrink-0 w-full">
        <div className="content-stretch flex flex-1 items-center justify-between gap-2 min-w-0 relative">
          <div className="content-stretch flex gap-3 items-center relative shrink-0 w-[287px] min-w-0">
            <div className="content-stretch flex items-start relative shrink-0">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid content-stretch flex items-center justify-center overflow-clip p-[var(--spacing-sm,6px)] relative rounded-[var(--radius-sm,6px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0">
                <div className="overflow-clip relative shrink-0 size-4">
                  <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
                    <div className="absolute inset-[-9.38%_-6.25%]">
                      <img alt="" className="block max-w-none size-full" src={imgIcon1} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(10,13,18,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(10,13,18,0.05))]" />
              </div>
            </div>
            <div className="content-stretch flex gap-[2.235px] items-center relative shrink-0">
              <div className="content-stretch flex flex-col items-center justify-center py-[8.939px] relative shrink-0 size-[37.244px]">
                <div
                  className="content-stretch flex items-center justify-center px-[8.194px] py-[4.469px] relative rounded-[15.27px] shrink-0 size-[31.285px]"
                  style={{
                    backgroundImage:
                      'linear-gradient(133.06deg, rgb(255, 116, 4) 12.826%, rgb(255, 59, 162) 84.859%)',
                  }}
                >
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="col-1 h-[18.469px] ml-0 mt-0 relative row-1 w-[9.213px]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup} />
                    </div>
                    <div className="col-1 h-[11.84px] ml-[5.08px] mt-[7.93px] relative row-1 w-[7.983px]">
                      <img alt="" className="absolute block max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[13.01px] relative shrink-0 w-[61.847px]">
                <img alt="Enkrypt AI" className="absolute block max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center min-w-0 overflow-x-auto">
            <div className="bg-[var(--colors\/background\/bg-secondary_alt,#fafafa)] border border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-solid content-stretch flex gap-1 items-center px-1 py-0 relative rounded-[9999px] shrink-0">
              {(['Home', 'Guardrails', 'Red-Teaming', 'MCP'] as const).map((label) => (
                <div
                  key={label}
                  className="content-stretch flex gap-2 h-9 items-center justify-center overflow-clip px-3 py-2 relative rounded-[var(--radius-sm,6px)] shrink-0"
                >
                  <p className="font-[family-name:var(--font-family\/font-family-body,'Inter:Semibold',sans-serif)] font-semibold leading-5 relative shrink-0 text-[color:var(--colors/text/text-quaternary-(500),#717680)] text-sm whitespace-nowrap">
                    {label}
                  </p>
                </div>
              ))}
              <div className="bg-[var(--colors\/background\/bg-primary_alt,white)] border-[1.5px] border-[var(--colors\/brand-old\/900-orange,#ff7404)] border-solid content-stretch flex gap-2 h-9 items-center justify-center overflow-clip px-3 py-2 relative rounded-[var(--radius-full,9999px)] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)] shrink-0">
                <p
                  className="bg-clip-text font-semibold leading-5 relative shrink-0 text-sm text-transparent whitespace-nowrap"
                  style={{
                    backgroundImage:
                      'linear-gradient(163deg, rgb(255, 116, 4) 12.826%, rgb(255, 59, 162) 84.859%)',
                  }}
                >
                  Traces
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-end gap-3 relative shrink-0 w-[277px] min-w-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="bg-[var(--colors\/background\/bg-primary,white)] border border-[var(--colors-border-border-primary,#d5d7da)] border-solid content-stretch flex gap-1 items-center justify-center overflow-clip px-3.5 py-1.5 relative rounded-[var(--radius-md,8px)] shadow-[0px_1px_2px_0px_var(--colors\/effects\/shadows\/shadow-xs,rgba(10,13,18,0.05))] shrink-0">
                <div className="overflow-clip relative shrink-0 size-5">
                  <div className="absolute inset-[12.5%]">
                    <div className="absolute inset-[-5.56%]">
                      <img alt="" className="block max-w-none size-full" src={imgIcon2} />
                    </div>
                  </div>
                </div>
                <p className="font-semibold leading-5 relative shrink-0 text-[#414651] text-sm whitespace-nowrap">
                  Enkrypt
                </p>
                <div className="overflow-clip relative shrink-0 size-5">
                  <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                    <div className="absolute inset-[-16.67%_-8.33%]">
                      <img alt="" className="block max-w-none size-full" src={imgIcon3} />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner-border,rgba(10,13,18,0.18)),inset_0px_-2px_0px_0px_var(--colors\/effects\/shadows\/shadow-skeumorphic-inner,rgba(10,13,18,0.05))]" />
              </div>
            </div>
            <div className="content-stretch flex gap-3 items-center relative shrink-0">
              <div className="content-stretch flex gap-0.5 items-start relative shrink-0">
                <div className="content-stretch flex items-center justify-center overflow-clip p-2 relative rounded-[var(--radius-sm,6px)] shrink-0 w-10">
                  <div className="overflow-clip relative shrink-0 size-5">
                    <div className="absolute inset-[8.33%]">
                      <div className="absolute inset-[-4%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip p-2 relative rounded-[var(--radius-sm,6px)] shrink-0 w-10">
                  <div className="overflow-clip relative shrink-0 size-5">
                    <div className="absolute inset-[8.33%]">
                      <div className="absolute inset-[-5%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon5} />
                      </div>
                    </div>
                  </div>
                </div>
                <NavItemButton className="content-stretch cursor-pointer flex items-start relative shrink-0" />
                <div className="content-stretch flex items-center justify-center overflow-clip p-2 relative rounded-[var(--radius-sm,6px)] shrink-0 w-10">
                  <div className="overflow-clip relative shrink-0 size-5">
                    <div className="absolute inset-[8.33%_13.59%]">
                      <div className="absolute inset-[-5%_-5.72%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[0.8px] border-[rgba(0,0,0,0.08)] border-solid relative rounded-full shrink-0 size-8">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-full size-full"
                  src={imgAvatar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
