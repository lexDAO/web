import Link from 'next/link'

type Props = {
  link: string
  label: string
  isExternal?: Boolean
  isActive?: Boolean
}

export default function Home({ link, label, isExternal, isActive }: Props) {
  const linkStyle =
    'px-3 text-white py-1 hover:bg-primary-800  hover:focus:bg-primary-800 hover:text-white text-center text-xl font-bold font-mono '

  if (isExternal === true)
    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkStyle}>
        {label}
      </a>
    )
  if (isActive === true)
    return (
      <Link href={link} className={linkStyle + 'bg-primary-500 rounded text-white'}>
        {label}
      </Link>
    )

  return (
    <Link href={link} className={linkStyle}>
      {label}
    </Link>
  )
}
