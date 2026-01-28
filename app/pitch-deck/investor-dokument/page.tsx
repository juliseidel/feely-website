'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  Download,
  ArrowLeft,
  Loader2,
  Printer
} from 'lucide-react'

export default function InvestorDokumentPage() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    if (!contentRef.current || isGenerating) return
    setIsGenerating(true)
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const opt = {
        margin: [5, 0, 5, 0] as [number, number, number, number],
        filename: 'FEELY-Investor-Dokument-2026.pdf',
        image: { type: 'jpeg' as const, quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, logging: false, backgroundColor: '#000000' },
        jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
        pagebreak: { mode: ['css', 'legacy'] as string[] },
      }
      await html2pdf().set(opt).from(contentRef.current).save()
    } catch (err) { console.error(err) }
    finally { setIsGenerating(false) }
  }

  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-black">
      {/* Sticky Bar - hidden in print */}
      <div className="sticky top-16 z-40 bg-black/95 backdrop-blur border-b border-white/10 print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/pitch-deck" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Zurück</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={handlePrint} className="flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-xl text-sm hover:bg-white/5 transition-all">
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Drucken / PDF</span>
            </button>
            <button onClick={handleDownloadPDF} disabled={isGenerating} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all">
              {isGenerating ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Erstellt...</span></> : <><Download className="w-4 h-4" /><span>PDF Download</span></>}
            </button>
          </div>
        </div>
      </div>

      {/* === DOCUMENT CONTENT === */}
      <div ref={contentRef} id="investor-doc" className="bg-black text-white">

        {/* ==================== COVER ==================== */}
        <section className="pdf-slide flex flex-col items-center justify-center text-center px-8 py-20 min-h-[90vh] relative" style={{background:'linear-gradient(180deg,#052e16 0%,#111827 50%,#000 100%)'}}>
          <div className="absolute top-8 right-8 text-white/30 text-xs">Confidential</div>
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6" style={{boxShadow:'0 0 60px rgba(34,197,94,0.3)'}}>
            <span className="text-4xl font-black text-white">F</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-2" style={{letterSpacing:'-2px'}}>FEELY</h1>
          <p className="text-xl text-green-400 font-semibold mb-6" style={{letterSpacing:'3px'}}>Einkaufen. Verstehen. Leben.</p>
          <div className="w-16 h-0.5 bg-green-500 mb-6 rounded-full" />
          <p className="text-white/60 max-w-lg text-base leading-relaxed mb-12">
            Die erste Plattform die jeden Supermarkt und Hofladen vereint – mit personalisierter Gesundheitsintelligenz für jeden Einkauf.
          </p>
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="text-center"><div className="text-3xl font-black text-green-400">€209,7 Mrd.</div><div className="text-xs text-white/40 mt-1">Marktvolumen</div></div>
            <div className="text-center"><div className="text-3xl font-black text-green-400">0</div><div className="text-xs text-white/40 mt-1">Direkte Konkurrenz</div></div>
            <div className="text-center"><div className="text-3xl font-black text-green-400">100%</div><div className="text-xs text-white/40 mt-1">Produktionsreif</div></div>
          </div>
          <div className="absolute bottom-8 text-white/20 text-xs">Investor-Dokument · Januar 2026 · partner@feelyapp.de</div>
        </section>

        {/* ==================== DAS PROBLEM ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-red-400 font-medium text-sm">Das Problem</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-3">Der Lebensmitteleinkauf ist kaputt.</h2>
            <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed">
              Wir leben im Jahr 2026. Wir können ein Taxi mit einem Klick bestellen, Flüge in Sekunden buchen.
              Aber wenn es um das Grundlegendste geht – unsere Ernährung – stehen wir immer noch ratlos im Supermarkt.
            </p>

            <div className="space-y-4">
              {[
                { n:1, t:'Fragmentierung', m:'5-8 Apps', ml:'pro Haushalt', d:'Jede Supermarktkette hat ihre eigene App. Keine arbeitet mit der anderen zusammen. Hofläden haben KEINE digitale Präsenz. 36.500+ Geschäfte, tausende Systeme, null Integration.', c:'red' },
                { n:2, t:'Intransparenz', m:'E471, E481...', ml:'Wer versteht das?', d:'Die Lebensmittelindustrie versteckt sich hinter E-Nummern und Fachbegriffen. Die meisten Menschen kaufen blind ein und hoffen auf das Beste.', c:'orange' },
                { n:3, t:'Gesundheitsrisiko', m:'23+ Mio.', ml:'Allergiker in DE', d:'Für 23+ Millionen Allergiker ist jeder Einkauf ein Risiko. Falsch gelesene Etiketten können zu Atemnot oder anaphylaktischem Schock führen. Es gibt KEIN System das diese Menschen schützt.', c:'red' },
                { n:4, t:'Verlorene Lebenszeit', m:'100+ Std.', ml:'pro Jahr', d:'2+ Stunden pro Woche nur für Einkäufe. Für Menschen mit besonderen Ernährungsbedürfnissen 3-4 Stunden. Zeit die niemand hat.', c:'yellow' },
                { n:5, t:'Land wird vergessen', m:'~15 Mio.', ml:'ohne Service', d:'Quick-Commerce existiert nur in Großstädten. ~15 Millionen Menschen auf dem Land fahren 20-30 Minuten zum nächsten Supermarkt. Die Digitalisierung hat das Land vergessen.', c:'purple' },
              ].map(p => (
                <div key={p.n} className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-${p.c}-500/20`}>
                    <span className={`text-xl font-black text-${p.c}-400`}>{p.n}</span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-lg font-bold text-white">{p.t}</span>
                      <span className="text-sm font-bold text-red-400">{p.m}</span>
                      <span className="text-xs text-gray-500">{p.ml}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
              <h3 className="text-2xl font-black text-white mb-2">5 Probleme. 1 Lösung.</h3>
              <p className="text-gray-400">Es existiert keine Lösung die all diese Probleme gleichzeitig adressiert. Bis jetzt.</p>
            </div>
          </div>
        </section>

        {/* ==================== DIE LÖSUNG ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-green-400 font-medium text-sm">Die Lösung</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-2">Eine Plattform. Alle Supermärkte. Alle Hofläden.</h2>
            <p className="text-green-400 font-semibold mb-4">Personalisiert auf deine Gesundheit.</p>
            <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed">
              FEELY ist das Instacart für Europa – aber mit Gesundheitsintelligenz. Wir digitalisieren jeden Lebensmittelhändler in Deutschland.
              Vom größten Supermarkt bis zum kleinsten Hofladen um die Ecke.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Für Konsumenten – So funktioniert FEELY</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { n:'01', t:'Profil erstellen', d:'Allergien, Unverträglichkeiten, Ziele – einmal eingeben, für immer nutzen.' },
                { n:'02', t:'Supermärkte entdecken', d:'Alle Märkte und Hofläden auf einen Blick mit Echtzeit-Verfügbarkeit.' },
                { n:'03', t:'Intelligent einkaufen', d:'KI-gestützte Analyse zeigt sofort, ob ein Produkt für dich geeignet ist.' },
                { n:'04', t:'Bestellen & Erhalten', d:'Abholung, Lieferung oder optimierte Einkaufsliste – du entscheidest.' },
              ].map(s => (
                <div key={s.n} className="flex gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                    <span className="text-sm font-black text-white">{s.n}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{s.t}</div>
                    <div className="text-gray-400 text-xs mt-1">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Für Supermärkte & Hofläden</h3>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-10">
              <p className="text-red-400 font-semibold text-sm mb-3">Problem: Eigene App entwickeln? €50.000-200.000 Kosten. Monate bis Jahre Entwicklungszeit.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Eigenes Dashboard – Sortiment, Preise, Angebote', 'Kundenkommunikation – News, Push-Nachrichten', 'Analytics – Verkaufsstatistiken, Kundenverhalten', 'Bestellmanagement – Bestellungen empfangen'].map(f => (
                  <div key={f} className="flex gap-2 text-sm"><span className="text-green-400 flex-shrink-0">✓</span><span className="text-gray-300">{f}</span></div>
                ))}
              </div>
              <p className="text-green-400 font-semibold text-sm mt-4">Keine Entwicklungskosten. Keine technischen Kenntnisse. Sofort online.</p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t:'KI-Gesundheitsanalyse', d:'Jedes Produkt wird basierend auf dem persönlichen Gesundheitsprofil analysiert – Allergien, Unverträglichkeiten, Ziele. Score von 0-100. Premium: Wissenschaftliche Erklärungen, alternative Produktvorschläge.' },
                { t:'Barcode Scanner', d:'Im Supermarkt scannen, in <1 Sekunde komplette Analyse. Sofortige Warnungen bei kritischen Inhaltsstoffen. Direkt in den Warenkorb.' },
                { t:'Budget & Nutrition Tracking', d:'Echtzeit-Übersicht aller Ausgaben. KI-Foto-Analyse der Mahlzeiten. Kalorien & Makros automatisch erfasst. Wöchentliche & monatliche Insights.' },
                { t:'Lebensmittelrettung', d:'11 Mio. Tonnen werden jährlich weggeworfen. Anbieter markieren ablaufende Produkte mit bis zu 50% Rabatt. Gut für Konsumenten, Anbieter und Umwelt.' },
              ].map(f => (
                <div key={f.t} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="font-bold text-white mb-2">{f.t}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== DER MARKT ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-400 font-medium text-sm">Der Markt</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-8">Ein Markt der sich verdoppeln wird</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { v:'€209,7 Mrd.', l:'Lebensmittelmarkt 2024', s:'EHI' },
                { v:'€8,6→€17 Mrd.', l:'Online 2024→2029', s:'Statista' },
                { v:'4%→10%+', l:'Online-Anteil wächst', s:'McKinsey' },
                { v:'+11% p.a.', l:'Jährliches Wachstum', s:'Mintel' },
              ].map(s => (
                <div key={s.l} className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="text-xl font-black text-green-400">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                  <div className="text-[10px] text-gray-600 mt-1">Quelle: {s.s}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">TAM / SAM / SOM</h3>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { t:'TAM', v:'€209,7 Mrd.', d:'Gesamter Lebensmittelmarkt Deutschland', c:'border-blue-500', tc:'text-blue-400' },
                { t:'SAM', v:'€31,5 Mrd.', d:'Online-Grocery + Health-Food + Direktvermarktung', c:'border-purple-500', tc:'text-purple-400' },
                { t:'SOM (Jahr 5)', v:'€94 Mio.', d:'Erreichbar mit 450K+ Nutzern, 0,3% Marktanteil', c:'border-green-500', tc:'text-green-400' },
              ].map(m => (
                <div key={m.t} className={`p-4 rounded-xl bg-white/[0.03] border-t-2 ${m.c} border border-white/5`}>
                  <div className={`text-sm font-bold ${m.tc}`}>{m.t}</div>
                  <div className="text-2xl font-black text-white my-1">{m.v}</div>
                  <div className="text-xs text-gray-500">{m.d}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Die Infrastruktur existiert</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v:'36.565', l:'Lebensmittelgeschäfte', d:'Supermärkte, Discounter, etc.' },
                { v:'20.000+', l:'Hofläden & Direktvermarkter', d:'Bisher kaum digital' },
                { v:'17 Mio.', l:'Hofladen-Käufer', d:'Regelmäßig in Deutschland' },
              ].map(s => (
                <div key={s.l} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl font-black text-green-400">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                  <div className="text-[10px] text-gray-500">{s.d}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 italic text-sm mb-10">Die Geschäfte sind da. Die Kunden sind da. Was fehlt ist die VERBINDUNG.</p>

            <h3 className="text-xl font-bold text-white mb-4">Gesundheitskrise in Deutschland</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { t:'Übergewicht', v:'53%', d:'der Erwachsenen übergewichtig', s:'Statista 2024' },
                { t:'Diabetes', v:'11 Mio.', d:'Menschen mit Diabetes', s:'diabetesDE' },
                { t:'Herz-Kreislauf', v:'348.312', d:'Todesfälle 2023 (~40%)', s:'Destatis' },
                { t:'Bluthochdruck', v:'35 Mio.', d:'Betroffene (44% d. Bev.)', s:'Hochdruckliga' },
                { t:'Allergien', v:'23+ Mio.', d:'Allergiker in DE', s:'RKI' },
                { t:'Kosten', v:'95 Mrd. €', d:'ernährungsabhängige Krankheiten', s:'BMELV' },
              ].map(s => (
                <div key={s.t} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-bold text-gray-400">{s.t}</div>
                  <div className="text-xl font-black text-red-400 my-1">{s.v}</div>
                  <div className="text-[10px] text-gray-500">{s.d}</div>
                  <div className="text-[9px] text-gray-600">{s.s}</div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
              <p className="text-white font-bold">Deutschland ist UNTERDIGITALISIERT</p>
              <p className="text-gray-400 text-sm mt-1">UK: 12% Online · Südkorea: 25% · Deutschland: erst 4% → enormes Potenzial. Jeder Euro in Prävention spart 4-7 Euro in Behandlungskosten.</p>
            </div>
          </div>
        </section>

        {/* ==================== INSTACART & WETTBEWERB ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 font-medium text-sm">Wettbewerb & Benchmark</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-8">Instacart zeigt: Es funktioniert</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { v:'$33,5 Mrd.', l:'Transaktionsvolumen' },
                { v:'$3,38 Mrd.', l:'Revenue (+11% YoY)' },
                { v:'$457 Mio.', l:'Profit 2024' },
                { v:'14,4 Mio.', l:'Aktive Nutzer' },
              ].map(s => (
                <div key={s.l} className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="text-lg font-black text-green-400">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/10 mb-10">
              <p className="text-white font-bold mb-2">FEELY = Instacart + Gesundheitsintelligenz</p>
              <p className="text-gray-400 text-sm">Was Instacart NICHT hat: Personalisierte Gesundheitsanalyse, Allergen-Warnungen, KI-gestützte Ernährungsberatung, Fokus auf ländliche Regionen. Deutschland ist 5-7 Jahre hinter den USA.</p>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Feature-Vergleich</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-3 text-gray-400 font-medium">Feature</th>
                    <th className="text-center py-3 px-2 text-gray-500 text-xs">REWE/EDEKA</th>
                    <th className="text-center py-3 px-2 text-gray-500 text-xs">Flink</th>
                    <th className="text-center py-3 px-2 text-gray-500 text-xs">TooGoodToGo</th>
                    <th className="text-center py-3 px-2 text-gray-500 text-xs">Yazio</th>
                    <th className="text-center py-3 px-2 text-gray-500 text-xs">CodeCheck</th>
                    <th className="text-center py-3 px-2 text-green-400 font-bold bg-green-500/10 rounded-t-lg">FEELY</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f:'Multi-Retailer Plattform',     r:'✗', fl:'✗', tg:'✗', y:'✗', cc:'✗', fe:'✓' },
                    { f:'Pers. Gesundheitsanalyse',      r:'✗', fl:'✗', tg:'✗', y:'✓', cc:'~', fe:'✓' },
                    { f:'Allergen-Warnungen',             r:'✗', fl:'✗', tg:'✗', y:'✗', cc:'~', fe:'✓' },
                    { f:'Barcode Scanner',                r:'✗', fl:'✗', tg:'✗', y:'✗', cc:'✓', fe:'✓' },
                    { f:'Online-Bestellung',              r:'✓', fl:'✓', tg:'✗', y:'✗', cc:'✗', fe:'✓' },
                    { f:'Hofläden-Integration',           r:'✗', fl:'✗', tg:'~', y:'✗', cc:'✗', fe:'✓' },
                    { f:'Ländliche Regionen',             r:'✗', fl:'✗', tg:'~', y:'✗', cc:'✗', fe:'✓' },
                    { f:'KI-Ernährungsberatung',          r:'✗', fl:'✗', tg:'✗', y:'✓', cc:'✗', fe:'✓' },
                    { f:'Budget-Tracking',                r:'✗', fl:'✗', tg:'✗', y:'✓', cc:'✗', fe:'✓' },
                    { f:'Lebensmittelrettung',            r:'✗', fl:'✗', tg:'✓', y:'✗', cc:'✗', fe:'✓' },
                  ].map(row => (
                    <tr key={row.f} className="border-b border-white/5">
                      <td className="py-2 px-3 text-gray-300 font-medium text-xs">{row.f}</td>
                      {[row.r, row.fl, row.tg, row.y, row.cc].map((v, i) => (
                        <td key={i} className="text-center py-2 px-2">
                          <span className={v === '✓' ? 'text-green-400' : v === '~' ? 'text-yellow-400' : 'text-red-400/60'}>{v}</span>
                        </td>
                      ))}
                      <td className="text-center py-2 px-2 bg-green-500/10"><span className="text-green-400 font-bold">✓</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">FEELYs einzigartige Vorteile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { t:'Einzige Multi-Retailer Plattform', d:'FEELY ist die einzige App in Deutschland die ALLE Supermärkte und Hofläden vereint. Keine andere App kann das bieten, weil die Ketten nicht miteinander kooperieren.' },
                { t:'KI-Gesundheitsintelligenz', d:'Während andere Apps nur Nährwerte zeigen, analysiert FEELY jedes Produkt basierend auf dem persönlichen Gesundheitsprofil.' },
                { t:'Fokus auf ländliche Regionen', d:'Quick-Commerce ignoriert das Land. FEELY bringt digitalen Lebensmitteleinkauf auch zu den 15 Millionen Menschen außerhalb der Großstädte.' },
                { t:'Hofläden endlich digital', d:'20.000+ Hofläden haben keine digitale Präsenz. FEELY macht sie zum ersten Mal online sichtbar und bestellbar.' },
              ].map(a => (
                <div key={a.t} className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="font-bold text-white mb-1">{a.t}</div>
                  <p className="text-gray-400 text-sm">{a.d}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
              <h3 className="text-3xl font-black text-white mb-2">0 Direkte Konkurrenz</h3>
              <p className="text-gray-400 text-sm">Diese Kombination existiert bei keinem anderen Anbieter. First-Mover Advantage gesichert.</p>
            </div>
          </div>
        </section>

        {/* ==================== GESCHÄFTSMODELL ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-emerald-400 font-medium text-sm">Geschäftsmodell</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-2">Vier Einnahmequellen</h2>
            <p className="text-gray-400 mb-8">Mehrere Einnahmequellen = Diversifiziertes Risiko + Höherer Lifetime Value</p>

            <div className="grid grid-cols-4 gap-3 mb-10">
              {[
                { n:'Premium-Abo', p:'25%', d:'B2C' },
                { n:'Transaktionen', p:'40%', d:'Pro Bestellung' },
                { n:'Werbung', p:'25%', d:'Sponsored' },
                { n:'B2B Services', p:'10%', d:'SaaS' },
              ].map(s => (
                <div key={s.n} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-2xl font-black text-green-400">{s.p}</div>
                  <div className="text-sm font-bold text-white mt-1">{s.n}</div>
                  <div className="text-xs text-gray-500">{s.d}</div>
                </div>
              ))}
            </div>

            {/* Premium */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">1. Premium-Abo (B2C)</h3>
                <div><span className="text-2xl font-black text-green-400">€3,99</span><span className="text-gray-400 text-sm"> / Monat</span></div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead><tr className="border-b border-white/10"><th className="text-left py-2 px-3 text-gray-400">Feature</th><th className="text-center py-2 px-3 text-gray-400">Free</th><th className="text-center py-2 px-3 text-green-400">Premium</th></tr></thead>
                  <tbody>
                    {[
                      { f:'Multi-Retailer Suche', free:true, prem:true },
                      { f:'Basis Allergen-Warnungen', free:true, prem:true },
                      { f:'Barcode Scanner', free:true, prem:true },
                      { f:'KI-Produktanalyse', free:false, prem:true },
                      { f:'Ziel-basierte Empfehlungen', free:false, prem:true },
                      { f:'Wissenschaftliche Quellen', free:false, prem:true },
                      { f:'Werbefreiheit', free:false, prem:true },
                    ].map(r => (
                      <tr key={r.f} className="border-b border-white/5">
                        <td className="py-2 px-3 text-gray-300">{r.f}</td>
                        <td className="text-center py-2"><span className={r.free ? 'text-green-400' : 'text-red-400/60'}>{r.free ? '✓' : '✗'}</span></td>
                        <td className="text-center py-2"><span className="text-green-400">✓</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-green-400 text-sm font-semibold mt-3">Ziel: 5-10% Premium Conversion</p>
            </div>

            {/* Transaktionen */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">2. Transaktionsgebühren</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="text-xl font-black text-green-400">3-5%</div>
                  <div className="text-xs text-gray-400">Abholung (keine Logistik)</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="text-xl font-black text-green-400">10-15%</div>
                  <div className="text-xs text-gray-400">Lieferung (branchenüblich)</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Beispiel: Warenkorb €45 × Ø8% = <strong className="text-white">€3,60 pro Bestellung</strong>. Instacart: ~$2-4 netto bei 294 Mio. Bestellungen/Jahr.</p>
            </div>

            {/* Werbung + B2B */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <h3 className="text-lg font-bold text-white mb-3">3. Werbung</h3>
                <p className="text-red-400 text-sm font-semibold mb-2">Instacart macht &gt;$1 Mrd. mit Werbung.</p>
                <p className="text-gray-400 text-sm mb-3">HIGH-INTENT AUDIENCE: Wer die FEELY App öffnet, will KAUFEN.</p>
                {['Sponsored Products', 'Brand Stores', 'News & Aktionen', 'Personalisierte Banner'].map(p => (
                  <div key={p} className="flex gap-2 mb-1"><span className="text-green-400 text-sm">•</span><span className="text-gray-300 text-sm">{p}</span></div>
                ))}
                <p className="text-green-400 text-xs font-semibold mt-3">UNIQUE: Targeting nach Gesundheitsprofil</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                <h3 className="text-lg font-bold text-white mb-3">4. B2B Services</h3>
                {[
                  { t:'Basic (kostenlos)', f:'Listung, Basis-Dashboard, Standard-Support' },
                  { t:'Pro (€99-499/Mo.)', f:'Premium-Platzierung, Analytics, Marketing-Tools' },
                  { t:'Enterprise', f:'White-Label, Custom Integrationen, Account Management' },
                ].map(tier => (
                  <div key={tier.t} className="mb-3">
                    <div className="font-bold text-white text-sm">{tier.t}</div>
                    <div className="text-gray-400 text-xs">{tier.f}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ÖKOSYSTEM ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-cyan-400 font-medium text-sm">Das Ökosystem</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-2">Mehr als eine App – eine komplette Plattform</h2>
            <p className="text-gray-400 mb-8">FEELY ist nicht nur eine App für Konsumenten. Es ist ein komplettes Ökosystem das Verbraucher, Supermärkte und Hofläden auf einer Plattform vereint.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { t:'Consumer App', s:'Für jeden Einkäufer', d:'Die App die Lebensmitteleinkauf revolutioniert.', f:['KI-Gesundheitsanalyse in Echtzeit','Alle Supermärkte & Hofläden','Personalisierte Empfehlungen','Barcode Scanner (<1 Sek.)'], st:'Produktionsreif' },
                { t:'Business Portal – Hofläden', s:'Für kleine Anbieter', d:'Hofläden bekommen ihre eigene digitale Präsenz.', f:['Produkte & Bestand verwalten','News & Push-Nachrichten','Bestellungen empfangen','Kunden erreichen'], st:'Produktionsreif' },
                { t:'Business Portal – Supermärkte', s:'Für große Märkte', d:'Supermärkte steuern ihr komplettes FEELY-Geschäft.', f:['Sortiment & Angebote','Werbung & Promotions','Analytics & Umsatz','Bestellmanagement'], st:'Produktionsreif' },
              ].map(p => (
                <div key={p.t} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="text-green-400 text-xs font-semibold mb-1">{p.s}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{p.t}</h4>
                  <p className="text-gray-400 text-sm mb-3">{p.d}</p>
                  {p.f.map(feat => (
                    <div key={feat} className="flex gap-2 mb-1"><span className="text-green-400 text-xs">✓</span><span className="text-gray-300 text-xs">{feat}</span></div>
                  ))}
                  <div className="mt-3 inline-block bg-green-500/10 text-green-400 text-xs font-semibold px-2 py-1 rounded-full">{p.st}</div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
              <h3 className="text-2xl font-black text-white mb-3">Alles ist gebaut. Alles funktioniert.</h3>
              <div className="flex justify-center gap-8">
                <div className="text-center"><div className="text-2xl font-black text-green-400">3</div><div className="text-xs text-gray-400">Plattformen</div></div>
                <div className="text-center"><div className="text-2xl font-black text-green-400">Eigene</div><div className="text-xs text-gray-400">KI-Systeme</div></div>
                <div className="text-center"><div className="text-2xl font-black text-green-400">100%</div><div className="text-xs text-gray-400">Funktional</div></div>
              </div>
              <p className="text-green-400 font-semibold mt-4">Kein Prototyp. Kein MVP. Ein fertiges Ökosystem.</p>
            </div>
          </div>
        </section>

        {/* ==================== ROADMAP & INVESTMENT ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-purple-400 font-medium text-sm">Roadmap & Investment</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-8">Von der fertigen App zur nationalen Plattform</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {[
                { p:'Phase 1: Foundation', t:'Jetzt – Q2 2026', s:true, g:['Kernteam aufbauen','App Store Launch','20-50 Partner','1.000-5.000 Nutzer','Seed: €250-500k'] },
                { p:'Phase 2: Growth', t:'Q3 2026 – Q4 2027', s:false, g:['100-500 Partner','50.000+ Nutzer','5-10% Premium Conv.','Series A: €2-5M'] },
                { p:'Phase 3: Scale', t:'2028', s:false, g:['Nationale Abdeckung','500.000+ Nutzer','Profitabilität','Team: 30-50'] },
                { p:'Phase 4: Expansion', t:'2029+', s:false, g:['DACH Expansion','2+ Mio. Nutzer','EU-Märkte','IPO/Exit'] },
              ].map(phase => (
                <div key={phase.p} className={`p-4 rounded-xl ${phase.s ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-white/[0.03] border border-white/5'}`}>
                  <div className={`text-sm font-bold ${phase.s ? 'text-green-400' : 'text-white'} mb-1`}>{phase.p}</div>
                  <div className="text-xs text-gray-500 mb-3">{phase.t}</div>
                  {phase.g.map(goal => (
                    <div key={goal} className="flex gap-2 mb-1"><span className="text-green-400 text-[10px]">•</span><span className="text-gray-400 text-xs">{goal}</span></div>
                  ))}
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center mb-8">
              <div className="text-sm text-gray-400 mb-2">Seed-Runde</div>
              <div className="text-4xl font-black text-green-400 mb-4">€250.000 – €500.000</div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { l:'Team', p:'40%', c:'text-blue-400' },
                  { l:'Wachstum', p:'30%', c:'text-green-400' },
                  { l:'Produkt', p:'20%', c:'text-purple-400' },
                  { l:'Operations', p:'10%', c:'text-yellow-400' },
                ].map(u => (
                  <div key={u.l} className="text-center">
                    <div className={`text-xl font-black ${u.c}`}>{u.p}</div>
                    <div className="text-xs text-gray-400">{u.l}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Equity (Prozentsatz verhandelbar)','Regelmäßige Updates & Transparenz','Mitsprache bei strategischen Entscheidungen','Potential für 10x+ Returns'].map(b => (
                  <div key={b} className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span className="text-gray-300 text-sm">{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TEAM ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-orange-400 font-medium text-sm">Team</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-2">Mitgründer gesucht</h2>
            <p className="text-gray-400 mb-8">FEELY sucht keine Angestellten. FEELY sucht Mitgründer.</p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { t:'CTO / Tech Co-Founder', e:'10-20% Equity', r:['Mobile Development (React Native)','Backend & skalierbare Systeme','Startup-DNA'] },
                { t:'Head of Nutrition / Science', e:'5-10% Equity', r:['Studium Ernährungswissenschaft/Medizin','Evidenzbasierte Ernährung','Kommunikationsstärke'] },
                { t:'CEO / Business Co-Founder', e:'15-25% Equity', r:['Erfahrung Unternehmensaufbau','Netzwerk in Handel/Food','Strategisches Denken'] },
              ].map(role => (
                <div key={role.t} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <h4 className="font-bold text-white mb-1">{role.t}</h4>
                  <div className="text-green-400 text-sm font-semibold mb-3">{role.e}</div>
                  {role.r.map(req => (
                    <div key={req} className="flex gap-2 mb-1"><span className="text-gray-500 text-xs">•</span><span className="text-gray-400 text-xs">{req}</span></div>
                  ))}
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
              <h3 className="text-xl font-bold text-white mb-3">Der Gründer</h3>
              <p className="text-gray-300 mb-4"><strong>Juli</strong> – Student, kein Programmierer, kein BWLer. Hat dieses gesamte Ökosystem alleine gebaut. Weil er das Problem jeden Tag selbst erlebt.</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  'Essstörungen durchgemacht – achtet genau auf Ernährung',
                  'Unverträglichkeiten – jeder Einkauf erfordert Prüfung',
                  'Aus kleinem Dorf – nächster Supermarkt 20 Min entfernt',
                  'Schwester chronisch krank – muss auf Ernährung achten',
                  'Tante hat schwere Allergien – falsches Produkt lebensgefährlich',
                  'Vater früh an Krebs verloren – hat sich immer schlecht ernährt',
                ].map(b => (
                  <div key={b} className="flex gap-2"><span className="text-green-400 text-xs flex-shrink-0">•</span><span className="text-gray-400 text-xs">{b}</span></div>
                ))}
              </div>
              <p className="text-green-400 font-semibold italic">&ldquo;Das ist keine Business-Idee. Das ist eine Mission.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* ==================== WARUM JETZT ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-green-400 font-medium text-sm">Timing</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-8">Warum jetzt?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { t:'Markt-Timing', d:'Online-Lebensmittelmarkt verdoppelt sich in 5 Jahren. Deutschland holt den Rückstand auf.' },
                { t:'Technologie-Timing', d:'KI ermöglicht erstmals personalisierte Ernährungsempfehlungen in Echtzeit.' },
                { t:'Gesellschafts-Timing', d:'Gen Z priorisiert gesunde Ernährung wie nie zuvor. Gesundheitskrise schafft Nachfrage.' },
                { t:'Wettbewerbs-Timing', d:'KEINE direkte Konkurrenz – aber das Zeitfenster wird sich nicht ewig halten.' },
                { t:'Produkt-Timing', d:'Die App ist FERTIG. Nicht Prototyp. Nicht MVP. Ein vollständiges, produktionsreifes Ökosystem.' },
                { t:'Risiko-Mitigierung', d:'Jedes Startup hat Risiken. Der Unterschied: Wir kennen unsere und haben konkrete Pläne.' },
              ].map(r => (
                <div key={r.t} className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="font-bold text-white mb-1">{r.t}</div>
                  <p className="text-gray-400 text-sm">{r.d}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 italic mb-8">Das Fenster ist jetzt offen. Es wird nicht ewig offen bleiben.</p>
          </div>
        </section>

        {/* ==================== MARKTANALYSE ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-400 font-medium text-sm">Detaillierte Marktanalyse</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-8">Vier Analysen. Alle mit Quellen.</h2>

            <div className="space-y-6">
              {[
                { t:'TAM/SAM/SOM Analyse', sub:'Der €209 Milliarden Markt', d:'Der deutsche Lebensmittelmarkt ist einer der größten weltweit. FEELY adressiert €31,5 Mrd. davon und zielt auf €94 Mio. in Jahr 5.', facts:[{l:'TAM',v:'€209,7 Mrd.',s:'Lebensmittelumsatz DE'},{l:'SAM',v:'€31,5 Mrd.',s:'adressierbarer Markt'},{l:'SOM Jahr 5',v:'€94 Mio.',s:'realistisches Ziel'}] },
                { t:'Marktsegmentierung', sub:'36.565 Filialen. 27 Kategorien. Eine Plattform.', d:'Top 5 Händler kontrollieren 75% des Marktes. 30.000+ Direktvermarkter und Hofläden sind bisher kaum digital erschlossen.', facts:[{l:'LEH-Filialen',v:'36.565',s:'in Deutschland'},{l:'Top 5 Händler',v:'75%',s:'Marktanteil'},{l:'Direktvermarkter',v:'30.000+',s:'Hofläden & mehr'}] },
                { t:'Megatrends', sub:'6 Megatrends. 1 perfektes Timing.', d:'KI-Revolution, Personalisierung, Digital Health, Online-Lebensmittelhandel – sechs Megatrends konvergieren und schaffen ein einzigartiges Zeitfenster.', facts:[{l:'Retailer-Meinung',v:'83%',s:'KI ist erfolgsentscheidend'},{l:'Pers. Ernährung',v:'+17,2%',s:'CAGR bis 2034'},{l:'Online-Lebensm.',v:'€18 Mrd.',s:'bis 2030'}] },
                { t:'Zielgruppen & Ökosystem', sub:'70 Millionen potenzielle Nutzer.', d:'B2C für jeden Verbraucher, B2B als Plattform und Software für Märkte, B2B2C mit Krankenkassen und Gesundheitspartnern.', facts:[{l:'B2C',v:'70 Mio.',s:'potenzielle Nutzer'},{l:'B2B',v:'96.000+',s:'Märkte & Händler'},{l:'B2B2C',v:'96 Kassen',s:'& 55.000 Ärzte'}] },
              ].map(a => (
                <div key={a.t} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-1">{a.t}</h3>
                  <p className="text-green-400 text-sm font-semibold mb-2">{a.sub}</p>
                  <p className="text-gray-400 text-sm mb-4">{a.d}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {a.facts.map(f => (
                      <div key={f.l} className="text-center p-3 rounded-xl bg-green-500/5 border border-green-500/10">
                        <div className="text-lg font-black text-green-400">{f.v}</div>
                        <div className="text-xs text-gray-400">{f.l}</div>
                        <div className="text-[10px] text-gray-500">{f.s}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== EINWAND-KATALOG ==================== */}
        <section className="pdf-slide px-8 py-16 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-yellow-400 font-medium text-sm">Einwand-Katalog</span>
            </div>
            <h2 className="text-4xl font-black text-white mb-2">19 Fragen. 8 Kategorien. Alle beantwortet.</h2>
            <p className="text-gray-400 mb-8">Antworten auf die kritischsten Investoren-Fragen.</p>

            <div className="space-y-3">
              {[
                { cat:'Partnerschaften', color:'blue', qs:[
                  { q:'Was wenn die großen Supermarktketten nicht mitmachen?', a:'Wir brauchen sie nicht – zuerst. Start mit 30.000+ Hofläden die KEINE digitale Präsenz haben. Drei Szenarien: A) Organisch über Hofläden, B) Strategischer Einstieg mit Pilot bei innovativer Kette, C) Top-Down durch Investor mit Retail-Connections.' },
                  { q:'Wie überzeugt ihr Supermärkte ohne Nutzerbasis?', a:'Für Hofläden ist die Rechnung einfach: Ohne uns haben sie keine App (zu teuer: €50-200k), keine Online-Bestellungen, keine digitale Präsenz. Mit uns: Sofort online, eigenes Dashboard, neue Kundengruppen.' },
                  { q:'Das Henne-Ei-Problem?', a:'Hyperlokalisierung: Start in einer Region mit 100% Abdeckung aller lokalen Märkte. Nutzer haben sofort echten Mehrwert. Dann Region für Region expandieren. Uber startete Stadt für Stadt, Amazon begann nur mit Büchern.' },
                ]},
                { cat:'Wettbewerb', color:'red', qs:[
                  { q:'Was wenn REWE oder EDEKA selbst sowas baut?', a:'Strukturell unmöglich: 1) Interessenkonflikt – REWE empfiehlt nie EDEKA. 2) Technische Silos – übergreifende Plattform erfordert Kooperation mit Konkurrenten. 3) Innovationsgeschwindigkeit – Konzerne brauchen 2-3 Jahre, wir iterieren in Wochen. 4) DNA – Sie sind Händler, keine Tech-Unternehmen.' },
                  { q:'Warum gibt es das noch nicht?', a:'Extrem komplex UND Technologie erst jetzt reif. KI für Ernährungsanalyse erst seit 2023 nutzbar. Retail-Experten bauen Retail-Apps, Health-Experten Health-Apps – niemand hat alles kombiniert. Instacart zeigt: In den USA funktioniert es. Deutschland ist 5-7 Jahre hinter.' },
                  { q:'Was ist mit Flink, Gorillas?', a:'Komplett anderes Modell: Die sind Logistik (eigene Lager, Fahrer, hohe Fixkosten, begrenzt auf Städte), wir sind Plattform (Asset-light, unbegrenztes Sortiment, auch ländlich). Gorillas ist insolvent. Wir verbinden nur – wie Airbnb keine Hotels besitzt.' },
                ]},
                { cat:'Team', color:'purple', qs:[
                  { q:'Solo-Gründer – kann er ein Team aufbauen?', a:'Ein Student ohne Coding-Background hat ein komplettes Ökosystem gebaut: App, Backend, KI-Agenten, Dashboards, Software-Lösung. Das ist kein Risiko – das ist der Beweis für extreme Umsetzungskraft. Suche nach Mitgründern mit Equity-Incentives, nicht Angestellten.' },
                  { q:'Keine Retail-Erfahrung?', a:'Disruption kommt nie von innen. Uber-Gründer kamen nicht aus der Taxi-Branche. Airbnb-Gründer waren keine Hoteliers. Ich bin der frustrierte Kunde – ich weiß aus täglicher Erfahrung was fehlt.' },
                  { q:'Technische Expertise?', a:'Die KI existiert bereits und funktioniert: KI-Agenten für Produktanalyse, personalisierte Empfehlungen, Allergen-Erkennung, krankheitsspezifische Auswertungen, automatische Warnungen. Alles gebaut, kein Mockup.' },
                ]},
                { cat:'Technologie', color:'cyan', qs:[
                  { q:'Wie skaliert das technisch?', a:'React Native App + Supabase Backend (PostgreSQL). Modularer Aufbau, API-first Design. Serverless = Kosten wachsen nur mit Nutzung. Skalierung ist Optimierung, nicht Neubau.' },
                  { q:'Woher kommen die Produktdaten?', a:'Vier Quellen: 1) Direkt vom Markt (eigenes Dashboard), 2) Lieferanten-Datenbanken, 3) Offene Datenbanken (Open Food Facts, GS1 Germany), 4) KI-gestützte Ergänzung. Mehrfach-Validierung bei kritischen Daten.' },
                  { q:'Wie funktioniert die Gesundheits-KI?', a:'Wissenschaftsbasiert, transparent, unbegrenzt erweiterbar. Vollständige Produktanalyse + Personalisierung basierend auf Gesundheitsprofil. Keine Blackbox – Nutzer sieht immer WARUM etwas empfohlen oder gewarnt wird.' },
                ]},
                { cat:'Geschäftsmodell', color:'yellow', qs:[
                  { q:'Wie verdient ihr Geld?', a:'Fünf Revenue Streams: 1) Premium-Abo €3,99/Mo., 2) Transaktionsgebühr 3-5%, 3) Markt-Abos (Basic/Pro/Enterprise), 4) Werbung (Sponsored Products), 5) B2B2C mit Krankenkassen & Arbeitgebern. Diversifiziert.' },
                  { q:'Warum sollten Nutzer Premium zahlen?', a:'€3,99/Mo. = €48/Jahr. Mehrwert: 130+ Stunden/Jahr gespart, 15-20% Geldersparnis, lebensrettende Allergen-Warnungen. Weniger als ein Kaffee pro Monat.' },
                  { q:'Sind Unit Economics realistisch?', a:'CAC €15-25 (vs. Flink €80+), LTV €180-300, LTV/CAC Ratio 7-12x (Benchmark: 3x), Payback 3-4 Monate, Gross Margin 70-80%. Asset-light Modell ohne Lager und Fahrer.' },
                ]},
                { cat:'Markt & Timing', color:'green', qs:[
                  { q:'Deutschland ist konservativ – warum hier?', a:'Größter Markt Europas (€209,7 Mrd.). Unterdigitalisiert = riesige Opportunity. Online-Grocery nur 2,4% vs. UK 13%. Konservativ = loyal: Wer deutsche Nutzer überzeugt, behält sie.' },
                  { q:'Online-Grocery wächst langsam?', a:'€6,5 Mrd. (2020) → €11 Mrd. (2024) → €17+ Mrd. (2029). CAGR 12-15%. Post-Corona echte Akzeptanz. Millennials werden Haupteinkäufer. Inflation treibt Preisbewusstsein.' },
                  { q:'Instacart kämpft auch?', a:'Instacart beweist: Plattform-Modell funktioniert ($33,5 Mrd. Transaktionsvolumen, $457M Profit). FEELY ist fundamental anders: Komplettes Ökosystem statt nur Lieferung, + Hofläden + Gesundheit + B2B + B2B2C.' },
                ]},
                { cat:'Regulierung', color:'indigo', qs:[
                  { q:'Gesundheitsdaten und DSGVO?', a:'DSGVO-Konformität von Anfang an: Explizite Einwilligung, Datensparsamkeit, Verschlüsselung, Hosting in DE/EU, alle Nutzerrechte implementiert. "Made in Germany" = Datenschutz-Qualitätsmerkmal und Wettbewerbsvorteil bei Krankenkassen-Partnerschaften.' },
                  { q:'Medizinische Empfehlungen – rechtliche Risiken?', a:'FEELY ist ein Einkaufs-Ökosystem, kein Medizinprodukt. Keine Diagnose, keine Therapie-Empfehlung. Klare Disclaimer, Verweis auf Arzt bei medizinischen Fragen. Produkthaftpflicht- und Cyber-Versicherung.' },
                ]},
                { cat:'Risiken', color:'orange', qs:[
                  { q:'Was wenn die KI falsche Empfehlungen gibt?', a:'Fünf Sicherheitsebenen: 1) Mehrfach-Validierung, 2) Konservativer Algorithmus (lieber False Positive als False Negative), 3) Nutzer-Kontrolle, 4) Feedback-System mit schneller Korrektur, 5) Klare Kommunikation ("ergänzt, ersetzt nicht das Lesen der Verpackung"). Versicherungsschutz vorhanden.' },
                ]},
              ].map(cat => (
                <div key={cat.cat} className="mb-6">
                  <div className={`inline-block bg-${cat.color}-500/10 border border-${cat.color}-500/20 rounded-full px-3 py-1 mb-3`}>
                    <span className={`text-${cat.color}-400 font-medium text-xs`}>{cat.cat} ({cat.qs.length})</span>
                  </div>
                  <div className="space-y-2">
                    {cat.qs.map(item => (
                      <div key={item.q} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <h4 className="font-bold text-white text-sm mb-2">{item.q}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="pdf-slide px-8 py-20 border-t border-white/5" style={{background:'linear-gradient(180deg,#000 0%,#052e16 50%,#111827 100%)'}}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Bereit die Zukunft mitzugestalten?</h2>

            <div className="space-y-3 text-left max-w-xl mx-auto mb-10">
              {[
                { l:'Das Problem', v:'Ein fragmentierter, intransparenter Markt mit Gesundheitsrisiken' },
                { l:'Die Lösung', v:'Eine Plattform für alles, mit personalisierter Gesundheitsintelligenz' },
                { l:'Der Markt', v:'€210+ Mrd., verdoppelt sich, unterdigitalisiert' },
                { l:'Das Produkt', v:'3 Plattformen – fertig gebaut, produktionsreif' },
                { l:'Das Modell', v:'Bewährt (Instacart), 4 diversifizierte Einnahmequellen' },
                { l:'Konkurrenz', v:'0 direkte Konkurrenz – First-Mover Advantage' },
                { l:'Das Team', v:'Entschlossener Gründer, sucht Verstärkung' },
              ].map(s => (
                <div key={s.l} className="flex gap-3">
                  <span className="text-green-400 font-bold text-sm w-24 flex-shrink-0">{s.l}</span>
                  <span className="text-gray-300 text-sm">{s.v}</span>
                </div>
              ))}
            </div>

            <p className="text-white/60 italic text-lg max-w-lg mx-auto mb-4">
              &ldquo;Die Zukunft des Einkaufens wird personalisiert sein. Die Frage ist nicht OB, sondern WER sie baut. Wir haben angefangen. Bauen Sie mit?&rdquo;
            </p>
            <p className="text-white/30 text-sm mb-10">– Juli, Gründer FEELY</p>

            <div className="text-xl font-bold text-green-400 mb-2">partner@feelyapp.de</div>
            <div className="text-gray-500 text-sm">feelyapp.info</div>
            <div className="mt-10 text-white/20 text-xs">© 2026 FEELY – Confidential – Nur für autorisierte Empfänger</div>
          </div>
        </section>

      </div>

      {/* Bottom CTA - hidden in print */}
      <div className="bg-black border-t border-white/10 py-8 print:hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <button onClick={handleDownloadPDF} disabled={isGenerating} className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all">
            {isGenerating ? <><Loader2 className="w-5 h-5 animate-spin" />PDF wird erstellt...</> : <><Download className="w-5 h-5" />Investor-Dokument als PDF herunterladen</>}
          </button>
          <p className="text-gray-500 text-sm mt-3">Vollständiges Dokument · Alle Sektionen · Dunkles Design</p>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; background: #000 !important; }
          .print\\:hidden { display: none !important; }
          nav, footer { display: none !important; }
          .pdf-slide { page-break-after: always; }
          .pdf-slide:last-child { page-break-after: auto; }
        }
      `}</style>
    </div>
  )
}
