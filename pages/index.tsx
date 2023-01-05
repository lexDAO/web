import type { NextPage } from 'next'
import Link from 'next/link'
import { Splash, Features } from '~/lander'
import Layout from '~/layout'
import { BoltIcon, GlobeAltIcon, LightBulbIcon } from '@heroicons/react/20/solid'
import Balancer from 'react-wrap-balancer'

const Home: NextPage = () => {
  const features = [
    {
      name: 'Network',
      description: 'Join LexDAO and get access to our network of people and resources.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Innovate',
      description:
        'Impact legal processes and services by bringing traditional legal settlements on to the blockchain.',
      icon: BoltIcon,
    },
    {
      name: 'Grow',
      description: 'Grow your knowledge base in a radically new and emerging space',
      icon: LightBulbIcon,
    },
  ]

  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col space-y-5 w-[70vw]">
          <Splash />
          <Link
            href="/join"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg glass text-black hover:bg-brand-50 rounded-b-full"
          >
            Join the Guild
          </Link>
        </div>
      </div>
      <Features />
      {/* Gradient Feature Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-900">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            <Balancer>Join us in securing rules and promises with code.</Balancer>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-brand-50">
            LexDAO is a community of legal engineers, lawyers, and technologists who are building the future of law.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    <Balancer>{feature.name}</Balancer>
                  </h3>
                  <p className="mt-2 text-base text-brand-50">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
