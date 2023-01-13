import type { NextPage } from 'next'
import Layout from '~/layout'
import JoinForm from '~/join'
import { Splash } from '~/lander'

const Join: NextPage = () => {
  return (
    <Layout heading="Join" content="Homepage of the legal engineering guild.">
      <div className="flex min-h-screen w-[100vw] flex-row items-center justify-between">
        <div className="hidden w-1/2 flex-col items-center justify-center space-y-3 p-20 lg:block">
          <Splash />
        </div>
        <JoinForm />
      </div>
    </Layout>
  )
}

export default Join
