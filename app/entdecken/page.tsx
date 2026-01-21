'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  Heart,
  Clock,
  ShoppingCart,
  Smartphone,
  Store,
  Brain,
  Shield,
  Bell,
  BarChart3,
  Scan,
  Truck,
  Package,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Users,
  Zap,
  Target,
  PieChart,
  Calculator,
  Utensils,
  Apple,
  Salad,
  Timer,
  Home,
  MapPin,
  CreditCard,
  Search,
  Filter,
  Star,
  MessageSquare,
  Sparkles,
  Activity,
  Scale,
  Pill,
  ListChecks,
  RefreshCw,
  Eye,
  Lock,
  Wallet,
  CalendarClock,
  BadgePercent,
  Lightbulb,
  Globe,
  ChevronRight,
  Play
} from 'lucide-react'

// Schockierende Gesundheitsstatistiken
const healthStats = [
  { value: '67%', label: 'der Deutschen ernähren sich ungesund', source: 'RKI 2024' },
  { value: '€42 Mrd.', label: 'jährliche Kosten durch Fehlernährung', source: 'BMG' },
  { value: '160.000', label: 'Todesfälle durch falsche Ernährung/Jahr', source: 'WHO' },
  { value: '26 Mio.', label: 'Deutsche mit Allergien/Unverträglichkeiten', source: 'DAAB' },
]

// Zeitvergleich
const timeComparison = [
  { task: 'Einkaufsliste schreiben', traditional: '15 Min', feely: '2 Min (KI-Vorschläge)' },
  { task: 'Zum Supermarkt fahren', traditional: '20 Min', feely: '0 Min (Lieferung/Abholung)' },
  { task: 'Produkte suchen & vergleichen', traditional: '30 Min', feely: '5 Min (Filter & Suche)' },
  { task: 'An der Kasse warten', traditional: '10 Min', feely: '0 Min' },
  { task: 'Zutaten auf Allergene prüfen', traditional: '20 Min', feely: '0 Min (automatisch)' },
  { task: 'Einkauf einpacken', traditional: '5 Min', feely: '0 Min' },
]

// Nutzer Features
const userFeatures = [
  {
    icon: Store,
    title: 'Alle Märkte an einem Ort',
    description: 'Jeder Supermarkt und Hofladen in deiner Nähe - mit dem kompletten, individuellen Sortiment. Egal ob EDEKA, REWE, Bio-Laden oder der kleine Hofladen um die Ecke.',
    details: ['Echte Lagerbestände', 'Individuelle Preise', 'Öffnungszeiten', 'Entfernungsanzeige'],
  },
  {
    icon: Scan,
    title: 'Produkt-Scanner',
    description: 'Scanne jedes Produkt im Supermarkt und erfahre sofort: Enthält es Allergene die du meidest? Ist es für deine Gesundheitsziele geeignet? Was bedeuten die Inhaltsstoffe?',
    details: ['Barcode-Scan', 'Sofortige Allergen-Warnung', 'Nährwert-Analyse', 'Alternative Vorschläge'],
  },
  {
    icon: Shield,
    title: 'Allergen-Wächter',
    description: 'Deine Allergien und Unverträglichkeiten immer im Blick. Bei jedem Produkt, in jedem Warenkorb - automatische Warnung wenn etwas nicht passt.',
    details: ['Über 14 Hauptallergene', 'Unverträglichkeiten', 'Kreuzallergien', 'Warnung vor dem Kauf'],
  },
  {
    icon: Brain,
    title: 'KI-Gesundheitsanalyse',
    description: 'Premium: Unsere KI analysiert jedes Produkt basierend auf deinen Krankheiten, Zielen und der neuesten Wissenschaft. Völlig neutral und individuell für dich.',
    details: ['50+ Gesundheitsfaktoren', 'Wissenschaftsbasiert', 'Personalisiert', 'Neutral & unabhängig'],
    premium: true,
  },
  {
    icon: Wallet,
    title: 'Budget-Kontrolle',
    description: 'Behalte deine Ausgaben im Griff. Setze Budgets, tracke jeden Einkauf und verstehe wohin dein Geld fließt.',
    details: ['Monatliches Budget', 'Ausgaben-Analyse', 'Spar-Tipps', 'Preisvergleich'],
  },
  {
    icon: Truck,
    title: 'Lieferung & Abholung',
    description: 'Je nach Supermarkt: Lass dir liefern oder hole fertig gepackt ab. Bestelle von der Couch und spar dir das Warten an der Kasse.',
    details: ['Click & Collect', 'Lieferung nach Hause', 'Zeitfenster wählen', 'Kontaktlos'],
  },
  {
    icon: Package,
    title: 'Vorratskammer',
    description: 'Wisse immer was du zuhause hast. Nie wieder doppelt kaufen, nie wieder vergessen. Dein digitaler Kühlschrank-Manager.',
    details: ['Ablaufdaten tracken', 'Automatische Einkaufsliste', 'Rezept-Vorschläge', 'Verschwendung reduzieren'],
  },
  {
    icon: BadgePercent,
    title: 'Angebote & Rabatte',
    description: 'Alle Angebote deiner Lieblingsmärkte auf einen Blick. Plus: Werde benachrichtigt wenn Produkte kurz vor Ablauf günstig werden.',
    details: ['Aktuelle Angebote', 'Preisalarm', 'Ablaufende Produkte', 'Persönliche Deals'],
  },
  {
    icon: Activity,
    title: 'Ernährungstracker',
    description: 'Tracke was du isst mit KI-Unterstützung. Verstehe deine Ernährung und verbessere sie Schritt für Schritt.',
    details: ['Kalorien & Makros', 'Mikronährstoffe', 'Trends erkennen', 'Ziele setzen'],
    premium: true,
  },
  {
    icon: Lightbulb,
    title: 'Zutaten verstehen',
    description: 'Jede Zutat erklärt. E-Nummern, chemische Namen, Zusatzstoffe - endlich verstehen was wirklich drin ist.',
    details: ['Einfache Erklärungen', 'Gesundheitsbewertung', 'Alternativen', 'Wissen aufbauen'],
  },
]

