import { WrenchScrewdriverIcon, PencilIcon, BookOpenIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export const Features = () => {
  return (
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
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/hacking.png"
                alt="legal hacks"
                width={500}
                height={500}
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
                  Our study groups meet regularly to discuss current events and to draft reviews of existing policy and
                  laws
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
                The Archives are compiling a legal database of opinions, articles, whitepapers, and opinions to help you
                find current information
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
                  Join the{' '}
                  <a
                    href="https://discord.gg/WaJXzTW6ak"
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="
                    text-brand-900
                  hover:text-brand-700
                  "
                  >
                    study group
                  </a>{' '}
                  to discuss the latest developments in crypto law and policy on Friday at 4PM EST.
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
    </div>
  )
}
