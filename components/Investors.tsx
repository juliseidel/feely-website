'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  TrendingUp,
  Users,
  Globe,
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Rocket,
  Shield,
  Brain
} from 'lucide-react'
import Link from 'next/link'

const marketStats = [
  {
    value: '€209,7 Mrd.',
    label: 'Deutscher Lebensmittelmarkt',
    growth: 'Volumen 2024 (EHI)',
  },
  {
    value: '€8,6 Mrd.',
    label: 'Online-Lebensmittelhandel DE',
    growth: '+11% p.a. (Mintel)',
  },
  {
    value: '47%',
    label: 'Nutzer mit Gesundheitsfokus',
    growth: 'steigend',
  },
  {
    value: '23+ Mio.',
    label: 'Menschen mit Allergien/Unverträglichkeiten',
    growth: 'in Deutschland',
  },
]

const uspPoints = [
  {
    icon: Brain,
    title: 'Einzigartige KI-Technologie',
    description: 'Wissenschaftlich fundierte Produktanalyse - kein Wettbewerber bietet vergleichbare Gesundheitsfeatures.',
  },
  {
    icon: Target,
    title: 'Unbesetzter Markt',
    description: 'Keine direkte Konkurrenz in Deutschland. Instacart zeigt das Potenzial - wir gehen weiter.',
  },
  {
    icon: Users,
    title: 'Zweiseitiger Marktplatz',
    description: 'Sowohl B2C (Konsumenten) als auch B2B (Märkte) - mehrere Einnahmequellen.',
  },
  {
    icon: Shield,
    title: 'Starke Kundenbindung',
    description: 'Personalisierte Gesundheitsdaten schaffen Lock-in-Effekt und hohe Retention.',
  },
]

const roadmap = [
  { phase: 'Phase 1', title: 'Launch & Validierung', status: 'active' },
  { phase: 'Phase 2', title: 'Regionale Expansion', status: 'upcoming' },
  { phase: 'Phase 3', title: 'Nationale Skalierung', status: 'upcoming' },
  { phase: 'Phase 4', title: 'Europäische Expansion', status: 'upcoming' },
]

export default function Investors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-blue-950/10 to-black">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Für Partner</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Investieren Sie in die </span>
            <span className="gradient-text">Zukunft des Einkaufs</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            FEELY vereint einen Milliardenmarkt mit innovativer Technologie und einem
            klaren Weg zur Profitabilität.
          </p>
        </motion.div>

        {/* Market stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
              <div className="inline-flex items-center gap-1 text-green-400 text-xs font-medium">
                <TrendingUp className="w-3 h-3" />
                <span>{stat.growth}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* USPs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Warum FEELY?
            </h3>

            <div className="space-y-6">
              {uspPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-5 glass rounded-xl card-hover"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Roadmap & Business Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Business Model */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-green-400" />
                Geschäftsmodell
              </h3>

              <div className="space-y-4">
                {[
                  { label: 'Transaktionsgebühren', desc: 'Provision auf vermittelte Einkäufe' },
                  { label: 'Premium-Abos', desc: 'Erweiterte KI-Analysen für Endnutzer' },
                  { label: 'Partner-Pakete', desc: 'Marketing-Tools für Anbieter' },
                  { label: 'Daten-Insights', desc: 'Anonymisierte Marktanalysen (B2B)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{item.label}</span>
                      <span className="text-gray-500 text-sm block">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-purple-400" />
                Roadmap
              </h3>

              <div className="space-y-4">
                {roadmap.map((item, index) => (
                  <div
                    key={item.phase}
                    className={`flex items-center gap-4 p-3 rounded-xl ${
                      item.status === 'active'
                        ? 'bg-green-500/10 border border-green-500/30'
                        : 'bg-white/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      item.status === 'active'
                        ? 'bg-green-500 text-white'
                        : 'bg-white/10 text-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <span className={`text-xs font-medium ${
                        item.status === 'active' ? 'text-green-400' : 'text-gray-500'
                      }`}>
                        {item.phase}
                      </span>
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                    {item.status === 'active' && (
                      <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        Aktuell
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="animated-border inline-block rounded-3xl">
            <div className="glass rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Interesse an einer Partnerschaft?
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Wir suchen strategische Partner und Investoren, die mit uns die Zukunft
                des Lebensmitteleinkaufs gestalten wollen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/partner" className="btn-primary inline-flex items-center justify-center gap-2">
                  <span>Pitch Deck anfordern</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="#kontakt" className="btn-secondary">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
