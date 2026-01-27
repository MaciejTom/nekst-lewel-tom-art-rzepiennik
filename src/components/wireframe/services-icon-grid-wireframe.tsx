import type { ServiceIconGridContent } from "@/types"

const w = {
  // Section
  section: "bg-background py-24 border-y border-dashed border-border",
  container: "container mx-auto px-6",

  // Header (centered)
  header: "text-center mb-16 max-w-3xl mx-auto",
  tagline: "text-xs tracking-widest uppercase text-muted-foreground mb-3",
  title: "text-4xl font-semibold text-foreground mb-6",
  subtitle: "text-sm text-muted-foreground leading-relaxed",

  // Grid — 4 cols lg, 2 md, 1 mobile
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",

  // Card
  card: "border border-dashed border-border p-8 flex flex-col gap-6",

  // Icon placeholder
  iconBox:
    "w-14 h-14 border border-dashed border-border flex items-center justify-center",
  iconLabel: "text-[10px] text-muted-foreground/50",

  // Card text
  cardTitle: "text-lg font-semibold text-foreground mb-3",
  cardDesc: "text-sm text-muted-foreground leading-relaxed",
}

interface Props {
  content: ServiceIconGridContent
}

export function ServicesIconGridWireframe({ content }: Props) {
  const { tagline, title, subtitle, services } = content

  return (
    <section className={w.section}>
      <div className={w.container}>
        {/* Header */}
        <div className={w.header}>
          <p className={w.tagline}>{tagline}</p>
          <h2 className={w.title}>{title}</h2>
          <p className={w.subtitle}>{subtitle}</p>
        </div>

        {/* Cards */}
        <div className={w.grid}>
          {services.map((service, index) => (
            <div key={index} className={w.card}>
              {/* Icon placeholder */}
              <div className={w.iconBox}>
                <span className={w.iconLabel}>icon</span>
              </div>

              {/* Text */}
              <div>
                <h4 className={w.cardTitle}>{service.title}</h4>
                <p className={w.cardDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
