import type { NextPage } from 'next'
import Layout from '~/layout'
import { useQuery } from 'wagmi'

const Events: NextPage = () => {
  const calendar = '85e1f52ab922b8d38553616d0938a840024508f714884250023c41e208941ee3@group.calendar.google.com'
  const { data, isLoading, isError } = useQuery(['calendar'], () =>
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
      {
        method: 'GET',
      },
    ).then((res) => res.json()),
  )
  console.log(data)
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="h-screen w-full flex flex-row justify-center items-top m-10">
        <div>
          {!isLoading && !isError && !data?.error && data?.items?.length != 0 && (
            <h1 className="text-3xl font-bold">Events</h1>
          )}
          {!isLoading && !isError && data?.error ? (
            // class for centering text
            <div className="h-5/6 flex items-center justify-center">
              <p className="font-cursive text-4xl text-red-500">
                <strong>Error:</strong> {data.error.message}
              </p>
            </div>
          ) : data?.items?.length != 0 ? (
            data?.items.map((item: any) => <EventCard key={item.id} event={item} />)
          ) : (
            <div className="h-5/6 flex items-center justify-center">
              <p className="font-cursive text-4xl text-red-500">
                <strong>Error:</strong> No events found.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

const EventCard = ({ event }: any) => {
  return (
    <div className="flex flex-col justify-center items-center border-width border-brand-500">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">{event.summary}</h1>
        <p className="text-xl font-bold">{event.description}</p>
      </div>
    </div>
  )
}

export default Events
