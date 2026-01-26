import type { HeroContent, HeroSplitContent } from '@/types'

// ============================================
// HERO VARIANT 1 - Full screen, left aligned
// ============================================

export const heroFullscreen: HeroContent = {
  badge: "WEBSITE BUILDER",
  headline: ["Component Demo", "Showcase Page"],
  headlineAccentLine: 1,
  subheadline: "This page demonstrates all available component variants. Use the theme switcher to see how components look in different color schemes.",
  ctaPrimary: { text: "See All Variants", href: "#why-us-1", type: "scroll" },
  ctaSecondary: { text: "Learn More", scrollTo: "#services" },
  stats: [
    { value: "10+", label: "Components" },
    { value: "2", label: "Themes" },
    { value: "100%", label: "Customizable" }
  ],

  backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
  overlayOpacity: 0.75,

  showPattern: true,
  patternType: 'grid',
  patternOpacity: 0.25,

  contentPosition: 'left',
  minHeight: 'screen',

  showDecorations: true,
  showScrollIndicator: true,
  scrollIndicatorText: 'SCROLL',
}

// ============================================
// HERO VARIANT 2 - Centered, medium height
// ============================================

export const heroCentered: HeroContent = {
  badge: "VARIANT: CENTERED",
  headline: ["Centered Hero Layout", "For Maximum Impact"],
  headlineAccentLine: 0,
  subheadline: "Perfect for landing pages and promotional content. The centered layout draws attention to your main message.",
  ctaPrimary: { text: "Primary Action", href: "#", type: "scroll" },
  ctaSecondary: { text: "Secondary Action", scrollTo: "#" },
  stats: [
    { value: "Fast", label: "Performance" },
    { value: "Clean", label: "Design" },
    { value: "Flexible", label: "Layout" }
  ],

  backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
  overlayOpacity: 0.8,

  showPattern: true,
  patternType: 'dots',
  patternOpacity: 0.2,

  contentPosition: 'center',
  minHeight: '80vh',

  showDecorations: false,
  showScrollIndicator: true,
  scrollIndicatorText: 'MORE',
}

// ============================================
// HERO VARIANT 3 - Minimal, compact
// ============================================

export const heroMinimal: HeroContent = {
  badge: "VARIANT: MINIMAL",
  headline: ["Simple and Clean", "No Distractions"],
  headlineAccentLine: 1,
  subheadline: "Sometimes less is more. This minimal hero variant focuses on the essentials.",
  ctaPrimary: { text: "Get Started", href: "#", type: "scroll" },

  backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
  overlayOpacity: 0.6,

  showPattern: false,

  contentPosition: 'left',
  minHeight: '60vh',

  showDecorations: false,
  showScrollIndicator: false,
}

// ============================================
// HERO SPLIT - Text + Image side by side
// ============================================

export const heroSplit: HeroSplitContent = {
  badge: {
    text: "Split Layout Variant",
    dotColor: "#22c55e",
  },

  headline: ["Text and Image", "Side by Side"],
  headlineHighlight: "Side by Side",

  subheadline: "The split hero layout is perfect for showcasing a product or service alongside compelling copy. Great for portfolios and service pages.",

  ctaPrimary: {
    text: "Primary CTA",
    href: "#",
  },
  ctaSecondary: {
    text: "Secondary CTA",
    href: "#",
  },

  stats: [
    { icon: "layout", value: "Split", label: "Layout" },
    { icon: "image", value: "50/50", label: "Ratio" },
  ],

  image: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    alt: "Modern workspace with laptop",
  },

  imageOverlay: {
    label: "Image caption",
    value: "Optional overlay",
  },
}

// ============================================
// HERO SPLIT EDGE - Image bleeds to right edge
// ============================================

export const heroSplitEdge: HeroSplitContent = {
  badge: {
    text: "Edge Bleed Layout",
    dotColor: "#f59e0b",
  },

  headline: ["Image Extends", "To The Edge"],
  headlineHighlight: "To The Edge",

  subheadline: "This hero variant keeps the text within the container but lets the image extend all the way to the right edge of the screen. Great for impactful visuals.",

  ctaPrimary: {
    text: "See More",
    href: "#",
  },
  ctaSecondary: {
    text: "Learn More",
    href: "#",
  },

  stats: [
    { icon: "layout", value: "Edge", label: "Bleed" },
    { icon: "image", value: "Full", label: "Width Image" },
  ],

  image: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop",
    alt: "Modern architecture",
  },

  imageOverlay: {
    label: "Projects",
    value: "120+",
  },
}
