'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Target,
  Brain,
  Shield,
  Rocket,
  BarChart3,
  CheckCircle,
  Mail,
  FileText,
  Leaf,
  Globe,
  Zap,
  DollarSign,
  PieChart,
  Phone,
  Building,
  Award,
  Heart,
  ShoppingCart,
  Smartphone,
  Lock,
  ArrowRight,
  Star,
  Clock,
  TrendingDown,
  Percent,
  Sparkles,
  Activity
} from 'lucide-react'

const marketStats = [
  { value: '€209,7 Mrd.', label: 'Lebensmittelmarkt Deutschland', sub: 'EHI Retail Institute 2024' },
  { value: '~€11 Mrd.', label: 'Online-Lebensmittelhandel', sub: '→ €18 Mrd. bis 2030 (PwC)' },
  { value: '70 Mio.', label: 'Potenzielle B2C-Nutzer', sub: 'In Deutschland' },
  { value: '96.000+', label: 'Potenzielle B2B-Partner', sub: 'Märkte & Händler' },
]

const competitors = [
  { name: 'REWE / EDEKA Apps', what: 'Eigenes Sortiment', adv: 'Alle Händler + Gesundheit' },
  { name: 'Flink / Gorillas', what: 'Schnelle Stadtlieferung', adv: 'Auch ländlich + Gesundheit' },
  { name: 'MyFitnessPal / Yazio', what: 'Manuelles Tracking', adv: 'Automatisch beim Einkauf' },
  { name: 'Instacart (USA)', what: 'Universeller Zugang', adv: 'Europa + KI-Gesundheit' },
]

const advantages = [
  {
    icon: Brain,
    title: 'Proprietäre KI-Technologie',
    description: 'Selbst entwickelte KI-Agenten für komplett individuelle Analyse – keine starren Kategorien. Kein Wettbewerber bietet Vergleichbares.',
    metric: 'Eigene KI-Agenten',
  },
  {
    icon: Target,
    title: 'First-Mover in DACH',
    description: 'Keine direkte Konkurrenz mit unserem Feature-Set. Kombination aus Gesundheit, Regionalität und Transparenz ist einzigartig.',
    metric: '0 direkte Konkurrenten',
  },
  {
    icon: Users,
    title: 'Zweiseitiger Marktplatz',
    description: 'B2C (Endkunden) + B2B (Märkte/Hofläden) + B2B2C (Krankenkassen). Netzwerkeffekte schaffen nachhaltigen Burggraben.',
    metric: '3x Monetarisierung',
  },
  {
    icon: Lock,
    title: 'Starke Datenbindung',
    description: 'Gesundheitsdaten, Allergieprofile, Einkaufshistorie und Präferenzen erzeugen Lock-in-Effekte und exzellente Retention.',
    metric: 'Hohe Switching Costs',
  },
]

const revenueStreams = [
  { name: 'Premium-Abo', price: '€9,99/Monat', desc: 'Personalisierte KI-Analyse', icon: Star },
  { name: 'Transaktionsgebühren', price: '3–5%', desc: 'Provision auf Bestellungen', icon: ShoppingCart },
  { name: 'Händler-Dashboard', price: '€49–199/Monat', desc: 'Plattformzugang & Analytics', icon: BarChart3 },
  { name: 'Promoted Products', price: 'CPM / CPC', desc: 'Werbung & Sichtbarkeit', icon: Zap },
  { name: 'B2B Insights', price: 'Enterprise', desc: 'Daten für Krankenkassen & Industrie', icon: PieChart },
]

const milestones = [
  {
    phase: 'Aktuell – Seed',
    status: 'live',
    funding: '€500K–750K',
    goals: [
      'App vollständig entwickelt',
      'App Store Einreichung erfolgt',
      'Eigenes KI-System entwickelt',
      'Website & Pitch Deck live',
    ],
  },
  {
    phase: '2025 – Launch',
    status: 'planned',
    funding: 'Post-Seed',
    goals: [
      'Erste Partner-Märkte onboarden',
      '5.000+ aktive Nutzer',
      'Product-Market-Fit validieren',
      'Team auf 10+ skalieren',
    ],
  },
  {
    phase: '2026 – Wachstum',
    status: 'planned',
    funding: 'Series A',
    goals: [
      '500+ Supermärkte & Hofläden',
      '50.000+ aktive Nutzer',
      'Premium-Launch mit KI-Features',
      'Expansion in weitere Städte',
    ],
  },
  {
    phase: '2027+ – Expansion',
    status: 'planned',
    funding: 'Series B',
    goals: [
      'Deutschlandweite Abdeckung',
      'Expansion nach AT & CH',
      '250.000+ aktive Nutzer',
      'Break-even erreichen',
    ],
  },
]

