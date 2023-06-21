/** @format */

import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar, Footer } from '@/components'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'The Designer',
  description: 'Grapahiste professionnel '
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
