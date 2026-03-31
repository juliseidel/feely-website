'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  MessageSquareWarning,
  ChevronDown,
  ArrowRight,
  Building2,
  Target,
  Users,
  Cpu,
  Coins,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle,
  ChevronRight
} from 'lucide-react'

// Kategorien mit Farben und Icons
const categories = [
  { id: 'partnerschaften', name: 'Partnerschaften', icon: Building2, color: 'blue', count: 3 },
  { id: 'wettbewerb', name: 'Wettbewerb', icon: Target, color: 'red', count: 3 },
  { id: 'team', name: 'Team', icon: Users, color: 'purple', count: 3 },
  { id: 'technologie', name: 'Technologie', icon: Cpu, color: 'cyan', count: 3 },
  { id: 'geschaeftsmodell', name: 'Geschäftsmodell', icon: Coins, color: 'yellow', count: 3 },
  { id: 'markt-timing', name: 'Markt & Timing', icon: TrendingUp, color: 'green', count: 3 },
  { id: 'regulierung', name: 'Regulierung & Datenschutz', icon: Shield, color: 'indigo', count: 2 },
  { id: 'risiken', name: 'Risiken', icon: AlertTriangle, color: 'orange', count: 1 },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; bgLight: string }> = {
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', bgLight: 'bg-blue-500/10' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400', bgLight: 'bg-red-500/10' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', bgLight: 'bg-purple-500/10' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', bgLight: 'bg-cyan-500/10' },
  yellow: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400', bgLight: 'bg-yellow-500/10' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400', bgLight: 'bg-green-500/10' },
  indigo: { bg: 'bg-indigo-500/20', border: 'border-indigo-500/30', text: 'text-indigo-400', bgLight: 'bg-indigo-500/10' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400', bgLight: 'bg-orange-500/10' },
}

