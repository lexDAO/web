import type { NextPage } from 'next'
import Layout from '~/layout'
import JoinForm from '~/join'

const Join: NextPage = () => {
  return (
    <Layout heading="Join" content="Homepage of the legal engineering guild.">
      <div className="w-[100vw] flex flex-row items-center justify-between h-screen">
        <div className="w-1/2 p-20 flex flex-col align-center justify-center">
          <h1 className="text-6xl md:text-9xl font-extrabold">LexDAO</h1>
          <p className="text-xl md:text-5xl font-bold">upgrading the legal tradition.</p>
          <p className="text-xl md:text-5xl font-bold">together.</p>
        </div>
        <JoinForm />
      </div>
    </Layout>
  )
}

export default Join
