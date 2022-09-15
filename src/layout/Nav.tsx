import Item from './Item'
import { BsCalendar } from 'react-icons/bs'
import { BiHome } from 'react-icons/bi'
import { TbBooks } from 'react-icons/tb'

export default function Nav() {
  return (
    <nav className="w-max fixed bottom-10 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl flex flex-row justify-center align-center space-x-10 border-2 border-black">
      <Item link="/" icon={<BiHome size={36} className="hover:animate-bounce" />} />
      <Item link="/events" icon={<BsCalendar size={36} className="hover:animate-bounce" />} />
      <Item link="http://lib.lexdao.coop/" icon={<TbBooks size={36} className="hover:animate-bounce" />} />
    </nav>
  )
}
