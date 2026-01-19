'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  CheckCircle,
  Smartphone,
  Heart,
  Clock,
  Wallet,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    title: 'Zeit sparen',
    description: 'Alles von der Couch aus erledigen. Keine endlosen Gänge durch den Supermarkt mehr.',
    icon: Clock,
  },
  {
    title: 'Gesund leben',
    description: 'Verstehe exakt, was du isst. Allergien und Unverträglichkeiten werden automatisch erkannt.',
    icon: Heart,
  },
  {
    title: 'Geld sparen',
    description: 'Alle Angebote im Blick. Budget-Kontrolle und reduzierte Produkte kurz vor Ablauf.',
    icon: Wallet,
  },
  {
    title: 'Smart einkaufen',
    description: 'KI-Analyse deiner Ernährung. Erreiche deine Gesundheitsziele mit wissenschaftlicher Unterstützung.',
    icon: Sparkles,
  },
]

const steps = [
  { step: '01', title: 'Registrieren', desc: 'Kostenlos anmelden und Profil erstellen' },
  { step: '02', title: 'Einstellungen', desc: 'Allergien und Präferenzen hinterlegen' },
  { step: '03', title: 'Entdecken', desc: 'Märkte in deiner Nähe erkunden' },
  { step: '04', title: 'Genießen', desc: 'Bewusst einkaufen und gesund leben' },
]

export default function ForUsers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nutzer" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-black" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-medium text-sm">Für Nutzer</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Dein Einkauf. </span>
            <span className="gradient-text">Deine Regeln.</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl">
            FEELY gibt dir die volle Kontrolle über deinen Einkauf - egal ob Supermarkt
            oder Hofladen, egal ob Lieferung oder Abholung.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex gap-5 p-6 glass rounded-2xl card-hover"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: How it works */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">So funktioniert&apos;s</h3>

              <div className="space-y-8">
                {steps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-green-400 font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-10"
              >
                <Link
                  href="#download"
                  className="inline-flex items-center gap-2 btn-primary"
                >
                  <span>Jetzt starten</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Premium banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="animated-border rounded-3xl">
            <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-medium text-sm">FEELY Premium</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Noch mehr Kontrolle mit Premium
                </h3>
                <p className="text-gray-400 max-w-xl">
                  KI-gestützte Analyse basierend auf neuester Wissenschaft. Erfahre, wie jedes
                  Produkt auf deine persönlichen Gesundheitsziele wirkt - völlig neutral und fundiert.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="#download" className="btn-secondary bg-purple-500/10 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                  Premium entdecken
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
