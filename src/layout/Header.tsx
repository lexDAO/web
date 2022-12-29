import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <div className="flex flex-row justify-between align-center pt-2 pr-2 pl-2">
      {/* add lexdao.jpeg as logo image */}
      <Link href={'/'}>
        <Image src="/lexdao.jpeg" alt="LexDAO" width="40" height="40" className="h-1 w-1 hover:scale-150" />
      </Link>
      <span className="z-10">
        <ConnectButton label="Login" />
      </span>
    </div>
  )
}
