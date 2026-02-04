import React from 'react'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Footer from '@/shared/components/Footer'
import Providers from '@/shared/components/Providers'

import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Plan Countries',
  description: 'Explore countries of the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={nunito.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
