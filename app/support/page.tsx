'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  UserX,
  Shield,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Smartphone,
  RefreshCw,
  CreditCard,
  MapPin,
  Search,
  Settings,
  Bell,
  Lock,
  Trash2,
  ArrowLeft
} from 'lucide-react'

// FAQ Data
const faqCategories = [
  {
    title: 'Erste Schritte',
    icon: Smartphone,
    questions: [
      {
        q: 'Wie erstelle ich ein FEELY-Konto?',
        a: 'Lade die FEELY App aus dem App Store oder Google Play Store herunter. Öffne die App und tippe auf "Registrieren". Gib deine E-Mail-Adresse ein und erstelle ein sicheres Passwort. Bestätige deine E-Mail-Adresse über den Link, den wir dir zusenden. Fertig! Du kannst jetzt FEELY nutzen.'
      },
      {
        q: 'Ist die Nutzung von FEELY kostenlos?',
        a: 'Ja, die FEELY App ist für alle Nutzer komplett kostenlos. Du kannst alle Angebote durchstöbern, Produkte reservieren und abholen - ohne versteckte Kosten oder Abonnements.'
      },
      {
        q: 'In welchen Regionen ist FEELY verfügbar?',
        a: 'FEELY ist derzeit in Deutschland verfügbar und wächst stetig. Wir konzentrieren uns aktuell auf den Ausbau im süddeutschen Raum und erweitern kontinuierlich auf neue Städte und Gemeinden.'
      }
    ]
  },
  {
    title: 'Bestellungen & Reservierungen',
    icon: CreditCard,
    questions: [
      {
        q: 'Wie reserviere ich Produkte?',
        a: 'Suche in der App nach verfügbaren Angeboten in deiner Nähe. Wähle die Produkte aus, die du möchtest, und tippe auf "Reservieren". Du erhältst eine Bestätigung mit dem Abholzeitfenster. Hole die Produkte innerhalb des angegebenen Zeitraums beim Anbieter ab.'
      },
      {
        q: 'Wie lange ist meine Reservierung gültig?',
        a: 'Die Reservierungszeit hängt vom Anbieter und den Produkten ab. In der Regel hast du 1-3 Stunden Zeit zur Abholung. Die genaue Abholzeit wird dir in der Reservierungsbestätigung angezeigt.'
      },
      {
        q: 'Was passiert, wenn ich meine Reservierung nicht abholen kann?',
        a: 'Bitte storniere die Reservierung so früh wie möglich in der App, damit andere Nutzer die Chance haben, die Produkte zu bekommen. Wiederholtes Nichtabholen kann zu Einschränkungen deines Kontos führen.'
      },
      {
        q: 'Wie bezahle ich meine Bestellung?',
        a: 'Die Bezahlung erfolgt direkt beim Anbieter vor Ort. Du kannst dort bar oder mit den vom Anbieter akzeptierten Zahlungsmitteln (EC-Karte, Kreditkarte, etc.) bezahlen.'
      }
    ]
  },
  {
    title: 'Konto & Einstellungen',
    icon: Settings,
    questions: [
      {
        q: 'Wie ändere ich meine E-Mail-Adresse?',
        a: 'Gehe in der App zu "Einstellungen" > "Konto" > "E-Mail ändern". Gib deine neue E-Mail-Adresse ein und bestätige sie über den Verifizierungslink.'
      },
      {
        q: 'Wie ändere ich mein Passwort?',
        a: 'Gehe zu "Einstellungen" > "Konto" > "Passwort ändern". Gib dein aktuelles Passwort ein und erstelle dann ein neues sicheres Passwort.'
      },
      {
        q: 'Ich habe mein Passwort vergessen. Was tun?',
        a: 'Tippe auf dem Anmeldebildschirm auf "Passwort vergessen". Gib deine E-Mail-Adresse ein und wir senden dir einen Link zum Zurücksetzen deines Passworts.'
      },
      {
        q: 'Wie verwalte ich meine Benachrichtigungen?',
        a: 'Gehe zu "Einstellungen" > "Benachrichtigungen". Dort kannst du individuell einstellen, welche Push-Benachrichtigungen du erhalten möchtest (neue Angebote, Reservierungserinnerungen, etc.).'
      }
    ]
  },
  {
    title: 'Datenschutz & Sicherheit',
    icon: Shield,
    questions: [
      {
        q: 'Welche Daten speichert FEELY?',
        a: 'Wir speichern nur die Daten, die für die Nutzung der App notwendig sind: E-Mail-Adresse, Standortdaten (mit deiner Erlaubnis) für die Angebotssuche, und deine Reservierungshistorie. Detaillierte Informationen findest du in unserer Datenschutzerklärung.'
      },
      {
        q: 'Wie kann ich meine Daten herunterladen?',
        a: 'Du kannst eine Kopie deiner gespeicherten Daten anfordern. Sende dazu eine E-Mail an hello@feelyapp.de mit dem Betreff "Datenauskunft". Wir werden dir innerhalb von 30 Tagen eine vollständige Aufstellung zusenden.'
      },
      {
        q: 'Wie kann ich mein Konto löschen?',
        a: 'Du kannst dein Konto jederzeit löschen. Gehe zu "Einstellungen" > "Konto" > "Konto löschen" oder sende eine E-Mail an hello@feelyapp.de mit dem Betreff "Kontolöschung". Wir werden dein Konto und alle zugehörigen Daten innerhalb von 30 Tagen vollständig und unwiderruflich löschen.'
      }
    ]
  },
  {
    title: 'Technische Probleme',
    icon: RefreshCw,
    questions: [
      {
        q: 'Die App stürzt ab. Was kann ich tun?',
        a: 'Versuche folgende Schritte: 1) Schließe die App vollständig und öffne sie erneut. 2) Stelle sicher, dass du die neueste Version installiert hast. 3) Starte dein Gerät neu. 4) Lösche die App und installiere sie neu. Wenn das Problem weiterhin besteht, kontaktiere unseren Support.'
      },
      {
        q: 'Angebote werden nicht geladen. Was tun?',
        a: 'Überprüfe deine Internetverbindung. Stelle sicher, dass Standortdienste für FEELY aktiviert sind. Versuche, die App zu aktualisieren oder neu zu starten. Bei anhaltenden Problemen wende dich an unseren Support.'
      },
      {
        q: 'Ich kann mich nicht anmelden.',
        a: 'Überprüfe, ob du die richtige E-Mail-Adresse und das richtige Passwort verwendest. Falls du dein Passwort vergessen hast, nutze die "Passwort vergessen"-Funktion. Bei weiteren Problemen kontaktiere unseren Support mit deiner E-Mail-Adresse.'
      }
    ]
  }
]

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between text-left group"
      >
        <span className="text-white font-medium pr-4 group-hover:text-green-400 transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 group-hover:text-green-400 transition-colors" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-5"
        >
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  )
}

