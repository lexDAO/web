import Link from 'next/link'

type Props = {
  link: string
  label: string
  isExternal?: Boolean
  isActive?: Boolean
}

export default function Home({ link, label, isExternal, isActive }: Props) {
  const linkStyle =
    'px-3 py-1 hover:bg-brand-800  hover:focus:bg-brand-800  hover:text-white  text-center text-xl font-bold font-mono '

  if (isExternal === true)
    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkStyle}>
        {label}
      </a>
    )
  if (isActive === true)
    return (
      <Link href={link}>
        <a className={linkStyle + 'bg-brand-800 text-white'}>{label}</a>
      </Link>
    )

  return (
    <Link href={link}>
      <a className={linkStyle}>{label}</a>
    </Link>
  )
}
