'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Apple, Play, QrCode, Star, Download as DownloadIcon } from 'lucide-react'

export default function Download() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="download" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glow effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl"
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Smartphone className="w-4 h-4 text-green-400" />
            <span className="text-white font-medium text-sm">Jetzt verfügbar</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Bereit für ein </span>
            <br className="hidden md:block" />
            <span className="gradient-text">neues Einkaufserlebnis?</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Lade FEELY jetzt kostenlos herunter und erlebe, wie einfach
            bewusster Einkaufen sein kann.
          </p>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* App Store */}
            <a
              href="#"
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:shadow-green-500/20"
            >
              <Apple className="w-10 h-10" />
              <div className="text-left">
                <p className="text-xs text-gray-600">Laden im</p>
                <p className="text-xl font-bold">App Store</p>
              </div>
            </a>

            {/* Play Store */}
            <a
              href="#"
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:shadow-green-500/20"
            >
              <Play className="w-10 h-10" />
              <div className="text-left">
                <p className="text-xs text-gray-600">Jetzt bei</p>
                <p className="text-xl font-bold">Google Play</p>
              </div>
            </a>
          </motion.div>

          {/* QR Code hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-gray-400"
          >
            <QrCode className="w-5 h-5" />
            <span className="text-sm">Oder scanne den QR-Code in der App</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">App Store Bewertung</p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <p className="text-gray-400 text-sm">Downloads</p>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9</div>
              <p className="text-gray-400 text-sm">Durchschnitt</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
