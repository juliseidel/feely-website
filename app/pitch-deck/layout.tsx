'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Leaf,
  FileText,
  BarChart3,
  MessageSquareWarning,
  GitCompare,
  LogOut,
  Menu,
  X,
  Presentation,
  Download
} from 'lucide-react'

const navItems = [
  { name: 'Übersicht', href: '/pitch-deck', icon: Presentation },
  { name: 'Executive Summary', href: '/pitch-deck/executive-summary', icon: FileText },
  { name: 'Marktanalyse', href: '/pitch-deck/marktanalyse', icon: BarChart3 },
  { name: 'Einwand-Katalog', href: '/pitch-deck/einwand-katalog', icon: MessageSquareWarning },
  { name: 'Vergleichsanalyse', href: '/pitch-deck/vergleichsanalyse', icon: GitCompare },
  { name: 'PDF-Dokument', href: '/pitch-deck/investor-dokument', icon: Download },
]

export default function PitchDeckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check authorization
    const access = localStorage.getItem('feely_pitch_access')
    const timestamp = localStorage.getItem('feely_pitch_timestamp')

    if (access === 'granted' && timestamp) {
      // Check if access is still valid (48 hours)
      const accessTime = parseInt(timestamp)
      const now = Date.now()
      const hoursElapsed = (now - accessTime) / (1000 * 60 * 60)

      if (hoursElapsed < 48) {
        setIsAuthorized(true)
      } else {
        // Access expired
        localStorage.removeItem('feely_pitch_access')
        localStorage.removeItem('feely_pitch_code')
        localStorage.removeItem('feely_pitch_timestamp')
        router.push('/zugang')
      }
    } else {
      router.push('/zugang')
    }

    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('feely_pitch_access')
    localStorage.removeItem('feely_pitch_code')
    localStorage.removeItem('feely_pitch_timestamp')
    router.push('/investoren')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-400">Wird geladen...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="glass-dark fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/pitch-deck" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="FEELY Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl font-bold gradient-text">FEELY</span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full ml-2">
                Pitch Deck
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-green-500/20 text-green-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span>Abmelden</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/5"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-green-500/20 text-green-400'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 w-full transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Abmelden</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Confidential - Nur für autorisierte Empfänger
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/datenschutz" className="text-gray-500 hover:text-green-400 transition-colors">
                Datenschutz
              </Link>
              <Link href="/impressum" className="text-gray-500 hover:text-green-400 transition-colors">
                Impressum
              </Link>
              <a href="mailto:partner@feelyapp.de" className="text-gray-500 hover:text-green-400 transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
