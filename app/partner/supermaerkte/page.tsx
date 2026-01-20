'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Store,
  Leaf,
  BarChart3,
  Bell,
  Package,
  MessageSquare,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Shield,
  Zap,
  Target,
  PieChart,
  Smartphone
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Neue Kunden erreichen',
    description: 'Erreichen Sie tausende Kunden in Ihrer Region, die aktiv nach gesunden Einkaufsmöglichkeiten suchen.',
  },
  {
    icon: Smartphone,
    title: 'Digitale Präsenz',
    description: 'Ihr komplettes Sortiment digital präsentiert - modern und professionell.',
  },
  {
    icon: Bell,
    title: 'Direkte Kommunikation',
    description: 'Informieren Sie Kunden in Echtzeit über Angebote, neue Produkte oder besondere Aktionen.',
  },
  {
    icon: TrendingUp,
    title: 'Umsatz steigern',
    description: 'Mehr Sichtbarkeit bedeutet mehr Kunden und mehr Umsatz - messbar und nachvollziehbar.',
  },
  {
    icon: Clock,
    title: 'Ablaufende Produkte verkaufen',
    description: 'Reduzieren Sie Lebensmittelverschwendung und verdienen Sie an Produkten kurz vor Ablauf.',
  },
  {
    icon: BarChart3,
    title: 'Detaillierte Analysen',
    description: 'Verstehen Sie Ihre Kunden besser mit umfassenden Verkaufs- und Verhaltensanalysen.',
  },
]

const features = [
  'Eigenes Dashboard zur Sortimentsverwaltung',
  'Angebote und Rabattaktionen einstellen',
  'Ablaufende Produkte günstiger anbieten',
  'Push-Benachrichtigungen an Kunden senden',
  'Bestellungen für Abholung/Lieferung verwalten',
  'Kundenbewertungen und Feedback',
  'Echtzeit-Bestandsanzeige',
  'Detaillierte Verkaufsstatistiken',
  'Chat-Funktion für Kundenanfragen',
  'Marketing-Tools und Promotion-Features',
]

const pricing = [
  { label: 'Einrichtungsgebühr', value: 'Keine' },
  { label: 'Monatliche Grundgebühr', value: 'Kostenlos' },
  { label: 'Provision pro Verkauf', value: 'Fair & transparent' },
  { label: 'Vertragslaufzeit', value: 'Flexibel kündbar' },
]

export default function SupermaerktePartner() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Store className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Für Supermärkte</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Ihr Supermarkt.</span>
              <br />
              <span className="gradient-text">Digital erfolgreich.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              Werden Sie Teil von FEELY und erreichen Sie tausende neue Kunden,
              die bewusst und gesund einkaufen wollen.
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
              Ihre Vorteile mit FEELY
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mehr Kunden, mehr Umsatz, weniger Verschwendung - und das alles digital.
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Alles was Sie brauchen
              </h2>
              <p className="text-gray-400 mb-8">
                Unser Dashboard gibt Ihnen die volle Kontrolle über Ihren digitalen Auftritt.
                Einfach zu bedienen, professionell in der Wirkung.
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
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
                <PieChart className="w-6 h-6 text-blue-400" />
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

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <p className="text-blue-400 text-sm">
                  <strong>Kein Risiko:</strong> Sie zahlen nur bei erfolgreichen Verkäufen.
                  Keine versteckten Kosten, keine langen Vertragslaufzeiten.
                </p>
              </div>
            </motion.div>
          </div>
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
              So einfach geht&apos;s
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Kontakt aufnehmen', desc: 'Füllen Sie das Formular aus oder rufen Sie uns an.' },
              { step: '2', title: 'Onboarding', desc: 'Wir richten Ihr Dashboard ein und schulen Ihr Team.' },
              { step: '3', title: 'Sortiment hochladen', desc: 'Laden Sie Ihre Produkte hoch oder nutzen Sie unseren Import.' },
              { step: '4', title: 'Loslegen', desc: 'Ihr Supermarkt ist live und Kunden können bei Ihnen einkaufen.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
              <Store className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Bereit durchzustarten?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Kontaktieren Sie uns jetzt und werden Sie Teil von FEELY.
                Wir freuen uns auf Sie!
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
                Oder schreiben Sie uns an: <a href="mailto:hello@feelyapp.de" className="text-blue-400 hover:underline">hello@feelyapp.de</a>
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
