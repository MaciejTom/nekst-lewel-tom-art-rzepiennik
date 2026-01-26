import type { NavigationContent } from '@/types'

export const navigationContent: NavigationContent = {
  logo: {
    type: 'initials',
    value: 'NK',
    name: 'NIEDZIELA',
    subtext: '& KŁUSEK',
  },
  links: [
    { label: 'Dlaczego my', href: '#dlaczego-my' },
    { label: 'Usługi', href: '#uslugi' },
    { label: 'Proces', href: '#jak-pracujemy' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  cta: {
    type: 'phone',
    text: '696 092 434',
    href: 'tel:696092434',
  },
  email: 'pbitarnow@gmail.com',
}
