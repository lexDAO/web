import { siteConfig } from '@/config/siteConfig'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

export const Socials = () => {
  // @TODO ADD FETCHING FROM CMS
  // @TODO ADD STYLING FOR LINKS

  return (
    <Suspense>
      <div className="flex flex-row">
        <Link href={siteConfig.links.twitter} target="_blank" rel="noopenner noreferrer">
          <Image src="/assets/twitter.webp" alt="Twitter" width={100} height={100} />
        </Link>
        <Link href={siteConfig.links.discord} target="_blank" rel="noopenner noreferrer">
          <Image src="/assets/icons/discord.png" alt="Discord" width={100} height={100} />
        </Link>
        <Link href={siteConfig.links.substack} target="_blank" rel="noopenner noreferrer">
          <Image src="/assets/icons/book.webp" alt="Substack" width={100} height={95} />
        </Link>
        <Link href={siteConfig.links.github} target="_blank" rel="noopenner noreferrer">
          <Image src="/assets/icons/github.png" alt="GitHub" width={100} height={95} />
        </Link>
      </div>
    </Suspense>
  )
}
