import Link from 'next/link'
import Item from './Item'
import { HiInformationCircle } from 'react-icons/hi'
import { BsCalendar } from 'react-icons/bs'
import { BiHome } from 'react-icons/bi'
import { TbBooks } from 'react-icons/tb'

export default function Nav() {
  return (
    <nav className="w-max fixed bottom-10 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl flex flex-row justify-center align-center space-x-10 border-2 border-black">
      <Item link="/" icon={<BiHome size={36} />} />
      <Item link="/events" icon={<BsCalendar size={36} />} />
      <Item link="/library" icon={<TbBooks size={36} />} />
    </nav>
  )
}
