import Link from 'next/link'
import Lottie from 'react-lottie'

type Props = {
  link: string
  label: string
  isExternal?: Boolean
}
export default function Home({ link, label, isExternal }: Props) {
  const linkStyle = 'w-full px-3 py-1 hover:bg-brand-100'

  if (isExternal === true)
    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkStyle}>
        {label}
      </a>
    )
  return (
    <Link href={link}>
      <a className={linkStyle}>{label}</a>
    </Link>
  )
}
