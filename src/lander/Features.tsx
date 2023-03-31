import { cn } from '@/lib/utils'
import { DISCORD_INVITE_URL } from '../constants'

export const Features = ({
  features,
}: {
  features: {
    content: string
    cta: string
    id: number
    subtitle: string
    title: string
    image?: any
  }[]
}) => {
  return (
    <div className="min-h-screen px-2 flex flex-col space-y-10 items-center justify-center mb-20">
      {features?.map((feature) => {
        return (
          <div key={feature.id} className={cn('z-10  text-black', 'w-full md:w-[60vw] flex flex-row justify-between')}>
            <div>
              <div className="mt-6">
                <h2 className="font-serif text-xl md:text-5xl font-extrabold tracking-wide">{feature.title}</h2>
                <p className="mt-4 font-serif text-xl tracking-wide">{feature.content}</p>
                <div className="mt-6">
                  <a
                    href={DISCORD_INVITE_URL}
                    target="_blank"
                    rel="nooppener noreferrer"
                    className={cn(
                      'uppercase rounded-lg border-4  border-black px-5 py-2 font-mono tracking-widest font-semibold shadow-none hover:border-b-2 hover:border-r-2 hover:shadow-sm',
                    )}
                  >
                    {feature.cta}
                  </a>
                </div>
              </div>
              <div className="mt-8 border-t-2 border-black pt-6">
                <blockquote className="text-xl font-serif font-light tracking-wide text-black">
                  {feature.subtitle}
                </blockquote>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
