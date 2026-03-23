const imgControls =
  'https://www.figma.com/api/mcp/asset/d23f0ec2-6cfe-4eb9-95ac-3319c2dffce4'

export function BrowserToolbar() {
  return (
    <div
      className="backdrop-blur-[20px] bg-[rgba(255,255,255,0.5)] content-stretch flex w-full flex-col items-start rounded-tl-[12px] rounded-tr-[12px] px-4 py-[10px]"
      data-name="Browser toolbar"
    >
      <div className="relative h-3 w-[52px] shrink-0" data-name="Controls">
        <img alt="" className="block size-full max-w-none" src={imgControls} />
      </div>
    </div>
  )
}
