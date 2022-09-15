import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Header() {
  return (
    <div className="flex flex-row justify-between align-center pt-2 pr-2 pl-2">
      <h1 className="text-2xl font-semibold">LexDAO</h1>
      <span className="z-10">
        <ConnectButton />
      </span>
    </div>
  )
}
