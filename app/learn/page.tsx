import { fetcher } from '@/src/utils/api'
import { BleedingNoise } from '@/components/bleeding-screen'
import { cn } from '@/lib/utils'
import { Landing } from '@/components/screens/landing'
import { DISCORD_INVITE_URL, SUBSTACK_URL, TWITTER_URL } from '@/src/constants'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'
import { AsciiArt } from '@/components/ascii-art'
import { Socials } from './socials'
import { Lexy } from './lexy'

export default async function Page() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <div className="z-10 h-screen w-screen absolute flex flex-col items-center justify-center">
        <Lexy />
        <Socials />
      </div>
    </main>
  )
}
