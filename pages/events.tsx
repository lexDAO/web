import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Layout from '@/src/layout'
import Image from 'next/image'
import { CalendarIcon, MapPinIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { EventImage } from '@/src/events'
import { getDiscordEvents, useGetDiscordEvents } from '@/src/events/useGetDiscordEvents'
import { Spinner } from '@kalidao/reality'
import Balancer from 'react-wrap-balancer'
import { DISCORD_INVITE_URL } from '@/src/constants'

interface Event {
  id: string
  guild_id: string
  channel_id: string
  creator_id: string
  name: string
  description: string
  image: string
  scheduled_start_time: string
  scheduled_end_time: string
  privacy_level: number
  status: number
  entity_type: number
  entity_id: string
  entity_metadata: string
  sku_ids: string[]
  creator: {
    id: string
    username: string
    display_name: string
    avatar: string
    avatar_decoration: string
    discriminator: string
    public_flags: number
  }
}

// server side render
const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`https://discord.com/api/v10/guilds/682960432272506907/scheduled-events`, {
    method: 'GET',
    headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
  console.log('response', response)
  const data = await response.json()

  // 404 if no data
  if (!data) {
    return {
      notFound: true,
    }
  }

  console.log('data', data)

  return {
    props: {
      events: data,
    },
  }
}

const Events: NextPage = ({ events }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('discord event', events)
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="min-h-screen flex flex-col justify-start items-center mt-10">
        {/* fix hydration issues */}
        {events ? (
          events?.length > 0 ? (
            events?.map((event: Event) => <EventCard key={event.id} event={event} />)
          ) : null
        ) : (
          <Spinner />
        )}
      </div>
      <div className="bg-gradient-to-r from-primary-600 to-primary-900">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            <Balancer>
              Join us on our <a href={DISCORD_INVITE_URL}>Discord</a> server.
            </Balancer>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-primary-50">
            LexDAO is a community of legal engineers, lawyers, and technologists who are building the future of law.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"></div>
        </div>
      </div>
    </Layout>
  )
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <li key={event.id} className="relative flex space-x-6 py-6 xl:static">
      <EventImage id={event.id} title={event.name} image={event.image} />
      <div className="flex-auto">
        <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{event.name}</h3>
        <p className="pr-10 text-gray-500 xl:pr-0">{event.description}</p>
        <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
          <div className="flex items-start space-x-3">
            <dt className="mt-0.5">
              <span className="sr-only">Date</span>
              <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              <time dateTime={event.scheduled_start_time}>
                {event?.scheduled_start_time &&
                  new Date(event.scheduled_start_time).toLocaleDateString('en-US', {
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
              <p className="text-gray-900">Discord</p>
            </dd>
            <dt className="mt-0.5">
              <span className="sr-only">Host</span>
              <Image
                className="h-4 w-4 rounded-full xl:h-6 xl:w-6"
                aria-hidden="true"
                src={`https://cdn.discordapp.com/avatars/${event.creator_id}/${event.creator.avatar}.png?size=128`}
                alt={event.creator.username}
                width={20}
                height={20}
              />
            </dt>
            <dd>
              <p className="text-gray-900">{event.creator.username}</p>
            </dd>
          </div>
        </dl>
      </div>
    </li>
  )
}

export default Events
