import type { NextPage } from 'next'
import Layout from '~/layout'
import ReactMarkdown from 'react-markdown'

const Privacy: NextPage = () => {
  return (
    <Layout heading="Privacy Policy" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-start h-screen">
        <ReactMarkdown># Privacy Policy</ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Privacy
