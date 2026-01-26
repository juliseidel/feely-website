'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  MessageSquareWarning,
  ChevronDown,
  ArrowRight,
  Building,
  Users,
  Target,
  DollarSign,
  Shield,
  Clock,
  Zap,
  CheckCircle
} from 'lucide-react'

const objections = [
  {
    id: 1,
    category: 'Partnerschaften',
    icon: Building,
    question: 'Was wenn die großen Supermarktketten nicht mitmachen?',
    shortAnswer: 'Wir brauchen sie nicht – zuerst.',
    fullAnswer: `Die großen Ketten (REWE, EDEKA, etc.) sind nicht unser erster Fokus. Unsere Strategie:

**Phase 1: Hofläden & kleinere Märkte**
- 20.000+ Hofläden haben KEINE digitale Präsenz
- Kleine Supermärkte können nicht selbst Apps entwickeln
- Für sie ist FEELY die einzige Option zur Digitalisierung

**Phase 2: Nutzerbasis aufbauen**
- Mit genug Nutzern werden wir interessant für Ketten
- Netzwerkeffekte: Mehr Anbieter = mehr Nutzer = mehr Anbieter

**Phase 3: Die Ketten MÜSSEN mitmachen**
- Amazon-Effekt: Wenn Kunden erwarten, dass ein Händler auf FEELY ist, muss er dort sein
- Der Druck kommt von den Kunden, nicht von uns

**Historischer Beweis:**
- OpenTable hat die Restaurantbranche so erobert
- Booking.com hat Hotels so gewonnen
- Instacart hat genau diese Strategie verwendet`,
  },
  {
    id: 2,
    category: 'Wettbewerb',
    icon: Target,
    question: 'Was wenn REWE oder EDEKA selbst sowas baut?',
    shortAnswer: 'Sie können es nicht – aus strukturellen Gründen.',
    fullAnswer: `Ein Multi-Retailer-Modell ist für einzelne Supermarktketten unmöglich:

**Strukturelles Problem:**
- REWE wird NIEMALS EDEKA-Produkte zeigen
- EDEKA wird NIEMALS Lidl-Angebote integrieren
- Jede Kette ist auf ihre eigene Reichweite begrenzt

**Das macht FEELY einzigartig:**
- Nur eine neutrale Drittpartei kann ALLE integrieren
- Wir haben keine Loyalitätskonflikte
- Wir können objektiv das beste Angebot zeigen

**Was wenn sie es trotzdem versuchen?**
- First-Mover-Advantage: Wir sind bereits da
- Netzwerkeffekte: Je mehr Nutzer, desto schwerer einzuholen
- Daten-Moat: Gesundheitsprofile schaffen Lock-in

**Außerdem:**
- Supermärkte sind keine Tech-Unternehmen
- Ihre Apps sind notorisch schlecht
- KI-Gesundheitsanalyse ist nicht ihr Kerngeschäft`,
  },
  {
    id: 3,
    category: 'Team',
    icon: Users,
    question: 'Solo-Gründer – kann er ein Team aufbauen?',
    shortAnswer: 'Dieses Pitch Deck beweist Umsetzungskraft. Equity lockt Top-Talent.',
    fullAnswer: `Die Solo-Gründer-Kritik ist berechtigt – aber überschaubar:

**Was bereits bewiesen wurde:**
- Eine komplette App entwickelt (ohne Coding-Background)
- 24-Screen Onboarding mit 7 Phasen
- KI-Gesundheitsanalyse mit 120+ Allergien, 80+ Krankheiten
- 3.100+ Produkte in der Datenbank
- Website live und funktional

**Das zeigt:**
- Extreme Umsetzungskraft
- Lernfähigkeit (alles selbst beigebracht)
- Durchhaltevermögen

**Warum jetzt ein Team kommt:**
- Dieses Pitch Deck existiert genau dafür
- Signifikante Equity-Anreize (10-25% für Co-Founder)
- "Ground Floor" Opportunity ist attraktiv
- Die Vision ist klar und überzeugend

**Historische Beispiele:**
- Viele erfolgreiche Startups starteten solo
- Der richtige Zeitpunkt für Team-Aufbau ist NACH dem MVP
- Investoren können beim Recruiting helfen`,
  },
  {
    id: 4,
    category: 'Marktakzeptanz',
    icon: DollarSign,
    question: 'Wollen Menschen wirklich online Lebensmittel kaufen?',
    shortAnswer: 'Instacart beweist es. Der Trend ist unumkehrbar.',
    fullAnswer: `Die Frage ist nicht OB, sondern WIE SCHNELL:

**Die Fakten:**
- Instacart: $33,5 Mrd. Transaktionsvolumen (2024)
- 14,4 Mio. aktive Nutzer allein in USA/Kanada
- Erstmals profitabel ($457 Mio. Gewinn)

**Deutschland holt auf:**
- Online-Lebensmittel wächst +11% p.a.
- Markt verdoppelt sich bis 2029
- COVID hat Akzeptanz permanent erhöht

**Der Trigger:**
- Bei 10% Online-Anteil (aktuell UK) wird's Mainstream
- Deutschland liegt bei ~4% – Raum für Wachstum

**Außerdem:**
FEELY ist nicht nur für Online-Bestellung:
- Barcode-Scanner funktioniert im stationären Handel
- Gesundheitsanalyse ist wertvoll auch ohne Lieferung
- Einkaufslisten-Feature für Offline-Einkäufe

**Fazit:**
Selbst wer skeptisch ist gegenüber Online-Lebensmittel kann FEELY nutzen – für die Gesundheitsfeatures.`,
  },
  {
    id: 5,
    category: 'Technologie',
    icon: Zap,
    question: 'Ist die KI-Gesundheitsanalyse zuverlässig genug?',
    shortAnswer: 'Ja – durch strukturierte Daten und wissenschaftliche Grundlagen.',
    fullAnswer: `Die Gesundheitsanalyse ist kein "Black Box"-ML:

**Wie es funktioniert:**
1. Strukturierte Zutatendaten (nicht Freitext)
2. Mapping auf bekannte Allergene (14 Hauptallergene + 100+)
3. Matching mit Nutzerprofil
4. Regelbasierte Warnungen + KI-Empfehlungen

**Sicherheitsmechanismen:**
- Allergene sind IMMER sichtbar (kein Verstecken)
- Im Zweifel: Warnung statt Schweigen
- Premium-Analyse klar als "Empfehlung" markiert
- Medizinischer Disclaimer überall

**Datenquellen:**
- Produktdaten direkt von Anbietern
- OpenFoodFacts als Backup
- Manuelle Verifizierung für kritische Produkte

**Haftung:**
- Klare AGB: Keine medizinische Beratung
- Nutzer bestätigt Eigenverantwortung
- Versicherbar durch Tech E&O Insurance

**Langfristig:**
- Head of Nutrition im Team (geplant)
- Wissenschaftlicher Beirat
- Peer-Review für Algorithmen`,
  },
  {
    id: 6,
    category: 'Skalierung',
    icon: Shield,
    question: 'Wie skaliert das Produkt-onboarding?',
    shortAnswer: 'API-Integrationen + Community + KI-Extraktion.',
    fullAnswer: `Die Produktdatenbank ist ein lösbares Problem:

**Phase 1 (jetzt): Manuell + Halb-automatisch**
- Pilotregion mit überschaubarem Sortiment
- Direkte Partnerschaften mit Anbietern
- CSV/Excel-Import für kleinere Märkte

**Phase 2: API-Integrationen**
- Große Ketten haben Produktdaten digital
- Standardisierte Schnittstellen (GS1/GTIN)
- Einmal integriert = automatisch aktuell

**Phase 3: Community + KI**
- Nutzer können fehlende Produkte melden
- KI extrahiert Daten aus Fotos
- Gamification für Community-Beiträge

**Referenz: OpenFoodFacts**
- 3 Mio.+ Produkte durch Community
- Beweist, dass das Modell funktioniert

**Unser Vorteil:**
- Wir müssen nicht ALLE Produkte haben
- Start mit populärsten 20% = 80% der Einkäufe
- Fehlende Produkte = Feature-Request, kein Blocker`,
  },
  {
    id: 7,
    category: 'Finanzen',
    icon: DollarSign,
    question: 'Sind die Unit Economics realistisch?',
    shortAnswer: 'Ja – basierend auf Instacart-Benchmarks und konservativen Annahmen.',
    fullAnswer: `Die Zahlen sind keine Fantasie:

**Instacart Referenz:**
- Verdient ~$2-4 netto pro Bestellung
- Bei 294 Mio. Bestellungen = profitabel
- Take-Rate: ~6-8% auf GTV

**FEELY Annahmen (konservativ):**
- Warenkorb: €45 (unter Instacart-Durchschnitt)
- Take-Rate: 8% (Mix aus Abholung/Lieferung)
- = €3,60 pro Bestellung

**Kosten pro Nutzer (geschätzt):**
- Server/Infra: €0,20
- Payment: €0,21 (2,9%)
- Support: €0,30
- = €0,70 total

**Contribution Margin:**
- Free: €7,00/Monat
- Premium: €11,00/Monat

**Was das bedeutet:**
- CAC Payback in <2 Monaten möglich
- LTV/CAC von 12-18x ist erreichbar
- Profitabilität auf Unit-Ebene ab Tag 1

**Risiko-Puffer:**
- Selbst bei 50% schlechteren Zahlen noch tragfähig`,
  },
  {
    id: 8,
    category: 'Timing',
    icon: Clock,
    question: 'Warum hat das noch niemand gemacht?',
    shortAnswer: 'Timing + Technologie + Markt-Reife. Alles kommt jetzt zusammen.',
    fullAnswer: `Die Frage ist berechtigt – hier die Antwort:

**Warum JETZT der Moment ist:**

1. **Technologie-Timing**
   - KI ist erst jetzt gut genug für personalisierte Analyse
   - Mobile Penetration bei 95%+
   - Cloud-Infrastruktur kostet Bruchteil von vor 5 Jahren

2. **Markt-Timing**
   - Online-Lebensmittel erreicht kritische Masse
   - COVID hat Akzeptanz permanent verändert
   - Gen Z priorisiert Gesundheit wie keine Generation zuvor

3. **Wettbewerbs-Timing**
   - Quick-Commerce (Gorillas, Flink) ist gescheitert
   - Große Player fokussieren auf eigene Apps
   - Niemand hat den Multi-Retailer + Gesundheit Ansatz

4. **Gesellschafts-Timing**
   - Gesundheitsbewusstsein auf Allzeithoch
   - Transparenz wird gefordert
   - Nachhaltigkeits-Trend stärkt Hofläden

**Warum es VORHER nicht ging:**
- Smartphone-Penetration war zu niedrig
- KI war zu teuer/schlecht
- Marktakzeptanz für Online-Lebensmittel fehlte

**Fazit:**
Das Fenster ist JETZT offen. Wer zuerst kommt, gewinnt.`,
  },
]

