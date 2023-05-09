import type { InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { Splash, Features } from '@/src/lander'
import Layout from '@/src/layout'
import { fetcher } from '@/src/utils/api'
import { cn, getRandomColor } from '@/lib/utils'
import Stickyroll from '@stickyroll/react/stickyroll'

export const getServerSideProps = async () => {
  try {
    const data = await fetcher(`/homepage`, {
      'populate[0]': 'features',
      'populate[1]': 'features.image',
      'populate[2]': 'cta',
    })

    console.log('data', data)

    return {
      props: {
        homepage: data?.data,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Home = ({ homepage }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const features = homepage?.attributes?.features

  return (
    <Layout heading="Home" content={homepage?.attributes?.Description}>
      <div className="min-h-screen grid">
        <Splash title={homepage?.attributes?.title} content={homepage?.attributes?.content} />
        {homepage?.attributes?.cta?.map((cta: any) => {
          const link = cn(
            'border-black px-5 py-5 text-4xls font-mono text-black shadow-lg w-full h-fit flex justify-center content-center hover:scale-105 hover:transition uppercase',
            'bg-yellow-500',
          )
          if (cta.isExternal) {
            return (
              <a key={cta.id} target="_blank" rel="noopenner noreferrer" href={cta.url} className={link}>
                {cta.label} {cta?.icon}
              </a>
            )
          }

          return (
            <Link key={cta.id} href={cta.url} className={link}>
              {cta.label} {cta?.icon}
            </Link>
          )
        })}
      </div>
      <Features features={features ?? []} />
      {/* Gradient Feature Section */}
      <div className="bg-primary-500">
        <div className="grid grid-cols-1 mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-4 items-center justify-items-center">
            <h2 className="text-xl md:text-6xl font-serif font-extrabold tracking-tight text-black text-center">
              Embrace the future of legal innovation
            </h2>
            <p className="max-w-3xl font-serif text-xl sm:text-2xl text-black text-center">
              LexDAO is a cutting-edge, decentralized collective of forward-thinking lawyers, dedicated to shaping the
              next generation of smart contracts. Join us on our mission to revolutionize the legal landscape through
              the power of Ethereum and cyberpunk ethos.
            </p>
          </div>
          <div className="grid justify-items-end">
            <a
              target="_blank"
              rel="noopenner noreferrer"
              href="https://lexdao.substack.com/p/how-do-you-join-lex-dao"
              className="btn-xs btn rounded-l-none rounded-r-full border border-b-4 border-r-4 border-black shadow-none  bg-primary-500 px-5 py-2 font-mono text-black  hover:translate-x-2 hover:bg-primary-300 focus:ring-1 focus:ring-primary-700 sm:btn-sm md:btn-md lg:btn-lg"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
