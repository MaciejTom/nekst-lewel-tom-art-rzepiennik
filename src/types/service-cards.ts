/**
 * Service Cards Types (Usługi — wariant karty z obrazem + features)
 */

export interface ServiceCardItem {
  title: string
  description: string
  features: string[]
  image?: string
}

export interface ServiceCardsCtaCard {
  title: string
  description?: string
  buttonText: string
}

export interface ServiceCardsContent {
  title: string
  subtitle?: string
  services: ServiceCardItem[]
  ctaCard?: ServiceCardsCtaCard
}
