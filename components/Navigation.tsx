'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Für Nutzer', href: '#nutzer' },
    { name: 'Für Anbieter', href: '/anbieter' },
    { name: 'Investoren', href: '/investoren' },
    { name: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="FEELY Logo"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-green-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
          <span className="text-2xl font-bold gradient-text">FEELY</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#download"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2.5 px-6 rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
          >
            App laden
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark mt-3 mx-6 rounded-2xl overflow-hidden"
          >
            <div className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-green-400 transition-colors py-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#download"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-full mt-4"
              >
                App laden
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
