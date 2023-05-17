'use client'

import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react'
import { siteConfig } from '@/config/siteConfig'

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ID!,
      }}
    >
      {children}
    </DynamicContextProvider>
  )
}
