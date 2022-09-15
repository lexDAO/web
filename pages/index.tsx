import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '~/layout'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col space-y-5">
          <h1 className="text-6xl md:text-9xl font-extrabold">LexDAO</h1>
          <p className="text-xl md:text-5xl font-bold">upgrading the legal tradition.</p>
          <p className="text-xl md:text-5xl font-bold">together.</p>
          <Link href="/join">
            <a className="w-max flex flex-row align-center justify-between py-2 px-5 rounded-2xl text-5xl bg-brand-50 hover:bg-brand-100 focus:outline-brand-200">
              Join
              <AiOutlineArrowRight />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
