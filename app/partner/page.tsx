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
  Percent
} from 'lucide-react'

const marketStats = [
  { value: '€209,7 Mrd.', label: 'Deutscher Lebensmittelmarkt', sub: 'Jährliches Volumen 2024 (EHI)' },
  { value: '€8,6 Mrd.', label: 'Online-Lebensmittelhandel', sub: '+11% p.a. Wachstum (Mintel)' },
  { value: '23+ Mio.', label: 'Menschen mit Allergien/Unverträglichkeiten', sub: 'Allein in Deutschland' },
  { value: '67%', label: 'Wollen gesünder einkaufen', sub: 'Kaufbereitschaft für Premium' },
]

const competitors = [
  { name: 'Instacart (USA)', valuation: '$33,5 Mrd. Volumen', users: '14,4 Mio.', feature: 'Keine Gesundheitsfeatures' },
  { name: 'REWE/EDEKA Online', valuation: 'Eigenvertrieb', users: 'Einzelhändler', feature: 'Kein Multi-Retailer' },
  { name: 'Flink/Gorillas', valuation: 'Quick-Commerce', users: 'Stadtgebiet', feature: 'Keine Hofläden, kein Gesundheitsfokus' },
  { name: 'FEELY', valuation: 'Pre-Seed', users: 'Early Stage', feature: 'Gesundheit + Regional + KI' },
]

const advantages = [
  {
    icon: Brain,
    title: 'Proprietäre KI-Technologie',
    description: 'Einzigartige Gesundheitsanalyse auf Basis von Inhaltsstoffen, Allergenen und persönlichen Profilen. Kein Wettbewerber bietet Vergleichbares.',
    metric: '50+ Gesundheitsfaktoren',
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
    description: 'B2C (Endkunden) + B2B (Märkte/Hofläden). Netzwerkeffekte schaffen nachhaltigen Burggraben und hohe Switching Costs.',
    metric: '2x Monetarisierung',
  },
  {
    icon: Lock,
    title: 'Starke Datenbindung',
    description: 'Gesundheitsdaten, Allergieprofile, Einkaufshistorie und Präferenzen erzeugen Lock-in-Effekte und exzellente Retention.',
    metric: '<5% monatliche Churn',
  },
]

const revenueStreams = [
  { name: 'Transaktionsgebühren', percent: 40, desc: '3-5% Abholung / 10-15% Lieferung' },
  { name: 'Premium-Abos', percent: 25, desc: '€3,99/Monat oder €39,99/Jahr' },
  { name: 'Werbung & Partner', percent: 25, desc: 'Sponsored Products & Marketing-Pakete' },
  { name: 'B2B & Data Insights', percent: 10, desc: 'Anonymisierte Marktanalysen' },
]

const unitEconomics = [
  { label: 'Customer Acquisition Cost (CAC)', value: '€15-25', good: true },
  { label: 'Lifetime Value (LTV)', value: '€180-300', good: true },
  { label: 'LTV/CAC Ratio', value: '7-12x', good: true },
  { label: 'Payback Period', value: '3-4 Monate', good: true },
  { label: 'Gross Margin', value: '70-80%', good: true },
  { label: 'Monthly Churn (Premium)', value: '<4%', good: true },
]

const milestones = [
  {
    phase: 'Jahr 1 - Seed',
    status: 'live',
    funding: '€250-500K',
    goals: [
      'MVP mit Core-Features live',
      '20-50 Partner-Märkte & Hofläden',
      'Product-Market-Fit validieren',
      '1.000-5.000 aktive Nutzer',
    ],
  },
  {
    phase: 'Jahr 2 - Series A',
    status: 'planned',
    funding: '€2-5M',
    goals: [
      '100-500 Supermärkte & Hofläden',
      '50.000+ aktive Nutzer',
      'Premium-Launch mit KI-Features',
      '5-10% Premium-Conversion',
    ],
  },
  {
    phase: 'Jahr 3 - Wachstum',
    status: 'planned',
    funding: 'Profitabilität',
    goals: [
      'Deutschlandweite Abdeckung',
      '500.000+ aktive Nutzer',
      'Break-even erreichen',
      'Team auf 30-50 skalieren',
    ],
  },
  {
    phase: 'Jahr 4+ - Expansion',
    status: 'planned',
    funding: 'Series B',
    goals: [
      'Expansion nach AT & CH',
      '2 Mio.+ aktive Nutzer',
      'Profitabilität',
      'Weitere EU-Märkte',
    ],
  },
]

const useOfFunds = [
  { category: 'Team', percent: 50, color: 'green' },
  { category: 'Technologie', percent: 25, color: 'blue' },
  { category: 'Marketing', percent: 20, color: 'purple' },
  { category: 'Operations', percent: 5, color: 'orange' },
]

