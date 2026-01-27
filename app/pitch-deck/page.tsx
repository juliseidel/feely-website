'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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
  X,
  Download,
  Loader2
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
    title: 'KI-Gesundheitsanalyse',
    subtitle: 'Personalisiert auf deine Ziele & Gesundheit',
    image: '/images/ai-analyse.png',
    keyFeatures: [
      {
        icon: 'Target',
        title: 'Ziel-Analyse',
        desc: 'Muskelaufbau, Abnehmen, Energie – wie passt das Produkt zu deinen Zielen?',
      },
      {
        icon: 'Heart',
        title: 'Gesundheits-Check',
        desc: 'Akne, Diabetes, Bluthochdruck – individuelle Bewertung für deine Situation',
      },
      {
        icon: 'AlertTriangle',
        title: 'Allergien & Unverträglichkeiten',
        desc: 'Gluten, Laktose, Nüsse – sofortige Warnungen bei kritischen Inhaltsstoffen',
      },
    ],
    scoreExample: {
      score: 23,
      label: 'Nicht geeignet',
      reason: 'Hoher Zuckergehalt kontraproduktiv für Muskelaufbau. Kann Akne verschlechtern.',
    },
    premium: 'Premium: Wissenschaftliche Erklärungen, alternative Produktvorschläge, detaillierte Nährstoffanalyse.',
  },
  {
    id: 13,
    type: 'feature-scanner',
    title: 'Barcode Scanner',
    image: '/images/barcode-scanner.png',
    scenario: 'Du stehst im Supermarkt. In der Hand ein Produkt, das du nicht kennst.',
    old: 'Früher: Zutatenliste lesen, googeln, unsicher sein, trotzdem kaufen, hoffen.',
    new: 'MIT FEELY: App öffnen, Barcode scannen, in <1 Sekunde: Komplette Analyse.',
    features: ['Sofortige Warnungen', 'Zutaten erklärt', 'Direkt in Warenkorb', 'Unbekannte Produkte melden'],
  },
  {
    id: 14,
    type: 'feature-budget',
    title: 'Budget & Tracking',
    subtitle: 'Alles im Blick – Ausgaben und Ernährung',
    budget: {
      title: 'Budget-Kontrolle',
      image: '/images/budget-tracking.png',
      features: ['Echtzeit-Übersicht aller Ausgaben', 'Wöchentliche & monatliche Insights', 'Kategorien & Verlauf'],
    },
    nutrition: {
      title: 'Ernährungstracker',
      image: '/images/nutrition-tracking.png',
      features: ['KI-Foto-Analyse deiner Mahlzeiten', 'Kalorien & Makros automatisch', 'Tägliche Übersicht'],
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
    type: 'health-crisis',
    title: 'Warum Deutschland FEELY braucht',
    subtitle: 'Eine Gesundheitskrise, die das System überfordert',
    sections: [
      {
        title: 'Übergewicht & Adipositas',
        color: 'red',
        icon: 'AlertTriangle',
        stats: [
          { value: '53%', label: 'der Erwachsenen übergewichtig', source: 'Statista 2024' },
          { value: '19,7%', label: 'adipös (BMI >30) – fast verdoppelt seit 2003', source: 'DGE 2025' },
          { value: '>100 Mrd. $', label: 'volkswirtschaftliche Kosten/Jahr (2,8% des BIP)', source: 'World Obesity Atlas' },
        ],
      },
      {
        title: 'Ernährungsbedingte Krankheiten',
        color: 'orange',
        icon: 'Heart',
        stats: [
          { value: '17 Mrd. €', label: 'direkte Behandlungskosten/Jahr', source: 'Uni Halle-Wittenberg' },
          { value: '95 Mrd. €', label: 'Gesamtkosten ernährungsabhängiger Krankheiten', source: 'BMELV' },
          { value: '8,6 Mrd. €', label: 'allein durch Zuckerkonsum', source: 'Uni Halle-Wittenberg' },
        ],
      },
      {
        title: 'Diabetes-Epidemie',
        color: 'purple',
        icon: 'TrendingUp',
        stats: [
          { value: '11 Mio.', label: 'Menschen mit Diabetes in Deutschland', source: 'diabetesDE' },
          { value: '450.000', label: 'Neuerkrankungen pro Jahr', source: 'DDG' },
          { value: '21 Mrd. €', label: 'Behandlungskosten/Jahr', source: 'BVMed' },
          { value: '12,3 Mio.', label: 'prognostiziert bis 2040 (+77%)', source: 'DDZ/RKI' },
        ],
      },
      {
        title: 'Herz-Kreislauf-Erkrankungen',
        color: 'red',
        icon: 'Heart',
        stats: [
          { value: '348.312', label: 'Todesfälle 2023', source: 'Destatis' },
          { value: '~40%', label: 'aller Sterbefälle in Deutschland', source: 'RKI' },
          { value: '#1', label: 'Häufigste Todesursache', source: 'Destatis' },
          { value: '7,7 Mrd. €', label: 'direkte Behandlungskosten/Jahr', source: 'Uni Halle' },
        ],
      },
      {
        title: 'Bluthochdruck',
        color: 'blue',
        icon: 'Users',
        stats: [
          { value: '35 Mio.', label: 'Betroffene (44% der Bevölkerung)', source: 'Hochdruckliga' },
          { value: '10 Mio.', label: 'wissen nichts von ihrer Erkrankung', source: 'Hochdruckliga' },
          { value: '>80%', label: 'der über 80-Jährigen betroffen', source: 'TK' },
        ],
      },
      {
        title: 'Allergien & Unverträglichkeiten',
        color: 'green',
        icon: 'AlertTriangle',
        stats: [
          { value: '23+ Mio.', label: 'Allergiker in Deutschland', source: 'RKI' },
          { value: '15-20%', label: 'leiden unter Nahrungsmittelunverträglichkeiten', source: 'DGE' },
          { value: '3,6 Mrd. €', label: 'Kosten durch Karies (Zuckerkonsum)', source: 'Uni Halle' },
        ],
      },
    ],
    conclusion: {
      title: 'Das Fazit',
      points: [
        'Das Gesundheitssystem ist überlastet – Prävention ist die einzige Lösung',
        'Ernährung ist die Wurzel der meisten Volkskrankheiten',
        'FEELY macht gesunde Ernährung einfach und zugänglich für jeden',
      ],
      highlight: 'Jeder Euro in Prävention spart 4-7 Euro in Behandlungskosten.',
    },
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
    image: '/images/werbung-promoted.png',
    highlight: 'Instacart macht >$1 Mrd. mit Werbung.',
    reason: 'HIGH-INTENT AUDIENCE: Wenn jemand die FEELY App öffnet, will er KAUFEN.',
    placements: [
      { title: 'Sponsored Products', desc: 'Natürlich zwischen Produkten platziert' },
      { title: 'Brand Stores', desc: 'Eigene Markenseite auf der Startseite (z.B. Nespresso)' },
      { title: 'News & Aktionen', desc: 'Supermärkte zeigen eigene Angebote & Events' },
      { title: 'Personalisierte Banner', desc: 'Targeting nach Gesundheitsprofil' },
    ],
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
    type: 'ecosystem',
    title: 'Das FEELY Ökosystem',
    subtitle: 'Mehr als eine App – eine komplette Plattform',
    intro: 'FEELY ist nicht nur eine App für Konsumenten. Es ist ein komplettes Ökosystem, das Verbraucher, Supermärkte und Hofläden auf einer Plattform vereint.',
    pillars: [
      {
        title: 'Consumer App',
        subtitle: 'Für jeden Einkäufer',
        description: 'Die App die Lebensmitteleinkauf revolutioniert – einfacher, schneller und gesünder.',
        screenshots: [
          '/images/screenshot-1.png',
          '/images/screenshot-2.png',
          '/images/screenshot-3.png',
          '/images/screenshot-4.png',
          '/images/screenshot-5.png',
          '/images/screenshot-6.png',
          '/images/screenshot-7.png',
          '/images/screenshot-8.png',
          '/images/screenshot-9.png',
          '/images/screenshot-10.png',
        ],
        features: [
          'KI-Gesundheitsanalyse in Echtzeit',
          'Alle Supermärkte & Hofläden',
          'Personalisierte Empfehlungen',
          'Barcode Scanner (<1 Sek.)',
        ],
        status: 'Produktionsreif',
      },
      {
        title: 'Business Portal – Hofläden',
        subtitle: 'Für kleine Anbieter',
        description: 'Hofläden bekommen ihre eigene digitale Präsenz – ohne Entwicklungskosten.',
        image: '/images/dashboard-hofladen.png',
        features: [
          'Produkte & Bestand verwalten',
          'News & Push-Nachrichten',
          'Bestellungen empfangen',
          'Kunden erreichen',
        ],
        status: 'Produktionsreif',
      },
      {
        title: 'Business Portal – Supermärkte',
        subtitle: 'Für große Märkte',
        description: 'Supermärkte steuern ihr komplettes FEELY-Geschäft über ein professionelles Dashboard.',
        image: '/images/dashboard-supermarkt.png',
        features: [
          'Sortiment & Angebote',
          'Werbung & Promotions',
          'Analytics & Umsatz',
          'Bestellmanagement',
        ],
        status: 'Produktionsreif',
      },
    ],
    conclusion: {
      title: 'Alles ist gebaut. Alles funktioniert.',
      stats: [
        { value: '3', label: 'Plattformen', sub: 'App + 2 Portale' },
        { value: 'Eigene', label: 'KI-Systeme', sub: 'Datenbanken, Agenten, Algorithmen' },
        { value: '100%', label: 'Funktional', sub: 'Produktionsreif' },
      ],
      highlight: 'Kein Prototyp. Kein MVP. Ein fertiges Ökosystem.',
    },
  },
  {
    id: 27,
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
    id: 28,
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
    id: 29,
    type: 'founder',
    title: 'Der Gründer',
    subtitle: 'Warum ich das baue',
    image: '/images/founder-juli.png',
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [pdfProgress, setPdfProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // PDF Download function - renders each slide individually with html2canvas + jsPDF
  const generatePDF = useCallback(async () => {
    if (isGeneratingPDF) return
    setIsGeneratingPDF(true)
    setPdfProgress(0)

    try {
      // Dynamically import jsPDF and html2canvas
      const { jsPDF } = await import('jspdf')
      const html2canvas = (await import('html2canvas')).default

      // Create PDF in landscape 16:9
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1280, 720],
        hotfixes: ['px_scaling'],
      })

      // Create a visible rendering container (covered by overlay)
      const renderContainer = document.createElement('div')
      renderContainer.style.position = 'fixed'
      renderContainer.style.top = '0'
      renderContainer.style.left = '0'
      renderContainer.style.width = '1280px'
      renderContainer.style.height = '720px'
      renderContainer.style.zIndex = '9998'
      renderContainer.style.overflow = 'hidden'
      renderContainer.style.opacity = '0.01' // nearly invisible but still rendered
      renderContainer.style.pointerEvents = 'none'
      document.body.appendChild(renderContainer)

      // Render each slide one by one
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i]
        setPdfProgress(Math.round(((i + 1) / slides.length) * 100))

        // Create slide element
        const slideEl = document.createElement('div')
        slideEl.style.width = '1280px'
        slideEl.style.height = '720px'
        slideEl.style.background = '#000000'
        slideEl.style.padding = '48px 64px'
        slideEl.style.boxSizing = 'border-box'
        slideEl.style.display = 'flex'
        slideEl.style.flexDirection = 'column'
        slideEl.style.justifyContent = 'center'
        slideEl.style.position = 'relative'
        slideEl.style.overflow = 'hidden'
        slideEl.style.fontFamily = 'system-ui, -apple-system, sans-serif'

        // Progress bar
        const header = document.createElement('div')
        header.style.cssText = `position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(to right, #22c55e ${((i + 1) / slides.length) * 100}%, rgba(255,255,255,0.1) ${((i + 1) / slides.length) * 100}%);`
        slideEl.appendChild(header)

        // Slide number
        const slideNum = document.createElement('div')
        slideNum.style.cssText = 'position: absolute; top: 16px; right: 24px; font-size: 14px; color: #6b7280;'
        slideNum.innerHTML = `<span style="color: #22c55e; font-weight: bold;">${i + 1}</span> / ${slides.length}`
        slideEl.appendChild(slideNum)

        // FEELY logo
        const logo = document.createElement('div')
        logo.style.cssText = 'position: absolute; top: 16px; left: 24px; font-size: 16px; font-weight: bold; color: #22c55e;'
        logo.textContent = 'FEELY — Pitch Deck'
        slideEl.appendChild(logo)

        // Content
        const content = document.createElement('div')
        content.style.cssText = 'margin-top: 32px; flex: 1; display: flex; flex-direction: column; justify-content: center;'
        content.innerHTML = renderSlideToHTML(slide, i)
        slideEl.appendChild(content)

        // Footer
        const footer = document.createElement('div')
        footer.style.cssText = 'position: absolute; bottom: 12px; left: 24px; right: 24px; display: flex; justify-content: space-between; font-size: 11px; color: #4b5563;'
        footer.innerHTML = '<span>Confidential — Nur für autorisierte Empfänger</span><span>partner@feelyapp.de</span>'
        slideEl.appendChild(footer)

        // Clear and add to visible container
        renderContainer.innerHTML = ''
        renderContainer.appendChild(slideEl)

        // Wait for DOM to render
        await new Promise(resolve => setTimeout(resolve, 100))

        // Capture with html2canvas
        const canvas = await html2canvas(slideEl, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#000000',
          width: 1280,
          height: 720,
          logging: false,
        })

        // Add to PDF
        const imgData = canvas.toDataURL('image/jpeg', 0.92)
        if (i > 0) {
          pdf.addPage([1280, 720], 'landscape')
        }
        pdf.addImage(imgData, 'JPEG', 0, 0, 1280, 720)
      }

      // Cleanup
      document.body.removeChild(renderContainer)

      // Save
      pdf.save('FEELY-Pitch-Deck-2026.pdf')
    } catch (error) {
      console.error('PDF generation error:', error)
      alert('PDF-Erstellung fehlgeschlagen. Bitte versuchen Sie es erneut.')
    } finally {
      setIsGeneratingPDF(false)
      setPdfProgress(0)
    }
  }, [isGeneratingPDF])

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

            {/* Right Side: Download + Next */}
            <div className="flex items-center gap-2">
              {/* PDF Download Button */}
              <button
                onClick={generatePDF}
                disabled={isGeneratingPDF}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                title="Pitch Deck als PDF herunterladen"
              >
                {isGeneratingPDF ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline text-sm">{pdfProgress}%</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline text-sm">PDF</span>
                  </>
                )}
              </button>

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