const objections = [
  // ===== 1. PARTNERSCHAFTEN =====
  {
    id: '1.1',
    categoryId: 'partnerschaften',
    question: 'Was wenn die großen Supermarktketten nicht mitmachen?',
    shortAnswer: 'Wir brauchen sie nicht – zuerst. Aber mit dem richtigen Netzwerk geht auch direkt mehr.',
    sections: [
      {
        title: 'Szenario A: Organisches Wachstum',
        subtitle: 'Wenn wir ohne große Partner starten:',
        points: [
          'Beginn mit Hofläden & regionalen Märkten',
          '30.000+ Hofläden in Deutschland haben keine digitale Präsenz',
          'Diese brauchen uns mehr als wir sie',
          'Für sie sind wir die einzige Chance auf Digitalisierung',
          'Aufbau von Nutzerbasis und Proof of Concept',
          'Die Großen kommen dann zu uns'
        ]
      },
      {
        title: 'Szenario B: Strategischer Einstieg',
        subtitle: 'Mit den richtigen Kontakten und Investoren:',
        points: [
          'Direkter Zugang zu Entscheidern bei tegut, Globus, oder regionalen Ketten',
          'Pilotprojekt mit einer innovativen Kette',
          'Sofortige Skalierung möglich',
          'Ein großer Partner zieht andere nach'
        ]
      },
      {
        title: 'Szenario C: Top-Down',
        subtitle: 'Ein Investor mit Retail-Connections:',
        points: [
          'Intro zu Vorständen von REWE, Edeka, Schwarz-Gruppe',
          'FEELY als Innovations-Partner positioniert',
          'Ketten suchen aktiv nach Digitalisierungslösungen',
          'Wir sind die fertige Lösung'
        ]
      },
      {
        title: 'Das Entscheidende',
        text: 'Wir sind nicht abhängig von einem Szenario. Die Strategie passt sich an. Aber mit dem richtigen Netzwerk können wir den langsamen Weg überspringen und direkt groß starten. Die großen Ketten wissen, dass sie ein Digitalisierungsproblem haben. Sie suchen nach Lösungen. Wir haben eine.'
      }
    ]
  },
  {
    id: '1.2',
    categoryId: 'partnerschaften',
    question: 'Wie überzeugt ihr Supermärkte ohne bestehende Nutzerbasis?',
    shortAnswer: 'Je nach Szenario: Entweder wir lösen ihr Problem, oder jemand öffnet uns die Tür.',
    sections: [
      {
        title: 'Szenario A: Organisches Wachstum',
        subtitle: 'Für Hofläden und kleine Märkte ist die Rechnung auch ohne Nutzerbasis einfach:',
        columns: [
          {
            title: 'Was sie ohne uns haben:',
            points: ['Keine App (zu teuer: €50.000-200.000)', 'Keine Online-Bestellungen', 'Kein digitales Marketing', 'Kein Bestandsmanagement', 'Keine Kundendaten', 'Unsichtbar für die nächste Generation']
          },
          {
            title: 'Was sie mit uns bekommen:',
            points: ['Sofort online verkaufsfähig', 'Eigenes Dashboard', 'Zugang zu neuen Kundengruppen', 'Automatische Sichtbarkeit', 'Daten über Kaufverhalten', 'Zukünftig: Auto-Nachbestellung']
          }
        ]
      },
      {
        title: 'Szenario B & C: Mit Netzwerk',
        text: 'Mit den richtigen Kontakten ändert sich die Dynamik komplett. Ein Investor/Beirat mit Retail-Connections bringt warme Intros zu Entscheidern. "Schau dir das mal an" von jemandem den sie respektieren. Pilot-Projekte werden zur Chefsache, nicht Sachbearbeiter-Ebene.'
      },
      {
        title: 'Der Unterschied',
        highlight: 'Ohne Netzwerk: Kaltakquise, lange Entscheidungswege. Mit Netzwerk: Warme Intros, schnelle Entscheidungen.'
      }
    ]
  },
  {
    id: '1.3',
    categoryId: 'partnerschaften',
    question: 'Das Henne-Ei-Problem – Keine Nutzer ohne Märkte, keine Märkte ohne Nutzer?',
    shortAnswer: 'Je nach Szenario lösen wir es anders – aber wir lösen es.',
    sections: [
      {
        title: 'Szenario A: Hyperlokalisierung',
        points: [
          'Wir starten in einer Region (z.B. Ostalb/Ellwangen)',
          'Dort onboarden wir ALLE verfügbaren Märkte und Hofläden',
          'In dieser Region haben wir dann 100% Abdeckung',
          'Nutzer haben sofort echten Mehrwert',
          'Mundpropaganda und lokale Presse',
          'Dann expandieren wir zur nächsten Region'
        ]
      },
      {
        title: 'Warum das funktioniert',
        text: 'Ein Nutzer in Ellwangen braucht keine Märkte in München. 20 lokale Märkte sind wertvoller als 2 Ketten bundesweit. Referenzen: Uber startete Stadt für Stadt. Amazon begann nur mit Büchern. Facebook war erst nur für Harvard.'
      },
      {
        title: 'Szenario B & C: Paralleler Start / Leuchtturm-Partner',
        text: 'Mit dem richtigen Netzwerk können wir beide Seiten gleichzeitig aktivieren. Ein großer Partner (z.B. tegut, Globus) löst das Henne-Ei-Problem sofort – hunderte Produkte verfügbar, Marketing-Power bringt Nutzer, Erfolg zieht weitere Ketten an.'
      },
      {
        title: 'Zusammenfassung',
        table: [
          { scenario: 'A: Organisch', solution: 'Hyperlokalisierung', speed: 'Langsamer, aber solide' },
          { scenario: 'B: Strategisch', solution: 'Paralleler Start', speed: 'Schneller' },
          { scenario: 'C: Top-Down', solution: 'Leuchtturm-Partner', speed: 'Am schnellsten' }
        ]
      }
    ]
  },

  // ===== 2. WETTBEWERB =====
  {
    id: '2.1',
    categoryId: 'wettbewerb',
    question: 'Was wenn REWE oder EDEKA selbst sowas baut?',
    shortAnswer: 'Sie können es nicht – aus strukturellen Gründen.',
    sections: [
      {
        title: 'Die großen Ketten werden niemals das bauen, was wir bauen:',
        numberedPoints: [
          { title: 'Interessenkonflikt', text: 'REWE will REWE-Produkte verkaufen, nicht den Hofladen nebenan empfehlen. Eine REWE-App wird nie sagen "Kauf das lieber bei Edeka, ist günstiger". Wir sind neutral – das ist unser Kernvorteil.' },
          { title: 'Marge vs. Nutzerinteresse', text: 'Supermärkte verdienen an bestimmten Produkten mehr (Eigenmarken, Aktionen). Eine ehrliche, neutrale Analyse würde ihren Interessen widersprechen.' },
          { title: 'Technische Silos', text: 'Jede Kette hat eigene Legacy-Systeme. Eine übergreifende Plattform würde Kooperation mit Konkurrenten erfordern. Das wird nie passieren.' },
          { title: 'Innovationsgeschwindigkeit', text: 'Konzerne brauchen 2-3 Jahre für neue Features. Wir können in Wochen iterieren. Bis sie kopieren, sind wir 10 Schritte weiter.' },
          { title: 'DNA', text: 'Sie sind Händler, keine Tech-Unternehmen. Software ist nicht ihr Kerngeschäft. Sie werden immer hinterherhinken.' }
        ]
      },
      {
        title: 'Fazit',
        highlight: 'Sie können Teile kopieren, aber nie das neutrale, übergreifende Ökosystem das alle Märkte verbindet.'
      }
    ]
  },
  {
    id: '2.2',
    categoryId: 'wettbewerb',
    question: 'Warum gibt es das noch nicht, wenn es so offensichtlich ist?',
    shortAnswer: 'Weil es extrem komplex ist – und die Technologie erst jetzt reif ist.',
    sections: [
      {
        title: 'Warum es das noch nicht gibt:',
        numberedPoints: [
          { title: 'Komplexität', text: 'Daten von tausenden verschiedenen Märkten aggregieren. Jeder Markt hat andere Systeme. Personalisierung für Millionen individueller Profile. Das ist kein Weekend-Projekt – das ist jahrelange Arbeit.' },
          { title: 'Timing', text: 'KI für Ernährungsanalyse ist erst seit 2023 wirklich nutzbar. Verbraucher sind erst jetzt bereit für digitales Grocery. Corona hat die Akzeptanz verdreifacht. Die Technologie ist erst JETZT reif genug.' },
          { title: 'Die richtigen Leute', text: 'Retail-Experten bauen Retail-Apps. Health-Experten bauen Health-Apps. Tech-Experten bauen Tech-Plattformen. Niemand hat alles kombiniert – bis jetzt.' },
          { title: 'Instacart zeigt: Es geht', text: 'In den USA funktioniert das Plattform-Modell bereits. €33,5 Mrd. Transaktionsvolumen in 2024. Deutschland ist 5-7 Jahre hinter den USA.' }
        ]
      },
      {
        title: 'Die Antwort',
        highlight: 'Es ist nicht offensichtlich. Es ist offensichtlich NACHDEM man es gesehen hat. Vorher sieht jeder nur die Komplexität.'
      }
    ]
  },
  {
    id: '2.3',
    categoryId: 'wettbewerb',
    question: 'Was ist mit Picnic, Flink, Gorillas?',
    shortAnswer: 'Komplett anderes Modell – die sind Logistik, wir sind Plattform.',
    sections: [
      {
        title: 'Flink, Gorillas, und ähnliche:',
        points: [
          'Eigene Lager mit eigenem Sortiment',
          'Eigene Fahrer für Lieferung',
          'Extrem hohe Fixkosten',
          'Begrenzte Produktauswahl (2.000-3.000 Artikel)',
          'Fokus auf Geschwindigkeit (10-Minuten-Lieferung)',
          'Alle verbrennen Geld – kein profitables Modell'
        ]
      },
      {
        title: 'FEELY ist fundamental anders:',
        table: [
          { aspect: 'Modell', competitor: 'Eigene Lager & Lieferung', feely: 'Plattform für existierende Märkte' },
          { aspect: 'Sortiment', competitor: '2.000-3.000 Produkte', feely: 'Unbegrenzt (jeder Markt)' },
          { aspect: 'Fixkosten', competitor: 'Extrem hoch', feely: 'Minimal (Asset-light)' },
          { aspect: 'Hofläden', competitor: 'Nein', feely: 'Ja – 30.000+ potenzielle Partner' },
          { aspect: 'Gesundheit', competitor: 'Keine Features', feely: 'Kern-Mehrwert' },
          { aspect: 'Profitabilität', competitor: 'Alle unprofitabel', feely: 'Unit Economics positiv' }
        ]
      },
      {
        title: 'Wir besitzen nichts Physisches',
        highlight: 'Keine Lager. Keine Fahrer. Keine Lebensmittel. Wir verbinden nur – wie Airbnb keine Hotels besitzt.'
      }
    ]
  },

  // ===== 3. TEAM =====
  {
    id: '3.1',
    categoryId: 'team',
    question: 'Solo-Gründer – kann er ein Team aufbauen?',
    shortAnswer: 'Ein Student ohne Coding-Background hat ein komplettes Ökosystem gebaut. Das ist kein Risiko – das ist der Beweis.',
    sections: [
      {
        title: 'Wer ich bin',
        text: 'Mein Name ist Juli. Ich bin kein Programmierer. Kein BWLer. Ich bin Student. Und ich habe dieses gesamte Ökosystem alleine gebaut. Weil ich das Problem jeden Tag selbst erlebe.'
      },
      {
        title: 'Was bereits existiert – gebaut von einer Person:',
        points: [
          'Vollständige App (iOS & Android ready)',
          'Komplettes Backend mit Datenbankarchitektur',
          'KI-Agenten für Produktanalyse und Personalisierung',
          'Algorithmen für Gesundheitsmatching',
          'Dashboard-System für Märkte und Hofläden',
          'Software-Lösung für Händler',
          'Onboarding, Authentifizierung, Profile, Scanner, Warenkorb',
          'Alles funktionsfähig – keine Mockups, kein Pitch-Deck-Versprechen'
        ]
      },
      {
        title: 'Warum ich das baue – meine Geschichte:',
        points: [
          'Essstörungen durchgemacht – heute achte ich genau auf meine Ernährung',
          'Unverträglichkeiten entwickelt – jeder Einkauf erfordert Prüfung',
          'Aus einem kleinen Dorf – der nächste Supermarkt ist 20 Minuten entfernt',
          'Schwester ist chronisch krank – muss täglich auf Ernährung achten',
          'Tante hat schwere Allergien – ein falsches Produkt kann lebensgefährlich sein',
          'Vater früh an Krebs verloren – hat sich immer schlecht ernährt'
        ]
      },
      {
        title: 'Das ist keine Business-Idee. Das ist eine Mission.',
        highlight: 'Extreme Umsetzungskraft. Ich bringe mir alles selbst bei. Ich gebe nicht auf. Ich verstehe das Problem, weil ich es jeden Tag lebe. Authentizität die man nicht faken kann.'
      }
    ]
  },
  {
    id: '3.2',
    categoryId: 'team',
    question: 'Keine Retail-Erfahrung – wie wollt ihr die Branche verstehen?',
    shortAnswer: 'Disruption kommt nie von innen. Und ich kenne das Problem besser als jeder Retail-Manager.',
    sections: [
      {
        title: 'Warum Outsider gewinnen:',
        points: [
          'Insider sehen "so macht man das halt"',
          'Outsider fragen "warum eigentlich?"',
          'Uber-Gründer kamen nicht aus der Taxi-Branche',
          'Airbnb-Gründer waren keine Hoteliers',
          'Amazon war ein Online-Buchhändler, kein Supermarkt'
        ]
      },
      {
        title: 'Was ich mitbringe:',
        numberedPoints: [
          { title: 'Echte Nutzerperspektive', text: 'Ich BIN der frustrierte Kunde. Jeder Einkauf ist für mich eine Herausforderung. Ich weiß genau, was fehlt – nicht aus Marktforschung, sondern aus täglicher Erfahrung.' },
          { title: 'Persönliche Betroffenheit', text: 'Unverträglichkeiten, Essstörungs-Vergangenheit, Familie mit Allergien und chronischen Krankheiten. Das ist nicht theoretisch – das ist mein Alltag.' },
          { title: 'Technisches Verständnis', text: 'Ich habe ein komplettes Ökosystem gebaut. Ich weiß, was technisch möglich ist. Keine Abhängigkeit von Entwicklern.' },
          { title: 'Keine eingefahrenen Denkmuster', text: 'Ich weiß nicht, was angeblich "unmöglich" ist in der Branche. Also mache ich es einfach.' }
        ]
      },
      {
        title: 'Die Wahrheit',
        highlight: 'Hätte ein Retail-Experte das gebaut, wäre es eine weitere langweilige Bestell-App geworden. Ohne echtes Problem-Verständnis, ohne Gesundheitsfokus, ohne Mission.'
      }
    ]
  },
  {
    id: '3.3',
    categoryId: 'team',
    question: 'Technische Expertise – wer entwickelt die KI?',
    shortAnswer: 'Die KI existiert bereits. Gebaut von jemandem, der sich alles selbst beigebracht hat.',
    sections: [
      {
        title: 'Was heute schon funktioniert:',
        points: [
          'KI-Agenten für vollständige Produktanalyse',
          'Personalisierte Gesundheitsempfehlungen',
          'Allergen- und Unverträglichkeitserkennung',
          'Matching mit individuellen Gesundheitszielen',
          'Krankheitsspezifische Auswertungen',
          'Automatische Warnungen basierend auf Nutzerprofil',
          'Natürlichsprachige Erklärungen'
        ]
      },
      {
        title: 'Keine künstlichen Grenzen:',
        text: 'Unbegrenzte Allergene und Unverträglichkeiten. Alle relevanten Krankheiten abdeckbar. Jedes Gesundheitsziel integrierbar. System ist von Anfang an für Erweiterung designed.'
      },
      {
        title: 'Wichtig',
        highlight: 'Die KI ist ein mächtiges Feature, aber FEELY ist mehr als KI. Es ist ein komplettes Ökosystem – Marktplatz, Plattform, Software-Lösung für Händler, und intelligenter Einkaufsassistent in einem.'
      }
    ]
  },

  // ===== 4. TECHNOLOGIE =====
  {
    id: '4.1',
    categoryId: 'technologie',
    question: 'Wie skaliert das technisch?',
    shortAnswer: 'Modular gebaut, von Anfang an für Millionen Nutzer designed.',
    sections: [
      {
        title: 'Aktuelle Architektur:',
        points: [
          'React Native App (iOS + Android aus einer Codebase)',
          'Supabase Backend (PostgreSQL, skaliert automatisch)',
          'Modularer Aufbau: Jedes Feature ist unabhängig',
          'API-first Design für flexible Integration'
        ]
      },
      {
        title: 'Skalierungs-Strategie:',
        numberedPoints: [
          { title: 'Nutzer-Skalierung', text: 'Supabase/PostgreSQL handelt Millionen Requests. CDN für statische Inhalte. Intelligentes Caching für Produktdaten. Serverless wo sinnvoll.' },
          { title: 'Markt-Skalierung', text: 'Jeder Markt ist ein Datensatz, keine Code-Änderung nötig. Dashboard ist White-Label, funktioniert für 10 oder 100.000 Märkte.' },
          { title: 'Kosten-Skalierung', text: 'Serverless = Kosten wachsen nur mit Nutzung. Keine teuren Eigenentwicklungen. Standard-Tools die proven skalieren.' }
        ]
      },
      {
        title: 'Das Fundament steht',
        highlight: 'Skalierung ist Optimierung, nicht Neubau.'
      }
    ]
  },
  {
    id: '4.2',
    categoryId: 'technologie',
    question: 'Woher kommen die Produktdaten?',
    shortAnswer: 'Direkt von den Märkten – und das System skaliert unbegrenzt.',
    sections: [
      {
        title: 'Mehrere Datenquellen:',
        numberedPoints: [
          { title: 'Direkt vom Markt (Primärquelle)', text: 'Märkte pflegen ihr Sortiment im eigenen Dashboard. Sie haben Eigeninteresse an korrekten Daten. Automatische Imports aus bestehenden Warenwirtschaftssystemen.' },
          { title: 'Lieferanten-Datenbanken', text: 'Viele Produkte kommen von gleichen Großhändlern. Einmal erfasst, für alle Märkte nutzbar. Partnerschaften mit Datenprovidern geplant.' },
          { title: 'Offene Datenbanken', text: 'Open Food Facts (Open Source, Community-gepflegt). GS1 Germany (offizielle Produktdaten). Wachsende eigene Datenbank durch Nutzer-Scans.' },
          { title: 'KI-gestützte Ergänzung', text: 'Automatische Extraktion aus Produktbildern. Konsistenzprüfung über Quellen hinweg. Anomalie-Erkennung.' }
        ]
      },
      {
        title: 'Qualitätssicherung',
        highlight: 'KI-gestützte Validierung. Bei kritischen Daten (Allergene) mehrfache Prüfung. Community-Feedback für Korrekturen. Transparenz wenn Daten unvollständig sind.'
      }
    ]
  },
  {
    id: '4.3',
    categoryId: 'technologie',
    question: 'Wie funktioniert die Gesundheits-KI wirklich?',
    shortAnswer: 'Wissenschaftsbasiert, transparent, unbegrenzt erweiterbar – keine Blackbox.',
    sections: [
      {
        title: 'Was die KI kann:',
        columns: [
          {
            title: 'Vollständige Produktanalyse:',
            points: ['Alle Inhaltsstoffe erfasst und bewertet', 'Nährwerte im Kontext', 'Zusatzstoffe erkannt und erklärt', 'Verarbeitungsgrad bewertet']
          },
          {
            title: 'Personalisierung ohne Limits:',
            points: ['Abgleich mit individuellem Gesundheitsprofil', 'Allergien und Unverträglichkeiten (unbegrenzt)', 'Krankheiten und deren Ernährungsrelevanz', 'Persönliche Ziele', 'Lebensstil-Faktoren']
          }
        ]
      },
      {
        title: 'Intelligente Warnungen:',
        examples: [
          '"Enthält Gluten – du hast Zöliakie angegeben"',
          '"Hoher Zuckergehalt – passt nicht zu deinem Ziel"',
          '"Könnte Spuren von Nüssen enthalten"'
        ]
      },
      {
        title: 'Transparenz',
        highlight: 'Nutzer sieht immer WARUM etwas empfohlen oder gewarnt wird. Keine versteckten Algorithmen. Nachvollziehbare Logik. Immer Verweis auf Arzt bei ernsthaften medizinischen Fragen.'
      }
    ]
  },

  // ===== 5. GESCHÄFTSMODELL =====
  {
    id: '5.1',
    categoryId: 'geschaeftsmodell',
    question: 'Wie verdient ihr Geld?',
    shortAnswer: 'Fünf Revenue Streams – B2C, B2B, und B2B2C.',
    sections: [
      {
        title: 'Fünf Revenue Streams:',
        numberedPoints: [
          { title: 'Premium-Abo (B2C)', text: '€3,99/Monat oder €39,99/Jahr. Erweiterte Gesundheitsanalyse mit KI, personalisierte Empfehlungen, krankheitsspezifische Auswertungen. Ziel: 10-15% Conversion.' },
          { title: 'Transaktionsgebühr', text: '3-5% pro Bestellung über die Plattform. Markt zahlt, nicht der Nutzer. Fair und transparent.' },
          { title: 'Markt-Abos (B2B)', text: 'Basis: Kostenlos. Pro: €49/Monat (Analytics, erweiterte Tools). Enterprise: €199/Monat (API-Zugang, mehrere Standorte).' },
          { title: 'Werbung', text: 'Gesponserte Produkte in Suchergebnissen. Promoted Listings für Märkte. Transparent gekennzeichnet. Nie gegen Nutzerinteressen.' },
          { title: 'B2B2C Partnerschaften', text: 'Krankenkassen: Prävention spart Behandlungskosten. Arbeitgeber: Mitarbeiter-Gesundheitsprogramme. Ärzte/Ernährungsberater: Tool für Patientenbetreuung.' }
        ]
      },
      {
        title: 'Diversifiziert',
        highlight: 'Das Modell ist diversifiziert – wir sind nicht von einem einzigen Stream abhängig.'
      }
    ]
  },
  {
    id: '5.2',
    categoryId: 'geschaeftsmodell',
    question: 'Warum sollten Nutzer Premium zahlen?',
    shortAnswer: 'Weil es Zeit spart, Geld spart, und Gesundheit schützt.',
    sections: [
      {
        title: 'Der Mehrwert ist konkret und messbar:',
        numberedPoints: [
          { title: 'Zeitersparnis', text: 'Durchschnittlich 3+ Stunden pro Woche für Einkaufen. Mit FEELY: 30 Minuten. 2,5 Stunden pro Woche gespart = 130+ Stunden pro Jahr. Bei €15/Stunde Wert: €1.950 pro Jahr.' },
          { title: 'Geldersparnis', text: 'Alle Angebote aller Märkte auf einen Blick. Preisvergleich ohne von Laden zu Laden zu fahren. Keine Impulskäufe. Weniger Lebensmittelverschwendung. Durchschnittlich 15-20% Ersparnis möglich.' },
          { title: 'Gesundheitsschutz', text: 'Für Allergiker: Lebensrettende Warnungen. Für chronisch Kranke: Tägliche Unterstützung. Für Gesundheitsbewusste: Echte Transparenz. Prävention ist billiger als Behandlung.' },
          { title: 'Convenience', text: 'Eine App statt zehn verschiedene. Alles im Überblick. Von der Couch aus einkaufen. Nie wieder vergessen was man braucht.' }
        ]
      },
      {
        title: 'Die Rechnung',
        highlight: '€3,99 pro Monat = €48 pro Jahr. Mehrwert: Hunderte Euro Ersparnis + Stunden Zeit + Gesundheitsschutz. Das ist weniger als ein Kaffee pro Monat.'
      }
    ]
  },
  {
    id: '5.3',
    categoryId: 'geschaeftsmodell',
    question: 'Sind die Unit Economics realistisch?',
    shortAnswer: 'Ja – weil wir Asset-light sind und mehrfach monetarisieren.',
    sections: [
      {
        title: 'Unsere Unit Economics:',
        metricsTable: [
          { metric: 'CAC (Customer Acquisition Cost)', value: '€15-25', comparison: 'Flink/Gorillas: €80+' },
          { metric: 'LTV (Lifetime Value)', value: '€180-300', comparison: 'Bei 3+ Jahre Retention' },
          { metric: 'LTV/CAC Ratio', value: '7-12x', comparison: 'Benchmark: 3x gilt als gut' },
          { metric: 'Payback Period', value: '3-4 Monate', comparison: 'Benchmark: <12 Monate' },
          { metric: 'Gross Margin', value: '70-80%', comparison: 'Software-typisch' }
        ]
      },
      {
        title: 'Warum so gut?',
        columns: [
          {
            title: 'Niedrige Kosten:',
            points: ['Keine Lager (wie Flink)', 'Keine Fahrer (wie Gorillas)', 'Software skaliert nahezu kostenlos', 'Viel Word-of-Mouth']
          },
          {
            title: 'Hohe Retention:',
            points: ['Tägliche Nutzung', 'Personalisierung macht Wechsel unattraktiv', 'Lock-in durch Daten und Gewohnheit', 'Steigender Wert je länger man nutzt']
          }
        ]
      }
    ]
  },

  // ===== 6. MARKT & TIMING =====
  {
    id: '6.1',
    categoryId: 'markt-timing',
    question: 'Deutschland ist konservativ bei Food-Tech – warum hier?',
    shortAnswer: 'Konservativ bedeutet: Wer zuerst da ist, dominiert lange.',
    sections: [
      {
        title: 'Warum Deutschland perfekt ist:',
        numberedPoints: [
          { title: 'Größter Markt Europas', text: '€209,7 Mrd. Lebensmittelumsatz. 84 Millionen Menschen. Höchste Kaufkraft in der EU.' },
          { title: 'Unterdigitalisiert = Riesige Opportunity', text: 'Online-Grocery nur 2,4% Marktanteil. UK: 13%, Südkorea: 25%. First-Mover-Advantage noch möglich. Weniger etablierte Konkurrenz.' },
          { title: 'Steigendes Gesundheitsbewusstsein', text: 'Bio-Marktanteil höchster in Europa. Wachsende Nachfrage nach Transparenz. Jüngere Generation will wissen was sie isst.' },
          { title: 'Fragmentierter Markt', text: 'Kein Monopol wie Tesco in UK. Viele regionale Spieler. 30.000+ Hofläden. Plattform hat Raum zu wachsen.' }
        ]
      },
      {
        title: 'Konservativ = loyal',
        highlight: 'Deutsche Nutzer wechseln nicht ständig. Wer sie einmal überzeugt, behält sie. Das ist ein Feature, kein Bug.'
      }
    ]
  },
  {
    id: '6.2',
    categoryId: 'markt-timing',
    question: 'Online-Grocery wächst langsam – warum jetzt?',
    shortAnswer: 'Langsam ist relativ – und genau jetzt beschleunigt es sich.',
    sections: [
      {
        title: 'Die Zahlen zeigen Wachstum:',
        points: [
          '2020: €6,5 Mrd. Online-Lebensmittel',
          '2024: €11 Mrd.',
          '2029: €17+ Mrd. (Prognose)',
          '2030: €18+ Mrd.',
          'CAGR: 12-15% jährlich'
        ]
      },
      {
        title: 'Warum genau jetzt der richtige Zeitpunkt ist:',
        numberedPoints: [
          { title: 'Post-Corona Normalisierung', text: 'Während Corona: Spike durch Notwendigkeit. Jetzt: Echte Akzeptanz. Menschen haben gelernt, dass es funktioniert. Die Gewohnheit bleibt.' },
          { title: 'Technologie ist endlich reif', text: 'Smartphones bei 95%+. Mobile Payment ist normal. KI macht echte Personalisierung möglich.' },
          { title: 'Generationenwechsel', text: 'Millennials werden Haupteinkäufer. Gen Z erwartet digitale Lösungen. Convenience ist nicht mehr Luxus, sondern Erwartung.' },
          { title: 'Inflation treibt Bewusstsein', text: 'Menschen wollen sparen. Digital = Transparenz und Vergleichbarkeit. Beste Angebote finden ohne rumzufahren.' }
        ]
      },
      {
        title: 'Fazit',
        highlight: 'Wir sind nicht zu früh, wir sind genau richtig. Der Markt ist bereit, die Technologie ist reif, und es gibt noch keinen dominanten Player.'
      }
    ]
  },
  {
    id: '6.3',
    categoryId: 'markt-timing',
    question: 'Instacart kämpft auch – warum seid ihr anders?',
    shortAnswer: 'Instacart ist Lieferlogistik. Wir sind ein komplettes Ökosystem.',
    sections: [
      {
        title: 'Was wir von Instacart lernen:',
        points: [
          'Das Plattform-Modell funktioniert grundsätzlich',
          '€33,5 Mrd. Transaktionsvolumen beweist riesigen Markt',
          'Börsengang 2023 zeigt: Investoren glauben daran'
        ]
      },
      {
        title: 'FEELY ist fundamental anders:',
        table: [
          { aspect: 'Fokus', competitor: 'Lieferung', feely: 'Komplettes Ökosystem' },
          { aspect: 'Märkte', competitor: 'Nur große Ketten', feely: '+ Hofläden + Nische' },
          { aspect: 'Gesundheit', competitor: 'Keine Features', feely: 'Kern-Mehrwert' },
          { aspect: 'Für Händler', competitor: 'Nur Verkaufskanal', feely: 'Plattform + Software' },
          { aspect: 'Geschäftsmodell', competitor: 'Nur B2C', feely: 'B2C + B2B + B2B2C' },
          { aspect: 'Markt', competitor: 'USA (gesättigt)', feely: 'DE/EU (unerschlossen)' }
        ]
      },
      {
        title: 'Der Punkt',
        highlight: 'Instacart beweist: Der Markt ist da. FEELY zeigt: Es geht viel besser und umfassender.'
      }
    ]
  },

  // ===== 7. REGULIERUNG & DATENSCHUTZ =====
  {
    id: '7.1',
    categoryId: 'regulierung',
    question: 'Gesundheitsdaten und DSGVO?',
    shortAnswer: 'DSGVO-Konformität ist von Anfang an eingebaut – und ein Wettbewerbsvorteil.',
    sections: [
      {
        title: 'Unsere Datenschutz-Architektur:',
        numberedPoints: [
          { title: 'Einwilligung (Art. 6, 9 DSGVO)', text: 'Explizite Zustimmung für Gesundheitsdaten. Granulare Kontrolle: Nutzer entscheidet was gespeichert wird. Jederzeit widerrufbar. Kein "alles oder nichts".' },
          { title: 'Datensparsamkeit', text: 'Nur speichern was wirklich nötig ist. Keine Weitergabe an Dritte ohne explizite Zustimmung. Anonymisierung wo möglich.' },
          { title: 'Technische Maßnahmen', text: 'Verschlüsselung at rest und in transit. Hosting in Deutschland/EU. Regelmäßige Security-Audits. State-of-the-art Sicherheitsstandards.' },
          { title: 'Nutzerrechte vollständig implementiert', text: 'Export aller Daten (Portabilität). Löschung auf Knopfdruck. Einsicht was gespeichert ist. Korrekturmöglichkeit.' }
        ]
      },
      {
        title: 'Warum das ein Wettbewerbsvorteil ist',
        highlight: 'Nutzer vertrauen uns mehr als US-Apps. "Made in Germany" = Datenschutz-Qualitätsmerkmal. Krankenkassen können nur mit DSGVO-konformen Partnern arbeiten.'
      }
    ]
  },
  {
    id: '7.2',
    categoryId: 'regulierung',
    question: 'Medizinische Empfehlungen – rechtliche Risiken?',
    shortAnswer: 'Wir sind eine Informationsplattform – kein Medizinprodukt. Das ist rechtlich klar abgegrenzt.',
    sections: [
      {
        title: 'Wichtige Klarstellung',
        text: 'FEELY ist NICHT primär eine Gesundheits-App. FEELY ist ein Einkaufs-Ökosystem – ein Marktplatz mit intelligenten Features. Gesundheit ist einer von vielen Mehrwerten, nicht der einzige Fokus.'
      },
      {
        title: 'Was FEELY ist:',
        points: [
          'Marktplatz für Lebensmittel (wie Amazon für Waren)',
          'Plattform für Märkte und Hofläden',
          'Software-Lösung für Händler',
          'Informationsquelle zu Produktinhaltsstoffen',
          'Entscheidungshilfe beim Einkauf'
        ]
      },
      {
        title: 'Was FEELY NICHT ist:',
        points: [
          'Kein Medizinprodukt (keine CE-Kennzeichnung nötig)',
          'Keine Diagnose-App',
          'Keine Therapie-Empfehlung',
          'Kein Ersatz für ärztliche Beratung'
        ]
      },
      {
        title: 'Unsere Sicherheitsmaßnahmen',
        highlight: 'Klare Disclaimer bei allen Gesundheitsfunktionen. "Dies ersetzt keine ärztliche Beratung". Verweis auf professionelle Hilfe. Keine Heilversprechen, keine Diagnosen.'
      }
    ]
  },

  // ===== 8. RISIKEN =====
  {
    id: '8.1',
    categoryId: 'risiken',
    question: 'Was wenn die KI falsche Empfehlungen gibt?',
    shortAnswer: 'Mehrere Sicherheitsebenen, konservativer Ansatz, und klare Kommunikation.',
    sections: [
      {
        title: 'Unsere Philosophie',
        highlight: 'Lieber einmal zu viel warnen als einmal zu wenig.'
      },
      {
        title: 'Fünf Sicherheitsebenen:',
        numberedPoints: [
          { title: 'Datenqualität', text: 'Mehrfach-Validierung kritischer Informationen. KI-gestützte Anomalie-Erkennung. Cross-Check über mehrere Quellen. Bei Unsicherheit: Warnung statt Entwarnung.' },
          { title: 'Konservativer Algorithmus', text: '"Könnte enthalten" wenn nicht 100% sicher. Lieber False Positive (unnötige Warnung) als False Negative (fehlende Warnung). Nutzer wird nie in falscher Sicherheit gewogen.' },
          { title: 'Nutzer-Kontrolle', text: 'Nutzer entscheidet selbst. Wir informieren, Nutzer handelt. Eigenverantwortung bleibt beim Nutzer. Keine automatischen Aktionen.' },
          { title: 'Feedback-System', text: 'Melden-Button bei jedem Produkt. Schnelle Korrektur bei gemeldeten Fehlern. Community-Validierung. Kontinuierliche Verbesserung.' },
          { title: 'Klare Kommunikation', text: '"Diese Information ergänzt, ersetzt aber nicht das Lesen der Verpackung." "Bei Unsicherheit: Produkt prüfen oder meiden." "Bei schweren Allergien: Immer Verpackung selbst checken."' }
        ]
      },
      {
        title: 'Die Realität',
        text: 'Auch Verpackungen haben manchmal Fehler. Auch Supermärkte machen Fehler bei Beschriftungen. Wir sind eine ZUSÄTZLICHE Sicherheitsebene, nicht die einzige. Besser unsere Warnung als gar keine Warnung.'
      },
      {
        title: 'Versicherung',
        highlight: 'Produkthaftpflichtversicherung. Cyber-Versicherung. Rechtlich geprüfte Nutzungsbedingungen.'
      }
    ]
  },
]

