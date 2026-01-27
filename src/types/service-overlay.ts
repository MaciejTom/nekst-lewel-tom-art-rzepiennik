/**
 * Service Overlay Types (Usługi — wariant overlay cards z tłem zdjęciowym)
 */

export interface ServiceOverlayItem {
  icon: string
  title: string
  description: string
  features: string[]
  image: string
  imageAlt: string
}

export interface ServiceOverlayCtaCard {
  title: string
  description?: string
  buttonText: string
}

export interface ServiceOverlayContent {
  title: string
  titleBreak?: string
  subtitle: string
  services: ServiceOverlayItem[]
  ctaCard?: ServiceOverlayCtaCard
  cta?: {
    text: string
    buttonText: string
    buttonIcon?: string
  }
}
