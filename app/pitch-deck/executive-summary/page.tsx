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
  Download,
  AlertTriangle,
  Building,
  ShoppingCart,
  Heart,
  Zap,
  Globe,
  BarChart3,
  Shield,
  Clock,
  FileText
} from 'lucide-react'

export default function ExecutiveSummaryPage() {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="FEELY"
              width={64}
              height={64}
              className="drop-shadow-xl"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Executive Summary
          </h1>
          <p className="text-gray-400 mb-6">
            Das Wichtigste zu FEELY auf einen Blick
          </p>

          {/* Download Button */}
          <a
            href="/feely-executive-summary.pdf"
            download="FEELY-Executive-Summary.pdf"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-500/25"
          >
            <Download className="w-5 h-5" />
            PDF herunterladen
          </a>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* 60 Sekunden Überblick */}
          <section className="glass rounded-2xl p-6 border border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-400" />
              Das Wichtigste in 60 Sekunden
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              FEELY ist ein <strong className="text-white">komplettes Ökosystem</strong>, das den deutschen Lebensmittelmarkt (€209,7 Mrd.) transformiert:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-green-400 font-bold mb-1">Für Konsumenten</div>
                <p className="text-gray-400 text-sm">Eine App für jeden Supermarkt und Hofladen</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-blue-400 font-bold mb-1">Für Händler</div>
                <p className="text-gray-400 text-sm">Plattform, Verkaufskanal und Software in einem</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-purple-400 font-bold mb-1">Für die Gesellschaft</div>
                <p className="text-gray-400 text-sm">Bessere Gesundheit durch personalisierte Ernährung</p>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
              <p className="text-green-400 text-sm">
                <strong>Instacart beweist in den USA:</strong> $33,5 Mrd. Transaktionsvolumen, 294 Mio. Bestellungen.
                FEELY bringt das nach Europa – aber besser, mit KI-Gesundheitsintelligenz.
              </p>
            </div>
          </section>

          {/* Vision */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-green-400" />
              1. Die Vision
            </h2>

            <blockquote className="border-l-4 border-green-500 pl-4 mb-4">
              <p className="text-xl text-green-400 italic font-medium">
                "Eat like your life depends on it. Because it does."
              </p>
            </blockquote>

            <p className="text-gray-300 leading-relaxed">
              FEELY macht jeden Menschen zum Ernährungsexperten – ohne Studium, einfach durch den normalen Einkauf.
              Dieselbe Mahlzeit kann für einen Menschen perfekt und für einen anderen schädlich sein.
              <strong className="text-white"> FEELY baut die Infrastruktur für KI-personalisierte Ernährung.</strong>
            </p>
          </section>

          {/* Problem */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              2. Das Problem
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Markt-Probleme */}
              <div>
                <h3 className="text-red-400 font-bold mb-3 text-sm">Markt-Probleme</h3>
                <div className="space-y-2">
                  {[
                    { problem: 'Fragmentierter Markt', impact: '5-8 Apps pro Haushalt' },
                    { problem: 'Ländliche Unterversorgung', impact: '47 Mio. ohne digitale Lösungen' },
                    { problem: 'Zeitverschwendung', impact: '100+ Stunden/Jahr' },
                    { problem: 'Fehlendes Ernährungswissen', impact: 'Zutatenlisten kryptisch' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm bg-white/5 rounded-lg p-2">
                      <span className="text-gray-300">{item.problem}</span>
                      <span className="text-red-400 font-medium">{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gesundheitskrise */}
              <div>
                <h3 className="text-red-400 font-bold mb-3 text-sm">Gesundheitskrise durch Fehlernährung</h3>
                <div className="space-y-2">
                  {[
                    { problem: 'Übergewicht', data: '53% der Erwachsenen' },
                    { problem: 'Diabetes Typ 2', data: '8,7 Mio. + 450k/Jahr neu' },
                    { problem: 'Allergiker ohne Schutz', data: '23+ Mio. Menschen' },
                    { problem: 'Kosten Gesundheitssystem', data: '€17 Mrd./Jahr' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-sm bg-white/5 rounded-lg p-2">
                      <span className="text-gray-300">{item.problem}</span>
                      <span className="text-red-400 font-medium">{item.data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Lösung - 5 Dimensionen */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              3. Die Lösung: Das FEELY-Ökosystem
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Konsumenten-Plattform',
                  icon: ShoppingCart,
                  color: 'green',
                  features: ['Universeller Zugang', 'Lieferung oder Abholung', 'Echtzeit-Sortiment', 'Alle Angebote']
                },
                {
                  title: 'Händler-Plattform',
                  icon: Building,
                  color: 'blue',
                  features: ['Digitale Präsenz sofort', 'Eigenes Dashboard', 'Kundenkommunikation', '24/7 Verkaufskanal']
                },
                {
                  title: 'Software-Lösung (SaaS)',
                  icon: BarChart3,
                  color: 'orange',
                  features: ['Warenwirtschaft', 'Ablaufmanagement', 'Analytics', 'Auto-Nachbestellung']
                },
                {
                  title: 'KI-Gesundheits-Intelligenz',
                  icon: Brain,
                  color: 'purple',
                  features: ['Individuelles Profil', 'KI-Agenten analysieren', 'Auto-Warnungen', 'Personalisierte Tipps'],
                  highlight: true
                },
                {
                  title: 'Gesellschaftlicher Impact',
                  icon: Heart,
                  color: 'red',
                  features: ['Deutschland gesünder', 'Information statt Verbote', 'Prävention statt Reaktion']
                },
              ].map((dim) => (
                <div
                  key={dim.title}
                  className={`bg-white/5 rounded-xl p-4 ${dim.highlight ? 'ring-2 ring-purple-500/50 bg-purple-500/10' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <dim.icon className={`w-5 h-5 text-${dim.color}-400`} />
                    <h4 className="font-bold text-white text-sm">{dim.title}</h4>
                    {dim.highlight && <span className="text-xs bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded-full">USP</span>}
                  </div>
                  <ul className="space-y-1">
                    {dim.features.map((f, i) => (
                      <li key={i} className="text-gray-400 text-xs flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Markt */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              4. Der Markt
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { value: '€209,7 Mrd.', label: 'Lebensmittelmarkt DE', source: 'EHI 2024' },
                { value: '~€11 Mrd.', label: 'Online 2025', source: 'Statista' },
                { value: '€18 Mrd.', label: 'Online 2030', source: 'PwC' },
                { value: '8%', label: 'Jährliches Wachstum', source: 'PwC' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-lg font-black text-green-400">{stat.value}</div>
                  <div className="text-gray-300 text-xs">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.source}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-white font-bold text-sm mb-2">Zielgruppen</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                {[
                  'Allergiker: 23+ Mio.',
                  'Ländliche Bevölkerung: 47 Mio.',
                  'Gesundheitsbewusste: ~35 Mio.',
                  'Menschen mit wenig Zeit',
                  'Kleine Händler: ~15.000',
                  'Theoretisch: Jeder Mensch'
                ].map((z, i) => (
                  <span key={i} className="text-gray-400">• {z}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Instacart Proof */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-400" />
              5. Proof of Concept: Instacart (USA)
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {[
                { value: '$33,5 Mrd.', label: 'Transaktionsvolumen' },
                { value: '$3,38 Mrd.', label: 'Umsatz (+11% YoY)' },
                { value: '294 Mio.', label: 'Bestellungen' },
                { value: '14,4 Mio.', label: 'Aktive Nutzer' },
                { value: '1.200+', label: 'Händler-Partner' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-lg font-black text-blue-400">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
              <p className="text-green-400 text-sm">
                <strong>FEELY-Vorteil:</strong> Instacart hat keine Gesundheitsintelligenz.
                FEELY = Convenience + KI-Gesundheit = Alleinstellungsmerkmal in Europa.
              </p>
            </div>
          </section>

          {/* Geschäftsmodell */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-400" />
              6. Geschäftsmodell (5 Umsatzströme)
            </h2>

            <div className="grid md:grid-cols-5 gap-3">
              {[
                { name: 'Premium-Abo', price: '€9,99/Monat', desc: 'Personalisierte KI-Analyse' },
                { name: 'Transaktionen', price: '3-5%', desc: 'Provision auf Bestellungen' },
                { name: 'Händler-Dashboard', price: '€49-199/Monat', desc: 'Plattformzugang' },
                { name: 'Promoted Products', price: 'CPM/CPC', desc: 'Werbung' },
                { name: 'B2B Insights', price: 'Enterprise', desc: 'Daten für Krankenkassen' },
              ].map((stream) => (
                <div key={stream.name} className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-green-400 font-bold text-sm">{stream.name}</div>
                  <div className="text-white font-black">{stream.price}</div>
                  <div className="text-gray-500 text-xs">{stream.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Wettbewerb */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-orange-400" />
              7. Wettbewerb
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-gray-400">Wettbewerber</th>
                    <th className="text-left py-2 text-gray-400">Was sie bieten</th>
                    <th className="text-left py-2 text-green-400">FEELY-Vorteil</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { comp: 'REWE, EDEKA Apps', offer: 'Eigenes Sortiment', adv: 'Alle Händler + Gesundheit' },
                    { comp: 'Flink, Gorillas', offer: 'Schnelle Stadtlieferung', adv: 'Auch ländlich + Gesundheit' },
                    { comp: 'MyFitnessPal, Yazio', offer: 'Manuelles Tracking', adv: 'Automatisch beim Einkauf' },
                    { comp: 'Instacart', offer: 'Universeller Zugang (USA)', adv: 'Europa + KI-Gesundheit' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-2 font-medium">{row.comp}</td>
                      <td className="py-2 text-gray-400">{row.offer}</td>
                      <td className="py-2 text-green-400">{row.adv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-400 text-sm mt-4">
              <strong className="text-white">Niemand kombiniert alle 5 Dimensionen.</strong>
            </p>
          </section>

          {/* Status */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              8. Aktueller Status
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { area: 'App-Entwicklung', status: '✓ Vollständig fertig' },
                { area: 'Website', status: '✓ Live' },
                { area: 'App Store', status: '✓ Eingereicht' },
                { area: 'KI-System', status: '✓ Eigene Agenten' },
                { area: 'Gesundheitsprofil', status: '✓ Ohne Begrenzung' },
                { area: 'Händler-Dashboard', status: '✓ Komplett' },
                { area: 'Demo-Integration', status: '✓ Lokale Märkte' },
                { area: 'Datenbanken', status: '✓ Eigenentwickelt' },
              ].map((item) => (
                <div key={item.area} className="bg-green-500/10 rounded-xl p-3 border border-green-500/20">
                  <div className="text-white font-medium text-sm">{item.area}</div>
                  <div className="text-green-400 text-xs">{item.status}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-xl p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Was uns einzigartig macht:</strong> Selbst entwickelte KI-Agenten für komplett individuelle Analyse – keine starren Kategorien.
              </p>
            </div>
          </section>

          {/* Team */}
          <section className="glass rounded-2xl p-6">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-yellow-400" />
              9. Team
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-green-400 font-bold mb-3">Gründer</h3>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="font-bold text-white">Julian Seidel – Founder & CEO</div>
                  <ul className="text-gray-400 text-sm mt-2 space-y-1">
                    <li>• Komplettes Ökosystem eigenständig entwickelt</li>
                    <li>• Autodidaktischer Entwickler mit Fokus auf UX</li>
                    <li>• Persönliche Motivation durch eigene Unverträglichkeiten</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-3">Gesucht – Mitgründer</h3>
                <div className="space-y-2">
                  {['CTO / Tech Lead', 'Head of Partnerships', 'Head of Nutrition'].map((role) => (
                    <div key={role} className="bg-white/5 rounded-lg p-2 text-gray-300 text-sm">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment */}
          <section className="glass rounded-2xl p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-green-400" />
              10. Investment
            </h2>

            <div className="text-center mb-6">
              <div className="text-3xl font-black gradient-text mb-1">€500.000 – €750.000</div>
              <div className="text-gray-400">Seed-Runde</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3 text-sm">Mittelverwendung</h4>
                <div className="space-y-2">
                  {[
                    { cat: 'Team', pct: '50%' },
                    { cat: 'Technologie', pct: '25%' },
                    { cat: 'Marketing', pct: '20%' },
                    { cat: 'Operations', pct: '5%' },
                  ].map((item) => (
                    <div key={item.cat} className="flex justify-between text-sm bg-white/5 rounded-lg p-2">
                      <span className="text-gray-300">{item.cat}</span>
                      <span className="text-green-400 font-bold">{item.pct}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-3 text-sm">Warum jetzt investieren?</h4>
                <ul className="space-y-1 text-sm">
                  {[
                    'Frühester Einstieg – niedrigste Bewertung',
                    'Produkt existiert – kein Konzept-Risiko',
                    'Bewiesener Markt – Instacart $33 Mrd.',
                    'First Mover in Europa',
                    'Riesiger Markt – €209 Mrd., 8% Wachstum'
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a
                href="/feely-executive-summary.pdf"
                download="FEELY-Executive-Summary.pdf"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                PDF herunterladen
              </a>
              <a
                href="mailto:partner@feelyapp.de?subject=Investment%20Anfrage"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Kontakt aufnehmen
              </a>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-white/10">
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
