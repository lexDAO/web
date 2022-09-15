import Link from 'next/link'
import Lottie from 'react-lottie'

type Props = {
  link: string
  icon: React.ReactNode
}
export default function Home({ link, icon }: Props) {
  return <Link href={link}>{icon}</Link>
}
