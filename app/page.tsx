import { fetcher } from '@/src/utils/api'
import { BleedingNoise } from '@/components/bleeding-screen'
import { cn } from '@/lib/utils'
import { Landing } from '@/components/screens/landing'

const getData = async () => {
  try {
    const data = await fetcher(`/homepage`, {
      'populate[0]': 'features',
      'populate[1]': 'features.image',
      'populate[2]': 'cta',
    })
    return data?.data?.attributes
  } catch (e) {
    throw e
  }
}

export default async function Page() {
  const data = await getData()

  return (
    <main className="h-screen w-screen overflow-hidden">
      <div className="z-10 h-screen w-screen absolute">
        <Landing title={data?.title} />
      </div>
    </main>
  )
}
