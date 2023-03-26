import type { InferGetServerSidePropsType } from 'next'
import Layout from '@/src/layout'
import { fetcher } from '@/src/utils/api'
import { prettyShortDate } from '@/src/utils/time'
import ReactMarkdown from 'react-markdown'

export const getServerSideProps = async () => {
  try {
    const data = await fetcher(`/articles/2`)

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

const Privacy = ({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('article', article)
  return (
    <Layout heading={article?.attributes?.Title} content={article?.attributes?.Title}>
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

export default Privacy
