'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Store,
  Leaf,
  Users,
  TrendingUp,
  BarChart3,
  Bell,
  Package,
  Shield,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  Zap,
  Target,
  PieChart,
  Smartphone,
  MessageSquare,
  Star,
  Truck,
  CreditCard,
  Heart
} from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Tausende neue Kunden',
    description: 'Erreichen Sie gesundheitsbewusste Kunden, die aktiv nach Ihren Produkten suchen.',
  },
  {
    icon: Smartphone,
    title: 'Digitale Präsenz',
    description: 'Ihr komplettes Sortiment professionell präsentiert - modern und ansprechend.',
  },
  {
    icon: Bell,
    title: 'Direkte Kommunikation',
    description: 'Push-Benachrichtigungen über Angebote, neue Produkte oder Aktionen.',
  },
  {
    icon: TrendingUp,
    title: 'Umsatzsteigerung',
    description: 'Mehr Sichtbarkeit = mehr Kunden = mehr Umsatz. Messbar und nachvollziehbar.',
  },
  {
    icon: Package,
    title: 'Weniger Verschwendung',
    description: 'Verkaufen Sie ablaufende Produkte gezielt an interessierte Kunden.',
  },
  {
    icon: BarChart3,
    title: 'Detaillierte Analysen',
    description: 'Verstehen Sie Ihre Kunden mit umfassenden Verkaufs- und Verhaltensanalysen.',
  },
  {
    icon: Shield,
    title: 'Vertrauensbildung',
    description: 'Transparenz schafft Vertrauen - zeigen Sie Ihre Qualität.',
  },
  {
    icon: Heart,
    title: 'Kundenbindung',
    description: 'Treue Kunden durch personalisierte Empfehlungen und Gesundheitsfeatures.',
  },
]

const partnerTypes = [
  {
    icon: Store,
    title: 'Supermärkte',
    description: 'Große Sortimente, viele Kunden, maximale Reichweite',
    features: [
      'Komplettes Sortiment digital',
      'Echtzeit-Bestandsverwaltung',
      'Angebote & Rabattaktionen',
      'Click & Collect / Lieferung',
      'Detaillierte Analytics',
    ],
    href: '/partner/supermaerkte',
    color: 'blue',
  },
  {
    icon: Leaf,
    title: 'Hofläden',
    description: 'Regional, frisch, nachhaltig - direkt vom Erzeuger',
    features: [
      'Saisonale Produkte hervorheben',
      'Öffnungszeiten flexibel',
      'Vorbestellungen ermöglichen',
      'Fotos von frischer Ware',
      'Faire Konditionen',
    ],
    href: '/partner/hoflaeden',
    color: 'green',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Kontakt aufnehmen',
    description: 'Füllen Sie das Formular aus oder rufen Sie uns an. Wir melden uns innerhalb von 24 Stunden.',
  },
  {
    step: '2',
    title: 'Persönliches Gespräch',
    description: 'Wir besprechen Ihre Anforderungen und zeigen Ihnen alle Möglichkeiten.',
  },
  {
    step: '3',
    title: 'Onboarding & Setup',
    description: 'Wir richten Ihr Dashboard ein, importieren Produkte und schulen Ihr Team.',
  },
  {
    step: '4',
    title: 'Loslegen & Wachsen',
    description: 'Ihr Geschäft ist live! Kunden finden Sie und Sie steigern Ihren Umsatz.',
  },
]

const features = [
  { icon: Package, text: 'Produktverwaltung' },
  { icon: BarChart3, text: 'Verkaufsstatistiken' },
  { icon: Bell, text: 'Push-Nachrichten' },
  { icon: MessageSquare, text: 'Kunden-Chat' },
  { icon: Star, text: 'Bewertungen' },
  { icon: Truck, text: 'Lieferverwaltung' },
  { icon: CreditCard, text: 'Zahlungsabwicklung' },
  { icon: Target, text: 'Marketing-Tools' },
]

