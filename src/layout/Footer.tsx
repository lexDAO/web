import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="h-5 absolute bottom-0 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 text-center w-8/12">
      We are not a law firm, or a substitute for an attorney or a law firm. Use of our products is governed by our{' '}
      <Link href="/terms">
        <a className="hover:text-brand-700 hover:dark:text-brand-300 hover:underline">Terms of Use</a>
      </Link>{' '}
      and{' '}
      <Link href="/privacy">
        <a className="hover:text-brand-700 hover:dark:text-brand-300 hover:underline">Privacy</a>
      </Link>
      .
    </footer>
  )
}
