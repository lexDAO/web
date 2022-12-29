import type { NextPage } from 'next'
import Layout from '~/layout'

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col space-y-5">
          <h1 className="text-6xl md:text-9xl font-extrabold font-cursive">
            Lex
            <a
              href="https://snapshot.org/#/lexdao.eth"
              target="_blank"
              rel="noreferrer"
              className="text-brand-900 hover:text-brand-800"
            >
              DAO
            </a>
          </h1>
          <p className="text-xl md:text-5xl font-bold">Upgrading the legal tradition.</p>
          <p className="text-xl md:text-5xl font-bold">Together.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
