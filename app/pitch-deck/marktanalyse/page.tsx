'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  BarChart3,
  Download,
  TrendingUp,
  Target,
  Zap,
  Users,
  Building2,
  ShoppingCart,
  Activity,
  Globe,
  ArrowRight,
  PieChart,
  Lightbulb,
  Heart
} from 'lucide-react'

const analysisparts = [
  {
    id: 'tam-sam-som',
    icon: Target,
    iconColor: 'text-green-400',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/20',
    headline: 'Der €209 Milliarden Markt',
    teaser: 'Der deutsche Lebensmittelmarkt ist einer der größten weltweit. Aber wie viel davon ist für FEELY erreichbar? Diese Analyse quantifiziert den Total Addressable Market (TAM), den Serviceable Addressable Market (SAM) und den Serviceable Obtainable Market (SOM) – mit konkreten Zahlen für die ersten 5 Jahre.',
    keyFacts: [
      { label: 'TAM', value: '€209,7 Mrd.', sub: 'Lebensmittelumsatz Deutschland' },
      { label: 'SAM', value: '€31,5 Mrd.', sub: 'adressierbarer Markt' },
      { label: 'SOM Jahr 5', value: '€94 Mio.', sub: 'realistisches Ziel' },
    ],
    pdfUrl: '/feely-marktanalyse-tam-sam-som.pdf',
    pdfName: 'TAM-SAM-SOM Analyse'
  },
  {
    id: 'segmentierung',
    icon: PieChart,
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/20',
    headline: '36.565 Filialen. 27 Kategorien. Eine Plattform.',
    teaser: 'Wer sind die Player im deutschen Lebensmittelmarkt? Diese Analyse segmentiert den Markt nach Betriebsformen, Regionen und Kategorien. Von Edeka bis zum Hofladen, von Bayern bis Schleswig-Holstein – ein vollständiges Bild der Marktstruktur.',
    keyFacts: [
      { label: 'LEH-Filialen', value: '36.565', sub: 'in Deutschland' },
      { label: 'Top 5 Händler', value: '75%', sub: 'Marktanteil' },
      { label: 'Direktvermarkter', value: '30.000+', sub: 'Hofläden & mehr' },
    ],
    pdfUrl: '/feely-marktanalyse-segmentierung.pdf',
    pdfName: 'Marktsegmentierung'
  },
  {
    id: 'trends',
    icon: Zap,
    iconColor: 'text-purple-400',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/20',
    headline: '6 Megatrends. 1 perfektes Timing.',
    teaser: 'KI-Revolution, Personalisierung, Digital Health, Online-Lebensmittelhandel – sechs Megatrends konvergieren und schaffen ein einzigartiges Zeitfenster. Diese Analyse zeigt, warum FEELY exakt an der Schnittstelle aller relevanten Entwicklungen positioniert ist.',
    keyFacts: [
      { label: 'Retailer-Meinung', value: '83%', sub: 'KI ist erfolgsentscheidend' },
      { label: 'Personalisierte Ernährung', value: '+17,2%', sub: 'CAGR bis 2034' },
      { label: 'Online-Lebensmittel', value: '€18 Mrd.', sub: 'bis 2030' },
    ],
    pdfUrl: '/feely-marktanalyse-trends.pdf',
    pdfName: 'Markttrends'
  },
  {
    id: 'zielgruppen',
    icon: Users,
    iconColor: 'text-orange-400',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/20',
    headline: '70 Millionen potenzielle Nutzer. Ein Ökosystem.',
    teaser: 'FEELY ist mehr als eine App – es ist ein komplettes Ökosystem. B2C für jeden Verbraucher, B2B als Plattform und Software für Märkte, B2B2C mit Krankenkassen und Gesundheitspartnern. Diese Analyse zeigt alle Stakeholder und warum die Zielgruppe im Grunde jeder ist, der Lebensmittel kauft.',
    keyFacts: [
      { label: 'B2C', value: '70 Mio.', sub: 'potenzielle Nutzer' },
      { label: 'B2B', value: '96.000+', sub: 'Märkte & Händler' },
      { label: 'B2B2C', value: '96 Kassen', sub: '& 55.000 Ärzte' },
    ],
    pdfUrl: '/feely-marktanalyse-zielgruppen.pdf',
    pdfName: 'Zielgruppen & Ökosystem'
  },
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
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium text-sm">Vollständige Marktanalyse</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Marktanalyse
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Der deutsche Lebensmittelmarkt im Detail – mit TAM/SAM/SOM, Segmentierung, Trends und Zielgruppenanalyse. Alle Zahlen mit Quellenangaben als PDF zum Download.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {analysisparts.map((part) => (
            <a
              key={part.id}
              href={`#${part.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all text-sm text-gray-300 hover:text-white`}
            >
              <part.icon className={`w-4 h-4 ${part.iconColor}`} />
              {part.id === 'tam-sam-som' ? 'TAM/SAM/SOM' : part.id === 'segmentierung' ? 'Segmentierung' : part.id === 'trends' ? 'Trends' : 'Zielgruppen'}
            </a>
          ))}
        </motion.div>

        {/* Analysis Parts */}
        <div className="space-y-8">
          {analysisparts.map((part, index) => (
            <motion.section
              key={part.id}
              id={part.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`glass rounded-3xl p-8 bg-gradient-to-br ${part.bgGradient} border ${part.borderColor}`}
            >
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-white/10`}>
                    <part.icon className={`w-8 h-8 ${part.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Teil {index + 1} von 4</div>
                    <h2 className="text-2xl md:text-3xl font-black text-white">
                      {part.headline}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Teaser Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-4xl">
                {part.teaser}
              </p>

              {/* Key Facts */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {part.keyFacts.map((fact, factIndex) => (
                  <div
                    key={factIndex}
                    className="bg-black/30 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                  >
                    <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
                    <div className={`text-3xl font-black ${part.iconColor} mb-1`}>
                      {fact.value}
                    </div>
                    <div className="text-gray-400 text-sm">{fact.sub}</div>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <a
                href={part.pdfUrl}
                download
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all group`}
              >
                <Download className={`w-5 h-5 ${part.iconColor} group-hover:scale-110 transition-transform`} />
                <div className="text-left">
                  <div className="text-white font-semibold">{part.pdfName} herunterladen</div>
                  <div className="text-gray-400 text-sm">Vollständige PDF-Analyse</div>
                </div>
              </a>
            </motion.section>
          ))}
        </div>

        {/* Summary Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 glass rounded-3xl p-8 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 border border-green-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Das Gesamtbild
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              FEELY adressiert einen riesigen Markt mit perfektem Timing und klarer Zielgruppe
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl font-black gradient-text mb-2">€209,7 Mrd.</div>
              <div className="text-gray-400 text-sm">Gesamtmarkt Deutschland</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-black gradient-text mb-2">36.565</div>
              <div className="text-gray-400 text-sm">Potenzielle Partner-Filialen</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-black gradient-text mb-2">6</div>
              <div className="text-gray-400 text-sm">Konvergierende Megatrends</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-black gradient-text mb-2">70 Mio.</div>
              <div className="text-gray-400 text-sm">Potenzielle B2C-Nutzer</div>
            </div>
          </div>

          {/* All PDFs Download */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              {analysisparts.map((part) => (
                <a
                  key={part.id}
                  href={part.pdfUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-sm"
                >
                  <Download className={`w-4 h-4 ${part.iconColor}`} />
                  <span className="text-gray-300">{part.pdfName}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

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
