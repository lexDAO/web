import { useState } from 'react'
import { useRouter } from 'next/router'
import Item from './Item'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { IconChevronDown, IconMenu } from '@kalidao/reality'
import { twMerge } from 'tailwind-merge'
import { GOVERNANCE_URL, NEWSLETTER_URL } from '~/constants'

export default function Nav() {
  const router = useRouter()

  const isActive = (link: string) => {
    if (link === router.pathname) {
      return true
    }
    return false
  }

  const navItem = twMerge('hover:bg-brand-50 active:bg-brand-100 normal-case text-xl')

  const [navbar, setNavbar] = useState(false)

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/join">Join</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                About
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="https://lexdao.substack.com/" target="_blank" rel="noreferrer">
                    Substack
                  </a>
                </li>
                <li>
                  <a href={NEWSLETTER_URL} target="_blank" rel="noreferrer">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href={GOVERNANCE_URL} target="_blank" rel="noreferrer">
                    Governance
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/guilds">Guilds</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          LexDAO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2 px-1">
          <li>
            <Link href="/join" className={navItem}>
              Join
            </Link>
          </li>
          <li>
            <Link href="/events" className={navItem}>
              Events
            </Link>
          </li>
          <li tabIndex={0}>
            <a className={navItem}>
              About
              <IconChevronDown />
            </a>
            <ul className="p-2">
              <li>
                {/* link to substack */}
                <a href="https://lexdao.substack.com/" target="_blank" rel="noreferrer">
                  Substack
                </a>
              </li>
              <li>
                {/* link to newsletter */}
                <a href="https://lexdao.substack.com/" target="_blank" rel="noreferrer">
                  Newsletter
                </a>
              </li>
              <li>
                <a href={GOVERNANCE_URL} target="_blank" rel="noreferrer">
                  Governance
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/guilds" className={navItem}>
              Guilds
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton label="Login" />
      </div>
    </div>
  )
}
