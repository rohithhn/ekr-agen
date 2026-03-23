import { useState } from 'react'

const imgPlus = 'https://www.figma.com/api/mcp/asset/aa31c6a9-43a8-486a-a26d-fd8f0812ea49'

const GRADIENT = 'linear-gradient(158.13deg, rgb(255, 116, 4) 12.826%, rgb(255, 59, 162) 84.859%)'
const tabs = ['Today', '7 Days', '30 Days', 'Custom'] as const

export function DashboardPageHeader() {
  const [active, setActive] = useState<(typeof tabs)[number]>('30 Days')

  return (
    <div className="flex w-full shrink-0 items-center border border-[#d5d7da] bg-[#fdfdfd]">
      <div className="flex min-h-[52px] flex-1 items-center gap-3 border-b border-[#d5d7da] px-3 py-2">
        <div className="flex flex-1 flex-wrap items-center justify-between gap-3">
          <p className="whitespace-nowrap font-['Inter:Semibold',sans-serif] text-lg leading-7 text-[#181d27]">
            Dashboard
          </p>
          <div className="relative isolate flex shrink-0 items-start overflow-clip rounded-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
            {tabs.map((label) => {
              const isActive = active === label
              const isCustom = label === 'Custom'
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive(label)}
                  className={`relative flex h-[30px] shrink-0 items-center justify-center gap-1.5 border-r border-[#d5d7da] px-4 py-2 transition-all duration-200 active:scale-[0.97] ${
                    isCustom ? 'border-r-0 pl-3.5 pr-4' : ''
                  } ${isActive ? 'bg-[#fafafa]' : 'bg-white hover:bg-[#fafafa]/50'}`}
                >
                  {isCustom && (
                    <div className="relative size-5 shrink-0 overflow-clip">
                      <div className="absolute inset-[20.83%]">
                        <div className="absolute inset-[-7.14%]">
                          <img alt="" className="block size-full max-w-none" src={imgPlus} />
                        </div>
                      </div>
                    </div>
                  )}
                  <span
                    className={`whitespace-nowrap text-xs font-medium leading-[18px] transition-colors duration-200 ${
                      isActive ? 'bg-clip-text text-transparent' : 'text-[#414651]'
                    }`}
                    style={isActive ? { backgroundImage: GRADIENT } : undefined}
                  >
                    {label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1 right-1 h-[2px] rounded-full"
                      style={{ background: GRADIENT }}
                    />
                  )}
                </button>
              )
            })}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  )
}
