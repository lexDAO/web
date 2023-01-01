import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SplashText } from '~/lander'
import Layout from '~/layout'
import {
  BoltIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  Cog8ToothIcon,
  GlobeAltIcon,
  LightBulbIcon,
  PencilIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

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

  const projects = [
    {
      name: 'Kali',
      description: 'The product suite for building DAOs and incorporation.',
      href: 'https://kali.gg/',
      cta: 'Learn more',
      icon: Cog8ToothIcon,
    },
    {
      name: 'Clinic',
      description: 'A legal support network for DAOs. Apprentices welcome!',
      href: 'https://discord.gg/nZVnxnfw54',
      cta: 'Ask the Clinic',
      icon: BriefcaseIcon,
    },
    {
      name: 'RWA',
      description: 'Building standards and community around digitizing assets.',
      href: 'https://rwaconsortium.com/',
      cta: 'Explore',
      icon: BuildingOffice2Icon,
    },
  ]

  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col space-y-5">
          <SplashText />
        </div>
      </div>

      {/* Alternating Feature Sections */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-50" />
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-brand-600 to-brand-600">
                    <WrenchScrewdriverIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Engineer the next generation of legal infrastructure
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    We review best practices and standards for smart contracts. We put these standards into production
                    with subDAOs like Kali.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://discord.gg/gQDMhvDVWS"
                      target="_blank"
                      rel="nooppener noreferrer"
                      className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-brand-700 to-brand-800 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-brand-700 hover:to-brand-700"
                    >
                      Join the Discussion
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      We meet every Friday at 12:00PM EST to hack on legal tech. Join us on our{' '}
                      <a href="https://discord.gg/gQDMhvDVWS" target="_blank" rel="nooppener noreferrer">
                        Discord
                      </a>
                      .
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/hacking.png"
                  alt="legal hacks"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-brand-600 to-brand-600">
                    <PencilIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Participate in the future of Legislation and Policy
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Our study groups meet regularly to discuss current events and to draft reviews of existing policy
                    and laws
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-brand-700 to-brand-800 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-brand-700 hover:to-brand-700"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
              <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/parliament.png"
                  alt="study group"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-brand-600 to-brand-600">
                  <BookOpenIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Learn about the current landscape</h2>
                <p className="mt-4 text-lg text-gray-500">
                  The Archives are compiling a legal database of opinions, articles, whitepapers, and opinions to help
                  you find current information
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-brand-700 to-brand-800 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-brand-700 hover:to-brand-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    Join the study group to discuss the latest developments in crypto law and policy.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/library.png"
                alt="study group"
              />
            </div>
          </div>
        </div>
        {/* Gradient Feature Section */}
      </div>
      <div className="bg-gradient-to-r from-brand-600 to-brand-900">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Join us in securing rules and promises with code.
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
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-brand-50">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* add section to highlight projects */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-900">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
            <h2 className="text-3xl font-bold tracking-tight text-white">SubDAOs</h2>
            <p className="mt-4 max-w-3xl text-lg text-brand-50">
              LexDAO spawns SubDAOs to build, deploy and maintain legal technology.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {projects.map((project) => (
                <div key={project.name}>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                      <project.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">{project.name}</h3>
                    <p className="mt-2 text-base text-brand-50">{project.description}</p>
                    <a
                      href={project.href}
                      className="mt-2 inline-flex rounded-md border border-transparent bg-gradient-to-r from-zinc-50 to-zinc-200 bg-origin-border px-4 py-2 text-base font-medium text-brand-900 shadow-sm hover:from-zinc-300 hover:to-brand-50"
                    >
                      {project.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
