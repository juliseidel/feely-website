'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Leaf,
  Mail,
  User,
  Building,
  Briefcase,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
  Globe,
  TrendingUp,
  Users,
  Rocket
} from 'lucide-react'

const roleOptions = [
  { value: 'investor', label: 'Investor / VC' },
  { value: 'angel', label: 'Business Angel' },
  { value: 'cofounder', label: 'Potentieller Co-Founder' },
  { value: 'advisor', label: 'Berater / Advisor' },
  { value: 'partner', label: 'Strategischer Partner' },
  { value: 'media', label: 'Presse / Medien' },
  { value: 'other', label: 'Sonstiges' },
]

const sourceOptions = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'website', label: 'FEELY Website' },
  { value: 'referral', label: 'Empfehlung' },
  { value: 'event', label: 'Event / Konferenz' },
  { value: 'press', label: 'Presse / Artikel' },
  { value: 'search', label: 'Suchmaschine' },
  { value: 'other', label: 'Sonstiges' },
]

export default function PartnerZugangPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    source: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get role and source labels
    const roleLabel = roleOptions.find(r => r.value === formData.role)?.label || formData.role
    const sourceLabel = sourceOptions.find(s => s.value === formData.source)?.label || formData.source

    // Build email body
    const emailBody = `
Neue Pitch Deck Anfrage

Name: ${formData.name}
E-Mail: ${formData.email}
Unternehmen: ${formData.company || 'Nicht angegeben'}
Rolle: ${roleLabel}
Quelle: ${sourceLabel}

Nachricht:
${formData.message || 'Keine Nachricht'}

---
Gesendet über feelyapp.info/partner-zugang
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:partner@feelyapp.de?subject=${encodeURIComponent('Pitch Deck Anfrage von ' + formData.name)}&body=${encodeURIComponent(emailBody)}`

    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 500))

    // Open email client
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 md:p-12 max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-black text-white mb-4">
            Anfrage erhalten!
          </h1>
          <p className="text-gray-400 mb-8">
            Vielen Dank für Ihr Interesse an FEELY. Wir werden Ihre Anfrage prüfen und
            uns innerhalb von 24-48 Stunden bei Ihnen melden. Falls Ihre Anfrage
            genehmigt wird, erhalten Sie einen persönlichen Zugangscode per E-Mail.
          </p>
          <div className="space-y-4">
            <Link
              href="/investoren"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full"
            >
              Zurück zur Übersicht
            </Link>
            <Link
              href="/"
              className="btn-secondary inline-flex items-center justify-center gap-2 w-full"
            >
              Zur Startseite
            </Link>
          </div>
        </motion.div>
      </main>
    )
  }

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
            href="/investoren"
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <Rocket className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Partner Zugang beantragen</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black mb-6">
              <span className="text-white">Zugang zum </span>
              <span className="gradient-text">Pitch Deck</span>
              <span className="text-white"> anfordern</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Sie sind Investor, potentieller Co-Founder oder strategischer Partner?
              Füllen Sie das Formular aus und erhalten Sie Zugang zu unserem
              exklusiven Pitch Deck mit allen Details zu FEELY.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TrendingUp, label: 'Marktanalyse', sub: 'Detailliert' },
              { icon: Users, label: 'Team & Vision', sub: 'Transparent' },
              { icon: Globe, label: 'Roadmap', sub: 'Ambitioniert' },
              { icon: Briefcase, label: 'Business Model', sub: 'Skalierbar' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <item.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-medium text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Vollständiger Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Max Mustermann"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  E-Mail Adresse *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="max@beispiel.de"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Unternehmen / Organisation
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ihr Unternehmen"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className="block text-white font-medium mb-2">
                  Wie können Sie FEELY unterstützen? *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-gray-900">Bitte wählen...</option>
                    {roleOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-gray-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Source */}
              <div>
                <label htmlFor="source" className="block text-white font-medium mb-2">
                  Wie haben Sie von FEELY erfahren? *
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-gray-900">Bitte wählen...</option>
                    {sourceOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-gray-900">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Nachricht (optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Erzählen Sie uns mehr über Ihr Interesse an FEELY..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Zugang anfordern</span>
                  </>
                )}
              </button>

              {/* Privacy Notice */}
              <p className="text-gray-500 text-sm text-center">
                Mit dem Absenden stimmen Sie unserer{' '}
                <Link href="/datenschutz" className="text-green-400 hover:text-green-300">
                  Datenschutzerklärung
                </Link>{' '}
                zu. Wir behandeln Ihre Daten vertraulich.
              </p>
            </form>
          </motion.div>

          {/* Already have a code? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-4">
              Sie haben bereits einen Zugangscode?
            </p>
            <Link
              href="/zugang"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              <span>Direkt zum Pitch Deck</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
