import { Nav } from '@/components/nav'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CAT WIKI',
  description: 'Cat Wikipedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
