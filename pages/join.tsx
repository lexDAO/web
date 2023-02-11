import type { NextPage } from 'next'
import Layout from '~/layout'
import JoinForm from '~/join'
import { Splash } from '~/lander'

const Join: NextPage = () => {
  if (typeof window === 'undefined') {
    return null
  }

  return (
    <Layout heading="Join" content="Homepage of the legal engineering guild.">
      <div className="flex min-h-screen flex-row items-center justify-between">
        <div className="hidden w-1/2 flex-col items-center justify-center space-y-3 p-20 lg:block">
          <Splash />
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScRY0mfYIoOIddLvWKBPBSyJRgYumRnx9_hgcXn22WBNP-Juw/viewform?embedded=true"
          width={window.innerWidth}
          height="1000"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full lg:w-1/2"
        >
          Loading…
        </iframe>
        {/* <JoinForm /> */}
      </div>
    </Layout>
  )
}

export default Join
