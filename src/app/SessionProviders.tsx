'use client'
import React, { type ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children: ReactNode
}

function SessionProviders ({ children }: Props): React.ReactElement {
  return <SessionProvider>{children}</SessionProvider>
}

export default SessionProviders
