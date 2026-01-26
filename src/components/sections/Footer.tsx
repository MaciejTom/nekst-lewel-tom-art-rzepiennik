import { cn } from "@/lib/utils"
import type { FooterContent } from "@/types"

// ============================================
// STYLES
// ============================================

const baseStyles = {
  footer: "bg-background pt-12 pb-6 border-t border-border",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20",

  // Company info
  companyColumn: "col-span-1 lg:col-span-2",
  companyName: "text-xl font-bold text-white mb-4",
  companyDesc: "text-muted-foreground max-w-sm",

  // Nav
  navTitle: "text-sm font-bold text-primary uppercase tracking-wider mb-4",
  navList: "space-y-2 text-sm text-muted-foreground",
  navLink: "hover:text-white transition-colors",

  // Info
  infoTitle: "text-sm font-bold text-primary uppercase tracking-wider mb-4",
  infoList: "space-y-2 text-sm text-muted-foreground",

  // Bottom
  bottom: "border-t border-border pt-12",
  bigText: "text-[8vw] leading-[0.8] font-bold text-border/20 text-center select-none pointer-events-none whitespace-nowrap",
  bottomRow: "flex justify-between text-xs text-muted-foreground mt-4 font-mono uppercase",
} as const

// ============================================
// COMPONENT
// ============================================

interface FooterProps {
  content: FooterContent
  className?: string
}

export function Footer({ content, className }: FooterProps) {
  const {
    companyName,
    description,
    navLinks,
    companyInfo,
    copyright,
    designCredit,
  } = content

  return (
    <footer className={cn(baseStyles.footer, className)}>
      <div className={baseStyles.container}>
        <div className={baseStyles.grid}>
          {/* Company Info */}
          <div className={baseStyles.companyColumn}>
            <h2 className={baseStyles.companyName}>{companyName}</h2>
            <p className={baseStyles.companyDesc}>{description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={baseStyles.navTitle}>Nawigacja</h3>
            <ul className={baseStyles.navList}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={baseStyles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Data */}
          {companyInfo && (
            <div>
              <h3 className={baseStyles.infoTitle}>Dane firmy</h3>
              <ul className={baseStyles.infoList}>
                {companyInfo.nip && <li>NIP: {companyInfo.nip}</li>}
                {companyInfo.location && <li>{companyInfo.location}</li>}
                {companyInfo.privacyPolicy && <li>{companyInfo.privacyPolicy}</li>}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className={baseStyles.bottom}>
          <h1 className={baseStyles.bigText}>{companyName}</h1>
          <div className={baseStyles.bottomRow}>
            <span>{copyright}</span>
            {designCredit && <span>{designCredit}</span>}
          </div>
        </div>
      </div>
    </footer>
  )
}
