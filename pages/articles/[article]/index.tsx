import type { InferGetServerSidePropsType } from 'next'
import { GetServerSidePropsContext } from 'next'
import Layout from '@/src/layout'
import { fetcher } from '@/src/utils/api'
import ReactMarkdown from 'react-markdown'
import { prettyShortDate } from '@/src/utils/time'

type Data = {
  id: string
  type: string
  attributes: {
    title: string
    content: string
    url_id: string
    createdAt: string
    updatedAt: string
    authors: string[]
  }
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const article = context?.params?.article

  if (!article) {
    return {
      notFound: true,
    }
  }

  if (article === 'index') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  try {
    const data = await fetcher(`/articles`, {
      'filters[url_id][$eq]': article,
    })

    if (!data?.data || data?.data?.length === 0) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        article: data?.data?.[0]?.attributes,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Article = ({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout heading={article?.title} content={article?.content}>
      <div className="flex flex-col min-h-screen px-10 py-5 mt-20rounded-t-xl">
        <h1 className="lg:text-2xl prose-zinc prose-lg prose font-mono font-extrabold mt-2">{article?.title}</h1>
        <span className="bg-zinc-100 h-[1px] w-full my-2" role="separator"></span>
        <ReactMarkdown className="text-zinc-900 prose-md prose font-sans mb-2">{article?.content}</ReactMarkdown>
        <div className="divider bg-slate-900"></div>
        <p className="prose-sm prose-zinc prose font-mono bg-black text-white uppercase pl-3 py-2">
          Last revised {prettyShortDate(article?.updatedAt)}
        </p>
      </div>
    </Layout>
  )
}

export default Article