const useOfFunds = [
  { category: 'Team', percent: 50, color: 'green', desc: 'CTO, Partnerships, Nutrition' },
  { category: 'Technologie', percent: 25, color: 'blue', desc: 'Infrastruktur & KI-Ausbau' },
  { category: 'Marketing', percent: 20, color: 'purple', desc: 'Launch & Nutzerakquise' },
  { category: 'Operations', percent: 5, color: 'orange', desc: 'Büro, Legal, Admin' },
]

const whyNow = [
  { icon: TrendingUp, text: 'Online-Lebensmittel wächst auf €18 Mrd. bis 2030' },
  { icon: Heart, text: 'Gesundheitsbewusstsein auf Allzeithoch' },
  { icon: Brain, text: '83% der Retailer sagen: KI ist erfolgsentscheidend' },
  { icon: Leaf, text: 'Nachhaltigkeits-Trend stärkt regionale Hofläden' },
  { icon: Activity, text: 'Personalisierte Ernährung +17,2% CAGR bis 2034' },
  { icon: Globe, text: 'Keine etablierte Plattform vereint Gesundheit + Regional' },
]

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function PartnerPage() {
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
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2.5 mb-8">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Partner & Investoren</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">Gestalten Sie mit uns die </span>
              <span className="gradient-text">Zukunft des Einkaufs</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              FEELY baut das Instacart für Europa – mit KI-Gesundheitsintelligenz.
              Eine Plattform für jeden Supermarkt und Hofladen in Deutschland.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link
                href="/partner-zugang"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <Mail className="w-5 h-5" />
                <span>Pitch Deck anfordern</span>
              </Link>
              <Link
                href="/zugang"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
              >
                <Lock className="w-5 h-5" />
                <span>Zugangscode eingeben</span>
              </Link>
            </div>

            {/* Key metrics banner */}
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '€209,7 Mrd.', label: 'Lebensmittelmarkt DE' },
                  { value: '70 Mio.', label: 'Potenzielle Nutzer' },
                  { value: '36.565', label: 'Partner-Filialen' },
                  { value: '0', label: 'Direkte Konkurrenz' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-green-400 mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instacart Proof Point */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="glass rounded-2xl p-6 md:p-8 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Bewiesenes Modell: Instacart (USA)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong className="text-blue-400">$33,5 Mrd.</strong> Transaktionsvolumen,{' '}
                    <strong className="text-blue-400">$3,38 Mrd.</strong> Umsatz,{' '}
                    <strong className="text-blue-400">294 Mio.</strong> Bestellungen,{' '}
                    <strong className="text-blue-400">14,4 Mio.</strong> aktive Nutzer.
                    Der europäische Markt ist noch weitgehend unerschlossen – und Instacart hat keine Gesundheitsintelligenz.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Marktchance</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Der perfekte Zeitpunkt
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                6 Megatrends konvergieren und schaffen ein einzigartiges Zeitfenster
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {marketStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-green-500/20 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-1 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Why Now */}
            <div className="glass rounded-3xl p-8 md:p-12 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Warum jetzt der richtige Zeitpunkt ist
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyNow.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">Wettbewerb</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Niemand kombiniert alle Dimensionen
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                FEELY vereint erstmals Convenience, Gesundheit und Regionalität
              </p>
            </div>

            <div className="glass rounded-2xl overflow-hidden border border-white/5">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Wettbewerber</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Was sie bieten</th>
                    <th className="text-left py-4 px-6 text-green-400 font-medium text-sm">FEELY-Vorteil</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, index) => (
                    <motion.tr
                      key={comp.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-6">
                        <span className="font-bold text-white">{comp.name}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-400">{comp.what}</td>
                      <td className="py-4 px-6">
                        <span className="text-green-400 font-medium">{comp.adv}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              Detaillierte Analyse mit Feature-Matrix verfügbar im{' '}
              <Link href="/pitch-deck/vergleichsanalyse" className="text-green-400 hover:text-green-300 transition-colors">
                Pitch Deck → Vergleichsanalyse
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Differenzierung</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Unser Wettbewerbsvorteil
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 border border-white/5 hover:border-green-500/20 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                      <span className="text-green-400 text-xs font-bold">{item.metric}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Geschäftsmodell</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                5 Umsatzströme
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Diversifizierte Einnahmen von B2C, B2B und B2B2C
              </p>
            </div>

            {/* Revenue Streams */}
            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {revenueStreams.map((stream, index) => (
                <motion.div
                  key={stream.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass rounded-2xl p-6 text-center border border-white/5 hover:border-green-500/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stream.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-green-400 font-bold text-sm mb-1">{stream.name}</div>
                  <div className="text-white font-black text-lg mb-1">{stream.price}</div>
                  <div className="text-gray-500 text-xs">{stream.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Use of Funds */}
            <div className="glass rounded-3xl p-8 border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Mittelverwendung</h3>
                <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5">
                  <span className="text-green-400 font-bold text-sm">Seed: €500K–750K</span>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {useOfFunds.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`text-4xl font-black mb-2 ${
                      item.color === 'green' ? 'text-green-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      item.color === 'purple' ? 'text-purple-400' :
                      'text-orange-400'
                    }`}>
                      {item.percent}%
                    </div>
                    <div className="text-white font-medium mb-1">{item.category}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">Roadmap</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Unser Weg
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass rounded-2xl p-6 border ${
                    milestone.status === 'live'
                      ? 'border-green-500/40 bg-green-500/5'
                      : 'border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      milestone.status === 'live'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-white/10 text-gray-400'
                    }`}>
                      {milestone.status === 'live' ? 'Aktuell' : 'Geplant'}
                    </span>
                    <span className="text-green-400 font-bold text-sm">{milestone.funding}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{milestone.phase}</h3>
                  <div className="space-y-2">
                    {milestone.goals.map((goal) => (
                      <div key={goal} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aktueller Status */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Status</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Was bereits steht
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                FEELY ist kein Konzept – das Produkt existiert
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { area: 'App-Entwicklung', status: 'Vollständig fertig' },
                { area: 'Website', status: 'Live' },
                { area: 'App Store', status: 'Eingereicht' },
                { area: 'KI-System', status: 'Eigene Agenten' },
                { area: 'Gesundheitsprofil', status: 'Ohne Begrenzung' },
                { area: 'Händler-Dashboard', status: 'Komplett' },
                { area: 'Demo-Integration', status: 'Lokale Märkte' },
                { area: 'Datenbanken', status: 'Eigenentwickelt' },
              ].map((item) => (
                <motion.div
                  key={item.area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-green-500/5 border border-green-500/20 rounded-xl p-4 text-center"
                >
                  <div className="text-white font-medium text-sm mb-1">{item.area}</div>
                  <div className="text-green-400 text-xs flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {item.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeIn}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-white/5"
          >
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">
              Das Team hinter FEELY
            </h2>
            <p className="text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
              Gegründet von <strong className="text-white">Julian Seidel</strong> – das komplette Ökosystem eigenständig entwickelt.
              Autodidaktischer Entwickler mit persönlicher Motivation durch eigene Unverträglichkeiten.
            </p>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm">
              Aktiv gesucht als Mitgründer: CTO / Tech Lead, Head of Partnerships, Head of Nutrition
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Full-Stack Entwicklung', 'UX/UI Design', 'KI-Systeme', 'Produkt-Vision', 'Startup-DNA'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Warum jetzt investieren?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Riesiger Markt',
                  points: ['€209,7 Mrd. Marktvolumen', '70 Mio. potenzielle Nutzer', '96.000+ potenzielle B2B-Partner'],
                },
                {
                  icon: Zap,
                  title: 'Einzigartige Position',
                  points: ['Keine direkte Konkurrenz', 'First-Mover in DACH', 'Instacart beweist das Modell'],
                },
                {
                  icon: Rocket,
                  title: 'Produkt existiert',
                  points: ['App vollständig entwickelt', 'Eigene KI-Agenten', 'Frühester Einstieg möglich'],
                },
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 text-center border border-white/5"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{highlight.title}</h3>
                  <div className="space-y-2">
                    {highlight.points.map((point) => (
                      <div key={point} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeIn}
            className="animated-border rounded-3xl"
          >
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <Rocket className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Gestalten Sie mit uns die Zukunft
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                Wir suchen strategische Partner und Investoren, die unsere Vision teilen.
                Lassen Sie uns in einem persönlichen Gespräch die Möglichkeiten besprechen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:partner@feelyapp.de?subject=Investment%20Anfrage"
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

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Pitch Deck verfügbar</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>Financial Model verfügbar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Founder Meetings möglich</span>
                </div>
              </div>
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
