import type { NextPage } from 'next'
import { FAQs } from '~/guilds'
import Layout from '~/layout'
import { BriefcaseIcon, BuildingOffice2Icon, Cog8ToothIcon } from '@heroicons/react/20/solid'

const Guilds: NextPage = () => {
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
    <Layout heading="Guilds" content="Learn more about our affiliated guilds.">
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center">
          <p className="mt-4 max-w-3xl text-lg text-gray-500">
            LexDAO is a community of legal engineers, lawyers, and technologists who are building the future of law.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="flex flex-col items-center justify-center p-4 space-y-4 text-center transition duration-300 ease-in-out transform bg-white rounded-lg shadow-xl hover:scale-105"
              >
                <project.icon className="w-12 h-12 text-brand-600" aria-hidden="true" />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                  <p className="text-base text-gray-500">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <FAQs />
    </Layout>
  )
}

export default Guilds
