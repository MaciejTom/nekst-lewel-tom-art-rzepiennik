"use client"

import { Phone, Mail, MapPin, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ContactContent } from "@/types"

// ============================================
// STYLES
// ============================================

const baseStyles = {
  section: "bg-black py-24 relative overflow-hidden",
  pattern: "absolute inset-0 opacity-[0.07]",
  container: "container mx-auto px-6 relative z-10",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-16",

  // Left column
  leftColumn: "",
  title: "text-4xl md:text-5xl font-bold text-white mb-8",
  titleAccent: "text-primary",
  subtitle: "text-muted-foreground text-lg mb-12",

  // Contact cards
  contactCards: "space-y-8",
  contactCard: "flex items-start gap-4 p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors group",
  cardIcon: "w-6 h-6 text-primary mt-1",
  cardLabel: "text-sm text-muted-foreground uppercase tracking-wider mb-1",
  cardValueLarge: "text-2xl font-bold text-white group-hover:text-primary transition-colors",
  cardValueMedium: "text-xl font-bold text-white group-hover:text-primary transition-colors",

  // Info grid
  infoGrid: "grid grid-cols-2 gap-4",
  infoCard: "flex items-start gap-4 p-4 border border-border bg-card/30",
  infoIcon: "w-5 h-5 text-primary mt-0.5 flex-shrink-0",
  infoTitle: "text-white font-bold",
  infoValue: "text-xs text-muted-foreground",

  // Map
  mapWrapper: "relative h-[400px] lg:h-auto min-h-[400px] border border-border overflow-hidden",
  mapIframe: "absolute inset-0",
  mapOverlay: "absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm p-4 border border-border z-20",
  mapCompanyName: "text-white font-bold",
  mapAddress: "text-sm text-muted-foreground",
} as const

// ============================================
// COMPONENT
// ============================================

interface ContactSectionProps {
  content: ContactContent
  className?: string
}

export function ContactSection({ content, className }: ContactSectionProps) {
  const {
    title,
    titleAccent,
    subtitle,
    phone,
    phoneLabel,
    email,
    emailLabel,
    address,
    nip,
    companyName,
    mapEmbedUrl,
  } = content

  const patternStyle = {
    backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }

  return (
    <section id="kontakt" className={cn(baseStyles.section, className)}>
      {/* Grid Pattern */}
      <div className={baseStyles.pattern} style={patternStyle} />

      <div className={baseStyles.container}>
        <div className={baseStyles.grid}>
          {/* Contact Info */}
          <div className={baseStyles.leftColumn}>
            <h2 className={baseStyles.title}>
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className={baseStyles.titleAccent}>{titleAccent}</span>
                </>
              )}
            </h2>
            {subtitle && <p className={baseStyles.subtitle}>{subtitle}</p>}

            <div className={baseStyles.contactCards}>
              <div className={baseStyles.contactCard}>
                <Phone className={baseStyles.cardIcon} />
                <div>
                  {phoneLabel && <h3 className={baseStyles.cardLabel}>{phoneLabel}</h3>}
                  <p className={baseStyles.cardValueLarge}>{phone}</p>
                </div>
              </div>

              <div className={baseStyles.contactCard}>
                <Mail className={baseStyles.cardIcon} />
                <div>
                  {emailLabel && <h3 className={baseStyles.cardLabel}>{emailLabel}</h3>}
                  <p className={baseStyles.cardValueMedium}>{email}</p>
                </div>
              </div>

              <div className={baseStyles.infoGrid}>
                <div className={baseStyles.infoCard}>
                  <MapPin className={baseStyles.infoIcon} />
                  <div>
                    <p className={baseStyles.infoTitle}>{address.city}</p>
                    <p className={baseStyles.infoValue}>{address.street}, {address.zip}</p>
                  </div>
                </div>
                {nip && (
                  <div className={baseStyles.infoCard}>
                    <FileText className={baseStyles.infoIcon} />
                    <div>
                      <p className={baseStyles.infoTitle}>NIP</p>
                      <p className={baseStyles.infoValue}>{nip}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          {mapEmbedUrl && (
            <div className={baseStyles.mapWrapper}>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Lokalizacja firmy - ${address.city}, ${address.street}`}
                className={baseStyles.mapIframe}
              />

              {companyName && (
                <div className={baseStyles.mapOverlay}>
                  <p className={baseStyles.mapCompanyName}>{companyName}</p>
                  <p className={baseStyles.mapAddress}>{address.street}, {address.zip} {address.city}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
