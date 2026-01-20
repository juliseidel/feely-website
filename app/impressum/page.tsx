'use client'

import Link from 'next/link'
import { ArrowLeft, Building, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Impressum() {
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

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-medium text-sm">Rechtliches</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-12">
              Impressum
            </h1>

            <div className="legal-content space-y-8">
              <section>
                <h2>Angaben gemäß § 5 TMG</h2>
                <div className="glass rounded-xl p-6 mt-4">
                  <p>
                    <strong className="text-white">Julian Seidel</strong><br />
                    Kirchweg 3<br />
                    73485 Unterschneidheim<br />
                    Deutschland
                  </p>
                </div>
              </section>

              <section>
                <h2>Kontakt</h2>
                <p>
                  E-Mail: <a href="mailto:hello@feelyapp.de">hello@feelyapp.de</a><br />
                  Website: <a href="https://feelyapp.info">www.feelyapp.info</a>
                </p>
              </section>

              <section>
                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                  Julian Seidel<br />
                  Kirchweg 3<br />
                  73485 Unterschneidheim
                </p>
              </section>

              <section>
                <h2>EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p>
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2>Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2>Haftung für Links</h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p>
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </section>

              <section>
                <h2>Urheberrecht</h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2>Quellenangaben</h2>
                <p>
                  Icons: Lucide Icons (MIT License)<br />
                  Schriftart: Inter (OFL License)
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm">
                <strong>Letzte Aktualisierung:</strong> Januar 2026
              </p>
              <p className="text-gray-600 text-sm mt-2">
                © 2026 FEELY - Gesund Einkaufen. Alle Rechte vorbehalten.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple footer */}
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
