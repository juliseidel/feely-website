'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/app/feely-gesund-einkaufen/id6757958972'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=de.juliseidel.feelyapp'

export default function SessionPage() {
  const params = useParams()
  const code = (params.code as string || '').toUpperCase()
  const [copied, setCopied] = useState(false)
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop')

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (/iphone|ipad|ipod/.test(ua)) {
      setPlatform('ios')
    } else if (/android/.test(ua)) {
      setPlatform('android')
    }

    // Code automatisch in Zwischenablage kopieren
    if (code && navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {})
    }

    // Versuche App zu oeffnen (falls installiert)
    if (code) {
      window.location.href = `feely://join-session/${code}`
    }
  }, [code])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = code
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {})
    }
    if (platform === 'android') {
      window.location.href = PLAY_STORE_URL
    } else {
      window.location.href = APP_STORE_URL
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* Logo */}
      <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 32 }}>
        <div style={{
          position: 'absolute',
          inset: -20,
          background: 'rgba(16,185,129,0.15)',
          borderRadius: '50%',
          filter: 'blur(24px)',
        }} />
        <img
          src="/images/logo.png"
          alt="FEELY"
          style={{ width: 80, height: 80, borderRadius: 18, position: 'relative', zIndex: 1 }}
        />
      </div>

      <h1 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 10, letterSpacing: -0.5 }}>
        Gemeinsam bestellen!
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: 340, lineHeight: 1.5, fontSize: 15, marginBottom: 40 }}>
        Jemand hat dich eingeladen, gemeinsam beim Restaurant zu bestellen. Tritt der Bestell-Session bei!
      </p>

      {/* Code Card */}
      <div style={{
        width: '100%',
        maxWidth: 360,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(16,185,129,0.2)',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
      }}>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
          Session-Code
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 22, fontWeight: 700, color: '#34D399', letterSpacing: 3 }}>
            {code || '...'}
          </span>
          <button
            onClick={handleCopy}
            style={{
              background: 'rgba(16,185,129,0.1)',
              border: 'none',
              color: '#10B981',
              fontSize: 13,
              fontWeight: 500,
              padding: '6px 12px',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            {copied ? 'Kopiert!' : 'Kopieren'}
          </button>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 12, lineHeight: 1.4 }}>
          Der Code wurde automatisch kopiert. Gib ihn in der App unter &quot;Gemeinsam bestellen&quot; &rarr; &quot;Session beitreten&quot; ein.
        </p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        style={{
          width: '100%',
          maxWidth: 360,
          background: 'linear-gradient(135deg, #10B981, #059669)',
          color: '#fff',
          fontSize: 17,
          fontWeight: 600,
          border: 'none',
          borderRadius: 16,
          padding: 16,
          cursor: 'pointer',
          marginBottom: 12,
        }}
      >
        {platform === 'ios' ? 'Im App Store laden' : platform === 'android' ? 'Im Play Store laden' : 'App herunterladen'}
      </button>

      {platform === 'desktop' && (
        <a
          href={PLAY_STORE_URL}
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none' }}
        >
          Oder im Google Play Store laden
        </a>
      )}

      {/* How it works */}
      <div style={{ marginTop: 48, width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
          So funktioniert&apos;s
        </p>
        {[
          { step: '1', text: 'FEELY App herunterladen und registrieren' },
          { step: '2', text: 'Restaurant suchen und "Gemeinsam bestellen" waehlen' },
          { step: '3', text: '"Session beitreten" antippen und Code eingeben' },
          { step: '4', text: 'Eigene Gerichte auswaehlen — Allergien werden gecheckt!' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'rgba(16,185,129,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: 13,
              fontWeight: 700,
              color: '#34D399',
            }}>
              {item.step}
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Trust */}
      <div style={{ marginTop: 40, width: '100%', maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: '100% kostenlos — keine versteckten Kosten' },
          { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', text: 'Deine Daten bleiben privat und sicher' },
          { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', text: 'Gemeinsam bestellen — jeder auf seinem Handy' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'rgba(16,185,129,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#34D399">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{item.text}</span>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 48, fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>
        FEELY &copy; 2026
      </p>
    </div>
  )
}
