import type { NextPage } from 'next'
import Layout from '~/layout'

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h1 className="text-6xl md:text-9xl font-extrabold">LexDAO</h1>
          <p className="text-xl md:text-5xl font-bold">the legal engineering guild</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
