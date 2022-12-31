import Link from 'next/link'

type Props = {
  link: string
  label: string
  isExternal?: Boolean
}
export default function Home({ link, label, isExternal }: Props) {
  const linkStyle =
    'w-full px-3 py-1 hover:bg-brand-800  hover:focus:bg-brand-800  hover:text-white  text-center text-xl font-bold font-mono '

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
