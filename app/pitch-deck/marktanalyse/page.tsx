'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  TrendingUp,
  Globe,
  Users,
  Building,
  ShoppingCart,
  ArrowRight,
  ExternalLink,
  BarChart3,
  Percent
} from 'lucide-react'

const marketData = [
  {
    category: 'Lebensmitteleinzelhandel Deutschland',
    stats: [
      { metric: 'Marktvolumen 2024', value: '€209,7 Mrd.', source: 'EHI Retail Institute' },
      { metric: 'Prognose 2025', value: '€218,7 Mrd.', source: 'Statista' },
      { metric: 'Prognose 2030', value: '€267 Mrd.', source: 'Statista' },
      { metric: 'Jährliches Wachstum', value: '~3-4%', source: 'Statista' },
    ],
  },
  {
    category: 'Online-Lebensmittelhandel',
    stats: [
      { metric: 'Marktvolumen 2024', value: '€8,6 Mrd.', source: 'Statista' },
      { metric: 'Prognose 2029', value: '€17 Mrd.', source: 'Statista' },
      { metric: 'Wachstum 5 Jahre', value: '+97%', source: 'Berechnet' },
      { metric: 'Jährliches Wachstum', value: '+11% p.a.', source: 'Mintel' },
      { metric: 'Online-Anteil 2024', value: '~4%', source: 'McKinsey' },
      { metric: 'Online-Anteil Prognose', value: '10%+', source: 'McKinsey' },
    ],
  },
  {
    category: 'Internationale Vergleiche',
    stats: [
      { metric: 'UK Online-Anteil', value: '12%', source: 'IGD' },
      { metric: 'Südkorea Online-Anteil', value: '25%', source: 'Statista' },
      { metric: 'China Online-Anteil', value: '20%+', source: 'McKinsey' },
      { metric: 'USA Online-Anteil', value: '~10%', source: 'eMarketer' },
    ],
  },
]

const infrastructureData = [
  { value: '36.565', label: 'Lebensmittelgeschäfte', sub: 'in Deutschland (EHI 2024)' },
  { value: '~10.900', label: 'Supermärkte', sub: 'bis 2.500 qm' },
  { value: '~1.270', label: 'Große Supermärkte', sub: '2.500-5.000 qm' },
  { value: '~16.000', label: 'Discounter', sub: 'Aldi, Lidl, Penny, etc.' },
  { value: '20.000-25.000', label: 'Hofläden', sub: 'Bauernverband' },
  { value: '17 Mio.', label: 'Hofladen-Käufer', sub: 'IfD Allensbach 2024' },
]

const targetGroups = [
  {
    group: 'Allergiker',
    size: '23+ Mio.',
    source: 'RKI / Bundestag',
    description: 'Deutsche mit diagnostizierter allergischer Erkrankung',
  },
  {
    group: 'Allergische Erkrankungen (12 Monate)',
    size: '30,9%',
    source: 'RKI 2019/2020',
    description: 'Erwachsene mit allergischer Erkrankung in den letzten 12 Monaten',
  },
  {
    group: 'Lebensmittelunverträglichkeiten',
    size: '15-20%',
    source: 'DGE',
    description: '12-17 Millionen Menschen',
  },
  {
    group: 'Diabetiker',
    size: '7+ Mio.',
    source: 'Deutsche Diabetes Hilfe',
    description: 'Typ 1 und Typ 2 Diabetes',
  },
  {
    group: 'Gesundheitsbewusste',
    size: '~50%',
    source: 'Diverse Umfragen',
    description: 'Wollen sich gesünder ernähren',
  },
  {
    group: 'Gen Z Fokus auf Gesundheit',
    size: '45%',
    source: 'McKinsey 2025',
    description: 'Höchste Absicht, sich auf gesunde Ernährung zu konzentrieren',
  },
]

const instacartData = [
  { metric: 'Gross Transaction Value (GTV)', value: '$33,5 Mrd.', note: '2024' },
  { metric: 'Revenue', value: '$3,38 Mrd.', note: '+11% YoY' },
  { metric: 'Profit', value: '$457 Mio.', note: 'nach -$1,6 Mrd. Verlust 2023' },
  { metric: 'Bestellungen', value: '294 Mio.', note: '2024' },
  { metric: 'Aktive Nutzer', value: '14,4 Mio.', note: 'Monthly Active' },
  { metric: 'Retail-Partner', value: '1.800+', note: 'Ketten' },
  { metric: 'Angeschlossene Stores', value: '100.000', note: 'Filialen' },
  { metric: 'Höchstbewertung', value: '$39 Mrd.', note: '2021' },
  { metric: 'Aktuelle Bewertung', value: '$8,9 Mrd.', note: 'nach Marktkorrektur' },
]

