import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="items-center flex flex-row justify-between px-2 pt-2">
      {/* add lexdao.jpeg as logo image */}
      <Link href={'/'} className="border-b-2">
        LexDAO
      </Link>
      <Nav />
      <span className="z-10">
        <ConnectButton label="Login" />
      </span>
    </header>
  )
}
