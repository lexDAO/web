import { ConnectKitButton } from 'connectkit'

export default function Header() {
  return (
    <div className="flex flex-row justify-end align-center pt-2 pr-2 pl-2">
      <span className="z-10">
        <ConnectKitButton />
      </span>
    </div>
  )
}
