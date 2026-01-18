export function Footer() {
  return (
    <footer className="bg-background pt-12 pb-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">NIEDZIELA & KŁUSEK</h2>
            <p className="text-muted-foreground max-w-sm">
              Profesjonalne usługi żelbetowe.
              Budujemy na lata, stawiając na jakość i bezpieczeństwo konstrukcji.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-white transition-colors">Start</a></li>
              <li><a href="#uslugi" className="hover:text-white transition-colors">Oferta</a></li>
              <li><a href="#realizacje" className="hover:text-white transition-colors">Realizacje</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Dane firmy</h3>
             <ul className="space-y-2 text-sm text-muted-foreground">
              <li>NIP: 993-069-91-28</li>
              <li>Tarnów, Małopolska</li>
              <li>Polityka Prywatności</li>
            </ul>
          </div>
        </div>

        {/* Massive Footer Typography */}
        <div className="border-t border-border pt-12">
          <h1 className="text-[8vw] leading-[0.8] font-bold text-border/20 text-center select-none pointer-events-none whitespace-nowrap">
            NIEDZIELA & KŁUSEK
          </h1>
          <div className="flex justify-between text-xs text-muted-foreground mt-4 font-mono uppercase">
            <span>© 2024 Niedziela & Kłusek</span>
            <span>Design: AI Architect</span>
          </div>
        </div>
      </div>
    </footer>
  )
}