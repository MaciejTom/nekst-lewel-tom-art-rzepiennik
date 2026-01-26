import type { HeroContent, HeroSplitContent } from '@/types'

// ============================================
// HERO 1 - Konstrukcje żelbetowe (główny)
// ============================================

export const heroContent: HeroContent = {
  badge: "KONSTRUKCJE ŻELBETOWE",
  headline: ["Żelbet dla budownictwa", "przemysłowego", "i mieszkaniowego"],
  headlineAccentLine: 1,
  subheadline: "Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę. Tarnów i 4 województwa południowej Polski.",
  ctaPrimary: { text: "Zadzwoń: 696 092 434", href: "tel:696092434", type: "phone" },
  ctaSecondary: { text: "Wyślij projekt do wyceny", scrollTo: "#kontakt" },
  stats: [
    { value: "4", label: "Województwa zasięgu" },
    { value: "24h", label: "Wycena projektu" },
    { value: "100%", label: "Własny zespół specjalistów" }
  ],

  backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop",
  overlayOpacity: 0.75,

  showPattern: true,
  patternType: 'rebar',
  patternOpacity: 0.3,

  contentPosition: 'left',
  minHeight: 'screen',

  showDecorations: true,
  showScrollIndicator: true,
  scrollIndicatorText: 'SCROLL',
}

// ============================================
// HERO 2 - Usługi remontowe (centered, grid)
// ============================================

export const heroContent2: HeroContent = {
  badge: "USŁUGI REMONTOWE",
  headline: ["Kompleksowe remonty", "mieszkań i domów", "w Krakowie"],
  headlineAccentLine: 0,
  subheadline: "Od projektu do wykończenia pod klucz. 15 lat doświadczenia, własna ekipa fachowców. Bezpłatna wycena w 48h.",
  ctaPrimary: { text: "Bezpłatna wycena", href: "#kontakt", type: "scroll" },
  ctaSecondary: { text: "Zobacz realizacje", scrollTo: "#portfolio" },
  stats: [
    { value: "15", label: "Lat doświadczenia" },
    { value: "200+", label: "Zrealizowanych projektów" },
    { value: "48h", label: "Czas wyceny" }
  ],

  backgroundImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop",
  overlayOpacity: 0.8,

  showPattern: true,
  patternType: 'grid',
  patternOpacity: 0.2,

  contentPosition: 'center',
  minHeight: '80vh',

  showDecorations: false,
  showScrollIndicator: true,
  scrollIndicatorText: 'PRZEWIŃ',
}

// ============================================
// HERO 3 - Fotowoltaika (minimalna)
// ============================================

export const heroContent3: HeroContent = {
  badge: "FOTOWOLTAIKA",
  headline: ["Energia słoneczna", "dla Twojego domu"],
  headlineAccentLine: 1,
  subheadline: "Instalacje fotowoltaiczne z dotacją do 50%. Montaż w 2 dni.",
  ctaPrimary: { text: "Sprawdź ile zaoszczędzisz", href: "tel:123456789", type: "phone" },

  backgroundImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop",
  overlayOpacity: 0.6,

  showPattern: true,
  patternType: 'dots',
  patternOpacity: 0.4,

  contentPosition: 'left',
  minHeight: '70vh',

  showDecorations: false,
  showScrollIndicator: false,
}

// ============================================
// HERO SPLIT - Fixman (tekst + zdjęcie)
// ============================================

export const heroSplitContent: HeroSplitContent = {
  badge: {
    text: "Dostępne terminy na maj 2024",
    dotColor: "#22c55e",
  },

  headline: ["Remonty i Naprawy", "w Stalowej Woli"],
  headlineHighlight: "w Stalowej Woli",

  subheadline: "Solidność i jakość potwierdzona przez 106 zadowolonych klientów. Twoje mieszkanie w dobrych rękach od 19 lat.",

  ctaPrimary: {
    text: "Zatrudnij nas",
    href: "#kontakt",
  },
  ctaSecondary: {
    text: "Zobacz realizacje",
    href: "#realizacje",
  },

  stats: [
    { icon: "verified", value: "19", label: "Lat doświadczenia" },
    { icon: "thumb_up", value: "106", label: "Opinii Google" },
  ],

  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKV4jBIJWPzCr4mYIbRXfFC1ZzjxzxF0BbSXPFrlEZxvlEzKw6bXbokesmF9zoUjSnms_AJfeXVeOKD4c3ETG1QKHe17A0lZJ9Ip5m0FCuyprADD8Uv4Wlaya7B_iuVQY_qly32P4C0GfwzqsrHoxxC4PI646BAVGbPPHor2oeTpB7Am7Gc7dqOSxAIjMA4FW96o-1LquCf1WIUi5X0oVznvjlqzaK9Kjm080alxgcHV_gYnmtgkpXKMBms8aTAxSyGLC6irf7YQ",
    alt: "Profesjonalny samochód remontowy przed nowoczesnym domem",
  },

  imageOverlay: {
    label: "Kontakt szybki",
    value: "123 456 789",
  },
}
