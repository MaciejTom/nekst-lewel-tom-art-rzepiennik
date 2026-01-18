/**
 * Test page dla config-driven Builder
 *
 * Testuje nowy system buildera:
 * - Wszystkie sekcje czytają config z niedziela-klusek-v2.json
 * - Można zmieniać warianty w configu i zobaczyć różnicę
 */

import {
  Hero,
  WhyUs,
  Services,
  ForWhom,
  Process,
  Portfolio,
  Faq,
  Contact
} from "@/components/builder"
import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/Footer"

export default function BuilderTestPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <ForWhom />
        <Process />
        <Portfolio />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
