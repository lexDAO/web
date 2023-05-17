'use client'
import { cn, truncateAddress } from '@/lib/utils'
import Link from 'next/link'
import { useAccount, useConnect, useEnsAddress, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export const Landing = ({ title }: { title: string }) => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { address, isConnected } = useAccount()
  const { data } = useEnsName({
    address,
    chainId: 1,
  })

  const buttonClass = cn(
    `p-4 text-2xl md:text-5xl font-arcade animate-blink uppercase outline-none focus:underline focus:scale-115`,
  )

  return (
    <div className="h-full flex flex-col items-center justify-between">
      <div className="w-full min-h-16 uppercase font-arcade text-start mt-5 ml-6 text-lex-turquoise">
        {isConnected ? `PLAYER ${data ? data : address ? truncateAddress(address) : ''}` : ''}
      </div>
      <div className="z-10 flex flex-col justify-between items-center">
        <h1 className={cn('text-[58px] md:text-[180px] font-arcade uppercase', 'neon-effect')}>{title}</h1>
        <div className="flex flex-row items-start mb-10">
          <Link className={cn('text-lex-green peer', buttonClass)} href="/play">
            PLAY
          </Link>

          <Link className={cn('text-lex-orange peer', buttonClass)} href="/learn">
            LEARN
          </Link>
        </div>
        <div className="uppercase font-arcade"></div>
      </div>
      <div className="mb-10 animate-scroll flex flex-col items-center justify-center font-arcade italic text-center uppercase">
        THIS IS NOT A LAW FIRM OR A SUBSTITUTE FOR A LAW FIRM.
        <br />
        PLAYING DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP.
      </div>
    </div>
  )
}
