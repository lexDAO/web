import type { NextPage } from 'next'
import Layout from '~/layout'
import ReactMarkdown from 'react-markdown'

const Terms: NextPage = () => {
  return (
    <Layout heading="Terms of Use" content="Homepage of the legal engineering guild.">
      <div className="flex h-screen flex-col items-center justify-start">
        <ReactMarkdown># Terms of Use</ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Terms
