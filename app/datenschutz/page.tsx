'use client'

import Link from 'next/link'
import { ArrowLeft, Shield, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Datenschutz() {
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
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Datenschutz</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-gray-400 mb-12">
              Stand: Januar 2025
            </p>

            <div className="legal-content space-y-8">
              <section>
                <h2>1. Verantwortlicher</h2>
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website und in der FEELY-App ist:
                </p>
                <p>
                  FEELY GmbH<br />
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland<br /><br />
                  E-Mail: datenschutz@feely.app<br />
                  Telefon: +49 123 456 789
                </p>
              </section>

              <section>
                <h2>2. Datenerfassung auf unserer Website und in der App</h2>

                <h3>2.1 Welche Daten erfassen wir?</h3>
                <p>
                  Wir erfassen verschiedene Arten von Daten, um unsere Dienste bereitzustellen und zu verbessern:
                </p>
                <ul>
                  <li><strong>Kontodaten:</strong> Name, E-Mail-Adresse, Passwort (verschlüsselt)</li>
                  <li><strong>Profildaten:</strong> Allergien, Unverträglichkeiten, Ernährungspräferenzen, Gesundheitsziele (nur wenn Sie diese freiwillig angeben)</li>
                  <li><strong>Nutzungsdaten:</strong> Einkaufshistorie, gescannte Produkte, gesuchte Artikel</li>
                  <li><strong>Gerätedaten:</strong> Gerätetyp, Betriebssystem, App-Version</li>
                  <li><strong>Standortdaten:</strong> Nur mit Ihrer ausdrücklichen Zustimmung für die Marktsuche</li>
                </ul>

                <h3>2.2 Wie erfassen wir Ihre Daten?</h3>
                <p>
                  Ihre Daten werden erhoben, wenn Sie:
                </p>
                <ul>
                  <li>Ein Konto erstellen oder sich anmelden</li>
                  <li>Ihr Profil mit Gesundheitsinformationen ergänzen</li>
                  <li>Produkte scannen oder suchen</li>
                  <li>Einkäufe tätigen oder Bestellungen aufgeben</li>
                  <li>Uns kontaktieren</li>
                  <li>Unsere App oder Website nutzen</li>
                </ul>

                <h3>2.3 Wofür nutzen wir Ihre Daten?</h3>
                <p>
                  Wir verwenden Ihre Daten für folgende Zwecke:
                </p>
                <ul>
                  <li>Bereitstellung und Verbesserung unserer Dienste</li>
                  <li>Personalisierte Produktempfehlungen basierend auf Ihren Präferenzen</li>
                  <li>Anzeige von Allergiewarnungen und Unverträglichkeitshinweisen</li>
                  <li>KI-gestützte Gesundheitsanalysen (nur Premium-Nutzer)</li>
                  <li>Kommunikation zu Ihrem Konto und unseren Diensten</li>
                  <li>Verbesserung der Nutzererfahrung durch anonymisierte Analysen</li>
                </ul>
              </section>

              <section>
                <h2>3. Gesundheitsdaten und besonderer Schutz</h2>
                <p>
                  Ihre Gesundheitsdaten (Allergien, Unverträglichkeiten, Krankheiten, Gesundheitsziele) unterliegen einem besonderen Schutz gemäß Art. 9 DSGVO. Diese Daten werden:
                </p>
                <ul>
                  <li><strong>Nur mit Ihrer ausdrücklichen Einwilligung</strong> verarbeitet</li>
                  <li><strong>Verschlüsselt</strong> gespeichert und übertragen</li>
                  <li><strong>Niemals an Dritte verkauft</strong> oder für Werbezwecke verwendet</li>
                  <li>Ausschließlich für die Bereitstellung personalisierter Gesundheitsfeatures genutzt</li>
                </ul>
                <p>
                  Sie können diese Daten jederzeit in Ihren Profileinstellungen einsehen, ändern oder löschen.
                </p>
              </section>

              <section>
                <h2>4. Datenweitergabe an Dritte</h2>
                <p>
                  Wir geben Ihre personenbezogenen Daten nur in folgenden Fällen weiter:
                </p>
                <ul>
                  <li><strong>Partnerunternehmen:</strong> Supermärkte und Hofläden erhalten nur die für die Bestellabwicklung notwendigen Daten (Name, Lieferadresse bei Lieferbestellungen)</li>
                  <li><strong>Zahlungsdienstleister:</strong> Zur Abwicklung von Zahlungen</li>
                  <li><strong>Hosting-Anbieter:</strong> Für den technischen Betrieb (Supabase, Vercel)</li>
                  <li><strong>Behörden:</strong> Nur bei gesetzlicher Verpflichtung</li>
                </ul>
                <p>
                  <strong>Wichtig:</strong> Gesundheitsdaten werden NIEMALS an Partnerunternehmen oder Dritte weitergegeben.
                </p>
              </section>

              <section>
                <h2>5. Cookies und Tracking</h2>
                <p>
                  Wir verwenden auf unserer Website:
                </p>
                <ul>
                  <li><strong>Essenzielle Cookies:</strong> Für die Funktion der Website notwendig</li>
                  <li><strong>Analyse-Cookies:</strong> Nur mit Ihrer Zustimmung, zur Verbesserung unserer Dienste</li>
                  <li><strong>Marketing-Cookies:</strong> Nur mit Ihrer Zustimmung</li>
                </ul>
                <p>
                  Sie können Ihre Cookie-Einstellungen jederzeit in unserem Cookie-Banner anpassen.
                </p>
              </section>

              <section>
                <h2>6. Ihre Rechte</h2>
                <p>
                  Nach der DSGVO haben Sie folgende Rechte:
                </p>
                <ul>
                  <li><strong>Auskunftsrecht (Art. 15):</strong> Sie können jederzeit Auskunft über Ihre gespeicherten Daten anfordern</li>
                  <li><strong>Berichtigungsrecht (Art. 16):</strong> Unrichtige Daten können Sie korrigieren lassen</li>
                  <li><strong>Löschungsrecht (Art. 17):</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                  <li><strong>Einschränkung der Verarbeitung (Art. 18):</strong> Sie können die Verarbeitung einschränken lassen</li>
                  <li><strong>Datenübertragbarkeit (Art. 20):</strong> Sie können Ihre Daten in maschinenlesbarem Format erhalten</li>
                  <li><strong>Widerspruchsrecht (Art. 21):</strong> Sie können der Verarbeitung widersprechen</li>
                  <li><strong>Widerruf der Einwilligung:</strong> Erteilte Einwilligungen können Sie jederzeit widerrufen</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: datenschutz@feely.app
                </p>
              </section>

              <section>
                <h2>7. Datensicherheit</h2>
                <p>
                  Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen:
                </p>
                <ul>
                  <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                  <li>Verschlüsselte Speicherung sensibler Daten</li>
                  <li>Regelmäßige Sicherheitsaudits</li>
                  <li>Strenge Zugriffskontrollen</li>
                  <li>Hosting auf DSGVO-konformen Servern in der EU</li>
                </ul>
              </section>

              <section>
                <h2>8. Speicherdauer</h2>
                <p>
                  Wir speichern Ihre Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben:
                </p>
                <ul>
                  <li>Kontodaten: Bis zur Löschung Ihres Kontos</li>
                  <li>Bestelldaten: 10 Jahre (gesetzliche Aufbewahrungspflicht)</li>
                  <li>Nutzungsdaten: 12 Monate</li>
                  <li>Gesundheitsdaten: Bis zur Löschung durch Sie oder Ihr Konto</li>
                </ul>
              </section>

              <section>
                <h2>9. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um Änderungen unserer Praktiken oder aus rechtlichen Gründen zu berücksichtigen. Bei wesentlichen Änderungen informieren wir Sie über die App oder per E-Mail.
                </p>
              </section>

              <section>
                <h2>10. Kontakt und Beschwerderecht</h2>
                <p>
                  Bei Fragen zum Datenschutz kontaktieren Sie uns:
                </p>
                <p>
                  E-Mail: datenschutz@feely.app<br />
                  Telefon: +49 123 456 789
                </p>
                <p>
                  Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
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