function ObjectionCard({ objection }: { objection: typeof objections[0] }) {
  const [isOpen, setIsOpen] = useState(false)
  const Icon = objection.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start gap-4 hover:bg-white/5 transition-colors"
      >
        <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-yellow-400" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-yellow-400 text-sm font-medium">{objection.category}</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{objection.question}</h3>
          <p className="text-green-400 text-sm font-medium">{objection.shortAnswer}</p>
        </div>
        <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/10">
              <div className="prose prose-invert prose-sm max-w-none">
                {objection.fullAnswer.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h4 key={i} className="text-green-400 font-bold mt-4 mb-2">
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    )
                  }
                  if (paragraph.startsWith('**')) {
                    const [title, ...rest] = paragraph.split('\n')
                    return (
                      <div key={i} className="mt-4">
                        <h4 className="text-white font-bold mb-2">{title.replace(/\*\*/g, '')}</h4>
                        {rest.map((line, j) => (
                          <p key={j} className="text-gray-400 text-sm">
                            {line.startsWith('- ') ? (
                              <span className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                {line.substring(2)}
                              </span>
                            ) : line}
                          </p>
                        ))}
                      </div>
                    )
                  }
                  return (
                    <p key={i} className="text-gray-300 mb-3">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function EinwandKatalogPage() {
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
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <MessageSquareWarning className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm">Kritische Fragen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Einwand-Katalog
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Die häufigsten kritischen Fragen von Investoren – und unsere ehrlichen Antworten.
            Klicken Sie auf eine Frage für die ausführliche Antwort.
          </p>
        </motion.div>

        {/* Objections */}
        <div className="space-y-4">
          {objections.map((objection, index) => (
            <motion.div
              key={objection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ObjectionCard objection={objection} />
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-3xl p-8 bg-green-500/10 border border-green-500/20"
        >
          <h2 className="text-2xl font-black text-white mb-4">
            Fazit
          </h2>
          <p className="text-gray-300 mb-4">
            Jedes Startup hat Risiken. Der Unterschied zwischen guten und schlechten Gründern ist nicht,
            ob Risiken existieren – sondern ob sie erkannt und adressiert werden.
          </p>
          <p className="text-green-400 font-medium">
            FEELY kennt seine Risiken und hat für jedes einen Plan. Das ist kein Zeichen von Schwäche,
            sondern von Reife und strategischem Denken.
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 mt-12 border-t border-white/10">
          <Link
            href="/pitch-deck/marktanalyse"
            className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Zur Marktanalyse
          </Link>
          <Link
            href="/pitch-deck/vergleichsanalyse"
            className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            Zur Vergleichsanalyse
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