// Static HTML renderer for PDF export
function renderSlideToHTML(slide: any, index: number): string {
  const greenGradient = 'background: linear-gradient(135deg, #22c55e, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'
  const glass = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 24px;'
  const glassSmall = 'background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px;'

  switch (slide.type) {
    case 'cover':
      return `
        <div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 580px;">
          <h1 style="font-size: 80px; font-weight: 900; ${greenGradient} margin-bottom: 16px;">
            ${slide.title}
          </h1>
          <p style="font-size: 28px; color: #d1d5db; margin-bottom: 12px;">${slide.subtitle}</p>
          <p style="font-size: 16px; color: #6b7280; max-width: 600px;">${slide.description}</p>
          <div style="margin-top: 32px; color: #4b5563; font-size: 14px;">
            Confidential Pitch Deck &bull; Januar 2026
          </div>
        </div>`

    case 'problem-intro':
      return `
        <div>
          <span style="color: #22c55e; font-weight: bold; font-size: 18px;">${slide.title}</span>
          <h2 style="font-size: 48px; font-weight: 900; color: #fff; margin: 16px 0;">${slide.headline}</h2>
          <p style="font-size: 18px; color: #9ca3af; line-height: 1.7; max-width: 800px;">${slide.content}</p>
          <div style="margin-top: 24px; color: #22c55e; font-weight: bold; font-size: 20px;">Das muss sich ändern.</div>
        </div>`

    case 'problem':
      return `
        <div style="display: flex; gap: 48px; align-items: center;">
          <div style="flex: 1;">
            <div style="display: inline-block; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.2); border-radius: 20px; padding: 6px 16px; margin-bottom: 16px;">
              <span style="color: #f87171; font-size: 14px;">Problem #${slide.number}</span>
            </div>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 16px;">${slide.title}</h2>
            <p style="font-size: 16px; color: #9ca3af; margin-bottom: 16px; line-height: 1.6;">${slide.content}</p>
            <div style="${glassSmall} border-left: 4px solid #ef4444;">
              <p style="color: #d1d5db; font-weight: 500;">${slide.highlight}</p>
            </div>
          </div>
          <div style="flex: 0 0 320px; text-align: center; ${glass}">
            <div style="font-size: 52px; font-weight: 900; ${greenGradient} margin-bottom: 8px;">${slide.metric}</div>
            <div style="color: #6b7280; font-size: 16px;">${slide.metricLabel}</div>
          </div>
        </div>`

    case 'problem-summary':
      return `
        <div style="text-align: center;">
          <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 32px;">${slide.title}</h2>
          <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 24px; flex-wrap: wrap;">
            ${slide.problems.map((p: any) => `
              <div style="${glassSmall} text-align: center; width: 180px;">
                <div style="color: #f87171; font-weight: bold; margin-bottom: 4px;">${p.label}</div>
                <div style="color: #6b7280; font-size: 13px;">${p.sub}</div>
              </div>
            `).join('')}
          </div>
          <div style="${glass} display: inline-block;">
            <p style="font-size: 18px; color: #d1d5db;">${slide.highlight}</p>
          </div>
        </div>`

    case 'solution-intro':
      return `
        <div style="text-align: center;">
          <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 20px; padding: 6px 16px; margin-bottom: 24px;">
            <span style="color: #22c55e; font-size: 14px;">${slide.title}</span>
          </div>
          <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.headline}</h2>
          <h3 style="font-size: 36px; font-weight: 900; ${greenGradient} margin-bottom: 24px;">${slide.subheadline}</h3>
          <p style="font-size: 18px; color: #9ca3af; max-width: 600px; margin: 0 auto;">${slide.content}</p>
          <div style="margin-top: 24px; color: #22c55e; font-weight: bold; font-size: 20px;">In Echtzeit. Bei jedem Einkauf.</div>
        </div>`

    case 'how-it-works':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 18px;">${slide.title}</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.subtitle}</h2>
          </div>
          <div style="display: flex; gap: 20px;">
            ${slide.steps.map((step: any, i: number) => `
              <div style="${glass} flex: 1; position: relative;">
                <div style="position: absolute; top: -12px; left: -12px; width: 32px; height: 32px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold; font-size: 14px;">${i + 1}</div>
                <h3 style="font-size: 16px; font-weight: bold; color: #fff; margin-bottom: 8px; margin-top: 8px;">${step.title}</h3>
                <p style="color: #9ca3af; font-size: 13px;">${step.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>`

    case 'for-providers':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #60a5fa; font-weight: bold; font-size: 18px;">${slide.title}</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.subtitle}</h2>
            <p style="color: #f87171;">${slide.problem}</p>
          </div>
          <div style="display: flex; gap: 16px; margin-bottom: 24px;">
            ${slide.features.map((f: any) => `
              <div style="${glass} flex: 1;">
                <h3 style="font-size: 16px; font-weight: bold; color: #fff; margin-bottom: 8px;">${f.title}</h3>
                <p style="color: #9ca3af; font-size: 13px;">${f.desc}</p>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center;">
            <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 16px 24px;">
              <p style="color: #22c55e; font-weight: bold; font-size: 16px;">${slide.highlight}</p>
            </div>
          </div>
        </div>`

    case 'feature-deep-dive':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #a855f7; font-weight: bold; font-size: 16px;">Feature Deep Dive</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="font-size: 18px; color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <div style="display: flex; gap: 16px;">
            ${slide.keyFeatures.map((f: any, i: number) => `
              <div style="${glass} flex: 1;">
                <h4 style="color: #fff; font-weight: bold; margin-bottom: 8px;">${f.title}</h4>
                <p style="color: #9ca3af; font-size: 13px;">${f.desc}</p>
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 16px; ${glassSmall} border-left: 4px solid #ef4444; background: rgba(239,68,68,0.05);">
            <p style="color: #d1d5db; font-size: 14px; font-style: italic;">"${slide.scoreExample.reason}"</p>
          </div>
        </div>`

    case 'feature-scanner':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #a855f7; font-weight: bold; font-size: 16px;">Feature Deep Dive</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div>
            <p style="color: #9ca3af; font-size: 16px; margin-bottom: 16px;">${slide.scenario}</p>
            <div style="${glassSmall} border-left: 4px solid #ef4444; margin-bottom: 12px;">
              <p style="color: #f87171;">${slide.old}</p>
            </div>
            <div style="${glassSmall} border-left: 4px solid #22c55e;">
              <p style="color: #22c55e;">${slide.new}</p>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 16px;">
              ${slide.features.map((f: string) => `
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="color: #22c55e;">&#10003;</span>
                  <span style="color: #d1d5db; font-size: 14px;">${f}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>`

    case 'feature-budget':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #a855f7; font-weight: bold; font-size: 16px;">Feature Deep Dive</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="font-size: 18px; color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <div style="display: flex; gap: 24px;">
            <div style="${glass} flex: 1;">
              <h3 style="color: #fff; font-weight: bold; font-size: 18px; margin-bottom: 12px;">${slide.budget.title}</h3>
              ${slide.budget.features.map((f: string) => `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;"><span style="color: #22c55e;">&#10003;</span><span style="color: #d1d5db; font-size: 14px;">${f}</span></div>`).join('')}
            </div>
            <div style="${glass} flex: 1;">
              <h3 style="color: #fff; font-weight: bold; font-size: 18px; margin-bottom: 12px;">${slide.nutrition.title}</h3>
              ${slide.nutrition.features.map((f: string) => `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;"><span style="color: #60a5fa;">&#10003;</span><span style="color: #d1d5db; font-size: 14px;">${f}</span></div>`).join('')}
            </div>
          </div>
        </div>`

    case 'feature-toogoodtogo':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #a855f7; font-weight: bold; font-size: 16px;">Feature Deep Dive</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="text-align: center; flex: 0 0 300px;">
              <div style="font-size: 52px; font-weight: 900; color: #f87171;">${slide.problem.metric}</div>
              <div style="color: #9ca3af;">${slide.problem.label}</div>
            </div>
            <div style="flex: 1;">
              <p style="color: #d1d5db; margin-bottom: 16px;">${slide.solution}</p>
              <div style="${glass}">
                <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 12px;">WIN-WIN-WIN:</h4>
                ${slide.benefits.map((b: any) => `<div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #9ca3af;">${b.label}:</span><span style="color: #fff; font-weight: 500;">${b.value}</span></div>`).join('')}
              </div>
            </div>
          </div>
        </div>`

    case 'market-overview':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 18px;">${slide.title}</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.subtitle}</h2>
          </div>
          <div style="display: flex; gap: 16px; margin-bottom: 24px;">
            ${slide.stats.map((s: any) => `
              <div style="${glass} flex: 1; text-align: center;">
                <div style="font-size: 28px; font-weight: 900; ${greenGradient} margin-bottom: 8px;">${s.value}</div>
                <div style="color: #fff; font-weight: 500; margin-bottom: 4px;">${s.label}</div>
                <div style="color: #6b7280; font-size: 12px;">${s.source}</div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center;"><div style="${glass} display: inline-block;"><p style="color: #d1d5db;">${slide.highlight}</p></div></div>
        </div>`

    case 'market-infrastructure':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 18px;">Der Markt</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 20px; margin-bottom: 24px;">
            ${slide.stats.map((s: any) => `
              <div style="${glass} flex: 1; text-align: center;">
                <div style="font-size: 36px; font-weight: 900; ${greenGradient} margin-bottom: 8px;">${s.value}</div>
                <div style="color: #fff; font-weight: 500; margin-bottom: 4px;">${s.label}</div>
                <div style="color: #6b7280; font-size: 13px;">${s.sub}</div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center;">
            <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 16px 24px;">
              <p style="color: #22c55e; font-weight: bold; font-size: 16px;">${slide.highlight}</p>
            </div>
          </div>
        </div>`

    case 'market-target':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 18px;">Der Markt</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 16px; margin-bottom: 24px;">
            ${slide.groups.map((g: any) => `
              <div style="${glass} flex: 1; text-align: center;">
                <div style="font-size: 28px; font-weight: 900; color: #f87171; margin-bottom: 8px;">${g.value}</div>
                <div style="color: #fff; font-weight: 500; margin-bottom: 4px;">${g.label}</div>
                <div style="color: #6b7280; font-size: 12px;">${g.source}</div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center;"><div style="${glass} display: inline-block;"><p style="color: #d1d5db;">${slide.highlight}</p></div></div>
        </div>`

    case 'health-crisis':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #f87171; font-weight: bold; font-size: 16px;">Die Realität</span>
            <h2 style="font-size: 36px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
            ${slide.sections.map((section: any) => `
              <div style="flex: 1; min-width: 350px; ${glassSmall} background: rgba(255,255,255,0.03);">
                <h3 style="color: ${section.color === 'red' ? '#f87171' : section.color === 'orange' ? '#fb923c' : section.color === 'purple' ? '#a855f7' : section.color === 'blue' ? '#60a5fa' : '#22c55e'}; font-weight: bold; margin-bottom: 12px;">${section.title}</h3>
                ${section.stats.map((stat: any) => `<div style="display: flex; gap: 12px; margin-bottom: 8px;"><span style="font-weight: 900; color: ${section.color === 'red' ? '#f87171' : section.color === 'orange' ? '#fb923c' : '#a855f7'}; white-space: nowrap; font-size: 18px;">${stat.value}</span><div><p style="color: #d1d5db; font-size: 13px;">${stat.label}</p><p style="color: #6b7280; font-size: 11px;">${stat.source}</p></div></div>`).join('')}
              </div>
            `).join('')}
          </div>
          <div style="${glass} border: 1px solid rgba(34,197,94,0.2);">
            <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 8px;">${slide.conclusion.title}</h4>
            ${slide.conclusion.points.map((p: string) => `<div style="display: flex; gap: 8px; margin-bottom: 4px;"><span style="color: #22c55e;">&#10003;</span><span style="color: #d1d5db; font-size: 14px;">${p}</span></div>`).join('')}
            <div style="background: rgba(34,197,94,0.1); border-radius: 12px; padding: 12px; margin-top: 8px; text-align: center;">
              <p style="color: #22c55e; font-weight: 600;">${slide.conclusion.highlight}</p>
            </div>
          </div>
        </div>`

    case 'instacart-proof':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #60a5fa; font-weight: bold; font-size: 18px;">Der Beweis</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 32px;">
            <div style="flex: 1;">
              <h3 style="color: #60a5fa; font-weight: bold; margin-bottom: 16px;">Instacart 2024</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                ${slide.metrics.map((m: any) => `<div style="${glassSmall} text-align: center; flex: 1; min-width: 120px;"><div style="font-size: 20px; font-weight: 900; color: #fff;">${m.value}</div><div style="color: #6b7280; font-size: 13px;">${m.label}</div></div>`).join('')}
              </div>
            </div>
            <div style="flex: 1;">
              <h3 style="color: #f87171; font-weight: bold; margin-bottom: 16px;">Was Instacart NICHT hat:</h3>
              ${slide.difference.map((d: string) => `<div style="display: flex; gap: 8px; margin-bottom: 8px;"><span style="color: #f87171;">&#10007;</span><span style="color: #d1d5db;">${d}</span></div>`).join('')}
              <div style="${glassSmall} background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); margin-top: 16px; text-align: center;">
                <p style="color: #22c55e; font-weight: bold;">${slide.conclusion}</p>
              </div>
            </div>
          </div>
        </div>`

    case 'competition':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <table style="width: 100%; ${glass} border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <th style="text-align: left; padding: 12px 16px; color: #9ca3af;">Unternehmen</th>
                ${slide.features.map((f: string) => `<th style="text-align: center; padding: 12px 8px; color: #9ca3af; font-size: 13px;">${f}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${slide.competitors.map((c: any) => `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); ${c.name === 'FEELY' ? 'background: rgba(34,197,94,0.1);' : ''}">
                  <td style="padding: 12px 16px; font-weight: bold; color: ${c.name === 'FEELY' ? '#22c55e' : '#fff'};">${c.name}</td>
                  <td style="text-align: center; padding: 12px 8px; color: ${c.multiRetail ? '#22c55e' : '#f87171'};">${c.multiRetail ? '&#10003;' : '&#10007;'}</td>
                  <td style="text-align: center; padding: 12px 8px; color: ${c.health ? '#22c55e' : '#f87171'};">${c.health ? '&#10003;' : '&#10007;'}</td>
                  <td style="text-align: center; padding: 12px 8px; color: ${c.farms === true ? '#22c55e' : c.farms === 'partial' ? '#eab308' : '#f87171'};">${c.farms === true ? '&#10003;' : c.farms === 'partial' ? '(~)' : '&#10007;'}</td>
                  <td style="text-align: center; padding: 12px 8px; color: ${c.rural === true ? '#22c55e' : c.rural === 'partial' ? '#eab308' : '#f87171'};">${c.rural === true ? '&#10003;' : c.rural === 'partial' ? '(~)' : '&#10007;'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div style="text-align: center; margin-top: 24px;">
            <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 16px 24px;">
              <p style="color: #22c55e; font-weight: bold; font-size: 18px;">${slide.highlight}</p>
            </div>
          </div>
        </div>`

    case 'business-model-overview':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <div style="display: flex; gap: 16px; margin-bottom: 24px;">
            ${slide.streams.map((s: any) => `
              <div style="${glass} flex: 1; text-align: center;">
                <div style="font-size: 36px; font-weight: 900; ${greenGradient} margin-bottom: 8px;">${s.percent}%</div>
                <div style="color: #fff; font-weight: 500;">${s.name}</div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center;"><p style="color: #9ca3af;">${slide.note}</p></div>
        </div>`

    case 'premium-model':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 16px;">Revenue Stream #1</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <div style="font-size: 28px; font-weight: 900; ${greenGradient}">${slide.price}</div>
            <div style="color: #6b7280;">${slide.yearlyPrice}</div>
          </div>
          <table style="width: 100%; max-width: 600px; margin: 0 auto; ${glass} border-collapse: collapse;">
            <thead><tr style="border-bottom: 1px solid rgba(255,255,255,0.1);"><th style="text-align: left; padding: 10px 16px; color: #9ca3af;">Feature</th><th style="text-align: center; padding: 10px; color: #9ca3af;">Free</th><th style="text-align: center; padding: 10px; color: #22c55e;">Premium</th></tr></thead>
            <tbody>
              ${slide.comparison.map((item: any) => `<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 10px 16px; color: #d1d5db;">${item.feature}</td><td style="text-align: center; padding: 10px; color: ${item.free ? '#22c55e' : '#4b5563'};">${item.free ? '&#10003;' : '&#10007;'}</td><td style="text-align: center; padding: 10px; color: ${item.premium ? '#22c55e' : '#4b5563'};">${item.premium ? '&#10003;' : '&#10007;'}</td></tr>`).join('')}
            </tbody>
          </table>
          <div style="text-align: center; margin-top: 16px;"><span style="color: #22c55e;">${slide.target}</span></div>
        </div>`

    case 'transaction-fees':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 16px;">Revenue Stream #2</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 24px; margin-bottom: 24px;">
            ${slide.fees.map((f: any) => `<div style="${glass} flex: 1; text-align: center;"><div style="font-size: 36px; font-weight: 900; ${greenGradient} margin-bottom: 8px;">${f.percent}</div><div style="color: #fff; font-weight: bold; margin-bottom: 4px;">${f.type}</div><div style="color: #6b7280; font-size: 13px;">${f.note}</div></div>`).join('')}
          </div>
          <div style="${glass} max-width: 400px; margin: 0 auto;">
            <h4 style="color: #fff; font-weight: bold; margin-bottom: 12px;">Beispielrechnung:</h4>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #9ca3af;">Warenkorb:</span><span style="color: #fff;">${slide.example.basket}</span></div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #9ca3af;">Avg. Fee:</span><span style="color: #fff;">${slide.example.avgFee}</span></div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;"><span style="color: #9ca3af;">Pro Bestellung:</span><span style="color: #22c55e; font-weight: bold;">${slide.example.perOrder}</span></div>
          </div>
          <div style="text-align: center; margin-top: 16px;"><p style="color: #6b7280; font-size: 13px;">${slide.reference}</p></div>
        </div>`

    case 'advertising':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 16px;">Revenue Stream #3</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="font-size: 18px; font-weight: bold; color: #60a5fa;">${slide.highlight}</p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
            ${slide.placements.map((p: any) => `<div style="${glassSmall} flex: 1; min-width: 240px;"><h4 style="color: #fff; font-weight: bold; font-size: 14px; margin-bottom: 4px;">${p.title}</h4><p style="color: #9ca3af; font-size: 12px;">${p.desc}</p></div>`).join('')}
          </div>
          <div style="${glassSmall} border-left: 4px solid #60a5fa; background: rgba(96,165,250,0.05);">
            <p style="color: #d1d5db; font-size: 14px;">${slide.reason}</p>
          </div>
          <div style="${glassSmall} background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.2); margin-top: 12px;">
            <p style="color: #c084fc; font-size: 14px;">${slide.unique}</p>
          </div>
        </div>`

    case 'b2b-services':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 16px;">Revenue Stream #4</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 20px;">
            ${slide.tiers.map((t: any, i: number) => `
              <div style="${glass} flex: 1; ${i === 1 ? 'border: 2px solid rgba(34,197,94,0.5);' : ''}">
                <h3 style="font-size: 18px; font-weight: bold; color: ${i === 1 ? '#22c55e' : '#fff'}; margin-bottom: 12px;">${t.name}</h3>
                ${t.features.map((f: string) => `<div style="display: flex; gap: 8px; margin-bottom: 8px;"><span style="color: ${i === 1 ? '#22c55e' : '#9ca3af'};">&#10003;</span><span style="color: #d1d5db; font-size: 13px;">${f}</span></div>`).join('')}
              </div>
            `).join('')}
          </div>
        </div>`

    case 'unit-economics':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 20px; margin-bottom: 24px;">
            <div style="${glass} flex: 1;">
              <h3 style="color: #22c55e; font-weight: bold; margin-bottom: 12px;">${slide.revenue.title}</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #9ca3af;">Free Nutzer:</span><span style="color: #fff; font-weight: bold;">${slide.revenue.free}</span></div>
              <div style="display: flex; justify-content: space-between;"><span style="color: #9ca3af;">Premium Nutzer:</span><span style="color: #22c55e; font-weight: bold;">${slide.revenue.premium}</span></div>
            </div>
            <div style="${glass} flex: 1;">
              <h3 style="color: #f87171; font-weight: bold; margin-bottom: 12px;">${slide.costs.title}</h3>
              <div style="font-size: 28px; font-weight: 900; color: #fff;">${slide.costs.total}</div>
            </div>
            <div style="${glass} flex: 1;">
              <h3 style="color: #60a5fa; font-weight: bold; margin-bottom: 12px;">Contribution Margin</h3>
              <div style="display: flex; justify-content: space-between; margin-bottom: 8px;"><span style="color: #9ca3af;">Free:</span><span style="color: #22c55e; font-weight: bold;">${slide.margin.free}</span></div>
              <div style="display: flex; justify-content: space-between;"><span style="color: #9ca3af;">Premium:</span><span style="color: #22c55e; font-weight: bold;">${slide.margin.premium}</span></div>
            </div>
          </div>
          <div style="text-align: center;">
            <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 16px 24px;">
              <p style="color: #22c55e; font-weight: bold; font-size: 18px;">${slide.conclusion}</p>
            </div>
          </div>
        </div>`

    case 'traction':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 24px; margin-bottom: 24px;">
            <div style="${glass} flex: 1;">
              <h3 style="color: #22c55e; font-weight: bold; margin-bottom: 12px;">&#10003; Fertiggestellt</h3>
              ${slide.completed.map((item: string) => `<div style="display: flex; gap: 8px; margin-bottom: 8px;"><span style="color: #22c55e;">&#10003;</span><span style="color: #d1d5db; font-size: 14px;">${item}</span></div>`).join('')}
            </div>
            <div style="${glass} flex: 1;">
              <h3 style="color: #eab308; font-weight: bold; margin-bottom: 12px;">&#9202; In Progress</h3>
              ${slide.inProgress.map((item: string) => `<div style="display: flex; gap: 8px; margin-bottom: 8px;"><span style="color: #eab308;">&#9675;</span><span style="color: #d1d5db; font-size: 14px;">${item}</span></div>`).join('')}
            </div>
          </div>
          <div style="text-align: center;">
            <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 16px 24px;">
              <p style="color: #22c55e; font-weight: bold; font-size: 16px;">${slide.highlight}</p>
            </div>
          </div>
        </div>`

    case 'ecosystem':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 16px;">Status</span>
            <h2 style="font-size: 36px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="font-size: 16px; color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <div style="display: flex; gap: 16px; margin-bottom: 16px;">
            ${slide.pillars.map((p: any) => `
              <div style="${glass} flex: 1;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <h3 style="font-weight: bold; color: #fff; font-size: 15px;">${p.title}</h3>
                  <span style="background: rgba(34,197,94,0.2); color: #22c55e; padding: 2px 8px; border-radius: 12px; font-size: 11px;">${p.status}</span>
                </div>
                <p style="color: #22c55e; font-size: 12px; margin-bottom: 4px;">${p.subtitle}</p>
                <p style="color: #9ca3af; font-size: 12px; margin-bottom: 8px;">${p.description}</p>
                ${p.features.slice(0, 3).map((f: string) => `<div style="display: flex; gap: 6px; margin-bottom: 4px;"><span style="color: #22c55e; font-size: 12px;">&#10003;</span><span style="color: #d1d5db; font-size: 12px;">${f}</span></div>`).join('')}
              </div>
            `).join('')}
          </div>
          <div style="${glass} border: 1px solid rgba(34,197,94,0.2);">
            <h4 style="color: #22c55e; font-weight: bold; margin-bottom: 8px; text-align: center;">${slide.conclusion.title}</h4>
            <div style="display: flex; gap: 16px; justify-content: center; margin-bottom: 8px;">
              ${slide.conclusion.stats.map((s: any) => `<div style="text-align: center;"><div style="font-size: 20px; font-weight: 900; color: #fff;">${s.value}</div><div style="color: #22c55e; font-size: 11px;">${s.label}</div></div>`).join('')}
            </div>
            <div style="background: rgba(34,197,94,0.1); border-radius: 12px; padding: 12px; text-align: center;">
              <p style="color: #22c55e; font-weight: 600;">${slide.conclusion.highlight}</p>
            </div>
          </div>
        </div>`

    case 'roadmap':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; gap: 16px;">
            ${slide.phases.map((p: any) => `
              <div style="${glass} flex: 1; ${p.status === 'current' ? 'border: 2px solid rgba(34,197,94,0.5);' : ''}">
                <span style="display: inline-block; padding: 4px 12px; border-radius: 12px; font-size: 12px; ${p.status === 'current' ? 'background: rgba(34,197,94,0.2); color: #22c55e;' : 'background: rgba(255,255,255,0.1); color: #9ca3af;'} margin-bottom: 12px;">${p.status === 'current' ? 'Aktuell' : 'Geplant'}</span>
                <h3 style="font-size: 16px; font-weight: bold; color: #fff; margin-bottom: 4px;">${p.name}</h3>
                <p style="color: #6b7280; font-size: 13px; margin-bottom: 12px;">${p.timeline}</p>
                ${p.goals.map((g: string) => `<div style="display: flex; gap: 6px; margin-bottom: 6px;"><span style="color: ${p.status === 'current' ? '#22c55e' : '#6b7280'}; font-size: 13px;">&#10003;</span><span style="color: #9ca3af; font-size: 13px;">${g}</span></div>`).join('')}
              </div>
            `).join('')}
          </div>
        </div>`

    case 'team-search':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="font-size: 18px; color: #22c55e; font-weight: bold;">${slide.subtitle}</p>
            <p style="color: #9ca3af; margin-top: 12px;">${slide.intro}</p>
          </div>
          <div style="display: flex; gap: 16px;">
            ${slide.roles.map((r: any) => `
              <div style="${glass} flex: 1;">
                <h3 style="font-size: 18px; font-weight: bold; color: #fff; margin-bottom: 8px;">${r.title}</h3>
                <div style="display: inline-block; background: rgba(34,197,94,0.2); border-radius: 12px; padding: 4px 12px; margin-bottom: 12px;">
                  <span style="color: #22c55e; font-size: 13px; font-weight: bold;">Equity: ${r.equity}</span>
                </div>
                ${r.requirements.map((req: string) => `<div style="display: flex; gap: 6px; margin-bottom: 6px;"><span style="color: #9ca3af;">&#10003;</span><span style="color: #9ca3af; font-size: 13px;">${req}</span></div>`).join('')}
              </div>
            `).join('')}
          </div>
        </div>`

    case 'founder':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid rgba(34,197,94,0.3); margin: 0 auto 12px; overflow: hidden; background: #1a1a1a;">
              <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #22c55e; font-size: 32px; font-weight: 900;">J</div>
            </div>
            <p style="color: #22c55e; font-weight: 500;">Juli Seidel</p>
            <p style="color: #6b7280; font-size: 13px;">Gründer & Entwickler</p>
            <h2 style="font-size: 32px; font-weight: 900; color: #fff; margin-top: 12px;">${slide.title}</h2>
            <p style="color: #9ca3af;">${slide.subtitle}</p>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="${glass} flex: 1;">
              <p style="color: #d1d5db; font-style: italic; font-size: 14px; margin-bottom: 12px;">"${slide.story}"</p>
              <h4 style="color: #fff; font-weight: bold; font-size: 14px; margin-bottom: 8px;">Meine Geschichte:</h4>
              ${slide.background.map((b: string) => `<div style="display: flex; gap: 6px; margin-bottom: 6px;"><span style="color: #f87171;">&#9829;</span><span style="color: #9ca3af; font-size: 12px;">${b}</span></div>`).join('')}
            </div>
            <div style="flex: 1;">
              <h4 style="color: #fff; font-weight: bold; font-size: 14px; margin-bottom: 8px;">Was ich mitbringe:</h4>
              ${slide.strengths.map((s: any) => `<div style="${glassSmall} margin-bottom: 8px;"><h5 style="color: #22c55e; font-weight: bold; font-size: 13px; margin-bottom: 4px;">${s.title}</h5><p style="color: #9ca3af; font-size: 12px;">${s.desc}</p></div>`).join('')}
            </div>
          </div>
        </div>`

    case 'investment':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 12px;">${slide.title}</h2>
            <div style="font-size: 42px; font-weight: 900; ${greenGradient} margin-bottom: 8px;">${slide.amount}</div>
            <p style="color: #9ca3af;">${slide.round}</p>
          </div>
          <div style="display: flex; gap: 24px;">
            <div style="${glass} flex: 1;">
              <h3 style="color: #fff; font-weight: bold; margin-bottom: 16px;">Mittelverwendung:</h3>
              ${slide.useOfFunds.map((item: any) => `
                <div style="margin-bottom: 12px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                    <span style="color: #d1d5db;">${item.category}</span>
                    <span style="color: #22c55e; font-weight: bold;">${item.percent}%</span>
                  </div>
                  <div style="height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                    <div style="height: 100%; width: ${item.percent}%; background: linear-gradient(to right, #22c55e, #10b981); border-radius: 4px;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
            <div style="${glass} flex: 1;">
              <h3 style="color: #fff; font-weight: bold; margin-bottom: 16px;">Was Investoren bekommen:</h3>
              ${slide.investorsBenefit.map((b: string) => `<div style="display: flex; gap: 8px; margin-bottom: 10px;"><span style="color: #22c55e;">&#10003;</span><span style="color: #d1d5db;">${b}</span></div>`).join('')}
            </div>
          </div>
        </div>`

    case 'why-now':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="color: #22c55e; font-weight: bold; font-size: 16px;">Timing</span>
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="max-width: 700px; margin: 0 auto;">
            ${slide.reasons.map((r: any, i: number) => `
              <div style="${glassSmall} margin-bottom: 12px; display: flex; gap: 16px; align-items: flex-start;">
                <div style="width: 32px; height: 32px; background: rgba(34,197,94,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="color: #22c55e; font-weight: bold;">${i + 1}</span>
                </div>
                <div>
                  <h4 style="color: #fff; font-weight: bold;">${r.title}</h4>
                  <p style="color: #9ca3af; font-size: 14px;">${r.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center; margin-top: 24px;">
            <div style="display: inline-block; background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.2); border-radius: 16px; padding: 16px 24px;">
              <p style="color: #22c55e; font-weight: bold; font-size: 16px;">${slide.conclusion}</p>
            </div>
          </div>
        </div>`

    case 'risks':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 8px;">${slide.title}</h2>
            <p style="color: #9ca3af;">Ehrliche Einschätzung</p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 16px;">
            ${slide.risks.map((r: any) => `
              <div style="${glass} flex: 1; min-width: 45%;">
                <h3 style="color: #eab308; font-weight: bold; margin-bottom: 8px;">${r.risk}</h3>
                <p style="color: #f87171; font-size: 14px; margin-bottom: 8px;">"${r.question}"</p>
                <div style="background: rgba(34,197,94,0.1); border-radius: 12px; padding: 12px; border: 1px solid rgba(34,197,94,0.2);">
                  <p style="color: #22c55e; font-size: 13px;"><strong>Mitigierung:</strong> ${r.mitigation}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center;"><p style="color: #9ca3af;">${slide.conclusion}</p></div>
        </div>`

    case 'cta':
      return `
        <div style="text-align: center;">
          <h2 style="font-size: 42px; font-weight: 900; color: #fff; margin-bottom: 24px;">${slide.title}</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 24px; max-width: 700px; margin-left: auto; margin-right: auto;">
            ${slide.summary.map((item: string) => `
              <div style="${glassSmall} text-align: left; width: 200px;">
                <span style="color: #22c55e;">&#10003;</span>
                <p style="color: #d1d5db; font-size: 13px; margin-top: 4px;">${item}</p>
              </div>
            `).join('')}
          </div>
          <p style="font-size: 24px; font-weight: bold; color: #fff; margin-bottom: 24px;">${slide.question}</p>
          <div style="${glass} max-width: 600px; margin: 0 auto;">
            <p style="color: #d1d5db; font-style: italic; margin-bottom: 8px;">${slide.quote}</p>
            <p style="color: #22c55e; font-weight: 500;">${slide.author}</p>
          </div>
        </div>`

    case 'appendix':
      return `
        <div>
          <div style="text-align: center; margin-bottom: 32px;">
            <h2 style="font-size: 42px; font-weight: 900; color: #fff;">${slide.title}</h2>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; max-width: 700px; margin: 0 auto 32px;">
            ${slide.resources.map((r: any) => `
              <div style="${glass} width: 300px;">
                <h3 style="color: #fff; font-weight: bold; margin-bottom: 4px;">${r.name}</h3>
                <p style="color: #9ca3af; font-size: 13px;">${r.desc}</p>
              </div>
            `).join('')}
          </div>
          <div style="text-align: center; ${glass} display: inline-block;">
            <div style="margin-bottom: 8px;">
              <span style="color: #22c55e;">${slide.contact.email}</span>
              <span style="color: #4b5563; margin: 0 12px;">|</span>
              <span style="color: #22c55e;">${slide.contact.website}</span>
            </div>
            <p style="color: #6b7280; font-size: 13px;">${slide.disclaimer}</p>
          </div>
        </div>`

    default:
      return `<div style="text-align: center; color: #fff; font-size: 24px;">${slide.title || 'Slide'}</div>`
  }
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
    case 'health-crisis':
      return <HealthCrisisSlide slide={slide} />
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
    case 'ecosystem':
      return <EcosystemSlide slide={slide} />
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
  const iconMap: { [key: string]: any } = { Target, Heart, AlertTriangle, Brain }

  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          {slide.title}
        </h2>
        <p className="text-xl text-gray-400">{slide.subtitle}</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/30 to-green-900/30 border border-white/10">
            <Image
              src={slide.image}
              alt="KI-Gesundheitsanalyse"
              width={600}
              height={500}
              className="w-full h-auto"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Score Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4"
          >
            <div className="glass rounded-2xl p-4 border border-red-500/30 bg-black/80">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${(slide.scoreExample.score / 100) * 176} 176`}
                      className="text-red-500"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-black text-red-400">
                    {slide.scoreExample.score}
                  </span>
                </div>
                <div>
                  <p className="text-red-400 font-bold text-sm">{slide.scoreExample.label}</p>
                  <p className="text-gray-500 text-xs">von 100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Features */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {slide.keyFeatures.map((feature: any, i: number) => {
            const Icon = iconMap[feature.icon] || Target
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl p-5 border border-white/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    i === 0 ? 'bg-green-500/20 text-green-400' :
                    i === 1 ? 'bg-red-500/20 text-red-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* Score Explanation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass rounded-xl p-4 border-l-4 border-red-500 bg-red-500/5"
          >
            <p className="text-gray-300 text-sm italic">
              "{slide.scoreExample.reason}"
            </p>
          </motion.div>

          {/* Premium Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-2 text-purple-400 text-sm"
          >
            <Star className="w-4 h-4" />
            <span>{slide.premium}</span>
          </motion.div>
        </motion.div>
      </div>
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
        className="text-center mb-8"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          {slide.title}
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src={slide.image}
              alt="Barcode Scanner"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <p className="text-gray-400 text-lg">{slide.scenario}</p>

          <div className="glass rounded-xl p-5 border-l-4 border-red-500 bg-red-500/5">
            <p className="text-red-400">{slide.old}</p>
          </div>

          <div className="glass rounded-xl p-5 border-l-4 border-green-500 bg-green-500/5">
            <p className="text-green-400 font-medium">{slide.new}</p>
          </div>

          <div className="glass rounded-xl p-5 border border-white/10">
            <div className="grid grid-cols-2 gap-4">
              {slide.features.map((feature: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function FeatureBudgetSlide({ slide }: { slide: any }) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="text-purple-400 font-bold text-lg mb-2 block">Feature Deep Dive</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          {slide.title}
        </h2>
        <p className="text-xl text-gray-400">{slide.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Budget Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20">
            <Image
              src={slide.budget.image}
              alt={slide.budget.title}
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Content */}
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{slide.budget.title}</h3>
            </div>
            <div className="space-y-2">
              {slide.budget.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nutrition Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
            <Image
              src={slide.nutrition.image}
              alt={slide.nutrition.title}
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Content */}
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{slide.nutrition.title}</h3>
            </div>
            <div className="space-y-2">
              {slide.nutrition.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
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

function HealthCrisisSlide({ slide }: { slide: any }) {
  const colorMap: Record<string, string> = {
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
  }

  const textColorMap: Record<string, string> = {
    red: 'text-red-400',
    orange: 'text-orange-400',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
  }

  const bgColorMap: Record<string, string> = {
    red: 'bg-red-500/10 border-red-500/20',
    orange: 'bg-orange-500/10 border-orange-500/20',
    purple: 'bg-purple-500/10 border-purple-500/20',
    blue: 'bg-blue-500/10 border-blue-500/20',
    green: 'bg-green-500/10 border-green-500/20',
  }

  return (
    <div className="py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-red-400 font-bold text-lg mb-2 block">Die Realität</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          {slide.title}
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          {slide.subtitle}
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {slide.sections.map((section: any, sectionIndex: number) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className={`rounded-2xl p-5 border ${bgColorMap[section.color]}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorMap[section.color]} flex items-center justify-center`}>
                {section.icon === 'AlertTriangle' && <AlertTriangle className="w-4 h-4 text-white" />}
                {section.icon === 'Heart' && <Heart className="w-4 h-4 text-white" />}
                {section.icon === 'TrendingUp' && <TrendingUp className="w-4 h-4 text-white" />}
                {section.icon === 'Users' && <Users className="w-4 h-4 text-white" />}
              </div>
              <h3 className={`font-bold ${textColorMap[section.color]}`}>{section.title}</h3>
            </div>
            <div className="space-y-3">
              {section.stats.map((stat: any, statIndex: number) => (
                <div key={statIndex} className="flex items-start gap-3">
                  <span className={`text-xl md:text-2xl font-black ${textColorMap[section.color]} whitespace-nowrap`}>
                    {stat.value}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 text-sm leading-tight">{stat.label}</p>
                    <p className="text-gray-500 text-xs">{stat.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="glass rounded-2xl p-6 border border-green-500/20"
      >
        <h4 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5" />
          {slide.conclusion.title}
        </h4>
        <ul className="space-y-2 mb-4">
          {slide.conclusion.points.map((point: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
          <p className="text-green-400 font-semibold text-center">
            {slide.conclusion.highlight}
          </p>
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Revenue Stream #3</span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          {slide.title}
        </h2>
        <p className="text-xl font-bold text-blue-400">{slide.highlight}</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={slide.image}
              alt="Werbung & Promoted Products"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Placements */}
          <div className="grid grid-cols-2 gap-3">
            {slide.placements.map((placement: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass rounded-xl p-4 border border-white/10 hover:border-green-500/30 transition-all"
              >
                <h4 className="text-white font-bold text-sm mb-1">{placement.title}</h4>
                <p className="text-gray-400 text-xs">{placement.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why it works */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="glass rounded-xl p-4 border-l-4 border-blue-500 bg-blue-500/5"
          >
            <p className="text-gray-300 text-sm">{slide.reason}</p>
          </motion.div>

          {/* Unique */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="glass rounded-xl p-4 bg-purple-500/10 border border-purple-500/20"
          >
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <p className="text-purple-300 text-sm font-medium">{slide.unique}</p>
            </div>
          </motion.div>
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

function EcosystemSlide({ slide }: { slide: any }) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const consumerApp = slide.pillars[0]
  const businessPortals = slide.pillars.slice(1)

  // Auto-advance screenshots
  useEffect(() => {
    if (!consumerApp.screenshots) return
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % consumerApp.screenshots.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [consumerApp.screenshots])

  return (
    <div className="py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <span className="text-green-400 font-bold text-lg mb-2 block">Status</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          {slide.title}
        </h2>
        <p className="text-xl text-gray-400 mb-2">{slide.subtitle}</p>
        <p className="text-gray-500 max-w-3xl mx-auto text-sm">{slide.intro}</p>
      </motion.div>

      {/* Main Layout: App in center, Dashboards on sides */}
      <div className="grid lg:grid-cols-12 gap-4 mb-6">
        {/* Left Dashboard - Hofläden */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 glass rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={businessPortals[0].image}
              alt={businessPortals[0].title}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">{businessPortals[0].title}</h3>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                {businessPortals[0].status}
              </span>
            </div>
            <p className="text-green-400 text-xs mb-2">{businessPortals[0].subtitle}</p>
            <p className="text-gray-400 text-xs mb-3">{businessPortals[0].description}</p>
            <div className="space-y-1">
              {businessPortals[0].features.slice(0, 3).map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center - Consumer App with Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 flex flex-col"
        >
          {/* Phone Mockup */}
          <div className="flex-1 flex items-center justify-center py-4">
            <div className="relative w-44">
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-2 shadow-2xl" style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.2)' }}>
                <div className="bg-black rounded-[1.7rem] overflow-hidden aspect-[9/19.5]">
                  {/* Screenshot slideshow */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScreenshot}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={consumerApp.screenshots[currentScreenshot]}
                        alt={`App Screenshot ${currentScreenshot + 1}`}
                        fill
                        className="object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-1 mb-3">
            {consumerApp.screenshots.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentScreenshot(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === currentScreenshot ? 'bg-green-400 w-3' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="glass rounded-2xl p-4 border border-green-500/30 bg-gradient-to-b from-green-500/5 to-transparent">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white">{consumerApp.title}</h3>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                {consumerApp.status}
              </span>
            </div>
            <p className="text-green-400 text-sm mb-2">{consumerApp.subtitle}</p>
            <p className="text-gray-400 text-xs mb-3">{consumerApp.description}</p>
            <div className="grid grid-cols-2 gap-2">
              {consumerApp.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Dashboard - Supermärkte */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-4 glass rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={businessPortals[1].image}
              alt={businessPortals[1].title}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">{businessPortals[1].title}</h3>
              <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                {businessPortals[1].status}
              </span>
            </div>
            <p className="text-green-400 text-xs mb-2">{businessPortals[1].subtitle}</p>
            <p className="text-gray-400 text-xs mb-3">{businessPortals[1].description}</p>
            <div className="space-y-1">
              {businessPortals[1].features.slice(0, 3).map((feature: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass rounded-2xl p-5 border border-green-500/20"
      >
        <h4 className="text-green-400 font-bold text-base mb-3 text-center">{slide.conclusion.title}</h4>

        <div className="grid grid-cols-3 gap-4 mb-3">
          {slide.conclusion.stats.map((stat: any, index: number) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-green-400 font-medium text-xs">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
          <p className="text-green-400 font-semibold text-center text-lg">
            {slide.conclusion.highlight}
          </p>
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
    <div className="py-4">
      {/* Header with Photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        {/* Photo */}
        {slide.image && (
          <div className="mb-6">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-500/30 shadow-xl shadow-green-500/20">
              <Image
                src={slide.image}
                alt="Juli - Gründer"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-green-400 font-medium mt-3">Juli Seidel</p>
            <p className="text-gray-500 text-sm">Gründer & Entwickler</p>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
          {slide.title}
        </h2>
        <p className="text-lg text-gray-400">{slide.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Story & Background */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-5"
        >
          <p className="text-gray-300 mb-5 italic text-sm leading-relaxed">"{slide.story}"</p>
          <h4 className="text-white font-bold mb-3 text-sm">Meine Geschichte:</h4>
          <div className="space-y-2">
            {slide.background.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-white font-bold mb-3 text-sm">Was ich mitbringe:</h4>
          <div className="space-y-3">
            {slide.strengths.map((strength: any, i: number) => (
              <div key={i} className="glass rounded-xl p-4">
                <h5 className="text-green-400 font-bold mb-1 text-sm">{strength.title}</h5>
                <p className="text-gray-400 text-xs">{strength.desc}</p>
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
