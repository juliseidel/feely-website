'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowLeft,
  Leaf,
  Lock,
  AlertCircle,
  Loader2,
  Mail
} from 'lucide-react'

const CODE_LENGTH = 8

// Demo access code - in production this would be validated against a backend
const VALID_CODES = ['FEELY2026', 'INVESTOR', 'PITCHDEK']

export default function ZugangPage() {
  const router = useRouter()
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''))
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus()
  }, [])

  const handleInputChange = (index: number, value: string) => {
    // Only allow alphanumeric characters
    const sanitized = value.toUpperCase().replace(/[^A-Z0-9]/g, '')

    if (sanitized.length > 1) {
      // Handle paste
      const chars = sanitized.slice(0, CODE_LENGTH - index).split('')
      const newCode = [...code]
      chars.forEach((char, i) => {
        if (index + i < CODE_LENGTH) {
          newCode[index + i] = char
        }
      })
      setCode(newCode)
      setError('')

      // Focus the next empty input or the last one
      const nextIndex = Math.min(index + chars.length, CODE_LENGTH - 1)
      inputRefs.current[nextIndex]?.focus()
    } else {
      // Handle single character input
      const newCode = [...code]
      newCode[index] = sanitized
      setCode(newCode)
      setError('')

      // Auto-focus next input
      if (sanitized && index < CODE_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    } else if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    const fullCode = code.join('')

    if (fullCode.length !== CODE_LENGTH) {
      setError('Bitte geben Sie den vollständigen Zugangscode ein.')
      return
    }

    setIsVerifying(true)
    setError('')

    // Simulate API verification
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (VALID_CODES.includes(fullCode)) {
      // Store access in localStorage
      localStorage.setItem('feely_pitch_access', 'granted')
      localStorage.setItem('feely_pitch_code', fullCode)
      localStorage.setItem('feely_pitch_timestamp', Date.now().toString())

      // Redirect to pitch deck
      router.push('/pitch-deck')
    } else {
      setError('Ungültiger Zugangscode. Bitte überprüfen Sie Ihre Eingabe.')
      setIsVerifying(false)
      // Clear the code
      setCode(Array(CODE_LENGTH).fill(''))
      inputRefs.current[0]?.focus()
    }
  }

  return (
    <main className="min-h-screen bg-black flex flex-col">
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

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="FEELY Logo"
                width={120}
                height={120}
                className="drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-green-500 rounded-3xl blur-3xl opacity-20" />
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
              Willkommen bei FEELY
            </h1>
            <p className="text-gray-400">
              Bitte gib deinen Zugangscode ein<br />
              um fortzufahren
            </p>
          </div>

          {/* Code Input Grid */}
          <div className="flex justify-center gap-2 md:gap-3 mb-8">
            {code.map((digit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <input
                  ref={el => { inputRefs.current[index] = el }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-10 h-14 md:w-12 md:h-16 text-center text-xl md:text-2xl font-bold rounded-xl border-2 transition-all duration-200 outline-none ${
                    digit
                      ? 'bg-white/10 border-green-500 text-white'
                      : 'bg-white/5 border-white/20 text-white'
                  } ${
                    error && !digit
                      ? 'border-red-500'
                      : ''
                  } focus:border-green-400 focus:bg-white/10`}
                />
              </motion.div>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-red-400 mb-6"
            >
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={handleSubmit}
            disabled={isVerifying || code.some(c => !c)}
            className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 disabled:opacity-50 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isVerifying ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Wird überprüft...</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                <span>Zugang erhalten</span>
              </>
            )}
          </motion.button>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-500 mb-2">Noch keinen Zugangscode?</p>
            <Link
              href="/partner-zugang"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Kontaktiere uns unter hello@feely.app
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
