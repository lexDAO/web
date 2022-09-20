import '@design/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider, lightTheme, darkTheme } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

import '@fontsource/playfair-display/variable.css'
import '@fontsource/playfair-display/variable-italic.css'
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [infuraProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
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

function MyApp({ Component, pageProps }: AppProps) {
  const theme: ThemeOptions = {
    borderRadius: 'none',
    fontStack: 'system',
    overlayBlur: 'large',
  }

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={{
          lightMode: lightTheme({
            ...theme,
            accentColor: '#8e4ec6',
            accentColorForeground: '#f9f1fe',
          }),
          darkMode: darkTheme({
            ...theme,
            accentColor: '#eddbf9',
            accentColorForeground: '#2b0e44',
          }),
        }}
      >
        <NextNProgress
          color="#be93e4"
        />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig >
  )
}

export default MyApp
