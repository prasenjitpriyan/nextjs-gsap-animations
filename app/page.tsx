'use client'

import React from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Navbar from './components/Navbar'

gsap.registerPlugin(useGSAP)

const Home = () => {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.inOut' }
      )
    },
    { scope: heroRef }
  )

  return (
    <main className="h-screen bg-gray-950 text-white font-sans">
      <Navbar />
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center h-screen text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-green-400">
          GSAP Galaxy
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl text-gray-300">
          A full-featured playground of GSAP animations built with Next.js and
          Tailwind CSS.
        </p>
      </section>
    </main>
  )
}

export default Home
