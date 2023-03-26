import type { NextPage } from 'next'
import Layout from '@/src/layout'

const Collections: NextPage = () => {
  return null // build error
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <h1 className="text-3xl font-bold text-white underline">Collections inside Libarary</h1>
    </Layout>
  )
}

export default Collections