// Anbieter Features
const providerFeatures = [
  {
    icon: BarChart3,
    title: 'Eigenes Dashboard',
    description: 'Verwalten Sie Ihr komplettes Sortiment digital. Preise, Bestände, Angebote - alles in Echtzeit.',
  },
  {
    icon: Bell,
    title: 'Kunden erreichen',
    description: 'Informieren Sie Ihre Kunden über Neuigkeiten, Angebote oder besondere Aktionen per Push.',
  },
  {
    icon: TrendingUp,
    title: 'Umsatz steigern',
    description: 'Erreichen Sie neue Kunden, die Sie sonst nie gefunden hätten. Messbar mehr Umsatz.',
  },
  {
    icon: RefreshCw,
    title: 'Weniger Verschwendung',
    description: 'Verkaufen Sie ablaufende Produkte an interessierte Kunden statt sie wegzuwerfen.',
  },
]

// Ecosystem Benefits
const ecosystemBenefits = [
  { icon: Clock, text: 'Bis zu 2 Stunden pro Woche sparen' },
  { icon: Heart, text: 'Gesünder essen ohne Aufwand' },
  { icon: Wallet, text: 'Durchschnittlich 15% sparen' },
  { icon: Shield, text: '100% Allergen-Sicherheit' },
  { icon: Brain, text: 'Ernährungsexperte werden' },
  { icon: Leaf, text: 'Nachhaltiger konsumieren' },
]

// Problem-Beispiele
const problems = [
  {
    icon: Timer,
    title: 'Zeit ist kostbar',
    stat: '4,2 Std.',
    description: 'verbringt der durchschnittliche Deutsche pro Woche mit Einkaufen',
  },
  {
    icon: AlertTriangle,
    title: 'Versteckte Gefahren',
    stat: '82%',
    description: 'können Zutatenlisten nicht richtig interpretieren',
  },
  {
    icon: Scale,
    title: 'Gesundheitskrise',
    stat: '53%',
    description: 'der Erwachsenen in Deutschland sind übergewichtig',
  },
  {
    icon: Pill,
    title: 'Unwissenheit',
    stat: '71%',
    description: 'kennen ihre Nährstoffversorgung nicht',
  },
]

