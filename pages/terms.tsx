import type { InferGetServerSidePropsType, NextPage } from 'next'
import Layout from '@/src/layout'
import { prettyShortDate } from '@/src/utils/time'
import { fetcher } from '@/src/utils/api'
import ReactMarkdown from 'react-markdown'

export const getServerSideProps = async () => {
  try {
    const data = await fetcher(`/articles/1`)

    return {
      props: {
        article: data?.data,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Terms = ({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout heading="Terms of Use" content="Homepage of the legal engineering guild.">
      <div className="min-h-screen px-10">
        <h1 className="lg:prose-2xl prose-zinc prose-lg prose font-mono font-extrabold">
          {article?.attributes?.Title}
        </h1>
        <ReactMarkdown className="lg:prose-xl prose-zinc prose-sm prose font-mono">
          {article?.attributes?.Content}
        </ReactMarkdown>
        <div className="divider bg-slate-900"></div>
        <p className="prose-sm prose-zinc prose font-mono">
          Last revised {prettyShortDate(article?.attributes?.updatedAt)}
        </p>
      </div>
    </Layout>
  )
}

export default Terms
