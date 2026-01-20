'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AGB() {
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Rechtliches</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-gray-400 mb-12">
              Stand: Januar 2025
            </p>

            <div className="legal-content space-y-8">
              <section>
                <h2>1. Geltungsbereich</h2>
                <p>
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der FEELY-App und der Website feely.app (nachfolgend "Plattform"), betrieben von:
                </p>
                <p>
                  Julian Seidel<br />
                  Kirchweg 3<br />
                  73485 Unterschneidheim<br />
                  Deutschland<br /><br />
                  E-Mail: hello@feelyapp.de<br />
                  Telefon: +49 176 68263213
                </p>
                <p>
                  Die AGB gelten für alle Nutzer der Plattform, sowohl Konsumenten (Endnutzer) als auch Anbieter (Supermärkte, Hofläden).
                </p>
              </section>

              <section>
                <h2>2. Vertragsgegenstand</h2>
                <p>
                  FEELY bietet eine Plattform, die Konsumenten und Lebensmittelanbieter zusammenbringt. Die Plattform ermöglicht:
                </p>
                <ul>
                  <li>Das Durchsuchen von Produktsortimenten verschiedener Supermärkte und Hofläden</li>
                  <li>Personalisierte Gesundheitsanalysen und Produktempfehlungen</li>
                  <li>Die Bestellung von Produkten zur Abholung oder Lieferung</li>
                  <li>Kommunikation zwischen Konsumenten und Anbietern</li>
                  <li>Verwaltung von Allergien, Unverträglichkeiten und Gesundheitszielen</li>
                </ul>
                <p>
                  <strong>Wichtig:</strong> FEELY selbst ist kein Verkäufer von Lebensmitteln. Kaufverträge kommen ausschließlich zwischen dem Konsumenten und dem jeweiligen Anbieter zustande.
                </p>
              </section>

              <section>
                <h2>3. Registrierung und Nutzerkonto</h2>

                <h3>3.1 Registrierung</h3>
                <p>
                  Für die vollständige Nutzung der Plattform ist eine Registrierung erforderlich. Bei der Registrierung müssen Sie wahrheitsgemäße Angaben machen. Sie sind verpflichtet, Ihre Zugangsdaten geheim zu halten.
                </p>

                <h3>3.2 Mindestalter</h3>
                <p>
                  Die Nutzung der Plattform ist ab 16 Jahren gestattet. Personen unter 18 Jahren benötigen die Zustimmung eines Erziehungsberechtigten für Käufe.
                </p>

                <h3>3.3 Kontosperrung</h3>
                <p>
                  Wir behalten uns vor, Konten bei Verstößen gegen diese AGB zu sperren oder zu löschen.
                </p>
              </section>

              <section>
                <h2>4. FEELY Premium</h2>

                <h3>4.1 Leistungsumfang</h3>
                <p>
                  FEELY Premium bietet erweiterte Funktionen:
                </p>
                <ul>
                  <li>KI-gestützte Gesundheitsanalysen für jedes Produkt</li>
                  <li>Personalisierte Empfehlungen basierend auf Gesundheitszielen</li>
                  <li>Erweiterte Ernährungstracking-Funktionen</li>
                  <li>Werbefreie Nutzung</li>
                  <li>Prioritärer Support</li>
                </ul>

                <h3>4.2 Preise und Laufzeit</h3>
                <p>
                  Die aktuellen Preise für FEELY Premium sind in der App einsehbar. Abonnements verlängern sich automatisch, sofern Sie nicht mindestens 24 Stunden vor Ablauf kündigen.
                </p>

                <h3>4.3 Kündigung</h3>
                <p>
                  Sie können Ihr Premium-Abonnement jederzeit in den Einstellungen der App oder über den App Store/Google Play kündigen.
                </p>
              </section>

              <section>
                <h2>5. Bestellungen und Kaufverträge</h2>

                <h3>5.1 Vertragspartner</h3>
                <p>
                  Bei Bestellungen über die Plattform kommt der Kaufvertrag direkt zwischen Ihnen und dem jeweiligen Anbieter (Supermarkt/Hofladen) zustande. FEELY ist lediglich Vermittler.
                </p>

                <h3>5.2 Preise</h3>
                <p>
                  Die angezeigten Preise werden von den jeweiligen Anbietern festgelegt und können sich ändern. Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
                </p>

                <h3>5.3 Zahlung</h3>
                <p>
                  Die verfügbaren Zahlungsmethoden können je nach Anbieter variieren und werden im Bestellprozess angezeigt.
                </p>

                <h3>5.4 Lieferung und Abholung</h3>
                <p>
                  Die Lieferbedingungen und -kosten werden vom jeweiligen Anbieter festgelegt. Nicht alle Anbieter bieten Lieferung an.
                </p>
              </section>

              <section>
                <h2>6. Gesundheitsinformationen</h2>

                <h3>6.1 Keine medizinische Beratung</h3>
                <p>
                  <strong>Wichtiger Hinweis:</strong> Die in der App bereitgestellten Gesundheitsinformationen und KI-Analysen dienen ausschließlich zu Informationszwecken und ersetzen keine ärztliche Beratung, Diagnose oder Behandlung.
                </p>

                <h3>6.2 Eigenverantwortung</h3>
                <p>
                  Die Nutzung der Gesundheitsfeatures erfolgt auf eigene Verantwortung. Bei gesundheitlichen Beschwerden oder Fragen wenden Sie sich bitte an einen Arzt oder Ernährungsberater.
                </p>

                <h3>6.3 Allergiewarnungen</h3>
                <p>
                  Obwohl wir uns bemühen, genaue Allergeninformationen bereitzustellen, können wir keine Garantie für die Vollständigkeit oder Richtigkeit übernehmen. Überprüfen Sie im Zweifelsfall immer die Produktverpackung.
                </p>
              </section>

              <section>
                <h2>7. Haftung</h2>

                <h3>7.1 Haftung von FEELY</h3>
                <p>
                  FEELY haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
                </p>
                <p>
                  Im Übrigen haftet FEELY nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
                </p>

                <h3>7.2 Keine Haftung für Anbieter</h3>
                <p>
                  FEELY haftet nicht für die Qualität, Verfügbarkeit oder Lieferung der von Anbietern angebotenen Produkte.
                </p>

                <h3>7.3 Keine Haftung für Gesundheitsinformationen</h3>
                <p>
                  FEELY übernimmt keine Haftung für Entscheidungen, die auf Basis der bereitgestellten Gesundheitsinformationen getroffen werden.
                </p>
              </section>

              <section>
                <h2>8. Geistiges Eigentum</h2>
                <p>
                  Alle Inhalte der Plattform (Texte, Grafiken, Logos, Software) sind urheberrechtlich geschützt. Eine Nutzung über die bestimmungsgemäße Verwendung der Plattform hinaus ist nicht gestattet.
                </p>
              </section>

              <section>
                <h2>9. Verhaltensregeln</h2>
                <p>
                  Bei der Nutzung der Plattform ist es untersagt:
                </p>
                <ul>
                  <li>Falsche oder irreführende Informationen bereitzustellen</li>
                  <li>Die Plattform für illegale Zwecke zu nutzen</li>
                  <li>Automatisierte Systeme (Bots) ohne Genehmigung zu verwenden</li>
                  <li>Andere Nutzer zu belästigen oder zu täuschen</li>
                  <li>Sicherheitsmechanismen zu umgehen</li>
                </ul>
              </section>

              <section>
                <h2>10. Änderungen der AGB</h2>
                <p>
                  Wir behalten uns vor, diese AGB mit Wirkung für die Zukunft zu ändern. Über wesentliche Änderungen informieren wir Sie mindestens 30 Tage im Voraus. Die weitere Nutzung der Plattform nach Inkrafttreten der Änderungen gilt als Zustimmung.
                </p>
              </section>

              <section>
                <h2>11. Schlussbestimmungen</h2>

                <h3>11.1 Anwendbares Recht</h3>
                <p>
                  Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </p>

                <h3>11.2 Gerichtsstand</h3>
                <p>
                  Für Streitigkeiten mit Verbrauchern gilt der gesetzliche Gerichtsstand. Für Unternehmer ist der Sitz von FEELY Gerichtsstand.
                </p>

                <h3>11.3 Online-Streitbeilegung</h3>
                <p>
                  Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>

                <h3>11.4 Salvatorische Klausel</h3>
                <p>
                  Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
              </section>

              <section>
                <h2>12. Kontakt</h2>
                <p>
                  Bei Fragen zu diesen AGB kontaktieren Sie uns:
                </p>
                <p>
                  Julian Seidel<br />
                  E-Mail: hello@feelyapp.de<br />
                  Telefon: +49 176 68263213
                </p>
              </section>
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
