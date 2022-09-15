import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-max absolute bottom-1 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl flex flex-row justify-center align-center space-x-2 border-2 border-black">
      <Link href="/">Home</Link>
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
