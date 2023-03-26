import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { getDefaultWallets, RainbowKitProvider, DisclaimerComponent } from '@rainbow-me/rainbowkit'
import { RainbowKitSiweNextAuthProvider, GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth'
import { rainbowTheme } from '@/lib/rainbow'

import '@rainbow-me/rainbowkit/styles.css'

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID ?? '' }), publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'LexDAO',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the <Link href="/terms">Terms of Service</Link> and acknowledge you have
    read and understand the <Link href="/privacy">Privacy Policy</Link>.
  </Text>
)

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'By signing this message you agree to our Terms of Service and Privacy Policy.',
})

const reactQueryClient = new QueryClient()

function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session
}>) {
  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            appInfo={{
              appName: 'LexDAO',
              learnMoreUrl: '/about',
              disclaimer: Disclaimer,
            }}
            theme={rainbowTheme}
          >
            <QueryClientProvider client={reactQueryClient}>
              <NextNProgress color="#be93e4" />
              <Component {...pageProps} />
            </QueryClientProvider>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}

export default App
