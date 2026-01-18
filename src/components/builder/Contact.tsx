"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, FileText } from "lucide-react"
import { getContactConfig, getSiteMeta, type ContactConfig } from "@/lib/config"
import { SectionWrapper } from "./SectionWrapper"
import { SectionHeader } from "./SectionHeader"

/**
 * Contact Section - config-driven
 *
 * Warianty:
 * - split-with-map: Info po lewej, mapa po prawej
 * - form-only: Tylko formularz kontaktowy
 * - cards: Karty z danymi kontaktowymi
 */
export function Contact() {
  const config = getContactConfig()
  const meta = getSiteMeta()

  switch (config.variant) {
    case 'form-only':
      return <ContactFormOnly config={config} meta={meta} />
    case 'cards':
      return <ContactCards config={config} meta={meta} />
    case 'split-with-map':
    default:
      return <ContactSplitWithMap config={config} meta={meta} />
  }
}

// ============ VARIANTS ============

interface ContactVariantProps {
  config: ContactConfig
  meta: {
    name: string
    phone: string
    email: string
    address: { street: string; city: string; zip: string }
    nip: string
  }
}

/**
 * Wariant: split-with-map
 * Info kontaktowe po lewej, mapa po prawej
 */
function ContactSplitWithMap({ config, meta }: ContactVariantProps) {
  return (
    <SectionWrapper id="kontakt" darkBg showGrid>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {config.title} <br />
            {config.titleAccent && (
              <span className="text-primary">{config.titleAccent}</span>
            )}
          </h2>
          {config.subtitle && (
            <p className="text-muted-foreground text-lg mb-12">
              {config.subtitle}
            </p>
          )}

          <div className="space-y-8">
            {/* Phone */}
            {config.showPhone && (
              <motion.div
                className="flex items-start gap-4 p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {config.phoneLabel || "Telefon"}
                  </h3>
                  <a
                    href={`tel:${meta.phone.replace(/\s/g, '')}`}
                    className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                  >
                    {meta.phone}
                  </a>
                </div>
              </motion.div>
            )}

            {/* Email */}
            {config.showEmail && (
              <motion.div
                className="flex items-start gap-4 p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {config.emailLabel || "Email"}
                  </h3>
                  <a
                    href={`mailto:${meta.email}`}
                    className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                  >
                    {meta.email}
                  </a>
                </div>
              </motion.div>
            )}

            {/* Address & NIP Grid */}
            {(config.showAddress || config.showNip) && (
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {config.showAddress && (
                  <div className="flex items-start gap-4 p-4 border border-border bg-card/30">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-bold">{meta.address.city}</p>
                      <p className="text-xs text-muted-foreground">
                        {meta.address.street}, {meta.address.zip}
                      </p>
                    </div>
                  </div>
                )}
                {config.showNip && (
                  <div className="flex items-start gap-4 p-4 border border-border bg-card/30">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-bold">NIP</p>
                      <p className="text-xs text-muted-foreground">{meta.nip}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Map */}
        {config.showMap && config.mapEmbedUrl && (
          <motion.div
            className="relative h-[400px] lg:h-auto min-h-[400px] border border-border overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src={config.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Lokalizacja - ${meta.address.city}, ${meta.address.street}`}
              className="absolute inset-0"
            />

            {/* Overlay with address */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm p-4 border border-border z-20">
              <p className="text-foreground font-bold">{meta.name}</p>
              <p className="text-sm text-muted-foreground">
                {meta.address.street}, {meta.address.zip} {meta.address.city}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: form-only
 * Formularz kontaktowy wycentrowany
 */
function ContactFormOnly({ config, meta }: ContactVariantProps) {
  return (
    <SectionWrapper id="kontakt" showGrid>
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title={config.title}
          titleAccent={config.titleAccent}
          subtitle={config.subtitle}
          centered
        />

        {/* Contact Info Bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 mb-12 pb-8 border-b border-border">
          {config.showPhone && (
            <a
              href={`tel:${meta.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              {meta.phone}
            </a>
          )}
          {config.showEmail && (
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              {meta.email}
            </a>
          )}
        </div>

        {/* Simple Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Imię i nazwisko</label>
              <input
                type="text"
                className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Telefon</label>
              <input
                type="tel"
                className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="600 000 000"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              placeholder="jan@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Wiadomość</label>
            <textarea
              rows={5}
              className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Opisz swój projekt..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-4 hover:bg-primary/90 transition-colors"
          >
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </SectionWrapper>
  )
}

/**
 * Wariant: cards
 * Karty z danymi kontaktowymi
 */
function ContactCards({ config, meta }: ContactVariantProps) {
  return (
    <SectionWrapper id="kontakt" showGrid>
      <SectionHeader
        title={config.title}
        titleAccent={config.titleAccent}
        subtitle={config.subtitle}
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {/* Phone Card */}
        {config.showPhone && (
          <motion.a
            href={`tel:${meta.phone.replace(/\s/g, '')}`}
            className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {config.phoneLabel || "Telefon"}
            </h3>
            <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {meta.phone}
            </p>
          </motion.a>
        )}

        {/* Email Card */}
        {config.showEmail && (
          <motion.a
            href={`mailto:${meta.email}`}
            className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {config.emailLabel || "Email"}
            </h3>
            <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all">
              {meta.email}
            </p>
          </motion.a>
        )}

        {/* Address Card */}
        {config.showAddress && (
          <motion.div
            className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              Adres
            </h3>
            <p className="text-lg font-bold text-foreground">{meta.address.city}</p>
            <p className="text-muted-foreground">
              {meta.address.street}, {meta.address.zip}
            </p>
          </motion.div>
        )}

        {/* NIP Card */}
        {config.showNip && (
          <motion.div
            className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              NIP
            </h3>
            <p className="text-xl font-bold text-foreground">{meta.nip}</p>
          </motion.div>
        )}
      </div>

      {/* Map below cards */}
      {config.showMap && config.mapEmbedUrl && (
        <motion.div
          className="mt-12 relative h-[300px] border border-border overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe
            src={config.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Lokalizacja - ${meta.address.city}`}
            className="absolute inset-0"
          />
        </motion.div>
      )}
    </SectionWrapper>
  )
}

export default Contact
