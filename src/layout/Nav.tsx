import Item from './Item'

export default function Nav() {
  return (
    <nav className="bg-zinc-50 w-max fixed bottom-10 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-center align-center border-b-4 border-black ">
      <Item link="/" label="home" />
      <Item link="/join" label="join" />
      {/* <Item link="/subdaos" label="projects" /> */}
      <Item link="/events" label="events" />
      <Item link="https://snapshot.org/#/lexdao.eth" label="forum" isExternal={true} />
      {/* TODO */}
      {/* <Item link="/library" label="library" /> */}
    </nav>
  )
}
