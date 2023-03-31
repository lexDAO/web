import { siteConfig } from '@/config/siteConfig'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="min-h-10 flex w-screen mt-auto items-center bg-primary-900 px-4 text-white justify-between overflow-hidden">
      <div className="flex items-center">
        <div>
          <p className="text-sm font-serif tracking-wide uppercase">
            {' '}
            We are not a law firm, or a substitute for an attorney or a law firm. Use of our products is governed by our{' '}
            <Link href="/terms" className="hover:text-secondary-300 hover:underline">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="hover:text-secondary-300 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        {siteConfig.footerNav.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.isExternal ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center rounded-full p-2 hover:bg-secondary-300/50"
          >
            <item.icon className="h-5 w-5  fill-white" />
            <span className="sr-only">{item.label}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
