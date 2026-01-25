'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Leaf,
  AlertTriangle,
  Smartphone,
  HelpCircle,
  Clock,
  MapPin,
  Target,
  Brain,
  Users,
  Lock,
  ShoppingCart,
  Scan,
  Wallet,
  Save,
  Building,
  BarChart3,
  TrendingUp,
  DollarSign,
  PieChart,
  Calendar,
  Rocket,
  Heart,
  MessageSquare,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Award,
  ArrowRight,
  ExternalLink,
  Star,
  Percent,
  Play,
  X
} from 'lucide-react'

// Slide data
const slides = [
  {
    id: 1,
    type: 'cover',
    title: 'FEELY',
    subtitle: 'Einkaufen. Verstehen. Leben.',
    description: 'Die erste Plattform die jeden Supermarkt und Hofladen vereint – mit personalisierter Gesundheitsintelligenz für jeden Einkauf.',
  },
  {
    id: 2,
    type: 'problem-intro',
    title: 'Das Problem',
    headline: 'Der Lebensmitteleinkauf ist kaputt.',
    content: 'Wir leben im Jahr 2026. Wir können ein Taxi mit einem Klick bestellen, Flüge in Sekunden buchen, Produkte aus der ganzen Welt nach Hause liefern lassen. Aber wenn es um das Grundlegendste geht – unsere Ernährung – stehen wir immer noch ratlos im Supermarkt, lesen kryptische Zutatenlisten und hoffen, dass wir nichts kaufen, was uns schadet.',
  },
  {
    id: 3,
    type: 'problem',
    number: 1,
    title: 'Fragmentierung',
    metric: '5-8 Apps',
    metricLabel: 'pro Haushalt',
    content: 'Jede Supermarktkette hat ihre eigene App. Eigenes Login. Eigene Benutzeroberfläche. Keine arbeitet mit der anderen zusammen. Und Hofläden? Die haben meist GAR KEINE digitale Präsenz.',
    highlight: '36.500+ Lebensmittelgeschäfte in Deutschland. Tausende verschiedene Systeme. Null Integration.',
  },
  {
    id: 4,
    type: 'problem',
    number: 2,
    title: 'Intransparenz',
    metric: 'E471, E481, E500...',
    metricLabel: 'Wer versteht das?',
    content: 'Die Lebensmittelindustrie versteckt sich hinter E-Nummern und Fachbegriffen. Konsumenten haben keine Chance, informierte Entscheidungen zu treffen.',
    highlight: 'Die meisten Menschen kaufen blind ein – und hoffen auf das Beste.',
  },
  {
    id: 5,
    type: 'problem',
    number: 3,
    title: 'Millionen Menschen in Gefahr',
    metric: '23+ Mio.',
    metricLabel: 'Allergiker in Deutschland',
    content: 'Für diese Menschen ist jeder Einkauf ein Risiko. Jedes falsch gelesene Etikett kann zu Magen-Darm-Beschwerden, Hautausschlägen, Atemnot oder im schlimmsten Fall zum anaphylaktischen Schock führen.',
    highlight: 'Es gibt KEIN System, das diese Menschen schützt.',
  },
  {
    id: 6,
    type: 'problem',
    number: 4,
    title: 'Verlorene Lebenszeit',
    metric: '100+ Std.',
    metricLabel: 'pro Jahr für Einkäufe',
    content: '2+ Stunden pro Woche nur für Lebensmitteleinkäufe. Für Menschen mit Allergien oder besonderen Ernährungsbedürfnissen ist es noch schlimmer: 3-4 Stunden pro Woche.',
    highlight: 'Das ist Zeit, die niemand hat – und die niemand so verbringen möchte.',
  },
  {
    id: 7,
    type: 'problem',
    number: 5,
    title: 'Das Land wird vergessen',
    metric: '~15 Mio.',
    metricLabel: 'Menschen ohne Lieferservice',
    content: 'In Städten gibt es Flink, Gorillas, REWE Lieferservice, Amazon Fresh. Auf dem Land? NICHTS. Diese Menschen fahren 20-30 Minuten zum nächsten Supermarkt.',
    highlight: 'Die Digitalisierung hat das Land vergessen. FEELY wird das ändern.',
  },
  {
    id: 8,
    type: 'problem-summary',
    title: '5 Probleme. 1 Lösung.',
    problems: [
      { icon: 'Smartphone', label: 'Fragmentiert', sub: '5-8 Apps pro Haushalt' },
      { icon: 'HelpCircle', label: 'Intransparent', sub: 'Kryptische Zutaten' },
      { icon: 'AlertTriangle', label: 'Gesundheitsrisiko', sub: '23+ Mio. Allergiker' },
      { icon: 'Clock', label: 'Zeitverschwendung', sub: '100+ Std/Jahr' },
      { icon: 'MapPin', label: 'Land vergessen', sub: '15 Mio. ohne Service' },
    ],
    highlight: 'Es existiert keine Lösung, die all diese Probleme gleichzeitig adressiert. Bis jetzt.',
  },
  {
    id: 9,
    type: 'solution-intro',
    title: 'Die Lösung',
    headline: 'Eine Plattform. Alle Supermärkte. Alle Hofläden.',
    subheadline: 'Personalisiert auf deine Gesundheit.',
    content: 'FEELY ist das Instacart für Europa – aber mit Gesundheitsintelligenz. Wir digitalisieren jeden Lebensmittelhändler in Deutschland. Vom größten Supermarkt bis zum kleinsten Hofladen um die Ecke.',
  },
  {
    id: 10,
    type: 'how-it-works',
    title: 'Für Konsumenten',
    subtitle: 'So funktioniert FEELY',
    steps: [
      { icon: 'Users', title: 'Profil erstellen', desc: 'Allergien, Unverträglichkeiten, Ziele – einmal eingeben, für immer nutzen.' },
      { icon: 'ShoppingCart', title: 'Supermärkte entdecken', desc: 'Alle Märkte und Hofläden auf einen Blick mit Echtzeit-Verfügbarkeit.' },
      { icon: 'Brain', title: 'Intelligent einkaufen', desc: 'KI-gestützte Analyse zeigt sofort, ob ein Produkt für dich geeignet ist.' },
      { icon: 'Rocket', title: 'Bestellen & Erhalten', desc: 'Abholung, Lieferung oder optimierte Einkaufsliste – du entscheidest.' },
    ],
  },
  {
    id: 11,
    type: 'for-providers',
    title: 'Für Supermärkte & Hofläden',
    subtitle: 'Der einfachste Weg zur Digitalisierung',
    problem: 'Eigene App entwickeln? €50.000-200.000 Kosten. Monate bis Jahre Entwicklungszeit.',
    features: [
      { icon: 'BarChart3', title: 'Eigenes Dashboard', desc: 'Sortiment, Preise, Angebote verwalten' },
      { icon: 'MessageSquare', title: 'Kundenkommunikation', desc: 'News, Push-Nachrichten, Ankündigungen' },
      { icon: 'TrendingUp', title: 'Analytics', desc: 'Verkaufsstatistiken, Kundenverhalten' },
      { icon: 'ShoppingCart', title: 'Bestellmanagement', desc: 'Bestellungen empfangen & koordinieren' },
    ],
    highlight: 'Keine Entwicklungskosten. Keine technischen Kenntnisse nötig. Sofort online.',
  },
  {
    id: 12,
    type: 'feature-deep-dive',
    title: 'Personalisierte Gesundheitsanalyse',
    before: {
      title: 'OHNE FEELY',
      content: '"Haferflocken, Honig, Nüsse, Rosinen..." – Enthält das Gluten? Welche Nüsse genau? Passt das zu meiner Diät?',
    },
    after: {
      title: 'MIT FEELY',
      warnings: ['Enthält: Haselnüsse, Mandeln', 'Enthält: Hafer (Gluten)'],
      score: 'Gesundheitsscore: 4/10 für dein Profil',
    },
    premium: 'Premium-Analyse: Detaillierte Auswirkungen auf deine Ziele, alternative Produktvorschläge, wissenschaftliche Grundlagen.',
  },
  {
    id: 13,
    type: 'feature-scanner',
    title: 'Barcode Scanner',
    scenario: 'Du stehst im Supermarkt. In der Hand ein Produkt, das du nicht kennst.',
    old: 'Früher: Zutatenliste lesen, googeln, unsicher sein, trotzdem kaufen, hoffen.',
    new: 'MIT FEELY: App öffnen, Barcode scannen, in <1 Sekunde: Komplette Analyse.',
    features: ['Offline-Modus', 'Preisvergleich', 'Direkt in Warenkorb', 'Unbekannte Produkte melden'],
  },
  {
    id: 14,
    type: 'feature-budget',
    title: 'Budget & Tracking',
    budget: {
      title: 'Budget-Kontrolle',
      features: ['Echtzeit-Übersicht aller Ausgaben', 'Monatliche Budgets setzen', 'Vergleich mit Vormonaten'],
    },
    nutrition: {
      title: 'Ernährungstracker',
      features: ['Was du isst, automatisch erfasst', 'Nährstoffverteilung', 'Vitamin & Mineralien', 'Ziel-Tracking'],
    },
  },
  {
    id: 15,
    type: 'feature-toogoodtogo',
    title: 'Lebensmittelrettung',
    problem: {
      metric: '11 Mio. Tonnen',
      label: 'Lebensmittel werden in Deutschland jährlich weggeworfen',
    },
    solution: 'Anbieter können Produkte markieren, die bald ablaufen – mit bis zu 50% Rabatt.',
    benefits: [
      { label: 'Konsumenten', value: 'Sparen Geld' },
      { label: 'Anbieter', value: 'Weniger Verlust' },
      { label: 'Umwelt', value: 'Weniger Verschwendung' },
    ],
  },
  {
    id: 16,
    type: 'market-overview',
    title: 'Der Markt',
    subtitle: 'Ein Markt der sich verdoppeln wird',
    stats: [
      { value: '€209,7 Mrd.', label: 'Lebensmittelmarkt 2024', source: 'EHI' },
      { value: '€8,6 → €17 Mrd.', label: 'Online 2024 → 2029', source: 'Statista' },
      { value: '4% → 10%+', label: 'Online-Anteil wächst', source: 'McKinsey' },
      { value: '+11% p.a.', label: 'Jährliches Wachstum', source: 'Mintel' },
    ],
    highlight: 'Deutschland ist UNTERDIGITALISIERT. UK: 12% Online. Südkorea: 25% Online. Deutschland holt auf.',
  },
  {
    id: 17,
    type: 'market-infrastructure',
    title: 'Die Infrastruktur existiert',
    stats: [
      { value: '36.565', label: 'Lebensmittelgeschäfte in DE', sub: 'Supermärkte, Discounter, etc.' },
      { value: '20.000-25.000', label: 'Hofläden & Direktvermarkter', sub: 'Bisher kaum digital' },
      { value: '17 Mio.', label: 'Hofladen-Käufer', sub: 'Regelmäßig in Deutschland' },
    ],
    highlight: 'Die Geschäfte sind da. Die Kunden sind da. Was fehlt ist die VERBINDUNG.',
  },
  {
    id: 18,
    type: 'market-target',
    title: 'Menschen die FEELY brauchen',
    groups: [
      { value: '23+ Mio.', label: 'Allergiker', source: 'RKI' },
      { value: '15-20%', label: 'Unverträglichkeiten', source: 'DGE' },
      { value: '7+ Mio.', label: 'Diabetiker', source: 'Deutsche Diabetes Hilfe' },
      { value: '~50%', label: 'Wollen gesünder essen', source: 'Diverse Umfragen' },
    ],
    highlight: 'Gesundheit wird zum Lifestyle. Generation Z priorisiert gesunde Ernährung.',
  },
  {
    id: 19,
    type: 'instacart-proof',
    title: 'Instacart zeigt: Es funktioniert',
    metrics: [
      { value: '$33,5 Mrd.', label: 'Transaktionsvolumen' },
      { value: '$3,38 Mrd.', label: 'Revenue (+11% YoY)' },
      { value: '$457 Mio.', label: 'Profit 2024' },
      { value: '14,4 Mio.', label: 'Aktive Nutzer' },
    ],
    difference: [
      'Keine personalisierte Gesundheitsanalyse',
      'Keine Allergen-Warnungen',
      'Keine KI-gestützte Ernährungsberatung',
      'Kein Fokus auf ländliche Regionen',
    ],
    conclusion: 'FEELY = Instacart + Gesundheitsintelligenz',
  },
  {
    id: 20,
    type: 'competition',
    title: 'Wettbewerb',
    subtitle: 'Warum es keine direkte Konkurrenz gibt',
    competitors: [
      { name: 'REWE/EDEKA Apps', multiRetail: false, health: false, farms: false, rural: false },
      { name: 'Flink/Gorillas', multiRetail: false, health: false, farms: false, rural: false },
      { name: 'TooGoodToGo', multiRetail: false, health: false, farms: 'partial', rural: 'partial' },
      { name: 'FEELY', multiRetail: true, health: true, farms: true, rural: true },
    ],
    features: ['Multi-Retailer', 'Gesundheit', 'Hofläden', 'Land'],
    highlight: '0 direkte Konkurrenz in Deutschland.',
  },
  {
    id: 21,
    type: 'business-model-overview',
    title: 'Geschäftsmodell',
    subtitle: 'Vier Einnahmequellen',
    streams: [
      { name: 'Premium-Abo (B2C)', percent: 25 },
      { name: 'Transaktionsgebühren', percent: 40 },
      { name: 'Werbung', percent: 25 },
      { name: 'B2B Services', percent: 10 },
    ],
    note: 'Mehrere Einnahmequellen = Diversifiziertes Risiko + Höherer Lifetime Value',
  },
  {
    id: 22,
    type: 'premium-model',
    title: 'Premium-Abo (B2C)',
    price: '€3,99 / Monat',
    yearlyPrice: '€39,99 / Jahr (2 Monate gratis)',
    comparison: [
      { feature: 'Multi-Retailer Suche', free: true, premium: true },
      { feature: 'Basis Allergen-Warnungen', free: true, premium: true },
      { feature: 'Barcode Scanner', free: true, premium: true },
      { feature: 'KI-Produktanalyse', free: false, premium: true },
      { feature: 'Ziel-basierte Empfehlungen', free: false, premium: true },
      { feature: 'Wissenschaftliche Quellen', free: false, premium: true },
      { feature: 'Werbefreiheit', free: false, premium: true },
    ],
    target: 'Ziel: 5-10% Premium Conversion',
  },
  {
    id: 23,
    type: 'transaction-fees',
    title: 'Transaktionsgebühren',
    fees: [
      { type: 'Abholung', percent: '3-5%', note: 'Niedriger, da keine Logistik' },
      { type: 'Lieferung', percent: '10-15%', note: 'Branchenüblich' },
    ],
    example: {
      basket: '€45',
      avgFee: '8%',
      perOrder: '€3,60',
    },
    reference: 'Instacart verdient ~$2-4 netto pro Bestellung bei 294 Mio. Bestellungen/Jahr = profitabel.',
  },
  {
    id: 24,
    type: 'advertising',
    title: 'Werbung & Promoted Products',
    highlight: 'Instacart macht >$1 Mrd. mit Werbung.',
    reason: 'HIGH-INTENT AUDIENCE: Wenn jemand die FEELY App öffnet, will er KAUFEN.',
    formats: ['Sponsored Products', 'Banner Ads', 'Push Notifications', 'Brand Stores'],
    unique: 'UNIQUE: Targeting nach Gesundheitsprofil – das kann NIEMAND sonst bieten.',
  },
  {
    id: 25,
    type: 'b2b-services',
    title: 'B2B Services',
    tiers: [
      { name: 'Basic (kostenlos)', features: ['Listung auf FEELY', 'Basis-Dashboard', 'Standard-Support'] },
      { name: 'Pro (€99-499/Monat)', features: ['Premium-Platzierung', 'Erweiterte Analytics', 'Marketing-Tools'] },
      { name: 'Enterprise', features: ['White-Label Optionen', 'Custom Integrationen', 'Account Management'] },
    ],
  },
  {
    id: 26,
    type: 'unit-economics',
    title: 'Unit Economics',
    revenue: {
      title: 'Revenue pro Nutzer/Monat',
      free: '~€7,70',
      premium: '~€11,70',
    },
    costs: {
      title: 'Kosten pro Nutzer/Monat',
      total: '~€0,70',
    },
    margin: {
      free: '€7,00',
      premium: '€11,00',
    },
    cac: {
      target: '<€15',
      payback: '<2 Monate',
    },
    conclusion: 'Positive Unit Economics ab Tag 1.',
  },
  {
    id: 27,
    type: 'traction',
    title: 'Traction & Status',
    completed: [
      'Komplette App (iOS & Android) - Produktionsreif',
      'Onboarding-System (24 Screens, 7 Phasen)',
      'Gesundheitsanalyse-Engine (120+ Allergien, 80+ Krankheiten)',
      'Produktdatenbank (3.100+ reale Produkte)',
      'Barcode Scanner (<1 Sekunde)',
      'Website & Landing Pages live',
    ],
    inProgress: [
      'App Store Approval',
      'Erste Partner-Gespräche',
      'Team-Aufbau',
    ],
    highlight: 'Das Fundament steht. Der härteste Teil ist geschafft.',
  },
  {
    id: 28,
    type: 'roadmap',
    title: 'Roadmap',
    phases: [
      {
        name: 'Phase 1: Foundation',
        timeline: 'Jetzt – Q2 2026',
        status: 'current',
        goals: ['Kernteam aufbauen', 'App Store Launch', '20-50 Partner', '1.000-5.000 Nutzer', 'Seed-Finanzierung (€250-500k)'],
      },
      {
        name: 'Phase 2: Growth',
        timeline: 'Q3 2026 – Q4 2027',
        status: 'planned',
        goals: ['100-500 Partner', '50.000+ Nutzer', '5-10% Premium Conversion', 'Series A (€2-5M)'],
      },
      {
        name: 'Phase 3: Scale',
        timeline: '2028',
        status: 'planned',
        goals: ['Nationale Abdeckung', '500.000+ Nutzer', 'Profitabilität', 'Team: 30-50'],
      },
      {
        name: 'Phase 4: Expansion',
        timeline: '2029+',
        status: 'planned',
        goals: ['DACH Expansion', '2+ Mio. Nutzer', 'EU-Märkte', 'IPO/Exit'],
      },
    ],
  },
  {
    id: 29,
    type: 'team-search',
    title: 'Das Team',
    subtitle: 'Mitgründer gesucht',
    intro: 'FEELY sucht keine Angestellten. FEELY sucht Mitgründer.',
    roles: [
      {
        title: 'CTO / Tech Co-Founder',
        requirements: ['Mobile Development (React Native)', 'Backend & skalierbare Systeme', 'Startup-DNA'],
        equity: '10-20%',
      },
      {
        title: 'Head of Nutrition / Science',
        requirements: ['Studium Ernährungswissenschaft/Medizin', 'Evidenzbasierte Ernährung', 'Kommunikationsstärke'],
        equity: '5-10%',
      },
      {
        title: 'CEO / Business Co-Founder',
        requirements: ['Erfahrung Unternehmensaufbau', 'Netzwerk in Handel/Food', 'Strategisches Denken'],
        equity: '15-25%',
      },
    ],
  },
  {
    id: 30,
    type: 'founder',
    title: 'Der Gründer',
    subtitle: 'Warum ich das baue',
    story: 'Mein Name ist Juli. Ich bin kein Programmierer. Kein BWLer. Ich bin Student. Und ich habe diese gesamte App alleine gebaut. Weil ich das Problem jeden Tag selbst erlebe.',
    background: [
      'Essstörungen durchgemacht – heute achte ich genau auf meine Ernährung',
      'Unverträglichkeiten entwickelt – jeder Einkauf erfordert Prüfung',
      'Aus einem kleinen Dorf – der nächste Supermarkt ist 20 Minuten entfernt',
      'Schwester ist chronisch krank – muss täglich auf Ernährung achten',
      'Tante hat schwere Allergien – ein falsches Produkt kann lebensgefährlich sein',
      'Vater früh an Krebs verloren – hat sich immer schlecht ernährt',
    ],
    strengths: [
      { title: 'Überzeugung', desc: 'Ich weiß, dass das funktioniert, weil ich das Problem selbst habe' },
      { title: 'Umsetzungskraft', desc: 'Eine komplette App ohne Coding-Background gebaut' },
      { title: 'Authentizität', desc: 'Das ist keine Business-Idee. Das ist eine Mission.' },
    ],
  },
  {
    id: 31,
    type: 'investment',
    title: 'Investment Opportunity',
    amount: '€250.000 – €500.000',
    round: 'Seed-Runde',
    useOfFunds: [
      { category: 'Team', percent: 40 },
      { category: 'Wachstum', percent: 30 },
      { category: 'Produkt', percent: 20 },
      { category: 'Operations', percent: 10 },
    ],
    investorsBenefit: [
      'Equity (Prozentsatz verhandelbar)',
      'Regelmäßige Updates & Transparenz',
      'Mitsprache bei strategischen Entscheidungen',
      'Potential für 10x+ Returns',
    ],
  },
  {
    id: 32,
    type: 'why-now',
    title: 'Warum jetzt?',
    reasons: [
      { title: 'Markt-Timing', desc: 'Online-Lebensmittelmarkt verdoppelt sich in 5 Jahren' },
      { title: 'Technologie-Timing', desc: 'KI ermöglicht personalisierte Ernährungsempfehlungen' },
      { title: 'Gesellschafts-Timing', desc: 'Gen Z priorisiert gesunde Ernährung wie nie zuvor' },
      { title: 'Wettbewerbs-Timing', desc: 'KEINE direkte Konkurrenz – aber das kann sich ändern' },
      { title: 'Produkt-Timing', desc: 'Die App ist FERTIG. Nicht Prototyp. FERTIG.' },
    ],
    conclusion: 'Das Fenster ist jetzt offen. Es wird nicht ewig offen bleiben.',
  },
  {
    id: 33,
    type: 'risks',
    title: 'Risiken & Mitigierung',
    risks: [
      {
        risk: 'Supermarkt-Partnerschaften',
        question: 'Was wenn die großen Ketten nicht mitmachen?',
        mitigation: 'Start mit Hofläden und kleineren Märkten. Bei genug Nutzern MÜSSEN Ketten mitmachen.',
      },
      {
        risk: 'Wettbewerb',
        question: 'Was wenn REWE selbst sowas baut?',
        mitigation: 'REWE wird niemals EDEKA integrieren. Multi-Retailer ist nur für Dritte möglich.',
      },
      {
        risk: 'Team',
        question: 'Solo-Gründer – kann er ein Team aufbauen?',
        mitigation: 'Dieses Pitch Deck existiert genau dafür. Equity-Incentives für Top-Talent.',
      },
      {
        risk: 'Markt-Akzeptanz',
        question: 'Wollen Menschen wirklich online Lebensmittel kaufen?',
        mitigation: 'Instacart beweist: Ja. Trend ist eindeutig und unumkehrbar.',
      },
    ],
    conclusion: 'Jedes Startup hat Risiken. Der Unterschied: Wir kennen unsere und haben Pläne.',
  },
  {
    id: 34,
    type: 'cta',
    title: 'Bereit die Zukunft mitzugestalten?',
    summary: [
      'Das Problem: Ein fragmentierter, intransparenter Markt',
      'Die Lösung: Eine Plattform für alles, mit Gesundheitsintelligenz',
      'Der Markt: €210+ Mrd., verdoppelt sich',
      'Das Produkt: Fertig gebaut',
      'Das Geschäftsmodell: Bewährt, diversifiziert',
      'Das Team: Entschlossen, sucht Verstärkung',
    ],
    question: 'Wollen Sie dabei sein?',
    actions: [
      { label: 'Gespräch vereinbaren', href: 'mailto:partner@feelyapp.de?subject=Gespr%C3%A4ch%20Anfrage', primary: true },
      { label: 'E-Mail schreiben', href: 'mailto:partner@feelyapp.de', primary: false },
    ],
    quote: '"Die Zukunft des Einkaufens wird personalisiert sein. Die Frage ist nicht OB, sondern WER sie baut. Wir haben angefangen. Bauen Sie mit?"',
    author: '– Juli, Gründer FEELY',
  },
  {
    id: 35,
    type: 'appendix',
    title: 'Weitere Informationen',
    resources: [
      { name: 'Executive Summary', href: '/pitch-deck/executive-summary', desc: '2-Seiten Zusammenfassung' },
      { name: 'Marktanalyse', href: '/pitch-deck/marktanalyse', desc: 'Detaillierte Zahlen mit Quellen' },
      { name: 'Einwand-Katalog', href: '/pitch-deck/einwand-katalog', desc: 'Antworten auf kritische Fragen' },
      { name: 'Vergleichsanalyse', href: '/pitch-deck/vergleichsanalyse', desc: 'FEELY vs. Wettbewerber' },
    ],
    contact: {
      email: 'partner@feelyapp.de',
      website: 'feelyapp.info',
    },
    disclaimer: '© 2026 FEELY – Confidential – Nur für qualifizierte Empfänger',
  },
]

