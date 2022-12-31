import type { NextPage } from 'next'
import { SplashText } from '~/lander'
import Layout from '~/layout'

const Home: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col space-y-5">
          <SplashText />
        </div>
      </div>
    </Layout>
  )
}

export default Home
