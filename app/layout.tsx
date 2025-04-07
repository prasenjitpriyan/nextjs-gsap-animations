import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'GSAP Galaxy',
  description:
    "GSAP Galaxy is an interactive animation playground built with Next.js, Tailwind CSS, and GSAP. It showcases the full power of GSAP, covering all its core properties, plugins, scroll-based triggers, timelines, motion paths, and advanced animation techniques. Whether you're a beginner exploring animation or a seasoned developer looking for a reference, GSAP Galaxy is your go-to visual guide to mastering GreenSock animations in modern web development."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
