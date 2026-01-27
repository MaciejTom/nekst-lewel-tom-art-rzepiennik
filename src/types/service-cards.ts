/**
 * Service Cards Types (Usługi — wariant karty)
 */

export interface ServiceCardItem {
  title: string
  description: string
  features: string[]
  image?: string
}

export interface ServiceCardsContent {
  title: string
  subtitle?: string
  services: ServiceCardItem[]
}