// Helper component for rendering sections
function RenderSection({ section, color }: { section: any; color: string }) {
  const colors = colorClasses[color]

  return (
    <div className="mb-6 last:mb-0">
      {section.title && (
        <h4 className={`font-bold ${colors.text} mb-3 text-base`}>{section.title}</h4>
      )}
      {section.subtitle && (
        <p className="text-gray-400 text-sm mb-3">{section.subtitle}</p>
      )}

      {/* Simple text */}
      {section.text && (
        <p className="text-gray-300 text-sm leading-relaxed">{section.text}</p>
      )}

      {/* Highlight box */}
      {section.highlight && (
        <div className={`${colors.bgLight} ${colors.border} border rounded-xl p-4`}>
          <p className={`${colors.text} text-sm font-medium`}>{section.highlight}</p>
        </div>
      )}

      {/* Simple bullet points */}
      {section.points && (
        <ul className="space-y-2">
          {section.points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Numbered points with title and text */}
      {section.numberedPoints && (
        <div className="space-y-4">
          {section.numberedPoints.map((item: any, i: number) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-6 h-6 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center text-xs font-bold`}>
                  {i + 1}
                </span>
                <span className="text-white font-semibold text-sm">{item.title}</span>
              </div>
              <p className="text-gray-400 text-sm pl-8">{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Two columns */}
      {section.columns && (
        <div className="grid md:grid-cols-2 gap-4">
          {section.columns.map((col: any, i: number) => (
            <div key={i} className="bg-white/5 rounded-xl p-4">
              <h5 className="text-white font-semibold text-sm mb-3">{col.title}</h5>
              <ul className="space-y-2">
                {col.points.map((point: string, j: number) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                    <ChevronRight className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Examples */}
      {section.examples && (
        <div className="space-y-2">
          {section.examples.map((example: string, i: number) => (
            <div key={i} className={`${colors.bgLight} rounded-lg px-4 py-2 text-sm ${colors.text}`}>
              {example}
            </div>
          ))}
        </div>
      )}

      {/* Comparison table */}
      {section.table && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 text-gray-400 font-medium">Aspekt</th>
                <th className="text-left py-2 text-gray-400 font-medium">Wettbewerber</th>
                <th className="text-left py-2 text-green-400 font-medium">FEELY</th>
              </tr>
            </thead>
            <tbody>
              {section.table.map((row: any, i: number) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-2 text-white">{row.aspect || row.scenario}</td>
                  <td className="py-2 text-gray-400">{row.competitor || row.solution}</td>
                  <td className="py-2 text-green-400">{row.feely || row.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Metrics table */}
      {section.metricsTable && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-2 text-gray-400 font-medium">Metrik</th>
                <th className="text-left py-2 text-green-400 font-medium">FEELY</th>
                <th className="text-left py-2 text-gray-400 font-medium">Vergleich</th>
              </tr>
            </thead>
            <tbody>
              {section.metricsTable.map((row: any, i: number) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-2 text-white">{row.metric}</td>
                  <td className="py-2 text-green-400 font-semibold">{row.value}</td>
                  <td className="py-2 text-gray-500">{row.comparison}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function ObjectionCard({ objection, categoryColor }: { objection: typeof objections[0]; categoryColor: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const colors = colorClasses[categoryColor]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass rounded-2xl overflow-hidden border ${colors.border}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex items-start gap-4 hover:bg-white/5 transition-colors"
      >
        <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <span className={`${colors.text} font-bold text-sm`}>{objection.id}</span>
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="text-base font-bold text-white mb-1 pr-8">{objection.question}</h3>
          <p className={`${colors.text} text-sm font-medium`}>{objection.shortAnswer}</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
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
            <div className="px-5 pb-5 pt-2 border-t border-white/10">
              {objection.sections.map((section, i) => (
                <RenderSection key={i} section={section} color={categoryColor} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function EinwandKatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredObjections = activeCategory
    ? objections.filter(o => o.categoryId === activeCategory)
    : objections

  const groupedObjections = categories.map(cat => ({
    ...cat,
    objections: objections.filter(o => o.categoryId === cat.id)
  }))

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <MessageSquareWarning className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm">19 kritische Fragen – 19 ehrliche Antworten</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Einwand-Katalog
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Die häufigsten kritischen Fragen von Investoren – kategorisiert, strukturiert und mit ausführlichen Antworten. Klicken Sie auf eine Frage für die vollständige Antwort.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Alle ({objections.length})
            </button>
            {categories.map((cat) => {
              const colors = colorClasses[cat.color]
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? `${colors.bg} ${colors.text} ${colors.border} border`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.name}</span>
                  <span className="sm:hidden">{cat.count}</span>
                  <span className="hidden sm:inline text-xs opacity-70">({cat.count})</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Questions grouped by category */}
        {activeCategory === null ? (
          // Show all grouped by category
          <div className="space-y-10">
            {groupedObjections.map((group, groupIndex) => {
              const Icon = group.icon
              const colors = colorClasses[group.color]
              return (
                <motion.section
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{group.name}</h2>
                      <p className="text-gray-500 text-sm">{group.count} Fragen</p>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="space-y-3 pl-0 md:pl-13">
                    {group.objections.map((objection, index) => (
                      <motion.div
                        key={objection.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <ObjectionCard objection={objection} categoryColor={group.color} />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )
            })}
          </div>
        ) : (
          // Show filtered category
          <div className="space-y-3">
            {filteredObjections.map((objection, index) => {
              const category = categories.find(c => c.id === objection.categoryId)!
              return (
                <motion.div
                  key={objection.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ObjectionCard objection={objection} categoryColor={category.color} />
                </motion.div>
              )
            })}
          </div>
        )}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-3xl p-8 bg-gradient-to-br from-green-500/10 via-yellow-500/5 to-blue-500/10 border border-green-500/20"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white mb-2">
              Vollständige Transparenz
            </h2>
            <p className="text-gray-400">
              19 Fragen. 8 Kategorien. 0 versteckte Risiken.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Partnerschaften', count: 3, color: 'blue' },
              { label: 'Wettbewerb', count: 3, color: 'red' },
              { label: 'Team', count: 3, color: 'purple' },
              { label: 'Technologie', count: 3, color: 'cyan' },
              { label: 'Geschäftsmodell', count: 3, color: 'yellow' },
              { label: 'Markt & Timing', count: 3, color: 'green' },
              { label: 'Regulierung', count: 2, color: 'indigo' },
              { label: 'Risiken', count: 1, color: 'orange' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className={`text-2xl font-black ${colorClasses[item.color].text}`}>{item.count}</div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Jedes Startup hat Risiken. Der Unterschied ist nicht, ob Risiken existieren –
              sondern ob sie erkannt und adressiert werden.
            </p>
            <p className="text-green-400 font-semibold">
              FEELY kennt seine Risiken und hat für jedes einen Plan.
              Das ist kein Zeichen von Schwäche, sondern von Reife.
            </p>
          </div>
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
