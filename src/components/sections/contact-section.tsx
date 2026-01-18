"use client"

import { Phone, Mail, MapPin, FileText } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-black py-24 relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              SKONTAKTUJ SIĘ <br/>
              <span className="text-primary">Z NAMI</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Zadzwoń lub wyślij zapytanie. Wycenę przygotujemy w 24h.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors group">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Telefon (Inżynier)</h3>
                  <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors">696 092 434</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors group">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email (Wyceny)</h3>
                  <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">pbitarnow@gmail.com</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 border border-border bg-card/30">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold">Tarnów</p>
                    <p className="text-xs text-muted-foreground">ul. Narutowicza 3, 33-100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-border bg-card/30">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold">NIP</p>
                    <p className="text-xs text-muted-foreground">993-069-91-28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d20.986!3d50.013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d847c9a7e7a7d%3A0x4c8e5d7f3b2a1c0e!2sNarutowicza%203%2C%2033-100%20Tarn%C3%B3w!5e0!3m2!1spl!2spl!4v1705500000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja firmy - Tarnów, ul. Narutowicza 3"
              className="absolute inset-0"
            />

            {/* Overlay with address */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm p-4 border border-border z-20">
              <p className="text-white font-bold">Niedziela & Kłusek</p>
              <p className="text-sm text-muted-foreground">ul. Narutowicza 3, 33-100 Tarnów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}