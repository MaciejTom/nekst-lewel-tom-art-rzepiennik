import type { ServiceOverlayContent } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {
  // Section
  section: "bg-background py-24",
  container: "container mx-auto px-6",

  // Header (centered)
  header: "text-center max-w-3xl mx-auto mb-16",
  title: "text-4xl font-semibold text-foreground relative inline-block",
  titleBreak: "block mt-2",
  titleUnderline: "block w-16 h-px bg-border mx-auto mt-4",
  subtitle: "text-muted-foreground text-lg leading-relaxed mt-6 max-w-2xl mx-auto",

  // Grid — flex-wrap: 3 cols lg, 2 md, 1 mobile
  grid: "flex flex-wrap justify-center gap-6",

  // Card — tall overlay card
  card: "relative w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] h-[500px] border border-dashed border-border overflow-hidden",

  // Image placeholder (full card background)
  placeholder: "w-full h-full bg-muted flex flex-col items-center justify-center gap-2",
  placeholderIcon: "w-10 h-10 text-muted-foreground/30",
  placeholderLabel: "text-xs text-muted-foreground/50",

  // Content overlay (pinned to bottom)
  cardContent: "absolute bottom-0 left-0 w-full p-6 bg-background/90 border-t border-dashed border-border",

  // Icon placeholder
  iconBox: "w-10 h-10 border border-dashed border-border flex items-center justify-center mb-3",
  iconLabel: "text-[10px] text-muted-foreground/50",

  // Card text
  cardTitle: "text-lg font-semibold text-foreground mb-2",
  cardDesc: "text-sm text-muted-foreground leading-relaxed mb-3",

  // Features
  featureList: "space-y-1.5",
  featureItem: "flex items-center gap-2 text-sm text-muted-foreground",
  featureDot: "w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0",

  // Structural line (represents decorative element)
  cardLine: "w-12 h-px bg-border mt-4",

  // CTA
  cta: "mt-16 text-center",
  ctaText: "text-muted-foreground mb-4",
  ctaButton: "inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest",
}

interface ServicesOverlayWireframeProps {
  content: ServiceOverlayContent
}

export function ServicesOverlayWireframe({ content }: ServicesOverlayWireframeProps) {
  const { title, titleBreak, subtitle, services, cta } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <h2 className={w.title}>
            {title}
            {titleBreak && <span className={w.titleBreak}>{titleBreak}</span>}
          </h2>
          <span className={w.titleUnderline} />
          <p className={w.subtitle}>{subtitle}</p>
        </div>

        {/* Cards */}
        <div className={w.grid}>
          {services.map((service, index) => (
            <div key={index} className={w.card}>
              {/* Image placeholder */}
              <div className={w.placeholder}>
                <ImageIcon className={w.placeholderIcon} />
                <span className={w.placeholderLabel}>service {index + 1}</span>
              </div>

              {/* Content overlay */}
              <div className={w.cardContent}>
                {/* Icon placeholder */}
                <div className={w.iconBox}>
                  <span className={w.iconLabel}>icon</span>
                </div>

                <h3 className={w.cardTitle}>{service.title}</h3>
                <p className={w.cardDesc}>{service.description}</p>

                <ul className={w.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i} className={w.featureItem}>
                      <span className={w.featureDot} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Structural line */}
                <div className={w.cardLine} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className={w.cta}>
            <p className={w.ctaText}>{cta.text}</p>
            <span className={w.ctaButton}>{cta.buttonText}</span>
          </div>
        )}
      </div>
    </section>
  )
}
