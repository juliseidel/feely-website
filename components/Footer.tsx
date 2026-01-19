'use client'

import Link from 'next/link'
import { Leaf, Twitter, Instagram, Linkedin, Facebook, Mail, Heart } from 'lucide-react'

const footerLinks = {
  produkt: [
    { name: 'Features', href: '#features' },
    { name: 'Für Nutzer', href: '#nutzer' },
    { name: 'Für Anbieter', href: '#anbieter' },
    { name: 'Premium', href: '#download' },
    { name: 'Download', href: '#download' },
  ],
  unternehmen: [
    { name: 'Über uns', href: '#' },
    { name: 'Karriere', href: '#' },
    { name: 'Presse', href: '#' },
    { name: 'Investoren', href: '/investoren' },
    { name: 'Kontakt', href: '#kontakt' },
  ],
  rechtliches: [
    { name: 'AGB', href: '/agb' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Impressum', href: '/impressum' },
    { name: 'Cookie-Einstellungen', href: '#' },
  ],
  support: [
    { name: 'Hilfe-Center', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Status', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">FEELY</span>
            </Link>
            <p className="text-gray-500 text-sm mb-6">
              Die All-in-One Plattform für bewussten Einkauf mit Gesundheitsfokus.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-green-500/20 hover:text-green-400 transition-colors text-gray-400"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.produkt.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Newsletter</h4>
              <p className="text-gray-500 text-sm">
                Bleib auf dem Laufenden über neue Features und Updates.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="deine@email.de"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors w-64"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} FEELY. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Germany
          </p>
        </div>
      </div>
    </footer>
  )
}
