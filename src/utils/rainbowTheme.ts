import merge from 'lodash.merge'
import { lightTheme, Theme } from '@rainbow-me/rainbowkit'

// lightTheme({
//     accentColor: '#bbb4e9',
//     accentColorForeground: '#000',
//     borderRadius: 'small',
//     fontStack: 'rounded',
//     overlayBlur: 'small',
//   }

export const rainbowTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#bbb4e9',
    accentColorForeground: '#000',
  },
  fonts: {
    body: "'DotGothic16', 'sans-serif'",
  },
}) as Theme
