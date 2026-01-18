/**
 * Test page dla config-driven Hero
 *
 * Testuje nowy system buildera:
 * - Hero czyta config z niedziela-klusek-v2.json
 * - Można zmieniać wariant w configu i zobaczyć różnicę
 */

import { Hero } from "@/components/builder"
import { Navigation } from "@/components/sections/navigation"

export default function BuilderTestPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* Info section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Config-Driven Hero Test
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Ten Hero jest renderowany na podstawie configu z pliku:
              <br />
              <code className="text-primary">_builder/_config/sites/niedziela-klusek-v2.json</code>
            </p>
            <div className="bg-background border border-border p-6 rounded-sm max-w-md mx-auto text-left">
              <h3 className="text-white font-bold mb-2">Dostępne warianty:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <code>fullscreen-left</code> - obecny</li>
                <li>• <code>fullscreen-center</code></li>
                <li>• <code>split-left</code></li>
                <li>• <code>split-right</code></li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Zmień &quot;variant&quot; w hero section configu i odśwież stronę.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
