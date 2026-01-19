'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Store,
  Scan,
  Heart,
  ShoppingBag,
  Bell,
  Wallet,
  Truck,
  Clock,
  Leaf,
  Brain,
  Target,
  TrendingDown,
  Package,
  BarChart3,
  Shield,
  Sparkles
} from 'lucide-react'

const features = [
  {
    icon: Store,
    title: 'Alle Märkte vereint',
    description: 'Supermärkte und Hofläden in deiner Nähe - alle in einer App. Virtuell stöbern, real genießen.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Scan,
    title: 'Smart Scanner',
    description: 'Scanne Produkte und erhalte sofort Infos zu Allergenen, Inhaltsstoffen und Gesundheitsbewertungen.',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Gesundheitscheck',
    description: 'Jedes Produkt wird auf deine Allergien und Unverträglichkeiten geprüft. Sicher einkaufen.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Brain,
    title: 'KI-Analyse (Premium)',
    description: 'Wissenschaftlich fundierte Analyse: Wie wirkt dieses Produkt auf deine Ziele und Gesundheit?',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: TrendingDown,
    title: 'Rabatte & Angebote',
    description: 'Alle aktuellen Angebote deiner Lieblingsmärkte auf einen Blick. Nie mehr ein Schnäppchen verpassen.',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Clock,
    title: 'Bald ablaufend',
    description: 'Wie Too Good To Go: Erhalte Benachrichtigungen über reduzierte Produkte kurz vor Ablauf.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Wallet,
    title: 'Budget-Kontrolle',
    description: 'Behalte deine Ausgaben im Blick. Setze Limits und spare automatisch beim Einkaufen.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Truck,
    title: 'Lieferung & Abholung',
    description: 'Wähle flexibel zwischen Lieferung nach Hause oder schneller Abholung - je nach Anbieter.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Package,
    title: 'Vorrats-Manager',
    description: 'Wisse immer, was du noch zuhause hast. Keine doppelten Käufe, weniger Verschwendung.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: Target,
    title: 'Ernährungstracker',
    description: 'KI-gestütztes Tracking deiner Ernährung. Erreiche deine Gesundheitsziele spielend.',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: Leaf,
    title: 'Hofladen-Frische',
    description: 'Echtzeit-Bestandsinfos von Hofläden. Wisse, ob sich die Fahrt lohnt.',
    color: 'from-lime-500 to-green-600',
  },
  {
    icon: Shield,
    title: 'Volle Transparenz',
    description: 'Verstehe jede einzelne Zutat. Wir erklären, was drin ist - verständlich und ehrlich.',
    color: 'from-slate-500 to-zinc-600',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium text-sm">Alles was du brauchst</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Features die </span>
            <span className="gradient-text">begeistern</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            FEELY vereint alles in einer App - von der Produktsuche bis zur
            wissenschaftlichen Gesundheitsanalyse.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-3xl p-8 card-hover relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 feature-icon`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
