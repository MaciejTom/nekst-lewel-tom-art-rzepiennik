/**
 * Service Icon Grid Types (Uslugi — wariant icon grid z centered header)
 */

export interface ServiceIconGridItem {
  icon: string
  title: string
  description: string
}

export interface ServiceIconGridContent {
  tagline: string
  title: string
  subtitle: string
  services: ServiceIconGridItem[]
}
