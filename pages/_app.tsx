import '@design/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { WagmiConfig, createClient, chain } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'

import '@fontsource/playfair-display/variable.css'
import '@fontsource/playfair-display/variable-italic.css'

const alchemyId = process.env.ALCHEMY_ID
const chains = [chain.mainnet, chain.goerli]

const wagmiClient = createClient(
  getDefaultClient({
    appName: 'Your App Name',
    alchemyId,
    chains,
  }),
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ConnectKitProvider
        mode="auto"
        customTheme={{
          '--ck-connectbutton-border-radius': '0.5rem',
        }}
        options={{
          embedGoogleFonts: true,
          disclaimer: (
            <>
              By connecting your wallet you agree to our{' '}
              <a target="_blank" rel="noopener noreferrer" href="/terms">
                Terms of Service
              </a>{' '}
              and{' '}
              <a target="_blank" rel="noopener noreferrer" href="/privacy">
                Privacy Policy
              </a>
            </>
          ),
        }}
      >
        <NextNProgress color="#be93e4" />
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
