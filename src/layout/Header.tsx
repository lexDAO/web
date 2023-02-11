import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="items-center w-screen flex flex-row justify-center px-2 pt-2">
      <Nav />
    </header>
  )
}
