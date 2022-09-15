import type { NextPage } from 'next'
import Layout from '~/layout'

const Events: NextPage = () => {
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <h1 className="text-3xl font-bold underline">Events</h1>
    </Layout>
  )
}

export default Events
