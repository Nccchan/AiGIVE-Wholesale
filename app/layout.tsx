import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AiGIVE Wholesale — Trust and Safety for the Future of Play.',
  description: '玩具/TCGのB2B卸・中古買取・SNSコンサル｜株式会社AiGIVE',
  openGraph: {
    title: 'AiGIVE Wholesale',
    description: 'Trust and Safety for the Future of Play.',
    images: ['/og.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
