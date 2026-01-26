'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  GitCompare,
  CheckCircle,
  X,
  ArrowRight,
  Minus,
  Target,
  Brain,
  MapPin,
  Users,
  Zap
} from 'lucide-react'

const competitors = [
  {
    name: 'REWE / EDEKA Apps',
    type: 'Supermarkt-Apps',
    description: 'Eigene Apps der großen Supermarktketten',
    strengths: [
      'Etablierte Marke',
      'Direkte Kundenbeziehung',
      'Großes Sortiment',
    ],
    weaknesses: [
      'Nur eigene Produkte',
      'Keine Gesundheitsanalyse',
      'Keine Hofläden',
      'Keine ländlichen Regionen',
    ],
    multiRetailer: false,
    healthAnalysis: false,
    farmShops: false,
    ruralAreas: false,
  },
  {
    name: 'Flink / Gorillas',
    type: 'Quick-Commerce',
    description: 'Schnelle Lieferung in Städten',
    strengths: [
      '10-15 Min Lieferung',
      'Bequemlichkeit',
      'Starkes Marketing',
    ],
    weaknesses: [
      'Nur Großstädte',
      'Begrenztes Sortiment',
      'Nicht profitabel (Gorillas insolvent)',
      'Keine Gesundheitsfeatures',
    ],
    multiRetailer: false,
    healthAnalysis: false,
    farmShops: false,
    ruralAreas: false,
  },
  {
    name: 'TooGoodToGo',
    type: 'Food Waste App',
    description: 'Rettet Lebensmittel vor dem Wegwerfen',
    strengths: [
      'Starke Mission',
      'Gute Nutzerakzeptanz',
      'Nachhaltigkeitsfokus',
    ],
    weaknesses: [
      'Kein normaler Einkauf',
      'Nur Überraschungstüten',
      'Keine Produktauswahl',
      'Keine Gesundheitsanalyse',
    ],
    multiRetailer: false,
    healthAnalysis: false,
    farmShops: 'partial',
    ruralAreas: 'partial',
  },
  {
    name: 'Yazio / MyFitnessPal',
    type: 'Ernährungs-Tracker',
    description: 'Kalorien- und Nährwert-Tracking',
    strengths: [
      'Große Nutzerbasis',
      'Gute Datenbank',
      'Bewährtes Modell',
    ],
    weaknesses: [
      'Kein Einkauf möglich',
      'Manuelle Eingabe nötig',
      'Keine Echtzeit-Analyse',
      'Keine Supermarkt-Integration',
    ],
    multiRetailer: false,
    healthAnalysis: 'partial',
    farmShops: false,
    ruralAreas: false,
  },
  {
    name: 'CodeCheck',
    type: 'Produkt-Scanner',
    description: 'Scannt Produkte auf Inhaltsstoffe',
    strengths: [
      'Gute Inhaltsstoff-Analyse',
      'Einfache Bedienung',
      'Community-Daten',
    ],
    weaknesses: [
      'Kein Einkauf möglich',
      'Nicht personalisiert',
      'Keine Supermarkt-Integration',
      'Keine Bestellung',
    ],
    multiRetailer: false,
    healthAnalysis: 'partial',
    farmShops: false,
    ruralAreas: false,
  },
  {
    name: 'FEELY',
    type: 'Health-Commerce Platform',
    description: 'Alle Supermärkte + Gesundheitsintelligenz',
    strengths: [
      'Multi-Retailer (einzigartig)',
      'Personalisierte KI-Analyse',
      'Hofläden-Integration',
      'Ländliche Regionen',
      'Barcode Scanner + Bestellung',
    ],
    weaknesses: [
      'Noch frühe Phase',
      'Muss Netzwerk aufbauen',
      'Team im Aufbau',
    ],
    multiRetailer: true,
    healthAnalysis: true,
    farmShops: true,
    ruralAreas: true,
    highlight: true,
  },
]

const featureComparison = [
  { feature: 'Multi-Retailer Plattform', description: 'Alle Supermärkte in einer App' },
  { feature: 'Personalisierte Gesundheitsanalyse', description: 'Basierend auf individuellem Profil' },
  { feature: 'Allergen-Warnungen', description: 'Automatische Warnung bei Risiko-Produkten' },
  { feature: 'Barcode Scanner', description: 'Produkte im Laden scannen' },
  { feature: 'Online-Bestellung', description: 'Direkt bestellen & liefern lassen' },
  { feature: 'Hofläden-Integration', description: 'Regionale Direktvermarkter' },
  { feature: 'Ländliche Regionen', description: 'Service auch außerhalb von Städten' },
  { feature: 'KI-Ernährungsberatung', description: 'Personalisierte Empfehlungen' },
  { feature: 'Budget-Tracking', description: 'Ausgaben im Blick behalten' },
  { feature: 'Lebensmittelrettung', description: 'Ablaufende Produkte günstiger' },
]

