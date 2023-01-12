import type { NextPage } from 'next'
import Layout from '~/layout'

const Collections: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <h1 className="text-3xl font-bold underline text-white">Collections inside Libarary</h1>
    </Layout>
  )
}

export default Collections
