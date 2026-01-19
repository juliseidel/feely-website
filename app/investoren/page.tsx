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
  PieChart
} from 'lucide-react'

export default function InvestorenPage() {
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
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Investor Relations</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Investieren Sie in die </span>
              <span className="gradient-text">Zukunft des Einkaufs</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              FEELY revolutioniert den Lebensmittelmarkt - mit innovativer Technologie,
              einem bewährten Geschäftsmodell und enormem Wachstumspotenzial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:investors@feely.app"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Pitch Deck anfordern</span>
              </a>
              <a
                href="#kontakt"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                <span>Executive Summary</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Marktchance
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { value: '€380 Mrd.', label: 'Deutscher Lebensmittelmarkt', sub: 'Jährliches Volumen' },
                { value: '€12 Mrd.', label: 'Online-Lebensmittelhandel', sub: '+18% jährliches Wachstum' },
                { value: '23 Mio.', label: 'Menschen mit Allergien', sub: 'In Deutschland' },
                { value: '47%', label: 'Gesundheitsbewusste Käufer', sub: 'Bereit für Premium' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.sub}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Warum jetzt der richtige Zeitpunkt ist
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Online-Lebensmittelhandel wächst 5x schneller als stationärer Handel',
                      'Steigendes Gesundheitsbewusstsein nach der Pandemie',
                      'Zunehmende Diagnosen von Allergien und Unverträglichkeiten',
                      'Nachhaltigkeits-Trend begünstigt regionale Hofläden',
                      'Keine etablierte Plattform vereint alle diese Trends',
                    ].map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <Globe className="w-12 h-12 text-blue-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Internationale Vergleichswerte</h4>
                  <p className="text-gray-400 mb-4">
                    Instacart (USA) wurde mit $39 Mrd. bewertet - ohne vergleichbare Gesundheitsfeatures.
                    Der europäische Markt ist noch weitgehend unerschlossen.
                  </p>
                  <div className="text-sm text-gray-500">
                    Quelle: Instacart IPO 2023
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Unser Wettbewerbsvorteil
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Proprietäre KI-Technologie',
                  description: 'Wissenschaftlich fundierte Produktanalyse - kein Wettbewerber bietet vergleichbare personalisierte Gesundheitsfeatures.',
                  color: 'purple',
                },
                {
                  icon: Target,
                  title: 'First-Mover-Advantage',
                  description: 'Keine direkte Konkurrenz in DACH mit vergleichbarem Feature-Set. Hohe Markteintrittsbarrieren durch Daten-Lock-in.',
                  color: 'blue',
                },
                {
                  icon: Users,
                  title: 'Zweiseitiger Marktplatz',
                  description: 'Sowohl B2C (Endkunden) als auch B2B (Märkte/Hofläden) - Netzwerkeffekte schaffen nachhaltigen Burggraben.',
                  color: 'green',
                },
                {
                  icon: Shield,
                  title: 'Starke Kundenbindung',
                  description: 'Gesundheitsdaten, Allergieprofile und Präferenzen erzeugen hohe Switching Costs und exzellente Retention.',
                  color: 'cyan',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 card-hover"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Geschäftsmodell & Monetarisierung
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Revenue Streams */}
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Einnahmequellen</h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Transaktionsgebühren',
                      percent: '40%',
                      desc: '3-8% auf vermittelte Einkäufe',
                    },
                    {
                      title: 'Premium-Abonnements',
                      percent: '35%',
                      desc: '€4,99-9,99/Monat für KI-Features',
                    },
                    {
                      title: 'Anbieter-Pakete',
                      percent: '20%',
                      desc: 'Marketing-Tools & Analytics',
                    },
                    {
                      title: 'Data Insights (B2B)',
                      percent: '5%',
                      desc: 'Anonymisierte Marktanalysen',
                    },
                  ].map((stream) => (
                    <div key={stream.title} className="flex items-center gap-4">
                      <div className="w-16 text-right">
                        <span className="text-xl font-bold text-green-400">{stream.percent}</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                            style={{ width: stream.percent }}
                          />
                        </div>
                      </div>
                      <div className="w-48">
                        <p className="text-white font-medium text-sm">{stream.title}</p>
                        <p className="text-gray-500 text-xs">{stream.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unit Economics */}
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <PieChart className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Unit Economics (Ziel)</h3>
                </div>

                <div className="space-y-6">
                  {[
                    { label: 'CAC (Customer Acquisition Cost)', value: '€15-25' },
                    { label: 'LTV (Lifetime Value)', value: '€180-300' },
                    { label: 'LTV/CAC Ratio', value: '8-12x' },
                    { label: 'Payback Period', value: '2-3 Monate' },
                    { label: 'Gross Margin', value: '65-75%' },
                    { label: 'Monthly Churn (Premium)', value: '<3%' },
                  ].map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className="text-white font-bold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Roadmap & Meilensteine
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    phase: 'Phase 1 - Launch',
                    status: 'Aktuell',
                    items: [
                      'MVP mit Core-Features live',
                      '10+ Partner-Märkte onboarded',
                      'Product-Market-Fit validieren',
                      'Seed-Finanzierung abschließen',
                    ],
                    color: 'green',
                  },
                  {
                    phase: 'Phase 2 - Regionale Expansion',
                    status: '2025',
                    items: [
                      '100+ Supermärkte & Hofläden',
                      '10.000+ aktive Nutzer',
                      'Premium-Launch mit KI-Features',
                      'Series A vorbereiten',
                    ],
                    color: 'blue',
                  },
                  {
                    phase: 'Phase 3 - Nationale Skalierung',
                    status: '2026',
                    items: [
                      'Deutschlandweite Abdeckung',
                      '100.000+ aktive Nutzer',
                      'Break-even erreichen',
                      'Team auf 50+ skalieren',
                    ],
                    color: 'indigo',
                  },
                  {
                    phase: 'Phase 4 - Europäische Expansion',
                    status: '2027+',
                    items: [
                      'Expansion nach Österreich & Schweiz',
                      '500.000+ aktive Nutzer',
                      'Profitabilität erreichen',
                      'Weitere Märkte evaluieren',
                    ],
                    color: 'purple',
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative md:ml-16"
                  >
                    {/* Dot */}
                    <div className={`absolute -left-[4.5rem] top-6 w-6 h-6 rounded-full bg-${phase.color}-500 border-4 border-black hidden md:block`} />

                    <div className={`glass rounded-2xl p-6 border-l-4 border-${phase.color}-500`}>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === 'Aktuell'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-white/10 text-gray-400'
                        }`}>
                          {phase.status}
                        </span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <CheckCircle className={`w-4 h-4 text-${phase.color}-400 flex-shrink-0`} />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
              <Rocket className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Gestalten Sie mit uns die Zukunft
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Wir suchen strategische Partner und Investoren, die unsere Vision teilen.
                Lassen Sie uns sprechen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="mailto:investors@feely.app"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>investors@feely.app</span>
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
