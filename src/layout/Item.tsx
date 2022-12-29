import Link from 'next/link'

type Props = {
  link: string
  label: string
  isExternal?: Boolean
}
export default function Home({ link, label, isExternal }: Props) {
  const linkStyle =
    'w-full px-3 py-1 hover:bg-brand-800 hover:dark:bg-brand-200 hover:focus:bg-brand-800 hover:dark:focus:bg-brand-200 hover:text-white hover:dark:text-black text-center text-xl font-bold font-cursive '

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
