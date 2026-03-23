const imgIcon = 'https://www.figma.com/api/mcp/asset/87e706a7-2d33-4529-8996-36f58aedb507'
const imgIcon1 = 'https://www.figma.com/api/mcp/asset/2a9b7682-5c90-4e0a-9b00-5642418c6bef'
const imgIcon2 = 'https://www.figma.com/api/mcp/asset/7f6085d7-a196-4fd5-bc9d-957f4e32ba6b'
const imgIcon3 = 'https://www.figma.com/api/mcp/asset/ee002039-91fd-498b-8a8b-fef0b7ef77b6'
const imgIcon4 = 'https://www.figma.com/api/mcp/asset/d10a14d2-3a81-4615-ba68-1fd4facc1ab2'
const imgIcon5 = 'https://www.figma.com/api/mcp/asset/95c732c3-84da-4430-bfef-2c2aa6425382'
const imgIcon6 = 'https://www.figma.com/api/mcp/asset/4c203e9f-f898-4f9c-ad79-8ac1b1f1b1d2'

export function SidebarNavigation() {
  return (
    <div
      className="bg-[var(--colors\/background\/bg-primary,white)] border-[var(--colors\/border\/border-secondary,#e9eaeb)] border-r border-solid content-stretch flex items-start relative h-full w-[214px] shrink-0 overflow-y-auto"
      data-name="Sidebar navigation"
      data-node-id="1461:200079"
    >
      <div className="content-stretch flex flex-1 flex-col h-full items-start justify-between min-h-px min-w-px relative">
        <div className="border-[var(--colors-border-border-primary,#d5d7da)] border-b border-solid content-stretch flex flex-col gap-0 isolate items-start pt-0 relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-2 relative shrink-0 w-full z-[1]">
            <div className="border-[var(--colors-border-border-primary,#d5d7da)] border-b border-solid content-stretch flex items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center opacity-80 p-2 relative shrink-0 size-[50px]">
                <div className="content-stretch flex items-center justify-center p-2 relative rounded-[9.01px] shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-5">
                    <div className="absolute inset-[8.33%_8.33%_9.65%_8.33%]">
                      <div className="absolute inset-[-6.1%_-6%]">
                        <img alt="" className="block max-w-none size-full" src={imgIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="bg-clip-text font-semibold leading-6 relative shrink-0 text-base text-transparent whitespace-nowrap"
                style={{
                  backgroundImage:
                    'linear-gradient(154.14deg, rgb(255, 116, 4) 12.826%, rgb(255, 59, 162) 84.859%)',
                }}
              >
                Traces
              </p>
            </div>
            <button
              type="button"
              className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full text-left"
            >
              <div className="content-stretch flex flex-1 items-center min-h-px min-w-px overflow-clip py-0.5 relative">
                <div
                  className="content-stretch flex flex-1 gap-3 items-center min-h-px min-w-px px-3 py-2 relative rounded-[var(--radius-sm,6px)]"
                  style={{
                    backgroundImage:
                      'linear-gradient(171.5deg, rgba(255, 117, 0, 0.2) 12.826%, rgba(255, 59, 162, 0.2) 84.859%)',
                  }}
                >
                  <div className="content-stretch flex flex-1 gap-2 items-center min-h-px min-w-px relative">
                    <div className="overflow-clip relative shrink-0 size-5">
                      <div className="absolute inset-[12.5%]">
                        <div className="absolute inset-[-5.57%]">
                          <img alt="" className="block max-w-none size-full" src={imgIcon1} />
                        </div>
                      </div>
                    </div>
                    <p className="font-semibold leading-5 relative shrink-0 text-[#252b37] text-sm whitespace-nowrap">
                      Dashboard
                    </p>
                  </div>
                </div>
              </div>
            </button>
            <NavRow icon={imgIcon2} label="Traces" />
            <NavRow icon={imgIcon2} label="Guardrails" />
          </div>
        </div>
        <div className="border-[var(--colors-border-border-primary,#d5d7da)] border-solid border-t content-stretch flex flex-col items-center pb-8 relative shrink-0 w-full">
          <NavExpand
            icon={imgIcon3}
            chevron={imgIcon4}
            title="Target Application"
            sub={['Targets', 'Add a Target']}
          />
          <NavExpand
            icon={imgIcon5}
            chevron={imgIcon4}
            title="Policy"
            sub={['Policies', 'Add a Policy', 'Create a Policy']}
          />
          <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex gap-3 items-center px-3 py-2 relative rounded-[var(--radius-sm,6px)] shrink-0 w-[198px]">
            <div className="overflow-clip relative shrink-0 size-5">
              <div className="absolute inset-[8.33%_16.67%]">
                <div className="absolute inset-[-4.18%_-5.22%]">
                  <img alt="" className="block max-w-none size-full" src={imgIcon6} />
                </div>
              </div>
            </div>
            <p className="font-medium leading-5 relative shrink-0 text-[#414651] text-sm whitespace-nowrap">
              Documentation
            </p>
          </div>
          <div className="content-stretch flex flex-col items-start pt-2 px-2 relative shrink-0 w-full">
            <div
              className="border border-[var(--colors-border-border-primary,#d5d7da)] border-solid content-stretch flex flex-col gap-1 items-start p-2 relative rounded-[var(--radius-xl,12px)] shrink-0 w-full"
              style={{
                backgroundImage:
                  'linear-gradient(157.67deg, rgba(255, 117, 0, 0.1) 12.826%, rgba(255, 59, 162, 0.1) 84.859%)',
              }}
            >
              <p className="flex-1 font-semibold leading-5 min-w-px relative text-[#181d27] text-sm pr-6">
                Credits Available
              </p>
              <div className="content-stretch flex flex-col gap-2 items-center relative shrink-0 w-full">
                <div className="h-2 relative rounded-lg shrink-0 w-full">
                  <div className="absolute bg-[#e9eaeb] h-2 left-0 right-0 rounded-full top-0" />
                  <div
                    className="absolute h-2 left-0 right-[20%] rounded-full top-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(178deg, rgb(255, 116, 4) 12.826%, rgb(255, 59, 162) 84.859%)',
                    }}
                  />
                </div>
                <p className="font-medium leading-5 text-[#414651] text-sm w-full">1000/1200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-1 items-center min-h-px min-w-px overflow-clip py-0.5 relative">
        <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-1 gap-3 items-center min-h-px min-w-px px-3 py-2 relative rounded-[var(--radius-sm,6px)]">
          <div className="content-stretch flex flex-1 gap-2 items-center min-h-px min-w-px relative">
            <div className="overflow-clip relative shrink-0 size-5">
              <div className="absolute inset-[12.5%]">
                <div className="absolute inset-[-5.57%]">
                  <img alt="" className="block max-w-none size-full" src={icon} />
                </div>
              </div>
            </div>
            <p className="font-medium leading-5 relative shrink-0 text-[#414651] text-sm whitespace-nowrap">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavExpand({
  icon,
  chevron,
  title,
  sub,
}: {
  icon: string
  chevron: string
  title: string
  sub: string[]
}) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[198px]">
      <div className="content-stretch flex items-center overflow-clip py-0.5 relative shrink-0 w-full">
        <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-1 gap-3 items-center min-h-px min-w-px px-3 py-2 relative rounded-[var(--radius-sm,6px)]">
          <div className="content-stretch flex flex-1 gap-2 items-center min-h-px min-w-px relative">
            <div className="overflow-clip relative shrink-0 size-5">
              <div className="absolute inset-[8.33%_12.5%]">
                <div className="absolute inset-[-6%_-6.67%]">
                  <img alt="" className="block max-w-none size-full" src={icon} />
                </div>
              </div>
            </div>
            <p className="font-medium leading-5 relative shrink-0 text-[#414651] text-sm whitespace-nowrap">
              {title}
            </p>
          </div>
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
              <div className="absolute inset-[-20.87%_-10.44%]">
                <img alt="" className="block max-w-none size-full" src={chevron} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start pb-1 relative shrink-0 w-full">
        {sub.map((s) => (
          <div key={s} className="content-stretch flex items-center overflow-clip py-0.5 relative shrink-0 w-full">
            <div className="bg-[var(--colors\/background\/bg-primary,white)] content-stretch flex flex-1 gap-3 items-center min-h-px min-w-px pl-10 pr-3 py-2 relative rounded-[var(--radius-sm,6px)]">
              <p className="font-medium leading-5 relative shrink-0 text-[#414651] text-sm whitespace-nowrap">
                {s}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
