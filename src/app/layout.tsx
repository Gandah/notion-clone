export const dynamic = 'force-dynamic';
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
// import db from '@/lib/supabase/db'
import { twMerge } from 'tailwind-merge'
import Providers from '@/lib/providers'
import { Toaster } from '@/components/ui/toaster'

const dm = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cypress',
  description: 'A Notion Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // console.log(db)
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge('bg-background', dm.className)}>
        <Providers
        >
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