export default function MarktanalysePage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Detaillierte Analyse</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Marktanalyse
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alle Zahlen und Fakten zum deutschen Lebensmittelmarkt mit Quellenangaben
          </p>
        </motion.div>

        {/* Market Data Sections */}
        <div className="space-y-12">
          {marketData.map((section, sectionIndex) => (
            <motion.section
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                {sectionIndex === 0 && <ShoppingCart className="w-7 h-7 text-green-400" />}
                {sectionIndex === 1 && <TrendingUp className="w-7 h-7 text-blue-400" />}
                {sectionIndex === 2 && <Globe className="w-7 h-7 text-purple-400" />}
                {section.category}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.stats.map((stat) => (
                  <div key={stat.metric} className="bg-white/5 rounded-xl p-4">
                    <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                    <div className="text-white font-medium text-sm">{stat.metric}</div>
                    <div className="text-gray-500 text-xs mt-1">Quelle: {stat.source}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Infrastructure */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Building className="w-7 h-7 text-yellow-400" />
              Infrastruktur in Deutschland
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {infrastructureData.map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-4">
                  <div className="text-2xl font-black text-yellow-400 mb-1">{item.value}</div>
                  <div className="text-white font-medium text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-green-500/10 rounded-xl p-4 border border-green-500/20">
              <p className="text-green-400">
                <strong>Fazit:</strong> Die Infrastruktur existiert. Die Geschäfte sind da. Die Kunden sind da.
                Was fehlt ist die VERBINDUNG – eine Plattform die alles zusammenbringt.
              </p>
            </div>
          </motion.section>

          {/* Target Groups */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Users className="w-7 h-7 text-red-400" />
              Zielgruppen mit besonderem Bedarf
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {targetGroups.map((item) => (
                <div key={item.group} className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-white font-bold">{item.group}</div>
                    <div className="text-2xl font-black text-red-400">{item.size}</div>
                  </div>
                  <div className="text-gray-400 text-sm mb-1">{item.description}</div>
                  <div className="text-gray-500 text-xs">Quelle: {item.source}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
              <p className="text-blue-400">
                <strong>Wichtig:</strong> Gesundheit wird zum Lifestyle. Generation Z hat die größte Absicht (45%),
                sich auf gesunde Ernährung zu konzentrieren. (Quelle: McKinsey State of Grocery 2025)
              </p>
            </div>
          </motion.section>

          {/* Instacart Reference */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Percent className="w-7 h-7 text-green-400" />
              Instacart Referenz – Der Beweis aus den USA
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {instacartData.map((item) => (
                <div key={item.metric} className="bg-white/5 rounded-xl p-4">
                  <div className="text-xl font-black text-white mb-1">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.metric}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
              <h3 className="text-green-400 font-bold mb-3">FEELY vs. Instacart</h3>
              <p className="text-gray-300 mb-4">
                Instacart hat bewiesen, dass das Modell funktioniert. Aber Instacart hat KEINE:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Personalisierte Gesundheitsanalyse</li>
                <li>• Allergen-Warnungen</li>
                <li>• KI-gestützte Ernährungsberatung</li>
                <li>• Fokus auf ländliche Regionen</li>
                <li>• Hofläden-Integration</li>
              </ul>
              <p className="text-green-400 font-bold mt-4">
                FEELY = Instacart + Gesundheitsintelligenz = Größerer adressierbarer Markt
              </p>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass rounded-3xl p-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20"
          >
            <h2 className="text-2xl font-black text-white mb-6">
              Zusammenfassung der Marktchance
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">€210+ Mrd.</div>
                <div className="text-gray-400">Gesamtmarkt</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">+97%</div>
                <div className="text-gray-400">Online-Wachstum bis 2029</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black gradient-text mb-2">26+ Mio.</div>
                <div className="text-gray-400">Zielgruppe mit akutem Bedarf</div>
              </div>
            </div>

            <p className="text-gray-300 text-center mt-8">
              Der Zeitpunkt ist JETZT. Der Markt wächst. Die Konkurrenz existiert nicht.
              FEELY baut die Infrastruktur für die nächste Dekade des Lebensmittelhandels.
            </p>
          </motion.section>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 mt-12 border-t border-white/10">
          <Link
            href="/pitch-deck/executive-summary"
            className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Executive Summary
          </Link>
          <Link
            href="/pitch-deck/einwand-katalog"
            className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            Zum Einwand-Katalog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
