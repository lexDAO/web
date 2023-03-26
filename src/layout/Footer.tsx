import Link from 'next/link'
import { Icons } from '@/components/ui/icons'

export default function Footer() {
  const socials = [
    {
      icon: Icons.twitter,
      sr: 'Twitter',
      link: 'https://twitter.com/lex_DAO',
    },
    {
      icon: Icons.gitHub,
      sr: 'GitHub',
      link: 'https://github.com/lexDAO/',
    },
    {
      icon: Icons.discord,
      sr: 'Discord',
      link: 'https://discord.gg/8JX9p9q',
    },
  ]

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
        {socials.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center rounded-full p-2 hover:bg-secondary-300/50"
          >
            <link.icon className="h-5 w-5  fill-white" />
            <span className="sr-only">{link.sr}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