const faqs = [
  {
    question: 'Was kostet die Partnerschaft mit FEELY?',
    answer: 'Es gibt keine Einrichtungsgebühr und keine monatliche Grundgebühr. Sie zahlen nur eine faire Provision bei erfolgreichen Verkäufen. Keine versteckten Kosten.',
  },
  {
    question: 'Wie lange dauert die Einrichtung?',
    answer: 'In der Regel sind Sie innerhalb von 1-2 Wochen startklar. Bei großen Sortimenten kann es etwas länger dauern. Wir unterstützen Sie bei jedem Schritt.',
  },
  {
    question: 'Muss ich eine App installieren?',
    answer: 'Sie erhalten Zugang zu unserem Web-Dashboard, das auf jedem Gerät funktioniert. Optional gibt es eine Partner-App für unterwegs.',
  },
  {
    question: 'Wie werden meine Produkte importiert?',
    answer: 'Wir unterstützen verschiedene Importmethoden: CSV-Upload, API-Anbindung an Ihr Warenwirtschaftssystem oder manuelle Eingabe.',
  },
  {
    question: 'Kann ich meine Preise selbst festlegen?',
    answer: 'Selbstverständlich! Sie haben die volle Kontrolle über Ihre Preise, Angebote und Rabattaktionen.',
  },
  {
    question: 'Wie erreiche ich den Support?',
    answer: 'Unser Support-Team ist per E-Mail, Telefon und Chat erreichbar. Partner erhalten bevorzugten Support.',
  },
]

export default function AnbieterPage() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <Store className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Für Anbieter</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Werden Sie Teil der </span>
              <span className="gradient-text">Einkaufs-Revolution</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Ob Supermarkt oder Hofladen - mit FEELY erreichen Sie tausende neue Kunden,
              steigern Ihren Umsatz und werden Teil einer wachsenden Community.
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

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Partner-Betriebe' },
              { value: '10.000+', label: 'Produkte online' },
              { value: '95%', label: 'Zufriedenheit' },
              { value: '0€', label: 'Einrichtung' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Welcher Partner-Typ sind Sie?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Egal ob großer Supermarkt oder kleiner Hofladen - wir haben die passende Lösung.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-3xl p-8 card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color === 'blue' ? 'from-blue-500 to-indigo-600' : 'from-green-500 to-emerald-600'} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>

                <div className="space-y-3 mb-8">
                  {type.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 ${type.color === 'blue' ? 'text-blue-400' : 'text-green-400'} flex-shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={type.href}
                  className={`inline-flex items-center gap-2 ${type.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 'text-green-400 hover:text-green-300'} font-medium transition-colors`}
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Ihr persönliches Partner-Dashboard
              </h2>
              <p className="text-gray-400 mb-8">
                Verwalten Sie Ihr Geschäft von überall. Unser intuitives Dashboard gibt Ihnen
                die volle Kontrolle über Produkte, Bestellungen und Kundeninteraktionen.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-3"
                  >
                    <feature.icon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">{feature.text}</span>
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
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Faire Konditionen</h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Einrichtungsgebühr', value: 'Kostenlos' },
                  { label: 'Monatliche Gebühr', value: 'Keine' },
                  { label: 'Provision', value: 'Fair & transparent' },
                  { label: 'Vertragslaufzeit', value: 'Monatlich kündbar' },
                  { label: 'Support', value: 'Inklusive' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <p className="text-green-400 text-sm">
                  <strong>Kein Risiko:</strong> Sie zahlen nur bei erfolgreichen Verkäufen.
                  Keine versteckten Kosten, keine langen Bindungen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              In 4 Schritten zum Erfolg
            </h2>
            <p className="text-xl text-gray-400">
              So einfach werden Sie FEELY Partner
            </p>
          </motion.div>

          <div className="space-y-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <div className="glass rounded-2xl p-6 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Häufige Fragen
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
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
              <Store className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Bereit, Ihr Geschäft zu digitalisieren?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Kontaktieren Sie uns jetzt für ein unverbindliches Gespräch.
                Wir zeigen Ihnen, wie FEELY Ihr Geschäft voranbringt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:partner@feelyapp.de"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>partner@feelyapp.de</span>
                </a>
                <a
                  href="tel:+4917668263213"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>+49 17668263213</span>
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
