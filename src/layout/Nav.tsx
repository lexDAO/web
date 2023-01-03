import { useRouter } from 'next/router'
import Item from './Item'

export default function Nav() {
  const router = useRouter()

  const isActive = (link: string) => {
    if (link === router.pathname) {
      return true
    }
    return false
  }

  return (
    <nav className="bg-zinc-50 w-max fixed top-8 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center align-center border-b-4 border-black ">
      <Item link="/" label="home" isActive={isActive('/')} />
      <Item link="/join" label="join" isActive={isActive('/join')} />
      <Item link="/events" label="events" isActive={isActive('/events')} />
      <Item link="https://snapshot.org/#/lexdao.eth" label="governance" isExternal={true} />
      <Item link="/guilds" label="guilds" isActive={isActive('/guilds')} />
      {/* TODO */}
      {/* <Item link="/library" label="library" /> */}
    </nav>
  )
}
