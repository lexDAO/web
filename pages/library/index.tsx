import type { NextPage } from 'next'
import Layout from '@/src/layout'
import Link from 'next/link'

const Library: NextPage = () => {
  return null // build error
  return (
    <Layout heading="Library" content="The archives of the legal engineering guild.">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex space-x-4">
          <div className="h-[80px] w-[200px] rounded-md bg-gray-900 px-8 py-4 text-xl font-bold text-white">
            <Link href="/library/collections">Collections</Link>
          </div>
          <div className="h-[80px] w-[200px] rounded-md bg-gray-900 px-8 py-4 text-xl font-bold text-white">
            <Link href="/library/catalogue">Catalogue</Link>
          </div>
          <div className="h-[80px] w-[200px] rounded-md bg-gray-900 px-8 py-4 text-xl font-bold text-white">
            <Link href="/library/submit-article">Submit your Article</Link>
          </div>
          <div className="h-[80px] w-[200px] rounded-md bg-gray-900 px-8 py-4 text-xl font-bold text-white">
            <Link href="/library/submit-review">Submit your Review</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Library
