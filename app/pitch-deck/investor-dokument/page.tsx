'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  Download,
  FileText,
  ArrowLeft,
  CheckCircle,
  X as XIcon,
  Minus,
  Loader2
} from 'lucide-react'

export default function InvestorDokumentPage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    if (!contentRef.current || isGenerating) return
    setIsGenerating(true)

    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = contentRef.current

      const opt = {
        margin: [10, 12, 10, 12] as [number, number, number, number],
        filename: 'FEELY-Investor-Dokument-2026.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false,
        },
        jsPDF: {
          unit: 'mm' as const,
          format: 'a4' as const,
          orientation: 'portrait' as const,
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      }

      await html2pdf().set(opt).from(element).save()
    } catch (err) {
      console.error('PDF generation error:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Sticky Download Bar */}
      <div className="sticky top-16 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/pitch-deck"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Zurück zum Pitch Deck</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-gray-500 text-sm">
              <FileText className="w-4 h-4" />
              <span>Investor-Dokument</span>
            </div>
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Wird erstellt...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Als PDF herunterladen</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* PDF Content */}
      <div ref={contentRef} className="investor-pdf-content bg-white text-gray-900">
        <style jsx global>{`
          .investor-pdf-content {
            max-width: 210mm;
            margin: 0 auto;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.5;
          }
          .investor-pdf-content * {
            color: inherit;
          }
          .pdf-page {
            padding: 40px 48px;
            page-break-after: always;
            min-height: auto;
          }
          .pdf-page:last-child {
            page-break-after: auto;
          }
          .pdf-section-title {
            font-size: 24px;
            font-weight: 900;
            color: #111;
            margin-bottom: 6px;
            letter-spacing: -0.5px;
          }
          .pdf-section-subtitle {
            font-size: 14px;
            color: #16a34a;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .pdf-divider {
            height: 3px;
            background: linear-gradient(to right, #22c55e, #10b981);
            border: none;
            margin: 24px 0;
            border-radius: 2px;
          }
          .pdf-divider-thin {
            height: 1px;
            background: #e5e7eb;
            border: none;
            margin: 16px 0;
          }
          .pdf-stat-box {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 10px;
            padding: 16px;
            text-align: center;
          }
          .pdf-stat-value {
            font-size: 22px;
            font-weight: 900;
            color: #16a34a;
          }
          .pdf-stat-label {
            font-size: 11px;
            color: #6b7280;
            margin-top: 2px;
          }
          .pdf-card {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            padding: 16px;
          }
          .pdf-green-card {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 10px;
            padding: 16px;
          }
          .pdf-highlight-box {
            background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
            border: 2px solid #22c55e;
            border-radius: 12px;
            padding: 20px;
          }
          .avoid-break {
            page-break-inside: avoid;
          }
          .pdf-table {
            width: 100%;
            border-collapse: collapse;
          }
          .pdf-table th {
            background: #f9fafb;
            padding: 8px 10px;
            text-align: left;
            font-size: 11px;
            font-weight: 700;
            color: #374151;
            border-bottom: 2px solid #e5e7eb;
          }
          .pdf-table td {
            padding: 7px 10px;
            font-size: 12px;
            border-bottom: 1px solid #f3f4f6;
            color: #4b5563;
          }
          .pdf-check {
            color: #22c55e;
            font-weight: bold;
          }
          .pdf-x {
            color: #ef4444;
          }
          .pdf-partial {
            color: #eab308;
          }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .investor-pdf-content { max-width: 100%; }
          }
        `}</style>

        {/* === PAGE 1: COVER === */}
        <div className="pdf-page" style={{ background: 'linear-gradient(180deg, #052e16 0%, #111827 50%, #000000 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 40, right: 48, fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
            Confidential
          </div>
          <div style={{ width: 80, height: 80, background: 'linear-gradient(135deg, #22c55e, #10b981)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 0 60px rgba(34,197,94,0.3)' }}>
            <span style={{ fontSize: 40, color: 'white', fontWeight: 900 }}>F</span>
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: 'white', letterSpacing: -2, marginBottom: 8 }}>
            FEELY
          </h1>
          <p style={{ fontSize: 20, color: '#22c55e', fontWeight: 600, marginBottom: 24, letterSpacing: 2 }}>
            Einkaufen. Verstehen. Leben.
          </p>
          <div style={{ width: 60, height: 2, background: '#22c55e', margin: '0 auto 24px', borderRadius: 1 }} />
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', maxWidth: 480, lineHeight: 1.6 }}>
            Die erste Plattform die jeden Supermarkt und Hofladen vereint –
            mit personalisierter Gesundheitsintelligenz f&uuml;r jeden Einkauf.
          </p>
          <div style={{ marginTop: 48, display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { v: '€209,7 Mrd.', l: 'Marktvolumen' },
              { v: '0', l: 'Direkte Konkurrenz' },
              { v: '100%', l: 'Produktionsreif' },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: '#22c55e' }}>{s.v}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: 40, fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            Investor-Dokument &middot; Januar 2026 &middot; partner@feelyapp.de
          </div>
        </div>

        {/* === PAGE 2: EXECUTIVE SUMMARY === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Executive Summary</div>
          <div className="pdf-section-subtitle">FEELY in 60 Sekunden</div>
          <hr className="pdf-divider" />

          <p style={{ fontSize: 13, color: '#374151', marginBottom: 20 }}>
            FEELY ist die erste Health-Commerce Plattform Europas. Wir vereinen jeden Supermarkt und Hofladen
            Deutschlands in einer App – mit personalisierter KI-Gesundheitsanalyse f&uuml;r jeden Einkauf.
            Das Instacart f&uuml;r Europa, aber mit Gesundheitsintelligenz.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {[
              { v: '€209,7 Mrd.', l: 'Lebensmittelmarkt DE', s: 'Quelle: EHI 2024' },
              { v: '€8,6 → €17 Mrd.', l: 'Online-Markt 2024→2029', s: 'Quelle: Statista' },
              { v: '36.565', l: 'Superm\u00e4rkte in DE', s: 'Quelle: EHI' },
              { v: '23+ Mio.', l: 'Allergiker in DE', s: 'Quelle: RKI' },
            ].map((s) => (
              <div key={s.l} className="pdf-stat-box avoid-break">
                <div className="pdf-stat-value">{s.v}</div>
                <div className="pdf-stat-label">{s.l}</div>
                <div style={{ fontSize: 9, color: '#9ca3af', marginTop: 2 }}>{s.s}</div>
              </div>
            ))}
          </div>

          <div className="avoid-break" style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 8 }}>Das Ökosystem</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[
                { t: 'Consumer App', d: 'KI-Gesundheitsanalyse, Multi-Retailer, Barcode Scanner, Bestellung', s: 'Produktionsreif' },
                { t: 'Hofladen-Portal', d: 'Dashboard, Produkte verwalten, Bestellungen, Kundenkommunikation', s: 'Produktionsreif' },
                { t: 'Supermarkt-Portal', d: 'Sortiment, Analytics, Werbung, Bestellmanagement', s: 'Produktionsreif' },
              ].map((p) => (
                <div key={p.t} className="pdf-green-card avoid-break">
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4 }}>{p.t}</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 6 }}>{p.d}</div>
                  <div style={{ fontSize: 10, color: '#16a34a', fontWeight: 600 }}>{p.s}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break">
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 8 }}>Geschäftsmodell – Vier Einnahmequellen</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10 }}>
              {[
                { t: 'Premium-Abo', p: '25%', d: '€3,99/Monat' },
                { t: 'Transaktionen', p: '40%', d: '3-15% pro Bestellung' },
                { t: 'Werbung', p: '25%', d: 'Sponsored Products' },
                { t: 'B2B Services', p: '10%', d: '€99-499/Monat' },
              ].map((s) => (
                <div key={s.t} className="pdf-card avoid-break" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#16a34a' }}>{s.p}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginTop: 2 }}>{s.t}</div>
                  <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pdf-highlight-box avoid-break" style={{ marginTop: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 4 }}>
              Seed-Runde: €250.000 – €500.000
            </div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>
              Team (40%) &middot; Wachstum (30%) &middot; Produkt (20%) &middot; Operations (10%)
            </div>
          </div>
        </div>

        {/* === PAGE 3: DAS PROBLEM === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Das Problem</div>
          <div className="pdf-section-subtitle">Der Lebensmitteleinkauf ist kaputt</div>
          <hr className="pdf-divider" />

          <p style={{ fontSize: 13, color: '#374151', marginBottom: 20 }}>
            Wir leben im Jahr 2026. Wir können ein Taxi mit einem Klick bestellen, Flüge in Sekunden buchen.
            Aber wenn es um das Grundlegendste geht – unsere Ernährung – stehen wir immer noch ratlos
            im Supermarkt, lesen kryptische Zutatenlisten und hoffen, dass wir nichts kaufen, was uns schadet.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { n: 1, t: 'Fragmentierung', m: '5-8 Apps', ml: 'pro Haushalt', d: 'Jede Supermarktkette hat ihre eigene App. Keine arbeitet mit der anderen zusammen. Hofläden haben KEINE digitale Präsenz. 36.500+ Geschäfte, tausende Systeme, null Integration.' },
              { n: 2, t: 'Intransparenz', m: 'E471, E481...', ml: 'Wer versteht das?', d: 'Die Lebensmittelindustrie versteckt sich hinter E-Nummern und Fachbegriffen. Die meisten Menschen kaufen blind ein und hoffen auf das Beste.' },
              { n: 3, t: 'Gesundheitsrisiko', m: '23+ Mio.', ml: 'Allergiker in DE', d: 'Für 23+ Millionen Allergiker ist jeder Einkauf ein Risiko. Falsch gelesene Etiketten können zu Atemnot oder anaphylaktischem Schock führen. Es gibt KEIN System, das diese Menschen schützt.' },
              { n: 4, t: 'Verlorene Lebenszeit', m: '100+ Std.', ml: 'pro Jahr', d: '2+ Stunden pro Woche nur für Einkäufe. Für Menschen mit besonderen Ernährungsbedürfnissen 3-4 Stunden. Zeit, die niemand hat.' },
              { n: 5, t: 'Land wird vergessen', m: '~15 Mio.', ml: 'ohne Service', d: 'Quick-Commerce existiert nur in Großstädten. ~15 Millionen Menschen auf dem Land fahren 20-30 Minuten zum nächsten Supermarkt. Die Digitalisierung hat das Land vergessen.' },
            ].map((p) => (
              <div key={p.n} className="avoid-break" style={{ display: 'flex', gap: 14, padding: '14px 16px', background: '#fafafa', borderRadius: 10, border: '1px solid #f0f0f0' }}>
                <div style={{ flexShrink: 0, width: 44, height: 44, background: '#fef2f2', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 18, fontWeight: 900, color: '#ef4444' }}>{p.n}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: '#111' }}>{p.t}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#ef4444' }}>{p.m}</span>
                    <span style={{ fontSize: 10, color: '#9ca3af' }}>{p.ml}</span>
                  </div>
                  <div style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.5 }}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pdf-highlight-box avoid-break" style={{ marginTop: 20, textAlign: 'center' }}>
            <div style={{ fontSize: 16, fontWeight: 900, color: '#111' }}>5 Probleme. 1 Lösung.</div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
              Es existiert keine Lösung, die all diese Probleme gleichzeitig adressiert. Bis jetzt.
            </div>
          </div>
        </div>

        {/* === PAGE 4: DIE LÖSUNG === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Die Lösung</div>
          <div className="pdf-section-subtitle">Eine Plattform. Alle Supermärkte. Alle Hofläden.</div>
          <hr className="pdf-divider" />

          <p style={{ fontSize: 13, color: '#374151', marginBottom: 20 }}>
            FEELY ist das Instacart für Europa – aber mit Gesundheitsintelligenz. Wir digitalisieren
            jeden Lebensmittelhändler in Deutschland. Vom größten Supermarkt bis zum kleinsten Hofladen.
            Personalisiert auf deine Gesundheit.
          </p>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 12 }}>Für Konsumenten – So funktioniert FEELY</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { n: '01', t: 'Profil erstellen', d: 'Allergien, Unverträglichkeiten, Ziele – einmal eingeben, für immer nutzen.' },
                { n: '02', t: 'Supermärkte entdecken', d: 'Alle Märkte und Hofläden auf einen Blick mit Echtzeit-Verfügbarkeit.' },
                { n: '03', t: 'Intelligent einkaufen', d: 'KI-gestützte Analyse zeigt sofort, ob ein Produkt für dich geeignet ist.' },
                { n: '04', t: 'Bestellen & Erhalten', d: 'Abholung, Lieferung oder optimierte Einkaufsliste – du entscheidest.' },
              ].map((s) => (
                <div key={s.n} className="pdf-green-card avoid-break" style={{ display: 'flex', gap: 12 }}>
                  <div style={{ flexShrink: 0, width: 36, height: 36, background: '#22c55e', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 14, fontWeight: 900, color: 'white' }}>{s.n}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#111' }}>{s.t}</div>
                    <div style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 12 }}>Für Supermärkte & Hofläden</h3>
            <div className="pdf-card">
              <p style={{ fontSize: 12, color: '#ef4444', fontWeight: 600, marginBottom: 8 }}>
                Problem: Eigene App entwickeln? €50.000-200.000 Kosten. Monate bis Jahre Entwicklungszeit.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  'Eigenes Dashboard – Sortiment, Preise, Angebote verwalten',
                  'Kundenkommunikation – News, Push-Nachrichten',
                  'Analytics – Verkaufsstatistiken, Kundenverhalten',
                  'Bestellmanagement – Bestellungen empfangen & koordinieren',
                ].map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 14, lineHeight: '16px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 11, color: '#4b5563' }}>{f}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 11, color: '#16a34a', fontWeight: 700, marginTop: 10 }}>
                Keine Entwicklungskosten. Keine technischen Kenntnisse nötig. Sofort online.
              </p>
            </div>
          </div>

          <div className="avoid-break">
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 12 }}>Key Features</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { t: 'KI-Gesundheitsanalyse', d: 'Jedes Produkt wird basierend auf dem persönlichen Gesundheitsprofil analysiert – Allergien, Unverträglichkeiten, Ziele. Score von 0-100.' },
                { t: 'Barcode Scanner', d: 'Im Supermarkt scannen, in <1 Sekunde komplette Analyse. Sofortige Warnungen bei kritischen Inhaltsstoffen.' },
                { t: 'Budget & Nutrition Tracking', d: 'Echtzeit-Übersicht aller Ausgaben. KI-Foto-Analyse der Mahlzeiten. Kalorien & Makros automatisch.' },
                { t: 'Lebensmittelrettung', d: '11 Mio. Tonnen werden jährlich weggeworfen. Anbieter markieren ablaufende Produkte mit bis zu 50% Rabatt.' },
              ].map((f) => (
                <div key={f.t} className="pdf-card avoid-break">
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4 }}>{f.t}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>{f.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === PAGE 5: DER MARKT === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Der Markt</div>
          <div className="pdf-section-subtitle">Ein Markt der sich verdoppeln wird</div>
          <hr className="pdf-divider" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginBottom: 24 }}>
            {[
              { v: '€209,7 Mrd.', l: 'Lebensmittelmarkt 2024', s: 'EHI' },
              { v: '€8,6→€17 Mrd.', l: 'Online 2024→2029', s: 'Statista' },
              { v: '4%→10%+', l: 'Online-Anteil wächst', s: 'McKinsey' },
              { v: '+11% p.a.', l: 'Jährliches Wachstum', s: 'Mintel' },
            ].map((s) => (
              <div key={s.l} className="pdf-stat-box avoid-break">
                <div className="pdf-stat-value" style={{ fontSize: 18 }}>{s.v}</div>
                <div className="pdf-stat-label">{s.l}</div>
                <div style={{ fontSize: 9, color: '#9ca3af' }}>{s.s}</div>
              </div>
            ))}
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 10 }}>TAM / SAM / SOM</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {[
                { t: 'TAM', v: '€209,7 Mrd.', d: 'Gesamter Lebensmittelmarkt Deutschland', c: '#3b82f6' },
                { t: 'SAM', v: '€31,5 Mrd.', d: 'Online-Grocery + Health-Food + regionale Direktvermarktung', c: '#8b5cf6' },
                { t: 'SOM (Jahr 5)', v: '€94 Mio.', d: 'Erreichbar mit 450K+ Nutzern und 0,3% Marktanteil', c: '#22c55e' },
              ].map((m) => (
                <div key={m.t} className="pdf-card avoid-break" style={{ borderTop: `3px solid ${m.c}` }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: m.c }}>{m.t}</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#111', margin: '4px 0' }}>{m.v}</div>
                  <div style={{ fontSize: 10, color: '#6b7280' }}>{m.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 10 }}>Die Infrastruktur existiert</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[
                { v: '36.565', l: 'Lebensmittelgeschäfte in DE', d: 'Supermärkte, Discounter, etc.' },
                { v: '20.000+', l: 'Hofläden & Direktvermarkter', d: 'Bisher kaum digital' },
                { v: '17 Mio.', l: 'Hofladen-Käufer', d: 'Regelmäßig in Deutschland' },
              ].map((s) => (
                <div key={s.l} className="pdf-stat-box avoid-break">
                  <div className="pdf-stat-value">{s.v}</div>
                  <div className="pdf-stat-label">{s.l}</div>
                  <div style={{ fontSize: 9, color: '#9ca3af' }}>{s.d}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: '#374151', marginTop: 10, fontStyle: 'italic', textAlign: 'center' }}>
              Die Geschäfte sind da. Die Kunden sind da. Was fehlt ist die VERBINDUNG.
            </p>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#111', marginBottom: 10 }}>Gesundheitskrise in Deutschland</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
              {[
                { t: 'Übergewicht', v: '53%', d: 'der Erwachsenen übergewichtig', s: 'Statista 2024' },
                { t: 'Diabetes', v: '11 Mio.', d: 'Menschen mit Diabetes', s: 'diabetesDE' },
                { t: 'Herz-Kreislauf', v: '348.312', d: 'Todesfälle 2023 (~40%)', s: 'Destatis' },
                { t: 'Bluthochdruck', v: '35 Mio.', d: 'Betroffene (44% d. Bev.)', s: 'Hochdruckliga' },
                { t: 'Allergien', v: '23+ Mio.', d: 'Allergiker in DE', s: 'RKI' },
                { t: 'Kosten', v: '95 Mrd. €', d: 'ernährungsabhängige Krankheiten', s: 'BMELV' },
              ].map((s) => (
                <div key={s.t} className="pdf-card avoid-break" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#374151' }}>{s.t}</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#ef4444', margin: '2px 0' }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: '#6b7280' }}>{s.d}</div>
                  <div style={{ fontSize: 8, color: '#9ca3af' }}>{s.s}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pdf-highlight-box avoid-break" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#111' }}>
              Deutschland ist UNTERDIGITALISIERT
            </div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>
              UK: 12% Online-Anteil &middot; Südkorea: 25% &middot; Deutschland: erst 4% → enormes Potenzial.
              Jeder Euro in Prävention spart 4-7 Euro in Behandlungskosten.
            </div>
          </div>
        </div>

        {/* === PAGE 6: INSTACART BENCHMARK & WETTBEWERB === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Wettbewerb & Benchmark</div>
          <div className="pdf-section-subtitle">Instacart zeigt: Es funktioniert</div>
          <hr className="pdf-divider" />

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>Instacart – Proof of Concept aus den USA</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
              {[
                { v: '$33,5 Mrd.', l: 'Transaktionsvolumen' },
                { v: '$3,38 Mrd.', l: 'Revenue (+11% YoY)' },
                { v: '$457 Mio.', l: 'Profit 2024' },
                { v: '14,4 Mio.', l: 'Aktive Nutzer' },
              ].map((s) => (
                <div key={s.l} className="pdf-stat-box avoid-break">
                  <div className="pdf-stat-value" style={{ fontSize: 16 }}>{s.v}</div>
                  <div className="pdf-stat-label">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="pdf-green-card">
              <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 6 }}>FEELY = Instacart + Gesundheitsintelligenz</div>
              <div style={{ fontSize: 11, color: '#6b7280' }}>
                Was Instacart NICHT hat: Personalisierte Gesundheitsanalyse, Allergen-Warnungen,
                KI-gestützte Ernährungsberatung, Fokus auf ländliche Regionen.
                Deutschland ist 5-7 Jahre hinter den USA.
              </div>
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>Feature-Vergleich</h3>
            <table className="pdf-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ textAlign: 'center' }}>REWE/EDEKA</th>
                  <th style={{ textAlign: 'center' }}>Flink</th>
                  <th style={{ textAlign: 'center' }}>TooGoodToGo</th>
                  <th style={{ textAlign: 'center' }}>Yazio</th>
                  <th style={{ textAlign: 'center' }}>CodeCheck</th>
                  <th style={{ textAlign: 'center', background: '#f0fdf4', color: '#16a34a' }}>FEELY</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: 'Multi-Retailer Plattform',     r: '✗', fl: '✗', tg: '✗', y: '✗', cc: '✗', fe: '✓' },
                  { f: 'Pers. Gesundheitsanalyse',      r: '✗', fl: '✗', tg: '✗', y: '✓', cc: '~', fe: '✓' },
                  { f: 'Allergen-Warnungen',             r: '✗', fl: '✗', tg: '✗', y: '✗', cc: '~', fe: '✓' },
                  { f: 'Barcode Scanner',                r: '✗', fl: '✗', tg: '✗', y: '✗', cc: '✓', fe: '✓' },
                  { f: 'Online-Bestellung',              r: '✓', fl: '✓', tg: '✗', y: '✗', cc: '✗', fe: '✓' },
                  { f: 'Hofläden-Integration',           r: '✗', fl: '✗', tg: '~', y: '✗', cc: '✗', fe: '✓' },
                  { f: 'Ländliche Regionen',             r: '✗', fl: '✗', tg: '~', y: '✗', cc: '✗', fe: '✓' },
                  { f: 'KI-Ernährungsberatung',          r: '✗', fl: '✗', tg: '✗', y: '✓', cc: '✗', fe: '✓' },
                  { f: 'Budget-Tracking',                r: '✗', fl: '✗', tg: '✗', y: '✓', cc: '✗', fe: '✓' },
                  { f: 'Lebensmittelrettung',            r: '✗', fl: '✗', tg: '✓', y: '✗', cc: '✗', fe: '✓' },
                ].map((row) => (
                  <tr key={row.f}>
                    <td style={{ fontWeight: 600, fontSize: 11 }}>{row.f}</td>
                    {[row.r, row.fl, row.tg, row.y, row.cc].map((v, i) => (
                      <td key={i} style={{ textAlign: 'center' }}>
                        <span className={v === '✓' ? 'pdf-check' : v === '~' ? 'pdf-partial' : 'pdf-x'}>
                          {v === '✓' ? '✓' : v === '~' ? '~' : '✗'}
                        </span>
                      </td>
                    ))}
                    <td style={{ textAlign: 'center', background: '#f0fdf4' }}>
                      <span className="pdf-check" style={{ fontWeight: 900, fontSize: 14 }}>✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 8 }}>
              <span style={{ fontSize: 10, color: '#6b7280' }}><span className="pdf-check">✓</span> Vorhanden</span>
              <span style={{ fontSize: 10, color: '#6b7280' }}><span className="pdf-partial">~</span> Teilweise</span>
              <span style={{ fontSize: 10, color: '#6b7280' }}><span className="pdf-x">✗</span> Nicht vorhanden</span>
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>FEELYs einzigartige Vorteile</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { t: 'Einzige Multi-Retailer Plattform', d: 'FEELY ist die einzige App in Deutschland, die ALLE Supermärkte und Hofläden vereint.' },
                { t: 'KI-Gesundheitsintelligenz', d: 'Analysiert jedes Produkt basierend auf dem persönlichen Gesundheitsprofil.' },
                { t: 'Fokus auf ländliche Regionen', d: 'Digitaler Lebensmitteleinkauf für 15 Mio. Menschen außerhalb der Großstädte.' },
                { t: 'Hofläden endlich digital', d: '20.000+ Hofläden online sichtbar und bestellbar – zum ersten Mal.' },
              ].map((a) => (
                <div key={a.t} className="pdf-green-card avoid-break">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginBottom: 3 }}>{a.t}</div>
                  <div style={{ fontSize: 10, color: '#6b7280' }}>{a.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pdf-highlight-box avoid-break" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#111' }}>0 Direkte Konkurrenz</div>
            <div style={{ fontSize: 11, color: '#6b7280', marginTop: 4 }}>
              Diese Kombination existiert bei keinem anderen Anbieter. First-Mover Advantage gesichert.
            </div>
          </div>
        </div>

        {/* === PAGE 7: GESCHÄFTSMODELL === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Geschäftsmodell</div>
          <div className="pdf-section-subtitle">Vier diversifizierte Einnahmequellen</div>
          <hr className="pdf-divider" />

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>1. Premium-Abo (B2C) – 25% des Revenue</h3>
            <div className="pdf-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div>
                  <span style={{ fontSize: 22, fontWeight: 900, color: '#16a34a' }}>€3,99</span>
                  <span style={{ fontSize: 12, color: '#6b7280' }}> / Monat</span>
                </div>
                <div style={{ fontSize: 11, color: '#6b7280' }}>oder €39,99/Jahr (2 Monate gratis)</div>
              </div>
              <table className="pdf-table">
                <thead>
                  <tr><th>Feature</th><th style={{ textAlign: 'center' }}>Free</th><th style={{ textAlign: 'center' }}>Premium</th></tr>
                </thead>
                <tbody>
                  {[
                    { f: 'Multi-Retailer Suche', free: true, prem: true },
                    { f: 'Basis Allergen-Warnungen', free: true, prem: true },
                    { f: 'Barcode Scanner', free: true, prem: true },
                    { f: 'KI-Produktanalyse', free: false, prem: true },
                    { f: 'Ziel-basierte Empfehlungen', free: false, prem: true },
                    { f: 'Wissenschaftliche Quellen', free: false, prem: true },
                    { f: 'Werbefreiheit', free: false, prem: true },
                  ].map((r) => (
                    <tr key={r.f}>
                      <td>{r.f}</td>
                      <td style={{ textAlign: 'center' }}><span className={r.free ? 'pdf-check' : 'pdf-x'}>{r.free ? '✓' : '✗'}</span></td>
                      <td style={{ textAlign: 'center' }}><span className="pdf-check">✓</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ fontSize: 11, color: '#16a34a', fontWeight: 600, marginTop: 8 }}>Ziel: 5-10% Premium Conversion</div>
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>2. Transaktionsgebühren – 40% des Revenue</h3>
            <div className="pdf-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 10 }}>
                <div style={{ textAlign: 'center', padding: 10, background: '#f0fdf4', borderRadius: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#16a34a' }}>3-5%</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Abholung (keine Logistik)</div>
                </div>
                <div style={{ textAlign: 'center', padding: 10, background: '#f0fdf4', borderRadius: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#16a34a' }}>10-15%</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>Lieferung (branchenüblich)</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: '#374151' }}>
                Beispiel: Warenkorb €45 × Ø8% = <strong>€3,60 pro Bestellung</strong>.
                Instacart verdient ~$2-4 netto pro Bestellung bei 294 Mio. Bestellungen/Jahr = profitabel.
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="avoid-break">
              <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>3. Werbung – 25%</h3>
              <div className="pdf-card" style={{ height: '100%' }}>
                <div style={{ fontSize: 11, color: '#ef4444', fontWeight: 600, marginBottom: 8 }}>
                  Instacart macht &gt;$1 Mrd. mit Werbung.
                </div>
                <div style={{ fontSize: 11, color: '#374151', marginBottom: 8 }}>
                  HIGH-INTENT AUDIENCE: Wer die FEELY App öffnet, will KAUFEN.
                </div>
                {['Sponsored Products', 'Brand Stores', 'News & Aktionen', 'Personalisierte Banner'].map((p) => (
                  <div key={p} style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                    <span style={{ color: '#22c55e', fontWeight: 700 }}>•</span>
                    <span style={{ fontSize: 11, color: '#4b5563' }}>{p}</span>
                  </div>
                ))}
                <div style={{ fontSize: 10, color: '#16a34a', fontWeight: 600, marginTop: 8 }}>
                  UNIQUE: Targeting nach Gesundheitsprofil – das kann NIEMAND sonst.
                </div>
              </div>
            </div>

            <div className="avoid-break">
              <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>4. B2B Services – 10%</h3>
              <div className="pdf-card" style={{ height: '100%' }}>
                {[
                  { t: 'Basic (kostenlos)', f: 'Listung, Basis-Dashboard, Standard-Support' },
                  { t: 'Pro (€99-499/Mo.)', f: 'Premium-Platzierung, Analytics, Marketing-Tools' },
                  { t: 'Enterprise', f: 'White-Label, Custom Integrationen, Account Mgmt' },
                ].map((tier) => (
                  <div key={tier.t} style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#111' }}>{tier.t}</div>
                    <div style={{ fontSize: 11, color: '#6b7280' }}>{tier.f}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === PAGE 8: ROADMAP & TEAM === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Roadmap & Team</div>
          <div className="pdf-section-subtitle">Von der fertigen App zur nationalen Plattform</div>
          <hr className="pdf-divider" />

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 12 }}>Roadmap</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10 }}>
              {[
                { p: 'Phase 1: Foundation', t: 'Jetzt – Q2 2026', s: 'current', g: ['Kernteam aufbauen', 'App Store Launch', '20-50 Partner', '1.000-5.000 Nutzer', 'Seed: €250-500k'] },
                { p: 'Phase 2: Growth', t: 'Q3 2026 – Q4 2027', s: 'planned', g: ['100-500 Partner', '50.000+ Nutzer', '5-10% Premium Conversion', 'Series A: €2-5M'] },
                { p: 'Phase 3: Scale', t: '2028', s: 'planned', g: ['Nationale Abdeckung', '500.000+ Nutzer', 'Profitabilität', 'Team: 30-50'] },
                { p: 'Phase 4: Expansion', t: '2029+', s: 'planned', g: ['DACH Expansion', '2+ Mio. Nutzer', 'EU-Märkte', 'IPO/Exit'] },
              ].map((phase) => (
                <div key={phase.p} className="avoid-break" style={{ background: phase.s === 'current' ? '#f0fdf4' : '#f9fafb', border: phase.s === 'current' ? '2px solid #22c55e' : '1px solid #e5e7eb', borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: phase.s === 'current' ? '#16a34a' : '#111', marginBottom: 2 }}>{phase.p}</div>
                  <div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 8 }}>{phase.t}</div>
                  {phase.g.map((goal) => (
                    <div key={goal} style={{ display: 'flex', gap: 5, marginBottom: 3 }}>
                      <span style={{ color: '#22c55e', fontSize: 10, flexShrink: 0 }}>•</span>
                      <span style={{ fontSize: 10, color: '#4b5563' }}>{goal}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 12 }}>Investment Opportunity</h3>
            <div className="pdf-highlight-box" style={{ textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>Seed-Runde</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#16a34a' }}>€250.000 – €500.000</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginBottom: 12 }}>
              {[
                { l: 'Team', p: '40%', c: '#3b82f6' },
                { l: 'Wachstum', p: '30%', c: '#22c55e' },
                { l: 'Produkt', p: '20%', c: '#8b5cf6' },
                { l: 'Operations', p: '10%', c: '#f59e0b' },
              ].map((u) => (
                <div key={u.l} style={{ textAlign: 'center', background: '#f9fafb', borderRadius: 8, padding: 10, borderTop: `3px solid ${u.c}` }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: u.c }}>{u.p}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>{u.l}</div>
                </div>
              ))}
            </div>
            <div className="pdf-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                'Equity (Prozentsatz verhandelbar)',
                'Regelmäßige Updates & Transparenz',
                'Mitsprache bei strategischen Entscheidungen',
                'Potential für 10x+ Returns',
              ].map((b) => (
                <div key={b} style={{ display: 'flex', gap: 6 }}>
                  <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 11, color: '#4b5563' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break" style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 12 }}>Team – Mitgründer gesucht</h3>
            <p style={{ fontSize: 12, color: '#374151', marginBottom: 12 }}>
              FEELY sucht keine Angestellten. FEELY sucht Mitgründer – Menschen die an die Mission glauben und die Zukunft des Einkaufens mitgestalten wollen.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[
                { t: 'CTO / Tech Co-Founder', e: '10-20% Equity', r: 'Mobile Dev, Backend, Startup-DNA' },
                { t: 'Head of Nutrition', e: '5-10% Equity', r: 'Ernährungswissenschaft, Evidenzbasiert' },
                { t: 'CEO / Business Co-Founder', e: '15-25% Equity', r: 'Unternehmensaufbau, Netzwerk Handel/Food' },
              ].map((role) => (
                <div key={role.t} className="pdf-card avoid-break">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginBottom: 2 }}>{role.t}</div>
                  <div style={{ fontSize: 11, color: '#16a34a', fontWeight: 600, marginBottom: 4 }}>{role.e}</div>
                  <div style={{ fontSize: 10, color: '#6b7280' }}>{role.r}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="avoid-break">
            <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>Der Gründer</h3>
            <div className="pdf-green-card">
              <p style={{ fontSize: 12, color: '#374151', marginBottom: 8 }}>
                <strong>Juli</strong> – Student, kein Programmierer, kein BWLer. Hat diese gesamte App alleine gebaut.
                Weil er das Problem jeden Tag selbst erlebt.
              </p>
              <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 6 }}>Persönlicher Hintergrund:</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                {[
                  'Essstörungen durchgemacht – achtet genau auf Ernährung',
                  'Unverträglichkeiten – jeder Einkauf erfordert Prüfung',
                  'Aus kleinem Dorf – nächster Supermarkt 20 Min entfernt',
                  'Schwester chronisch krank – muss auf Ernährung achten',
                ].map((b) => (
                  <div key={b} style={{ display: 'flex', gap: 6 }}>
                    <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0, fontSize: 10 }}>•</span>
                    <span style={{ fontSize: 10, color: '#4b5563' }}>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 11, color: '#16a34a', fontWeight: 700, marginTop: 8, fontStyle: 'italic' }}>
                &ldquo;Das ist keine Business-Idee. Das ist eine Mission.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* === PAGE 9: EINWAND-KATALOG (TOP FRAGEN) === */}
        <div className="pdf-page">
          <div className="pdf-section-title">Einwand-Katalog</div>
          <div className="pdf-section-subtitle">Antworten auf kritische Investoren-Fragen (Auszug)</div>
          <hr className="pdf-divider" />

          <p style={{ fontSize: 12, color: '#6b7280', marginBottom: 16 }}>
            Der vollständige Katalog umfasst 19 Fragen in 8 Kategorien. Hier die wichtigsten Fragen:
          </p>

          {[
            {
              cat: 'Partnerschaften',
              q: 'Was wenn die großen Supermarktketten nicht mitmachen?',
              a: 'Wir brauchen sie nicht – zuerst. Start mit 30.000+ Hofläden die KEINE digitale Präsenz haben. Für sie sind wir die einzige Chance auf Digitalisierung. Drei Szenarien: A) Organisch über Hofläden und regionale Märkte, B) Strategischer Einstieg mit Pilot bei innovativer Kette (tegut, Globus), C) Top-Down durch Investor mit Retail-Connections. Wir sind nicht abhängig von einem Szenario.',
            },
            {
              cat: 'Wettbewerb',
              q: 'Was wenn REWE oder EDEKA selbst sowas baut?',
              a: 'Sie können es nicht – aus strukturellen Gründen: 1) Interessenkonflikt: REWE empfiehlt nie EDEKA-Produkte. 2) Technische Silos: Übergreifende Plattform erfordert Kooperation mit Konkurrenten – wird nie passieren. 3) Innovationsgeschwindigkeit: Konzerne brauchen 2-3 Jahre, wir iterieren in Wochen. 4) DNA: Sie sind Händler, keine Tech-Unternehmen. Sie können Teile kopieren, aber nie das neutrale Ökosystem.',
            },
            {
              cat: 'Wettbewerb',
              q: 'Warum gibt es das noch nicht?',
              a: 'Weil es extrem komplex ist UND die Technologie erst jetzt reif ist. KI für Ernährungsanalyse erst seit 2023 wirklich nutzbar. Verbraucher erst jetzt bereit für digitales Grocery (Corona verdreifachte Akzeptanz). Retail-Experten bauen Retail-Apps, Health-Experten Health-Apps – niemand hat alles kombiniert. Instacart zeigt: In den USA funktioniert es. Deutschland ist 5-7 Jahre hinter.',
            },
            {
              cat: 'Team',
              q: 'Solo-Gründer – kann er ein Team aufbauen?',
              a: 'Dieses Pitch Deck existiert genau dafür. Keine Angestellten gesucht, sondern Mitgründer mit Equity-Incentives. Das bewiesene Können (gesamte App alleine gebaut) zieht die richtigen Leute an. Fokus auf CTO, Head of Nutrition und CEO/Business als erste Hires.',
            },
            {
              cat: 'Technologie',
              q: 'Wie komplex ist die Datenaggregation?',
              a: 'Sehr – und genau das ist unser Moat. Daten von tausenden verschiedenen Märkten aggregieren, jeder mit eigenen Systemen. Personalisierung für Millionen Profile. Das ist kein Weekend-Projekt – es ist eine massive technische Herausforderung. Wer das einmal gelöst hat, hat einen nachhaltigen Wettbewerbsvorteil.',
            },
            {
              cat: 'Geschäftsmodell',
              q: 'Unit Economics – funktioniert das Modell?',
              a: 'Instacart beweist Profitabilität ($457M Profit 2024). Vier diversifizierte Einnahmequellen reduzieren Risiko. Ziel CAC <€15, LTV >€150 (Ratio >10:1). Premium-Abo + Transaktionen + Werbung + B2B schaffen mehrfache Monetarisierung pro Nutzer.',
            },
            {
              cat: 'Markt & Timing',
              q: 'Warum jetzt?',
              a: 'Fünf Faktoren konvergieren: 1) Online-Lebensmittelmarkt verdoppelt sich in 5 Jahren. 2) KI ermöglicht personalisierte Ernährung. 3) Gen Z priorisiert gesunde Ernährung. 4) KEINE direkte Konkurrenz. 5) Das Produkt ist FERTIG – nicht Prototyp, sondern produktionsreif. Das Fenster ist jetzt offen.',
            },
          ].map((item, i) => (
            <div key={i} className="avoid-break" style={{ marginBottom: 14, padding: '12px 14px', background: '#f9fafb', borderRadius: 10, border: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#16a34a', background: '#f0fdf4', padding: '2px 8px', borderRadius: 20 }}>{item.cat}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 4 }}>{item.q}</div>
              <div style={{ fontSize: 11, color: '#4b5563', lineHeight: 1.6 }}>{item.a}</div>
            </div>
          ))}

          <div style={{ textAlign: 'center', padding: 12, background: '#f0fdf4', borderRadius: 10, marginTop: 8 }}>
            <div style={{ fontSize: 11, color: '#16a34a', fontWeight: 600 }}>
              Vollständiger Einwand-Katalog: 19 Fragen in 8 Kategorien
            </div>
            <div style={{ fontSize: 10, color: '#6b7280', marginTop: 2 }}>
              Verfügbar unter: feelyapp.info/pitch-deck/einwand-katalog
            </div>
          </div>
        </div>

        {/* === PAGE 10: WARUM JETZT & CTA === */}
        <div className="pdf-page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="pdf-section-title">Warum jetzt investieren?</div>
            <div className="pdf-section-subtitle">Das Zeitfenster ist offen</div>
            <hr className="pdf-divider" />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
              {[
                { t: 'Markt-Timing', d: 'Online-Lebensmittelmarkt verdoppelt sich in 5 Jahren. Deutschland holt den Rückstand auf.' },
                { t: 'Technologie-Timing', d: 'KI ermöglicht erstmals personalisierte Ernährungsempfehlungen in Echtzeit.' },
                { t: 'Gesellschafts-Timing', d: 'Gen Z priorisiert gesunde Ernährung wie nie zuvor. Gesundheitskrise schafft Nachfrage.' },
                { t: 'Wettbewerbs-Timing', d: 'KEINE direkte Konkurrenz – aber das Zeitfenster wird sich nicht ewig halten.' },
                { t: 'Produkt-Timing', d: 'Die App ist FERTIG. Nicht Prototyp. Nicht MVP. Ein vollständiges, produktionsreifes Ökosystem.' },
                { t: 'Risiko-Mitigierung', d: 'Jedes Startup hat Risiken. Der Unterschied: Wir kennen unsere und haben konkrete Pläne für jedes Szenario.' },
              ].map((r) => (
                <div key={r.t} className="pdf-green-card avoid-break">
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#111', marginBottom: 3 }}>{r.t}</div>
                  <div style={{ fontSize: 11, color: '#6b7280' }}>{r.d}</div>
                </div>
              ))}
            </div>

            <div className="avoid-break" style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: '#111', marginBottom: 10 }}>Zusammenfassung</h3>
              <div className="pdf-card">
                {[
                  { l: 'Das Problem', v: 'Ein fragmentierter, intransparenter Markt mit Gesundheitsrisiken' },
                  { l: 'Die Lösung', v: 'Eine Plattform für alles, mit personalisierter Gesundheitsintelligenz' },
                  { l: 'Der Markt', v: '€210+ Mrd., verdoppelt sich, unterdigitalisiert' },
                  { l: 'Das Produkt', v: '3 Plattformen – fertig gebaut, produktionsreif' },
                  { l: 'Das Geschäftsmodell', v: 'Bewährt (Instacart), 4 diversifizierte Einnahmequellen' },
                  { l: 'Die Konkurrenz', v: '0 direkte Konkurrenz – First-Mover Advantage' },
                  { l: 'Das Team', v: 'Entschlossener Gründer, sucht Verstärkung' },
                ].map((s) => (
                  <div key={s.l} style={{ display: 'flex', gap: 8, padding: '6px 0', borderBottom: '1px solid #f3f4f6' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a', width: 130, flexShrink: 0 }}>{s.l}</span>
                    <span style={{ fontSize: 11, color: '#4b5563' }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="avoid-break" style={{ background: 'linear-gradient(135deg, #052e16, #111827)', borderRadius: 16, padding: 32, textAlign: 'center' }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: 'white', marginBottom: 8 }}>
              Bereit die Zukunft mitzugestalten?
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 20, fontStyle: 'italic', maxWidth: 500, margin: '0 auto 20px' }}>
              &ldquo;Die Zukunft des Einkaufens wird personalisiert sein. Die Frage ist nicht OB,
              sondern WER sie baut. Wir haben angefangen. Bauen Sie mit?&rdquo;
            </p>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>– Juli, Gründer FEELY</div>
            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#22c55e' }}>partner@feelyapp.de</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>feelyapp.info</div>
            </div>
            <div style={{ marginTop: 16, fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>
              © 2026 FEELY – Confidential – Nur für autorisierte Empfänger
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-black border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>PDF wird erstellt...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Investor-Dokument als PDF herunterladen</span>
              </>
            )}
          </button>
          <p className="text-gray-500 text-sm mt-4">
            10 Seiten &middot; Alle Key-Informationen &middot; Professionelles Layout
          </p>
        </div>
      </div>
    </div>
  )
}
