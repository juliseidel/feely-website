'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Store,
  BarChart3,
  MessageSquare,
  Bell,
  Package,
  Users,
  TrendingUp,
  Settings,
  CheckCircle,
  ArrowRight,
  Tractor
} from 'lucide-react'
import Link from 'next/link'

const providerFeatures = [
  {
    icon: BarChart3,
    title: 'Eigenes Dashboard',
    description: 'Vollständige Kontrolle über Ihr Sortiment, Preise und Angebote in einem übersichtlichen Dashboard.',
  },
  {
    icon: Bell,
    title: 'Push-Benachrichtigungen',
    description: 'Informieren Sie Kunden in Echtzeit über neue Angebote, frische Ware oder besondere Aktionen.',
  },
  {
    icon: Package,
    title: 'Bestandsmanagement',
    description: 'Verwalten Sie Ihren Bestand digital. Perfekt für Hofläden mit wechselndem Sortiment.',
  },
  {
    icon: MessageSquare,
    title: 'Direkter Kundenkontakt',
    description: 'Chat-Funktion für persönliche Beratung und Sonderwünsche Ihrer Kunden.',
  },
  {
    icon: TrendingUp,
    title: 'Umsatz-Analysen',
    description: 'Detaillierte Einblicke in Verkaufszahlen, beliebte Produkte und Kundenverhalten.',
  },
  {
    icon: Users,
    title: 'Neue Kundenreichweite',
    description: 'Erreichen Sie Kunden, die Sie sonst nie gefunden hätten - lokal und darüber hinaus.',
  },
]

const benefits = [
  'Keine Einrichtungsgebühren',
  'Faire Provisionsmodelle',
  'Volle Kontrolle über Ihr Sortiment',
  'Eigene Preisgestaltung',
  'Marketing-Unterstützung',
  'Technischer Support',
]

export default function ForProviders() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="anbieter" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Store className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-medium text-sm">Für Supermärkte & Hofläden</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Ihr digitaler </span>
            <span className="gradient-text">Marktplatz</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Egal ob kleiner Hofladen oder großer Supermarkt - FEELY bringt Ihr Sortiment
            zu tausenden neuen Kunden. Professionell, einfach und fair.
          </p>
        </motion.div>

        {/* Two columns: Features + Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {providerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Benefits sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ihre Vorteile</h3>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6">
              <Link
                href="#kontakt"
                className="w-full inline-flex items-center justify-center gap-2 btn-primary"
              >
                <span>Partner werden</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Supermarkt card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative group"
          >
            <div className="glass rounded-3xl p-8 h-full border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Für Supermärkte</h3>
                  <p className="text-gray-400">Groß oder klein - jeder kann mitmachen</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Komplettes Sortiment digital präsentieren',
                  'Angebote und Rabattaktionen bewerben',
                  'Ablaufende Produkte günstiger anbieten',
                  'Bestellungen & Lieferungen verwalten',
                  'Kundenbewertungen sammeln',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </motion.div>

          {/* Hofladen card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative group"
          >
            <div className="glass rounded-3xl p-8 h-full border border-green-500/20 group-hover:border-green-500/40 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Tractor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Für Hofläden</h3>
                  <p className="text-gray-400">Direkt vom Erzeuger zum Kunden</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  'Echtzeit-Bestandsanzeige für Kunden',
                  'Saisonale Produkte hervorheben',
                  'Öffnungszeiten und Anfahrt kommunizieren',
                  'Vorbestellungen ermöglichen',
                  'Lokale Kundschaft ausbauen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
