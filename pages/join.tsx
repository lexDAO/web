import type { NextPage } from 'next'
import Layout from '~/layout'
import JoinForm from '~/join'

const Join: NextPage = () => {
  return (
    <Layout heading="Join" content="Homepage of the legal engineering guild.">
      <div className="w-[100vw] flex flex-row items-center justify-between h-screen">
        <div className="w-1/2 p-20 flex flex-col align-center justify-center space-y-3">
          <h1 className="text-6xl md:text-9xl font-extrabold">
            Lex{' '}
            <a
              href="https://snapshot.org/#/lexdao.eth"
              target="_blank"
              rel="noreferrer"
              className="text-brand-900 hover:text-brand-800 dark:text-brand-50 hover:dark:text-brand-100"
            >
              DAO
            </a>
          </h1>
          <p className="text-xl md:text-5xl font-bold">upgrading the legal tradition.</p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="text-xl md:text-5xl font-bold text-brand-900 hover:text-brand-800 dark:text-brand-50 hover:dark:text-brand-100"
          >
            together.
          </a>
        </div>
        <JoinForm />
      </div>
    </Layout>
  )
}

export default Join