export default function SupportPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zur Startseite</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Hilfe & Support</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Wie können wir </span>
              <span className="gradient-text">dir helfen?</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Finde Antworten auf häufige Fragen oder kontaktiere unser Support-Team.
              Wir sind für dich da!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: 'E-Mail Support',
                description: 'Schreib uns eine E-Mail und wir antworten innerhalb von 24 Stunden.',
                contact: 'hello@feelyapp.de',
                href: 'mailto:hello@feelyapp.de',
                action: 'E-Mail senden'
              },
              {
                icon: Phone,
                title: 'Telefon',
                description: 'Ruf uns an für dringende Anfragen. Mo-Fr, 9-17 Uhr.',
                contact: '+49 17668263213',
                href: 'tel:+4917668263213',
                action: 'Anrufen'
              },
              {
                icon: Clock,
                title: 'Reaktionszeit',
                description: 'Wir bemühen uns, alle Anfragen schnellstmöglich zu bearbeiten.',
                contact: '< 24 Stunden',
                href: null,
                action: null
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <p className="text-green-400 font-semibold mb-4">{item.contact}</p>
                {item.href && (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
                  >
                    {item.action}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hier findest du Antworten auf die häufigsten Fragen zu FEELY.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === index
                    ? 'bg-green-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              {faqCategories[activeCategory].questions.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Account Deletion Section */}
      <section className="py-20 relative bg-gradient-to-b from-black via-red-950/10 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center">
                <Trash2 className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Konto löschen</h2>
                <p className="text-gray-400">Dein Recht auf Datenlöschung</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                Du hast jederzeit das Recht, dein FEELY-Konto und alle damit verbundenen Daten
                vollständig löschen zu lassen. Dies ist ein unwiderruflicher Vorgang.
              </p>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">So löschst du dein Konto:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">In der App</p>
                      <p className="text-gray-400">Gehe zu Einstellungen → Konto → Konto löschen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">Per E-Mail</p>
                      <p className="text-gray-400">
                        Sende eine E-Mail an{' '}
                        <a href="mailto:hello@feelyapp.de" className="text-green-400 hover:underline">
                          hello@feelyapp.de
                        </a>
                        {' '}mit dem Betreff "Kontolöschung" und deiner registrierten E-Mail-Adresse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Was wird gelöscht?</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Deine persönlichen Daten (Name, E-Mail, etc.)</li>
                      <li>• Dein Reservierungsverlauf</li>
                      <li>• Deine gespeicherten Favoriten</li>
                      <li>• Alle mit deinem Konto verknüpften Daten</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                Die Löschung erfolgt innerhalb von 30 Tagen nach Anfrage. Du erhältst eine
                Bestätigung per E-Mail, sobald die Löschung abgeschlossen ist.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Brauchst du weitere Hilfe?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Unser Support-Team steht dir gerne zur Verfügung. Schreib uns einfach
              eine Nachricht und wir helfen dir weiter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@feelyapp.de"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Support kontaktieren
              </a>
              <Link
                href="/#kontakt"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Kontaktformular
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/datenschutz" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Datenschutzerklärung
            </Link>
            <Link href="/agb" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Allgemeine Geschäftsbedingungen
            </Link>
            <Link href="/impressum" className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Impressum
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
