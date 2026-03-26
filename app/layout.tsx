import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Darren Viloria',
    template: '%s | Darrens Personal Website',
  },
  description: 'My website that showcases my cool stuff.',
  openGraph: {
    title: 'Darrens Website',
    description: 'My website that showcases my cool stuff.',
    url: baseUrl,
    siteName: 'Darrens Wesite',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-6xl mx-8 mt-8 lg:mx-auto">

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>

        </ThemeProvider>

      </body>
    </html>
  )
}
