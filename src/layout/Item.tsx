import Link from 'next/link'
import Lottie from 'react-lottie'

type Props = {
  link: string
  icon: React.ReactNode
  isExternal?: Boolean
}
export default function Home({ link, icon, isExternal }: Props) {
  if (isExternal === true) return <a href={link} target="_blank">{icon}</a>
  return <Link href={link}>{icon}</Link>
}
