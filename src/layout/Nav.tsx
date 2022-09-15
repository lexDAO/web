import Link from "next/link";
import Lottie from 'react-lottie'
import home from './lotties/home'

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

export default function Nav() {
  return (
    <nav className="w-max absolute bottom-1 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl flex flex-row justify-center align-center space-x-2 border-2 border-black">
      <Link href="/"> <Lottie 
	      options={{...defaultOptions, animationData: home}}
        height={400}
        width={400}
      /></Link>
      <Link href="/about">About</Link>
      <Link href="/events">Events</Link>
      <a
        href="http://lib.lexdao.coop/"
        target="_blank"
        rel="nooppener noreferrer"
      >
        Library
      </a>
    </nav>
  );
}