// Use Case Beispiele
const useCases = [
  {
    title: 'Der Arbeitstag',
    scenario: 'Mittagspause im Büro',
    problem: 'Keine Zeit zum Einkaufen nach der Arbeit, Kühlschrank leer',
    solution: 'In 5 Minuten den Wocheneinkauf erledigen, nach der Arbeit nur noch abholen',
    saved: '45 Min gespart',
  },
  {
    title: 'Die Allergie-Mutter',
    scenario: 'Kind mit Laktoseintoleranz',
    problem: 'Stundenlang Zutatenlisten lesen, trotzdem Angst vor Fehlkäufen',
    solution: 'Automatische Warnung bei jedem Produkt, 100% Sicherheit',
    saved: 'Sorgen eliminiert',
  },
  {
    title: 'Der Fitness-Fan',
    scenario: 'Makros tracken für Muskelaufbau',
    problem: 'Mühsames Abwiegen und Eingeben jeder Mahlzeit',
    solution: 'KI-Ernährungstracker macht es automatisch',
    saved: '30 Min/Tag gespart',
  },
  {
    title: 'Die Sparfüchsin',
    scenario: 'Budget im Blick behalten',
    problem: 'Überraschungen an der Kasse, Angebote verpassen',
    solution: 'Alle Angebote, Preisvergleich, Budget-Tracking',
    saved: '15% weniger ausgeben',
  },
]

