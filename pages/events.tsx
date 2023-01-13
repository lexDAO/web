import type { NextPage } from 'next'
import Layout from '~/layout'
import { useQuery } from 'wagmi'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/20/solid'
import { EventImage } from '~/events'

const Events: NextPage = () => {
  const { data, isLoading, isError } = useQuery(['calendar'], () =>
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/85e1f52ab922b8d38553616d0938a840024508f714884250023c41e208941ee3@group.calendar.google.com/events?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
      {
        method: 'GET',
      },
    ).then((res) => res.json()),
  )

  console.log('fetched', data)

  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="m-10 flex h-screen w-11/12 flex-row items-start justify-center">
        <div className="flex flex-col items-center justify-start">
          {!isLoading && !isError && !data?.error && data?.items?.length != 0 && (
            <>
              <h1 className="font-mono text-3xl font-bold">Events</h1>
              <span className="divider" />
            </>
          )}
          {!isLoading && !isError && data?.error ? (
            // class for centering text
            <div className="flex h-5/6 items-center justify-center">
              <p className="font-mono text-4xl text-red-500">
                <strong>Error:</strong> {data.error.message}
              </p>
            </div>
          ) : data?.items?.length != 0 ? (
            <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6 sm:w-full lg:col-span-7 lg:w-6/12 xl:col-span-8">
              {data?.items?.map((item: any) => (
                <EventCard key={item.id} event={item} />
              ))}
            </ol>
          ) : (
            <div className="flex h-5/6 items-center justify-center">
              <p className="font-mono text-4xl text-red-500">
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
    <li key={event.id} className="relative flex space-x-6 py-6 xl:static">
      <EventImage title={event.summary} />
      <div className="flex-auto">
        <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{event.summary}</h3>
        <p className="pr-10 text-gray-500 xl:pr-0">{event.description}</p>
        <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
          <div className="flex items-start space-x-3">
            <dt className="mt-0.5">
              <span className="sr-only">Date</span>
              <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              <time dateTime={event.datetime}>
                {event?.start?.dateTime &&
                  new Date(event.start.dateTime).toLocaleDateString('en-US', {
                    day: 'numeric',
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
              </time>
            </dd>
          </div>
          <div className="mt-2 flex items-start space-x-3 xl:mt-0 xl:ml-3.5 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
            <dt className="mt-0.5">
              <span className="sr-only">Location</span>
              <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              {event.location == 'Discord' ? (
                <a href="https://discord.gg/uwU85fRc">{event.location}</a>
              ) : (
                <p>{event.location}</p>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </li>
  )
}

export default Events
