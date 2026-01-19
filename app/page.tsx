'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ForUsers from '@/components/ForUsers'
import ForProviders from '@/components/ForProviders'
import Investors from '@/components/Investors'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Features />
      <ForUsers />
      <ForProviders />
      <Investors />
      <Download />
      <Contact />
      <Footer />
    </main>
  )
}