export default function EntdeckenPage() {
  const totalTraditional = timeComparison.reduce((acc, item) => {
    const mins = parseInt(item.traditional)
    return acc + (isNaN(mins) ? 0 : mins)
  }, 0)

  const totalFeely = timeComparison.reduce((acc, item) => {
    const mins = parseInt(item.feely)
    return acc + (isNaN(mins) ? 0 : mins)
  }, 0)

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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Das komplette FEELY Universum</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-white">Mehr als eine App.</span>
              <br />
              <span className="gradient-text">Ein neues Lebensgefühl.</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              FEELY ist das erste Ökosystem, das deinen kompletten Einkauf revolutioniert.
              Alle Supermärkte. Alle Hofläden. Volle Transparenz. Maximale Zeitersparnis.
              Und ein Gesundheitsassistent, der dich wirklich versteht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Alle Features entdecken</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#zeitersparnis"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Clock className="w-5 h-5" />
                <span>Zeitersparnis berechnen</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schockierende Statistiken */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-950/20 via-black to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 font-medium text-sm">Die Realität</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Warum wir handeln müssen
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Diese Zahlen zeigen: Unser Einkaufs- und Ernährungsverhalten macht uns krank.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {healthStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center border border-red-500/20"
                >
                  <div className="text-4xl md:text-5xl font-black text-red-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium mb-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm">Quelle: {stat.source}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <problem.icon className="w-8 h-8 text-orange-400 mb-4" />
                  <div className="text-3xl font-black text-white mb-1">{problem.stat}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-gray-400 text-sm">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Die Lösung */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Lightbulb className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Die Lösung</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                FEELY - Dein neues Einkaufs-Ökosystem
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Stell dir vor: Jeder Supermarkt und Hofladen in deiner Nähe, digital verfügbar.
                Mit allem was drin ist. Mit allen Informationen die du brauchst.
                Und einem Assistenten, der auf deine Gesundheit achtet.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Store className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Für Märkte</h3>
                  <p className="text-gray-400">
                    Jeder Supermarkt und Hofladen kann sein komplettes Sortiment digital präsentieren -
                    wie Amazon, aber für den lokalen Handel.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Für Nutzer</h3>
                  <p className="text-gray-400">
                    Ein Ort für alles: Einkaufen, Gesundheit verstehen, Zeit sparen, Geld sparen -
                    und dabei zum Ernährungsexperten werden.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Ein Ökosystem</h3>
                  <p className="text-gray-400">
                    Alles verbunden: Dein Kühlschrank, deine Gesundheit, dein Budget, deine Zeit -
                    intelligent verknüpft.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Banner */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {ecosystemBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <benefit.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zeitersparnis Vergleich */}
      <section id="zeitersparnis" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">Zeitersparnis</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Deine Zeit ist kostbar
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Vergleiche: Traditionelles Einkaufen vs. FEELY
              </p>
            </div>

            <div className="glass rounded-3xl p-8 mb-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Aufgabe</th>
                    <th className="text-center py-4 px-4 text-red-400 font-medium">Traditionell</th>
                    <th className="text-center py-4 px-4 text-green-400 font-medium">Mit FEELY</th>
                  </tr>
                </thead>
                <tbody>
                  {timeComparison.map((item, index) => (
                    <motion.tr
                      key={item.task}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/5"
                    >
                      <td className="py-4 px-4 text-white">{item.task}</td>
                      <td className="py-4 px-4 text-center text-red-400 font-medium">{item.traditional}</td>
                      <td className="py-4 px-4 text-center text-green-400 font-medium">{item.feely}</td>
                    </motion.tr>
                  ))}
                  <tr className="bg-white/5">
                    <td className="py-4 px-4 text-white font-bold">GESAMT</td>
                    <td className="py-4 px-4 text-center text-red-400 font-bold">{totalTraditional} Min</td>
                    <td className="py-4 px-4 text-center text-green-400 font-bold">{totalFeely} Min</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 text-center border border-green-500/20">
                <div className="text-5xl font-black text-green-400 mb-2">
                  {totalTraditional - totalFeely} Min
                </div>
                <p className="text-white font-medium">Pro Einkauf gespart</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center border border-green-500/20">
                <div className="text-5xl font-black text-green-400 mb-2">
                  ~2 Std
                </div>
                <p className="text-white font-medium">Pro Woche gespart</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center border border-green-500/20">
                <div className="text-5xl font-black text-green-400 mb-2">
                  100+ Std
                </div>
                <p className="text-white font-medium">Pro Jahr gespart</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alle Nutzer-Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Smartphone className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Für Nutzer</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Alles was du brauchst
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Jedes Feature wurde entwickelt, um deinen Alltag einfacher und gesünder zu machen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {userFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`glass rounded-2xl p-6 ${feature.premium ? 'border border-purple-500/30' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      feature.premium
                        ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                        : 'bg-gradient-to-br from-green-500 to-emerald-600'
                    }`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        {feature.premium && (
                          <span className="px-2 py-0.5 bg-purple-500/20 rounded-full text-purple-400 text-xs font-medium">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1 bg-white/5 rounded-full text-gray-300 text-sm"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium text-sm">Aus dem echten Leben</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                So hilft FEELY im Alltag
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                      {useCase.scenario}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-3 h-3 text-red-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Problem:</p>
                        <p className="text-gray-300">{useCase.problem}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Mit FEELY:</p>
                        <p className="text-gray-300">{useCase.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="text-green-400 font-bold">{useCase.saved}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Für Anbieter */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Store className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">Für Anbieter</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Ihr virtueller Marktplatz
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Egal ob großer Supermarkt oder kleiner Hofladen - mit FEELY erreichen Sie
                tausende neue Kunden digital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {providerFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link
                href="/anbieter"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Mehr für Anbieter erfahren</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vergleich mit Konkurrenz */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Warum gibt es sowas noch nicht?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              In den USA gibt es Instacart - mit $39 Mrd. Bewertung. Aber ohne die
              Gesundheitsfeatures, ohne die Transparenz, ohne den regionalen Fokus.
              <span className="text-green-400 font-medium"> FEELY ist die Evolution.</span>
            </p>

            <div className="glass rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-gray-500">Andere Apps</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Nur Lieferung, keine Abholung',
                      'Keine Gesundheitsanalyse',
                      'Keine Allergen-Warnungen',
                      'Keine Hofläden',
                      'Keine Transparenz bei Zutaten',
                      'Kein Budget-Tracking',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-gray-400">
                        <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                          <span className="text-red-400 text-xs">✕</span>
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="gradient-text">FEELY</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Lieferung UND Abholung',
                      'KI-Gesundheitsanalyse',
                      'Automatische Allergen-Warnungen',
                      'Supermärkte UND Hofläden',
                      'Jede Zutat erklärt',
                      'Komplettes Budget-Management',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <Target className="w-12 h-12 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Unsere Vision
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Eine Welt, in der jeder Mensch versteht was er isst. In der gesunde Ernährung
              nicht kompliziert ist. In der der Einkauf keine Zeit mehr kostet, sondern Zeit spart.
              In der lokale Märkte und Hofläden digital erfolgreich sind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Zeit sparen', 'Gesundheit verstehen', 'Bewusst einkaufen', 'Lokal unterstützen'].map((vision) => (
                <span key={vision} className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 font-medium">
                  {vision}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="animated-border rounded-3xl"
          >
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <Sparkles className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Bereit für ein neues Einkaufserlebnis?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Werde Teil der Bewegung. Spar Zeit. Versteh was du isst.
                Lebe gesünder.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <span>Zur Startseite</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/investoren"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <span>Für Investoren</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
