import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Augment Labs - Ship Your Next Big Idea",
  description: "End-to-end AI and web development services. Transform your ideas into reality with cutting-edge technology and expert development.",
  generator: "v0.app",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Augment Labs - Ship Your Next Big Idea",
    description: "End-to-end AI and web development services. Transform your ideas into reality with cutting-edge technology and expert development.",
    url: "https://augmentlabs.com",
    siteName: "Augment Labs",
    images: [
      {
        url: "/augment-logo.png",
        width: 1200,
        height: 630,
        alt: "Augment Labs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augment Labs - Ship Your Next Big Idea",
    description: "End-to-end AI and web development services. Transform your ideas into reality with cutting-edge technology and expert development.",
    images: ["/augment-logo.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
