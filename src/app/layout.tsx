import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import {cn} from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'coredump | supercharged engineering skills',
  description: 'become a better engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(
          "min-h-screen dark font-sans antialiased",
          fontSans.variable
        )}>{children}
        <Analytics />
        </body>
    </html>
  )
}
