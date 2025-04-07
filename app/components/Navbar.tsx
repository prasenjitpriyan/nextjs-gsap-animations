'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { label: 'Basics', href: '/basics' },
    { label: 'ScrollTrigger', href: '/scroll' },
    { label: 'Timelines', href: '/timeline' },
    { label: 'MotionPath', href: '/motionpath' },
    { label: 'More →', href: '/more' }
  ]

  return (
    <header className="bg-gray-900/80 backdrop-blur fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-green-400 text-2xl font-bold">GSAP Galaxy</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base text-gray-200">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-green-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-green-400"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-200">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block hover:text-green-400 transition"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
