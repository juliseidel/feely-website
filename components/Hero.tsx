'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, ShoppingCart, Heart, Store, Leaf } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const screenshots = [
  { src: '/images/screenshot-home.png', alt: 'FEELY Home Screen' },
  { src: '/images/screenshot-products.png', alt: 'Produktübersicht mit Gesundheitsinfos' },
  { src: '/images/screenshot-allergies.png', alt: 'Allergen-Warnung' },
  { src: '/images/screenshot-onboarding.png', alt: 'FEELY Onboarding' },
]

export default function Hero() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium text-sm">Die Zukunft des Einkaufens ist da</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-title text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          Einkaufen.
          <br />
          <span className="gradient-text">Verstehen.</span>
          <br />
          <span className="text-white/80">Leben.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          FEELY revolutioniert deinen Einkauf. Alle Supermärkte und Hofläden.
          Volle Transparenz. Gesundheit im Fokus.{' '}
          <span className="text-green-400">Eine App für alles.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link href="#download" className="btn-primary flex items-center gap-2 group">
            <span>Jetzt kostenlos starten</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#features" className="btn-secondary">
            Mehr erfahren
          </Link>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Store, text: 'Alle Märkte' },
            { icon: Heart, text: 'Gesundheitscheck' },
            { icon: ShoppingCart, text: 'Smart Einkaufen' },
            { icon: Leaf, text: 'Nachhaltig' },
          ].map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors cursor-default"
            >
              <item.icon className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Phone mockup with real screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto w-72 md:w-80">
            {/* Phone frame */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl glow">
              <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                {/* Screenshot slideshow */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreenshot}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={screenshots[currentScreenshot].src}
                      alt={screenshots[currentScreenshot].alt}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
            </div>

            {/* Slideshow indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentScreenshot
                      ? 'bg-green-400 w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-green-500/20 rounded-[4rem] blur-2xl -z-10" />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: 'Partner-Märkte' },
            { value: '10K+', label: 'Produkte' },
            { value: '100%', label: 'Transparenz' },
            { value: '24/7', label: 'Verfügbar' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