// Icon mapping
const iconMap: Record<string, any> = {
  Smartphone,
  HelpCircle,
  AlertTriangle,
  Clock,
  MapPin,
  Users,
  ShoppingCart,
  Brain,
  Rocket,
  BarChart3,
  MessageSquare,
  TrendingUp,
}

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'Home') {
        setCurrentSlide(0)
      } else if (e.key === 'End') {
        setCurrentSlide(slides.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = slides[currentSlide]

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-white/10 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Slide Counter */}
      <div className="fixed top-20 right-6 z-40 glass rounded-full px-4 py-2">
        <span className="text-green-400 font-bold">{currentSlide + 1}</span>
        <span className="text-gray-500"> / {slides.length}</span>
      </div>

      {/* Main Slide Area */}
      <div className="min-h-screen pt-24 pb-32 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            {/* Render slide based on type */}
            {renderSlide(slide)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass rounded-2xl p-4 flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Zurück</span>
            </button>

            {/* Slide Dots */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-[50%] py-2 px-4 hide-scrollbar">
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all flex-shrink-0 ${
                    index === currentSlide
                      ? 'w-8 bg-green-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/20 hover:bg-green-500/30 text-green-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <span className="hidden sm:inline">Weiter</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Sidebar */}
      <div className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <div className="glass rounded-2xl p-3 space-y-2 max-h-[60vh] overflow-y-auto hide-scrollbar">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => goToSlide(index)}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                index === currentSlide
                  ? 'bg-green-500 text-white'
                  : 'text-gray-500 hover:text-white hover:bg-white/10'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

// Slide renderer function
function renderSlide(slide: typeof slides[0]) {
  switch (slide.type) {
    case 'cover':
      return <CoverSlide slide={slide} />
    case 'problem-intro':
      return <ProblemIntroSlide slide={slide} />
    case 'problem':
      return <ProblemSlide slide={slide} />
    case 'problem-summary':
      return <ProblemSummarySlide slide={slide} />
    case 'solution-intro':
      return <SolutionIntroSlide slide={slide} />
    case 'how-it-works':
      return <HowItWorksSlide slide={slide} />
    case 'for-providers':
      return <ForProvidersSlide slide={slide} />
    case 'feature-deep-dive':
      return <FeatureDeepDiveSlide slide={slide} />
    case 'feature-scanner':
      return <FeatureScannerSlide slide={slide} />
    case 'feature-budget':
      return <FeatureBudgetSlide slide={slide} />
    case 'feature-toogoodtogo':
      return <FeatureTooGoodToGoSlide slide={slide} />
    case 'market-overview':
      return <MarketOverviewSlide slide={slide} />
    case 'market-infrastructure':
      return <MarketInfrastructureSlide slide={slide} />
    case 'market-target':
      return <MarketTargetSlide slide={slide} />
    case 'instacart-proof':
      return <InstacartProofSlide slide={slide} />
    case 'competition':
      return <CompetitionSlide slide={slide} />
    case 'business-model-overview':
      return <BusinessModelOverviewSlide slide={slide} />
    case 'premium-model':
      return <PremiumModelSlide slide={slide} />
    case 'transaction-fees':
      return <TransactionFeesSlide slide={slide} />
    case 'advertising':
      return <AdvertisingSlide slide={slide} />
    case 'b2b-services':
      return <B2BServicesSlide slide={slide} />
    case 'unit-economics':
      return <UnitEconomicsSlide slide={slide} />
    case 'traction':
      return <TractionSlide slide={slide} />
    case 'roadmap':
      return <RoadmapSlide slide={slide} />
    case 'team-search':
      return <TeamSearchSlide slide={slide} />
    case 'founder':
      return <FounderSlide slide={slide} />
    case 'investment':
      return <InvestmentSlide slide={slide} />
    case 'why-now':
      return <WhyNowSlide slide={slide} />
    case 'risks':
      return <RisksSlide slide={slide} />
    case 'cta':
      return <CTASlide slide={slide} />
    case 'appendix':
      return <AppendixSlide slide={slide} />
    default:
      return <div>Unknown slide type</div>
  }
}

// Individual Slide Components
function CoverSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 gradient-bg opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="relative mb-8">
          <Image
            src="/images/logo.png"
            alt="FEELY Logo"
            width={150}
            height={150}
            className="mx-auto drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-green-500 rounded-3xl blur-3xl opacity-30 scale-150" />
        </div>

        <h1 className="text-6xl md:text-8xl font-black gradient-text mb-6">
          {slide.title}
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          {slide.subtitle}
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          {slide.description}
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <span>Confidential Pitch Deck</span>
          <span>•</span>
          <span>Januar 2026</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-gray-500 animate-bounce" />
      </motion.div>
    </div>
  )
}

function ProblemIntroSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-green-400 font-bold text-lg mb-4 block">{slide.title}</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          {slide.headline}
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
          {slide.content}
        </p>
        <div className="mt-8 text-green-400 font-bold text-xl">
          Das muss sich ändern.
        </div>
      </motion.div>
    </div>
  )
}

function ProblemSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-medium text-sm">Problem #{slide.number}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            {slide.title}
          </h2>

          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            {slide.content}
          </p>

          <div className="glass rounded-xl p-4 border-l-4 border-red-500">
            <p className="text-gray-300 font-medium">
              {slide.highlight}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12">
            <div className="text-6xl md:text-7xl font-black gradient-text mb-2">
              {slide.metric}
            </div>
            <div className="text-gray-500 text-lg">
              {slide.metricLabel}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ProblemSummarySlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
        {slide.problems.map((problem: any, index: number) => {
          const Icon = iconMap[problem.icon] || AlertTriangle
          return (
            <motion.div
              key={problem.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <Icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <div className="text-white font-bold mb-1">{problem.label}</div>
              <div className="text-gray-500 text-sm">{problem.sub}</div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block">
          <p className="text-xl text-gray-300">
            {slide.highlight}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function SolutionIntroSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
          <Rocket className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium text-sm">{slide.title}</span>
        </div>

        <div className="relative mb-8">
          <Image
            src="/images/logo.png"
            alt="FEELY"
            width={100}
            height={100}
            className="mx-auto"
          />
          <div className="absolute inset-0 bg-green-500 rounded-2xl blur-2xl opacity-30" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
          {slide.headline}
        </h2>
        <h3 className="text-2xl md:text-4xl font-black gradient-text mb-8">
          {slide.subheadline}
        </h3>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {slide.content}
        </p>

        <div className="mt-8 text-green-400 font-bold text-xl">
          In Echtzeit. Bei jedem Einkauf.
        </div>
      </motion.div>
    </div>
  )
}

function HowItWorksSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">{slide.title}</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.subtitle}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {slide.steps.map((step: any, index: number) => {
          const Icon = iconMap[step.icon] || CheckCircle
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass rounded-2xl p-6 relative"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <Icon className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function ForProvidersSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-blue-400 font-bold text-lg mb-2 block">{slide.title}</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {slide.subtitle}
        </h2>
        <p className="text-red-400">{slide.problem}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {slide.features.map((feature: any, index: number) => {
          const Icon = iconMap[feature.icon] || CheckCircle
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <Icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block bg-green-500/10 border border-green-500/20">
          <p className="text-green-400 font-bold text-lg">
            {slide.highlight}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

function FeatureDeepDiveSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 border border-red-500/20"
        >
          <h3 className="text-red-400 font-bold mb-4">{slide.before.title}</h3>
          <p className="text-gray-400">{slide.before.content}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6 border border-green-500/20"
        >
          <h3 className="text-green-400 font-bold mb-4">{slide.after.title}</h3>
          <div className="space-y-2 mb-4">
            {slide.after.warnings.map((warning: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-yellow-400">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">{warning}</span>
              </div>
            ))}
          </div>
          <p className="text-green-400 font-medium">{slide.after.score}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass rounded-2xl p-6 bg-purple-500/10 border border-purple-500/20"
      >
        <h4 className="text-purple-400 font-bold mb-2">Premium Analyse</h4>
        <p className="text-gray-400">{slide.premium}</p>
      </motion.div>
    </div>
  )
}

function FeatureScannerSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-6">{slide.scenario}</p>
          <div className="glass rounded-xl p-4 border-l-4 border-red-500 mb-4">
            <p className="text-red-400 text-sm">{slide.old}</p>
          </div>
          <div className="glass rounded-xl p-4 border-l-4 border-green-500">
            <p className="text-green-400 text-sm">{slide.new}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <Scan className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <div className="space-y-3">
            {slide.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureBudgetSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <Wallet className="w-10 h-10 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">{slide.budget.title}</h3>
          <div className="space-y-3">
            {slide.budget.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <BarChart3 className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-4">{slide.nutrition.title}</h3>
          <div className="space-y-3">
            {slide.nutrition.features.map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureTooGoodToGoSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="text-6xl font-black text-red-400 mb-2">
            {slide.problem.metric}
          </div>
          <div className="text-gray-400">
            {slide.problem.label}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-300 mb-6">{slide.solution}</p>
          <div className="glass rounded-xl p-4">
            <h4 className="text-green-400 font-bold mb-4">WIN-WIN-WIN:</h4>
            <div className="space-y-3">
              {slide.benefits.map((benefit: any, i: number) => (
                <div key={i} className="flex justify-between">
                  <span className="text-gray-400">{benefit.label}:</span>
                  <span className="text-white font-medium">{benefit.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MarketOverviewSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">{slide.title}</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.subtitle}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {slide.stats.map((stat: any, index: number) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-black gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-white font-medium mb-1">{stat.label}</div>
            <div className="text-gray-500 text-xs">{stat.source}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block">
          <p className="text-gray-300">{slide.highlight}</p>
        </div>
      </motion.div>
    </div>
  )
}

function MarketInfrastructureSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Der Markt</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {slide.stats.map((stat: any, index: number) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-black gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-white font-medium mb-1">{stat.label}</div>
            <div className="text-gray-500 text-sm">{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block bg-green-500/10 border border-green-500/20">
          <p className="text-green-400 font-bold text-lg">{slide.highlight}</p>
        </div>
      </motion.div>
    </div>
  )
}

function MarketTargetSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Der Markt</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {slide.groups.map((group: any, index: number) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-black text-red-400 mb-2">
              {group.value}
            </div>
            <div className="text-white font-medium mb-1">{group.label}</div>
            <div className="text-gray-500 text-xs">{group.source}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block">
          <p className="text-gray-300">{slide.highlight}</p>
        </div>
      </motion.div>
    </div>
  )
}

function InstacartProofSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-blue-400 font-bold text-lg mb-2 block">Der Beweis</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-blue-400 mb-6">Instacart 2024</h3>
          <div className="grid grid-cols-2 gap-4">
            {slide.metrics.map((metric: any, i: number) => (
              <div key={i} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-white">{metric.value}</div>
                <div className="text-gray-500 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-red-400 mb-6">Was Instacart NICHT hat:</h3>
          <div className="space-y-3 mb-6">
            {slide.difference.map((diff: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <X className="w-5 h-5 text-red-400" />
                <span className="text-gray-300">{diff}</span>
              </div>
            ))}
          </div>
          <div className="glass rounded-xl p-4 bg-green-500/10 border border-green-500/20">
            <p className="text-green-400 font-bold text-center">{slide.conclusion}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function CompetitionSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
          {slide.title}
        </h2>
        <p className="text-gray-400">{slide.subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="overflow-x-auto"
      >
        <table className="w-full glass rounded-2xl overflow-hidden">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-gray-400">Unternehmen</th>
              {slide.features.map((feature: string) => (
                <th key={feature} className="text-center py-4 px-4 text-gray-400">{feature}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.competitors.map((comp: any, i: number) => (
              <tr key={comp.name} className={`border-b border-white/5 ${comp.name === 'FEELY' ? 'bg-green-500/10' : ''}`}>
                <td className={`py-4 px-6 font-bold ${comp.name === 'FEELY' ? 'text-green-400' : 'text-white'}`}>
                  {comp.name}
                </td>
                <td className="text-center py-4 px-4">
                  {comp.multiRetail ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </td>
                <td className="text-center py-4 px-4">
                  {comp.health ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </td>
                <td className="text-center py-4 px-4">
                  {comp.farms === true ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : comp.farms === 'partial' ? <span className="text-yellow-400">(~)</span> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </td>
                <td className="text-center py-4 px-4">
                  {comp.rural === true ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : comp.rural === 'partial' ? <span className="text-yellow-400">(~)</span> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-8"
      >
        <div className="glass rounded-2xl p-6 inline-block bg-green-500/10 border border-green-500/20">
          <p className="text-green-400 font-bold text-xl">{slide.highlight}</p>
        </div>
      </motion.div>
    </div>
  )
}

function BusinessModelOverviewSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
          {slide.title}
        </h2>
        <p className="text-gray-400">{slide.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {slide.streams.map((stream: any, index: number) => (
          <motion.div
            key={stream.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-black gradient-text mb-2">
              {stream.percent}%
            </div>
            <div className="text-white font-medium">{stream.name}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-gray-400">{slide.note}</p>
      </motion.div>
    </div>
  )
}

function PremiumModelSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Revenue Stream #1</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {slide.title}
        </h2>
        <div className="text-3xl font-black gradient-text">{slide.price}</div>
        <div className="text-gray-500">{slide.yearlyPrice}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass rounded-2xl overflow-hidden max-w-2xl mx-auto w-full"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-6 text-gray-400">Feature</th>
              <th className="text-center py-3 px-4 text-gray-400">Free</th>
              <th className="text-center py-3 px-4 text-green-400">Premium</th>
            </tr>
          </thead>
          <tbody>
            {slide.comparison.map((item: any, i: number) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-3 px-6 text-gray-300">{item.feature}</td>
                <td className="text-center py-3 px-4">
                  {item.free ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                </td>
                <td className="text-center py-3 px-4">
                  {item.premium ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-6"
      >
        <span className="text-green-400 font-medium">{slide.target}</span>
      </motion.div>
    </div>
  )
}

function TransactionFeesSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Revenue Stream #2</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {slide.fees.map((fee: any, index: number) => (
          <motion.div
            key={fee.type}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-4xl font-black gradient-text mb-2">{fee.percent}</div>
            <div className="text-white font-bold mb-1">{fee.type}</div>
            <div className="text-gray-500 text-sm">{fee.note}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass rounded-2xl p-6 max-w-lg mx-auto"
      >
        <h4 className="text-white font-bold mb-4">Beispielrechnung:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Warenkorb:</span>
            <span className="text-white">{slide.example.basket}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Avg. Fee:</span>
            <span className="text-white">{slide.example.avgFee}</span>
          </div>
          <div className="flex justify-between border-t border-white/10 pt-2">
            <span className="text-gray-400">Pro Bestellung:</span>
            <span className="text-green-400 font-bold">{slide.example.perOrder}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-gray-500 text-sm">{slide.reference}</p>
      </motion.div>
    </div>
  )
}

function AdvertisingSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Revenue Stream #3</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {slide.title}
        </h2>
        <p className="text-2xl font-bold text-blue-400">{slide.highlight}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Warum es funktioniert:</h3>
          <p className="text-gray-400 mb-6">{slide.reason}</p>
          <h4 className="text-white font-bold mb-3">Ad-Formate:</h4>
          <div className="space-y-2">
            {slide.formats.map((format: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{format}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6 bg-purple-500/10 border border-purple-500/20"
        >
          <Star className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-purple-400 mb-4">UNIQUE bei FEELY:</h3>
          <p className="text-gray-300">{slide.unique}</p>
        </motion.div>
      </div>
    </div>
  )
}

function B2BServicesSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Revenue Stream #4</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {slide.tiers.map((tier: any, index: number) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass rounded-2xl p-6 ${index === 1 ? 'border-2 border-green-500/50' : ''}`}
          >
            <h3 className={`text-xl font-bold mb-4 ${index === 1 ? 'text-green-400' : 'text-white'}`}>
              {tier.name}
            </h3>
            <div className="space-y-3">
              {tier.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className={`w-5 h-5 ${index === 1 ? 'text-green-400' : 'text-gray-400'}`} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function UnitEconomicsSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-green-400 font-bold mb-4">{slide.revenue.title}</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Free Nutzer:</span>
              <span className="text-white font-bold">{slide.revenue.free}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Premium Nutzer:</span>
              <span className="text-green-400 font-bold">{slide.revenue.premium}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-red-400 font-bold mb-4">{slide.costs.title}</h3>
          <div className="text-3xl font-black text-white">{slide.costs.total}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-blue-400 font-bold mb-4">Contribution Margin</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Free:</span>
              <span className="text-green-400 font-bold">{slide.margin.free}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Premium:</span>
              <span className="text-green-400 font-bold">{slide.margin.premium}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block bg-green-500/10 border border-green-500/20">
          <p className="text-green-400 font-bold text-xl">{slide.conclusion}</p>
        </div>
      </motion.div>
    </div>
  )
}

function TractionSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Fertiggestellt
          </h3>
          <div className="space-y-3">
            {slide.completed.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" /> In Progress
          </h3>
          <div className="space-y-3">
            {slide.inProgress.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block bg-green-500/10 border border-green-500/20">
          <p className="text-green-400 font-bold text-lg">{slide.highlight}</p>
        </div>
      </motion.div>
    </div>
  )
}

function RoadmapSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {slide.phases.map((phase: any, index: number) => (
          <motion.div
            key={phase.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass rounded-2xl p-6 ${phase.status === 'current' ? 'border-2 border-green-500/50' : ''}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                phase.status === 'current' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-gray-400'
              }`}>
                {phase.status === 'current' ? 'Aktuell' : 'Geplant'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{phase.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{phase.timeline}</p>
            <div className="space-y-2">
              {phase.goals.map((goal: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${phase.status === 'current' ? 'text-green-400' : 'text-gray-500'}`} />
                  <span className="text-gray-400 text-sm">{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TeamSearchSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
          {slide.title}
        </h2>
        <p className="text-xl text-green-400 font-bold">{slide.subtitle}</p>
        <p className="text-gray-400 mt-4">{slide.intro}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {slide.roles.map((role: any, index: number) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
            <div className="bg-green-500/20 rounded-full px-3 py-1 inline-block mb-4">
              <span className="text-green-400 text-sm font-bold">Equity: {role.equity}</span>
            </div>
            <div className="space-y-2">
              {role.requirements.map((req: string, i: number) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">{req}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function FounderSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
          {slide.title}
        </h2>
        <p className="text-xl text-gray-400">{slide.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <p className="text-gray-300 mb-6 italic">"{slide.story}"</p>
          <h4 className="text-white font-bold mb-3">Meine Geschichte:</h4>
          <div className="space-y-2 text-sm">
            {slide.background.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-white font-bold mb-4">Was ich mitbringe:</h4>
          <div className="space-y-4">
            {slide.strengths.map((strength: any, i: number) => (
              <div key={i} className="glass rounded-xl p-4">
                <h5 className="text-green-400 font-bold mb-1">{strength.title}</h5>
                <p className="text-gray-400 text-sm">{strength.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function InvestmentSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          {slide.title}
        </h2>
        <div className="text-5xl font-black gradient-text mb-2">{slide.amount}</div>
        <p className="text-gray-400">{slide.round}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-bold mb-4">Mittelverwendung:</h3>
          <div className="space-y-4">
            {slide.useOfFunds.map((item: any, i: number) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{item.category}</span>
                  <span className="text-green-400 font-bold">{item.percent}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-white font-bold mb-4">Was Investoren bekommen:</h3>
          <div className="space-y-3">
            {slide.investorsBenefit.map((benefit: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function WhyNowSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Timing</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="space-y-4 max-w-3xl mx-auto mb-8">
        {slide.reasons.map((reason: any, index: number) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass rounded-xl p-4 flex items-start gap-4"
          >
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 font-bold">{index + 1}</span>
            </div>
            <div>
              <h4 className="text-white font-bold">{reason.title}</h4>
              <p className="text-gray-400 text-sm">{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block bg-green-500/10 border border-green-500/20">
          <p className="text-green-400 font-bold text-lg">{slide.conclusion}</p>
        </div>
      </motion.div>
    </div>
  )
}

function RisksSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
          {slide.title}
        </h2>
        <p className="text-gray-400">Ehrliche Einschätzung</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {slide.risks.map((risk: any, index: number) => (
          <motion.div
            key={risk.risk}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-yellow-400 font-bold mb-2">{risk.risk}</h3>
            <p className="text-red-400 text-sm mb-3">"{risk.question}"</p>
            <div className="bg-green-500/10 rounded-xl p-3 border border-green-500/20">
              <p className="text-green-400 text-sm">
                <strong>Mitigierung:</strong> {risk.mitigation}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-gray-400">{slide.conclusion}</p>
      </motion.div>
    </div>
  )
}

function CTASlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Rocket className="w-16 h-16 text-green-400 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
          {slide.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          {slide.summary.map((item: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-4 text-left"
            >
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <p className="text-gray-300 text-sm">{item}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-2xl font-bold text-white mb-8">{slide.question}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {slide.actions.map((action: any, i: number) => (
            <a
              key={i}
              href={action.href}
              className={action.primary ? 'btn-primary inline-flex items-center justify-center gap-2' : 'btn-secondary inline-flex items-center justify-center gap-2'}
            >
              {action.primary ? <Phone className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
              <span>{action.label}</span>
            </a>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-gray-300 italic mb-2">{slide.quote}</p>
          <p className="text-green-400 font-medium">{slide.author}</p>
        </div>
      </motion.div>
    </div>
  )
}

function AppendixSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        {slide.resources.map((resource: any, index: number) => (
          <motion.div
            key={resource.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={resource.href}
              className="glass rounded-2xl p-6 block hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-bold group-hover:text-green-400 transition-colors">
                  {resource.name}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
              </div>
              <p className="text-gray-400 text-sm">{resource.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <div className="glass rounded-2xl p-6 inline-block">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href={`mailto:${slide.contact.email}`} className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span>{slide.contact.email}</span>
            </a>
            <a href={`https://${slide.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <Globe className="w-5 h-5" />
              <span>{slide.contact.website}</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">{slide.disclaimer}</p>
        </div>
      </motion.div>
    </div>
  )
}
