'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Target,
  TrendingUp,
  Users,
  Brain,
  DollarSign,
  Rocket,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Download
} from 'lucide-react'

export default function ExecutiveSummaryPage() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.png"
              alt="FEELY"
              width={80}
              height={80}
              className="drop-shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Executive Summary
          </h1>
          <p className="text-gray-400">
            FEELY Pitch Deck - Zusammenfassung auf 2 Seiten
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Vision & Problem */}
          <section className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-green-400" />
              Vision & Problem
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-400 font-bold mb-3">Die Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  FEELY ist die erste Plattform, die jeden Supermarkt und Hofladen in Deutschland
                  vereint – mit personalisierter Gesundheitsintelligenz für jeden Einkauf.
                  Wir sind das <strong className="text-white">Instacart für Europa</strong>, aber mit einem
                  einzigartigen Fokus auf Gesundheit.
                </p>
              </div>

              <div>
                <h3 className="text-red-400 font-bold mb-3">Das Problem</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    5-8 Apps pro Haushalt für Lebensmitteleinkäufe
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    23+ Mio. Allergiker ohne Schutz beim Einkauf
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    15 Mio. Menschen auf dem Land ohne Lieferservice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    100+ Stunden Zeitverschwendung pro Jahr
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Markt */}
          <section className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-blue-400" />
              Marktchance
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { value: '€210+ Mrd.', label: 'Marktvolumen' },
                { value: '€8,6 → €17 Mrd.', label: 'Online-Wachstum' },
                { value: '26 Mio.', label: 'Zielgruppe' },
                { value: '0', label: 'Direkte Konkurrenz' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-xl md:text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-gray-300">
              Der deutsche Online-Lebensmittelmarkt verdoppelt sich bis 2029. Deutschland ist mit 4%
              Online-Anteil noch unterdigitalisiert (UK: 12%, Südkorea: 25%).
              <strong className="text-green-400"> FEELY positioniert sich als die Infrastruktur für dieses Wachstum.</strong>
            </p>
          </section>

          {/* Lösung */}
          <section className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Brain className="w-7 h-7 text-purple-400" />
              Die Lösung
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Multi-Retailer Plattform</strong>
                    <p className="text-gray-400 text-sm">Alle Supermärkte & Hofläden auf einer Plattform</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">KI-Gesundheitsanalyse</strong>
                    <p className="text-gray-400 text-sm">Personalisierte Produktbewertung basierend auf 50+ Gesundheitsfaktoren</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Barcode Scanner</strong>
                    <p className="text-gray-400 text-sm">Sofortige Analyse beim Einkauf vor Ort (&lt;1 Sekunde)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Hofläden-Integration</strong>
                    <p className="text-gray-400 text-sm">Erstmals digitaler Zugang zu 20.000+ Hofläden</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Geschäftsmodell */}
          <section className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <DollarSign className="w-7 h-7 text-green-400" />
              Geschäftsmodell
            </h2>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {[
                { name: 'Transaktionen', percent: '40%', desc: '3-15% Gebühr' },
                { name: 'Premium-Abo', percent: '25%', desc: '€3,99/Monat' },
                { name: 'Werbung', percent: '25%', desc: 'High-Intent Audience' },
                { name: 'B2B Services', percent: '10%', desc: 'Anbieter-Tools' },
              ].map((stream) => (
                <div key={stream.name} className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-black text-green-400">{stream.percent}</div>
                  <div className="text-white font-medium">{stream.name}</div>
                  <div className="text-gray-500 text-xs">{stream.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
              <p className="text-green-400 text-sm">
                <strong>Unit Economics:</strong> LTV/CAC Ratio von 12-18x (Branchenbenchmark: 3-5x).
                Positive Contribution Margin ab Tag 1.
              </p>
            </div>
          </section>

          {/* Traction & Team */}
          <section className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Users className="w-7 h-7 text-yellow-400" />
              Traction & Team
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-green-400 font-bold mb-3">Status Quo</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Komplette App (iOS & Android) fertig
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    KI-Engine mit 120+ Allergien, 80+ Krankheiten
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    3.100+ Produkte in Datenbank
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Website & Landing Pages live
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-3">Team-Aufbau</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Gegründet von Julian Seidel. Aktuell werden gesucht:
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• CTO / Tech Co-Founder (10-20% Equity)</li>
                  <li>• Head of Nutrition (5-10% Equity)</li>
                  <li>• CEO / Business Co-Founder (15-25% Equity)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Investment */}
          <section className="glass rounded-3xl p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <Rocket className="w-7 h-7 text-green-400" />
              Investment Opportunity
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-4xl font-black gradient-text mb-2">€250K – €500K</div>
                <div className="text-gray-400 mb-4">Seed-Runde</div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team (40%)</span>
                    <span className="text-white">CTO, erste Mitarbeiter</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wachstum (30%)</span>
                    <span className="text-white">Marketing, Partner-Akquise</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Produkt (20%)</span>
                    <span className="text-white">Infrastruktur, Features</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Operations (10%)</span>
                    <span className="text-white">Legal, Admin</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-300 mb-6">
                  Bereit, die Zukunft des Einkaufens mitzugestalten?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:partner@feelyapp.de?subject=Investment%20Anfrage"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Kontakt aufnehmen</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10">
            <Link
              href="/pitch-deck"
              className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Zurück zum Pitch Deck
            </Link>
            <Link
              href="/pitch-deck/marktanalyse"
              className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
            >
              Zur Marktanalyse
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
