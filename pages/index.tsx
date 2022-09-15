import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '~/layout'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col space-y-5">
          <h1 className="text-6xl md:text-9xl font-extrabold">Lex<a href="https://snapshot.org/#/lexdao.eth" target="_blank" rel="noreferrer" className="text-brand-900 hover:text-brand-800">DAO</a></h1>
          <p className="text-xl md:text-5xl font-bold">upgrading the legal tradition.</p>
          <p className="text-xl md:text-5xl font-bold">together.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
