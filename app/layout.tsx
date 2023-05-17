import { BleedingNoise } from '@/components/bleeding-screen'
import RootProvider from '@/components/root-provider'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Press_Start_2P as FontArcade } from 'next/font/google'

const arcade = FontArcade({
  subsets: ['latin'],
  variable: '--font-arcade',
  display: 'swap',
  weight: '400',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('min-h-screen w-screen', arcade.variable)}>
      <RootProvider>
        <body className="bg-black text-white">
          {children}
          <BleedingNoise />
        </body>
      </RootProvider>
    </html>
  )
}
