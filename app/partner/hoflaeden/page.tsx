'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Leaf,
  Tractor,
  BarChart3,
  Bell,
  Package,
  MessageSquare,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  Clock,
  MapPin,
  Sun,
  Heart,
  Sprout,
  PieChart
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Lokale Kunden finden',
    description: 'Menschen in Ihrer Region suchen aktiv nach frischen, lokalen Produkten - wir verbinden Sie.',
  },
  {
    icon: Package,
    title: 'Echtzeit-Bestandsanzeige',
    description: 'Kunden sehen sofort, was verfügbar ist. Keine vergeblichen Fahrten, zufriedene Kunden.',
  },
  {
    icon: Sun,
    title: 'Saisonale Produkte',
    description: 'Heben Sie saisonale Spezialitäten hervor und informieren Sie über Erntezeitpunkte.',
  },
  {
    icon: Bell,
    title: 'Direkter Draht zu Kunden',
    description: 'Informieren Sie über frische Ware, Markttermine oder besondere Aktionen.',
  },
  {
    icon: MapPin,
    title: 'Anfahrt & Öffnungszeiten',
    description: 'Kunden finden Sie einfacher mit Karte, Öffnungszeiten und Kontaktmöglichkeiten.',
  },
  {
    icon: Heart,
    title: 'Nachhaltig & Regional',
    description: 'Erreichen Sie Menschen, denen Nachhaltigkeit und regionale Produkte wichtig sind.',
  },
]

const features = [
  'Echtzeit-Bestandsverwaltung',
  'Saisonale Produkte hervorheben',
  'Öffnungszeiten flexibel anpassen',
  'Vorbestellungen ermöglichen',
  'Push-Benachrichtigungen senden',
  'Fotos von frischer Ware teilen',
  'Kundenbewertungen sammeln',
  'Anfahrtsbeschreibung mit Karte',
  'Direkter Chat mit Kunden',
  'Verkaufsstatistiken einsehen',
]

const pricing = [
  { label: 'Einrichtungsgebühr', value: 'Keine' },
  { label: 'Monatliche Grundgebühr', value: 'Kostenlos' },
  { label: 'Provision', value: 'Besonders fair für Hofläden' },
  { label: 'Vertragslaufzeit', value: 'Monatlich kündbar' },
]

export default function HoflaedenPartner() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <div className="glass-dark fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">FEELY</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <Tractor className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Für Hofläden</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Frisch vom Hof.</span>
              <br />
              <span className="gradient-text">Direkt zum Kunden.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Verbinden Sie Ihren Hofladen mit Menschen, die regionale und frische Produkte
              schätzen. Einfach, digital, erfolgreich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Jetzt Partner werden</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#vorteile"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Vorteile entdecken
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Perfekt für Hofläden
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              FEELY wurde mit Blick auf die besonderen Bedürfnisse von Hofläden entwickelt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special for Hofläden */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2 mb-6">
                <Sprout className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Speziell für Sie</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Wir verstehen Hofläden
              </h2>
              <p className="text-gray-400 mb-8">
                Anders als große Supermärkte haben Hofläden besondere Herausforderungen:
                wechselndes Sortiment, saisonale Produkte, begrenzte Öffnungszeiten.
                FEELY ist darauf ausgelegt.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <PieChart className="w-6 h-6 text-green-400" />
                Faire Konditionen
              </h3>

              <div className="space-y-4 mb-8">
                {pricing.map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <p className="text-green-400 text-sm">
                  <strong>Für Hofläden besonders günstig:</strong> Wir wissen, dass Hofläden
                  oft kleinere Margen haben. Deshalb bieten wir spezielle Konditionen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Story / Quote */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <Sprout className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
              &ldquo;Endlich wissen unsere Kunden, wann wir frische Erdbeeren haben.
              Und wir wissen, dass sich die Fahrt zu uns lohnt.&rdquo;
            </blockquote>
            <p className="text-gray-400">
              - So könnte auch Ihr Feedback klingen
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              In 4 Schritten dabei
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Kontakt aufnehmen', desc: 'Schreiben Sie uns - wir melden uns innerhalb von 24 Stunden.' },
              { step: '2', title: 'Persönliches Gespräch', desc: 'Wir besprechen Ihre Wünsche und zeigen Ihnen das System.' },
              { step: '3', title: 'Einrichtung', desc: 'Wir richten alles für Sie ein - kostenlos und unkompliziert.' },
              { step: '4', title: 'Loslegen', desc: 'Ihr Hofladen ist online und Kunden finden Sie!' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div className="glass rounded-xl p-5 flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="animated-border rounded-3xl"
          >
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <Tractor className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Lassen Sie uns sprechen!
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Wir freuen uns darauf, Ihren Hofladen kennenzulernen und gemeinsam
                erfolgreich zu sein.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:partner@feelyapp.de"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>partner@feelyapp.de</span>
                </a>
              </div>

              <p className="text-gray-500 text-sm">
                Oder schreiben Sie uns an: <a href="mailto:hello@feelyapp.de" className="text-green-400 hover:underline">hello@feelyapp.de</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap gap-4 justify-center text-sm text-gray-500">
          <Link href="/agb" className="hover:text-green-400 transition-colors">AGB</Link>
          <span>•</span>
          <Link href="/datenschutz" className="hover:text-green-400 transition-colors">Datenschutz</Link>
          <span>•</span>
          <Link href="/impressum" className="hover:text-green-400 transition-colors">Impressum</Link>
        </div>
      </div>
    </main>
  )
}