const uniqueAdvantages = [
  {
    icon: Target,
    title: 'Einzige Multi-Retailer Plattform',
    description: 'FEELY ist die einzige App in Deutschland, die ALLE Supermärkte und Hofläden vereint. Keine andere App kann das bieten, weil die Ketten nicht miteinander kooperieren.',
  },
  {
    icon: Brain,
    title: 'KI-Gesundheitsintelligenz',
    description: 'Während andere Apps nur Nährwerte zeigen, analysiert FEELY jedes Produkt basierend auf deinem persönlichen Gesundheitsprofil – Allergien, Unverträglichkeiten, Ziele.',
  },
  {
    icon: MapPin,
    title: 'Fokus auf ländliche Regionen',
    description: 'Quick-Commerce ignoriert das Land. FEELY bringt digitalen Lebensmitteleinkauf auch zu den 15 Millionen Menschen außerhalb der Großstädte.',
  },
  {
    icon: Users,
    title: 'Hofläden endlich digital',
    description: '20.000+ Hofläden haben keine digitale Präsenz. FEELY macht sie zum ersten Mal online sichtbar und bestellbar.',
  },
]

export default function VergleichsanalysePage() {
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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <GitCompare className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-medium text-sm">Wettbewerbsanalyse</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Vergleichsanalyse
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wie sich FEELY von bestehenden Lösungen unterscheidet und warum es keine direkte Konkurrenz gibt
          </p>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-black text-white mb-6">Feature-Vergleich</h2>

          <div className="glass rounded-2xl overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-2 text-gray-400 font-medium text-sm">REWE/EDEKA</th>
                  <th className="text-center py-4 px-2 text-gray-400 font-medium text-sm">Flink</th>
                  <th className="text-center py-4 px-2 text-gray-400 font-medium text-sm">TooGoodToGo</th>
                  <th className="text-center py-4 px-2 text-gray-400 font-medium text-sm">Yazio</th>
                  <th className="text-center py-4 px-2 text-gray-400 font-medium text-sm">CodeCheck</th>
                  <th className="text-center py-4 px-2 text-green-400 font-bold bg-green-500/10">FEELY</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((item, index) => (
                  <tr key={item.feature} className="border-b border-white/5">
                    <td className="py-3 px-4">
                      <div className="text-white font-medium text-sm">{item.feature}</div>
                      <div className="text-gray-500 text-xs">{item.description}</div>
                    </td>
                    {/* REWE/EDEKA */}
                    <td className="text-center py-3 px-2">
                      {index === 4 ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    {/* Flink */}
                    <td className="text-center py-3 px-2">
                      {[4].includes(index) ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    {/* TooGoodToGo */}
                    <td className="text-center py-3 px-2">
                      {[9].includes(index) ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : [5, 6].includes(index) ? (
                        <Minus className="w-5 h-5 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    {/* Yazio */}
                    <td className="text-center py-3 px-2">
                      {[1, 7, 8].includes(index) ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    {/* CodeCheck */}
                    <td className="text-center py-3 px-2">
                      {[3].includes(index) ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : [1, 2].includes(index) ? (
                        <Minus className="w-5 h-5 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                    {/* FEELY */}
                    <td className="text-center py-3 px-2 bg-green-500/10">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-400">Vorhanden</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-400">Teilweise</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="w-4 h-4 text-red-400" />
              <span className="text-gray-400">Nicht vorhanden</span>
            </div>
          </div>
        </motion.section>

        {/* Competitor Cards */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-black text-white mb-6">Detaillierte Analyse</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((comp, index) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`glass rounded-2xl p-6 ${comp.highlight ? 'border-2 border-green-500/50 bg-green-500/5' : ''}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    comp.highlight ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-gray-400'
                  }`}>
                    {comp.type}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${comp.highlight ? 'text-green-400' : 'text-white'}`}>
                  {comp.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{comp.description}</p>

                <div className="space-y-3">
                  <div>
                    <div className="text-green-400 text-xs font-medium mb-1">Stärken:</div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {comp.strengths.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-red-400 text-xs font-medium mb-1">Schwächen:</div>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {comp.weaknesses.map((w, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <X className="w-3 h-3 text-red-400" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-4 gap-2 text-center">
                  <div>
                    <div className="mb-1">
                      {comp.multiRetailer ? (
                        <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">Multi</div>
                  </div>
                  <div>
                    <div className="mb-1">
                      {comp.healthAnalysis === true ? (
                        <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                      ) : comp.healthAnalysis === 'partial' ? (
                        <Minus className="w-4 h-4 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">Health</div>
                  </div>
                  <div>
                    <div className="mb-1">
                      {comp.farmShops === true ? (
                        <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                      ) : comp.farmShops === 'partial' ? (
                        <Minus className="w-4 h-4 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">Hof</div>
                  </div>
                  <div>
                    <div className="mb-1">
                      {comp.ruralAreas === true ? (
                        <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                      ) : comp.ruralAreas === 'partial' ? (
                        <Minus className="w-4 h-4 text-yellow-400 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-red-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-gray-500 text-xs">Land</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Unique Advantages */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-black text-white mb-6">FEELYs einzigartige Vorteile</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {uniqueAdvantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
        >
          <div className="text-center">
            <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-black text-white mb-4">
              0 Direkte Konkurrenz
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              FEELY kombiniert als einzige Plattform Multi-Retailer-Zugang, personalisierte
              Gesundheitsanalyse, Hofläden-Integration und Service für ländliche Regionen.
              Diese Kombination existiert bei keinem anderen Anbieter.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">First-Mover Advantage gesichert</span>
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 mt-12 border-t border-white/10">
          <Link
            href="/pitch-deck/einwand-katalog"
            className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Zum Einwand-Katalog
          </Link>
          <Link
            href="/pitch-deck"
            className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            Zurück zum Pitch Deck
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
