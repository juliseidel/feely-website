'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Building,
  CheckCircle,
  Loader2
} from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate form submission
    setTimeout(() => {
      setFormState('success')
    }, 1500)
  }

  return (
    <section id="kontakt" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium text-sm">Kontakt</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Lass uns </span>
            <span className="gradient-text">sprechen</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fragen, Anregungen oder Interesse an einer Partnerschaft?
            Wir freuen uns auf deine Nachricht.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Kontaktinformationen
              </h3>
              <p className="text-gray-400 mb-8">
                Wir sind für dich da - ob als Nutzer, Anbieter oder Investor.
                Schreib uns einfach!
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'E-Mail',
                  value: 'hello@feelyapp.de',
                  href: 'mailto:hello@feelyapp.de',
                },
                {
                  icon: Phone,
                  label: 'Telefon',
                  value: '+49 17668263213',
                  href: 'tel:+4917668263213',
                },
                {
                  icon: MapPin,
                  label: 'Standort',
                  value: 'Unterschneidheim, Deutschland',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-green-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-4">Schnellzugriff</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Für Supermärkte', href: '/partner/supermaerkte' },
                  { name: 'Für Hofläden', href: '/partner/hoflaeden' },
                  { name: 'Für Investoren', href: '/investoren' },
                  { name: 'Für Anbieter', href: '/anbieter' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-3xl p-8">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-gray-400">
                    Vielen Dank für deine Nachricht. Wir melden uns schnellstmöglich bei dir.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        E-Mail
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="deine@email.de"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Betreff
                    </label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer">
                      <option value="general" className="bg-gray-900">Allgemeine Anfrage</option>
                      <option value="provider" className="bg-gray-900">Als Anbieter registrieren</option>
                      <option value="investor" className="bg-gray-900">Investoren-Anfrage</option>
                      <option value="press" className="bg-gray-900">Presse & Medien</option>
                      <option value="support" className="bg-gray-900">Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                      placeholder="Deine Nachricht..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Nachricht senden</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
