import type { NextPage } from 'next'
import Layout from '~/layout'
import JoinForm from '~/join'
import { Splash } from '~/lander'

const Join: NextPage = () => {
  return (
    <Layout heading="Join" content="Homepage of the legal engineering guild.">
      <div className="w-[100vw] flex flex-row items-center justify-between min-h-screen">
        <div className="hidden lg:block w-1/2 p-20 flex flex-col align-center justify-center space-y-3">
          <Splash />
        </div>
        <JoinForm />
      </div>
    </Layout>
  )
}

export default Join
