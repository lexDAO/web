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
        article: data?.data?.attributes,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Privacy = ({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout heading={'Privacy Policy'} content={'Privacy policy.'}>
      <div className="flex flex-col min-h-screen px-10 mt-20 bg-white rounded-t-xl">
        <h1 className="lg:text-2xl prose-zinc prose-lg prose font-mono font-extrabold mt-2">{article?.title}</h1>
        <span className="bg-zinc-100 h-[1px] w-full my-2" role="separator"></span>
        <ReactMarkdown className="lg:text-xl text-zinc-900 prose-sm prose font-mono">{article?.content}</ReactMarkdown>
        <div className="w-full h-1 bg-slate-900"></div>
        <div className="flex flex-row justify-start items-center">
          <p className="prose-sm prose-zinc prose font-mono">Last revised {prettyShortDate(article?.updatedAt)}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Privacy
