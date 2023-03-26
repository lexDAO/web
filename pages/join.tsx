import Layout from '@/src/layout'
import JoinForm from '@/src/join'
import { fetcher } from '@/src/utils/api'
import { InferGetServerSidePropsType } from 'next'
import Stickyroll from '@stickyroll/react/stickyroll'

export const getServerSideProps = async () => {
  try {
    const data = await fetcher(`/join`)

    return {
      props: {
        data: data?.data,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

const Join = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout heading="Join" content="Homepage of the legal engineering guild.">
      <Stickyroll pages={10} factor={1}>
        <JoinForm />
      </Stickyroll>
    </Layout>
  )
}

export default Join