const whyNow = [
  { icon: TrendingUp, text: 'Online-Lebensmittel wächst mit +11% p.a. (Mintel)' },
  { icon: Heart, text: 'Gesundheitsbewusstsein auf Allzeithoch' },
  { icon: Smartphone, text: '95% der Deutschen nutzen Smartphones' },
  { icon: Leaf, text: 'Nachhaltigkeits-Trend stärkt regionale Hofläden' },
  { icon: TrendingDown, text: 'Große Player (Gorillas, Flink) fokussieren nur Quick-Commerce' },
  { icon: Globe, text: 'Keine etablierte Plattform vereint Gesundheit + Regional' },
]

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

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              FEELY revolutioniert den €209,7 Mrd. Lebensmittelmarkt mit innovativer Technologie,
              einzigartigem Gesundheitsfokus und enormem Wachstumspotenzial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/partner-zugang"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Pitch Deck anfordern</span>
              </Link>
              <Link
                href="/zugang"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                <span>Zugangscode eingeben</span>
              </Link>
            </div>

            {/* Key metrics banner */}
            <div className="glass rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '€209,7 Mrd.', label: 'Marktgröße' },
                  { value: '+11%', label: 'Online-Wachstum p.a.' },
                  { value: '23+ Mio.', label: 'Zielgruppe DE' },
                  { value: '0', label: 'Direkte Konkurrenz' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-green-400">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Die Marktchance
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Der perfekte Zeitpunkt für eine Disruption im Lebensmittelmarkt
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

            {/* Why Now */}
            <div className="glass rounded-3xl p-8 md:p-12">
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
                    className="flex items-start gap-3 bg-white/5 rounded-xl p-4"
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Wettbewerbsvergleich
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Wie sich FEELY von bestehenden Playern unterscheidet
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Unternehmen</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Bewertung</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Nutzer</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Differenzierung</th>
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
                      className={`border-b border-white/5 ${comp.name === 'FEELY' ? 'bg-green-500/10' : ''}`}
                    >
                      <td className="py-4 px-4">
                        <span className={`font-bold ${comp.name === 'FEELY' ? 'text-green-400' : 'text-white'}`}>
                          {comp.name}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{comp.valuation}</td>
                      <td className="py-4 px-4 text-gray-300">{comp.users}</td>
                      <td className="py-4 px-4">
                        <span className={comp.name === 'FEELY' ? 'text-green-400 font-medium' : 'text-gray-500'}>
                          {comp.feature}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 glass rounded-2xl p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Internationale Vergleichswerte</h4>
                  <p className="text-gray-400">
                    <strong className="text-white">Instacart</strong> erzielte 2024 ein Transaktionsvolumen von $33,5 Mrd.
                    und $3,38 Mrd. Umsatz - ohne Gesundheitsfeatures.
                    Der europäische Markt ist noch weitgehend unerschlossen.
                    Eine Plattform, die Gesundheit, Regionalität und Transparenz vereint, existiert noch nicht.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Unser Wettbewerbsvorteil
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Was FEELY einzigartig macht
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="bg-green-500/20 rounded-full px-3 py-1">
                      <span className="text-green-400 text-sm font-bold">{item.metric}</span>
                    </div>
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
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Geschäftsmodell & Finanzen
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Diversifizierte Einnahmen mit starken Unit Economics
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Revenue Streams */}
              <div className="glass rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Einnahmequellen</h3>
                </div>

                <div className="space-y-6">
                  {revenueStreams.map((stream) => (
                    <div key={stream.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">{stream.name}</span>
                        <span className="text-green-400 font-bold">{stream.percent}%</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden mb-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stream.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                        />
                      </div>
                      <p className="text-gray-500 text-sm">{stream.desc}</p>
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

                <div className="space-y-4">
                  {unitEconomics.map((metric) => (
                    <div key={metric.label} className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className={`font-bold ${metric.good ? 'text-green-400' : 'text-white'}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                  <p className="text-blue-400 text-sm">
                    <strong>Benchmark:</strong> Top-Performer im SaaS-Bereich haben LTV/CAC von 3-5x.
                    Unser Zielwert von 7-12x zeigt das enorme Potenzial.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Funds */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Mittelverwendung (Seed-Runde)</h3>
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
                    <div className="text-white font-medium">{item.category}</div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Roadmap & Meilensteine
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Unser Weg zum Marktführer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass rounded-2xl p-6 ${milestone.status === 'live' ? 'border-2 border-green-500/50' : ''}`}
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

      {/* Team Teaser */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">
              Das Team hinter FEELY
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Gegründet von Julian Seidel mit einer klaren Vision: Den Lebensmitteleinkauf
              gesünder, transparenter und nachhaltiger zu gestalten. Unterstützt von einem
              wachsenden Team aus Experten in Technologie, Gesundheit und E-Commerce.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Tech-Expertise', 'Gesundheits-Know-how', 'E-Commerce-Erfahrung', 'Startup-DNA'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Warum in FEELY investieren?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Riesiger Markt',
                  points: ['€209,7 Mrd. Marktvolumen', '+11% Online-Wachstum p.a.', '23+ Mio. Zielgruppe'],
                },
                {
                  icon: Zap,
                  title: 'Einzigartige Position',
                  points: ['Keine direkte Konkurrenz', 'First-Mover in DACH', 'Starke Differenzierung'],
                },
                {
                  icon: TrendingUp,
                  title: 'Starkes Potenzial',
                  points: ['7-12x LTV/CAC Ratio', 'Netzwerkeffekte', 'Hohe Skalierbarkeit'],
                },
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{highlight.title}</h3>
                  <div className="space-y-2">
                    {highlight.points.map((point) => (
                      <div key={point} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400">{point}</span>
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
