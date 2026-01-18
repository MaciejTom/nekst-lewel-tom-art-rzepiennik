# Website Builder - Architektura

## Analiza obecnych sekcji

### Podsumowanie sekcji na stronie N&K:

| Sekcja | Elementy | Wariant |
|--------|----------|---------|
| Navigation | logo, links[], ctaButton | fixed-transparent |
| Hero | badge, headline, subtitle, cta[], stats[] | fullscreen-left |
| WhyUs | header, items[] (icon, title, desc) | 4-column-icons |
| Services | header, services[] (tabs + detail panel) | tabs-with-image |
| ForWhom | header, segments[] (image cards) | 2x2-grid-cards |
| Process | header, steps[] | 4-column-timeline |
| Portfolio | header, stats, projects[] | mosaic-grid |
| FAQ | header, questions[] | accordion-centered |
| Contact | header, contactInfo[], map | split-with-map |
| Footer | logo, description, navLinks[], companyInfo | 4-column |

---

## Wspólne wzorce (do standaryzacji)

### 1. Section Header (powtarza się w każdej sekcji)
```
┌─────────────────────────────────────┐
│ / USŁUGI          ← sectionLabel    │
│ ZAKRES ROBÓT      ← title           │
│ ŻELBETOWYCH       ← titleAccent     │
│ Opis sekcji...    ← subtitle        │
└─────────────────────────────────────┘
```

**Wspólne elementy:**
- `sectionLabel`: "/ USŁUGI", "/ PROCES", "/ ODBIORCY"
- `title`: główny tekst (część biała)
- `titleAccent`: część kolorowa lub muted
- `subtitle`: opis (opcjonalny)

### 2. Grid Pattern (tło)
Powtarza się w KAŻDEJ sekcji:
```tsx
<div className="absolute inset-0 opacity-[0.07]"
  style={{
    backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }}
/>
```
→ Powinno być w `<SectionWrapper>` z toggle `showGrid`

### 3. Card Pattern
```
┌──────────────────────┐
│ [Icon]               │  ← opcjonalnie
│ Title                │
│ Description          │
│ [Tags/Items]         │  ← opcjonalnie
└──────────────────────┘
+ border hover → primary/30
+ corner accents na hover (opcjonalnie)
```

### 4. Hover Effects (3 standardowe)
1. **Border highlight**: `hover:border-primary/30`
2. **Scale**: `hover:scale-105`
3. **Title color**: `group-hover:text-primary`

---

## Hierarchia zmiennych

### POZIOM 1: GLOBAL (theme) - z globals.css
```
colors:
  --primary: #FF5E00
  --background: #0a0a0a
  --card: #171717
  --border: #262626
  --foreground: #FAFAFA
  --muted-foreground: #a3a3a3

fonts:
  --font-display: Bebas Neue
  --font-body: Work Sans

layout:
  containerWidth: 1280px
  sectionPadding: py-24
  gridSize: 40px
  gridOpacity: 0.07
```

### POZIOM 2: SITE CONFIG (meta)
```json
{
  "name": "Niedziela & Kłusek",
  "tagline": "Konstrukcje żelbetowe",
  "phone": "696 092 434",
  "email": "pbitarnow@gmail.com",
  "address": { "city": "Tarnów", "street": "...", "zip": "..." },
  "nip": "993-069-91-28"
}
```

### POZIOM 3: SECTION CONFIG
```json
{
  "hero": {
    "variant": "fullscreen-left",
    "content": { ... }
  },
  "services": {
    "variant": "tabs-with-image",
    "content": { ... }
  }
}
```

### POZIOM 4: CONTENT (dane)
```json
{
  "hero.content": {
    "badge": "KONSTRUKCJE ŻELBETOWE",
    "headline": ["ŻELBET DLA BUDOWNICTWA", "PRZEMYSŁOWEGO", "I MIESZKANIOWEGO"],
    "headlineAccent": 1,
    "subtitle": "Fundamenty, ściany...",
    "stats": [
      { "value": "4", "label": "Województwa" }
    ]
  }
}
```

---

## Uproszczona struktura schemy

### Zasada: Content oddzielony od Style

**NIE RÓB:**
```json
{
  "hero.headline.style.size": "text-5xl",
  "hero.headline.style.tracking": "tracking-wide"
}
```

**RÓB:**
```json
{
  "hero.headline": ["LINE 1", "LINE 2"],
  "hero.headlineAccent": 1
}
```
Style → z theme/variant, NIE z configu per-element.

---

## Schematy sekcji (uproszczone)

### 1. Navigation
```json
{
  "navigation": {
    "variant": "fixed-transparent | fixed-solid | static",
    "logo": {
      "type": "initials | text | image",
      "value": "NK" | "FIRMA" | "/logo.png"
    },
    "links": [
      { "label": "Usługi", "href": "#uslugi" }
    ],
    "cta": {
      "type": "phone | button",
      "text": "696 092 434",
      "href": "tel:..."
    }
  }
}
```

### 2. Hero
```json
{
  "hero": {
    "variant": "fullscreen-left | fullscreen-center | split-left | split-right",
    "badge": "KONSTRUKCJE ŻELBETOWE",
    "headline": ["LINE 1", "LINE 2", "LINE 3"],
    "headlineAccent": 1,
    "subtitle": "Opis...",
    "ctaPrimary": { "text": "Zadzwoń", "href": "tel:..." },
    "ctaSecondary": { "text": "Wyślij", "scrollTo": "#kontakt" },
    "stats": [
      { "value": "4", "label": "Województwa" }
    ],
    "backgroundImage": "/hero.jpg",
    "showRebarPattern": true,
    "showDecorations": true,
    "showScrollIndicator": true
  }
}
```

### 3. WhyUs
```json
{
  "whyUs": {
    "variant": "4-column-icons | 3-column-cards | 2-column-split",
    "sectionLabel": "/ DLACZEGO MY",
    "title": "DLACZEGO ZLECIĆ NAM",
    "titleAccent": "ROBOTY ŻELBETOWE",
    "subtitle": "Specjalizujemy się...",
    "items": [
      {
        "icon": "Wrench | Users | MapPin | Clock",
        "title": "PEŁEN ZAKRES ROBÓT",
        "description": "Fundamenty, ściany..."
      }
    ]
  }
}
```

### 4. Services
```json
{
  "services": {
    "variant": "tabs-with-image | cards-grid | accordion",
    "sectionLabel": "/ USŁUGI",
    "title": "ZAKRES",
    "titleAccent": "ROBÓT ŻELBETOWYCH",
    "items": [
      {
        "id": "fundamenty",
        "icon": "Cuboid",
        "title": "Fundamenty",
        "shortDesc": "Pod każdy obiekt",
        "fullDesc": "Ławy fundamentowe...",
        "image": "/service1.jpg",
        "features": ["Ławy", "Płyty", "Stopy"]
      }
    ]
  }
}
```

### 5. ForWhom
```json
{
  "forWhom": {
    "variant": "2x2-grid | 4-column | carousel",
    "sectionLabel": "/ ODBIORCY",
    "title": "DLA KOGO",
    "titleAccent": "PRACUJEMY?",
    "items": [
      {
        "icon": "Building2",
        "title": "GENERALNI WYKONAWCY",
        "description": "Szukacie solidnego...",
        "image": "/segment1.jpg",
        "tags": ["Podwykonawstwo", "Terminowość"]
      }
    ]
  }
}
```

### 6. Process
```json
{
  "process": {
    "variant": "4-column-timeline | vertical-steps | numbered-list",
    "sectionLabel": "/ PROCES",
    "title": "JAK WYGLĄDA",
    "titleAccent": "WSPÓŁPRACA",
    "steps": [
      {
        "number": "01",
        "icon": "FileText",
        "title": "Zapytanie i wycena",
        "subtitle": "Wycena w 24h",
        "description": "Wyślij projekt..."
      }
    ],
    "bottomCta": {
      "text": "Zamów wycenę teraz",
      "href": "#kontakt"
    }
  }
}
```

### 7. Portfolio
```json
{
  "portfolio": {
    "variant": "mosaic | grid-3col | carousel",
    "sectionLabel": "/ REALIZACJE",
    "title": "PRZYKŁADOWE",
    "titleAccent": "REALIZACJE",
    "stats": [
      { "value": "45+", "label": "Zakończonych Inwestycji" },
      { "value": "100%", "label": "Terminowości" }
    ],
    "projects": [
      {
        "title": "Obiekt przemysłowy",
        "category": "Konstrukcja żelbetowa",
        "specs": "Fundamenty płytowe + ściany",
        "image": "/project1.jpg",
        "featured": true
      }
    ],
    "showGalleryButton": true
  }
}
```

### 8. FAQ
```json
{
  "faq": {
    "variant": "accordion-centered | accordion-split | grid",
    "title": "NAJCZĘŚCIEJ ZADAWANE",
    "titleAccent": "PYTANIA",
    "questions": [
      {
        "question": "Czy pracujecie jako podwykonawca?",
        "answer": "Tak, większość naszych..."
      }
    ]
  }
}
```

### 9. Contact
```json
{
  "contact": {
    "variant": "split-with-map | form-only | cards",
    "title": "SKONTAKTUJ SIĘ",
    "titleAccent": "Z NAMI",
    "subtitle": "Zadzwoń lub wyślij...",
    "showPhone": true,
    "showEmail": true,
    "showAddress": true,
    "showNip": true,
    "showMap": true,
    "mapCoordinates": { "lat": 50.013, "lng": 20.986 }
  }
}
```

### 10. Footer
```json
{
  "footer": {
    "variant": "4-column | simple | mega",
    "showDescription": true,
    "description": "Profesjonalne usługi...",
    "navLinks": [...],
    "showBigTypography": true,
    "copyright": "© 2024 Niedziela & Kłusek"
  }
}
```

---

## Architektura komponentów

```
src/components/
├── sections/
│   ├── SectionWrapper.tsx      # Grid pattern, padding, container
│   ├── SectionHeader.tsx       # Label + title + subtitle
│   │
│   ├── hero/
│   │   ├── HeroFullscreenLeft.tsx
│   │   ├── HeroFullscreenCenter.tsx
│   │   ├── HeroSplitLeft.tsx
│   │   └── index.tsx           # Switch na variant
│   │
│   ├── why-us/
│   │   ├── WhyUs4Column.tsx
│   │   ├── WhyUs3Cards.tsx
│   │   └── index.tsx
│   │
│   ├── services/
│   │   ├── ServicesTabs.tsx
│   │   ├── ServicesCards.tsx
│   │   └── index.tsx
│   │
│   └── ... (pozostałe)
│
├── ui/                         # shadcn components
│   ├── button.tsx
│   ├── accordion.tsx
│   └── ...
│
└── primitives/                 # Małe reużywalne elementy
    ├── Badge.tsx               # "KONSTRUKCJE ŻELBETOWE"
    ├── StatDisplay.tsx         # "4" + "Województwa"
    ├── IconCard.tsx            # Card z ikoną
    └── FeatureList.tsx         # Lista z checkmarks
```

---

## Jak to będzie działać

### 1. Config Reader
```typescript
// lib/config.ts
import siteConfig from '@/_builder/_config/sites/niedziela-klusek.json'

export function getHeroConfig() {
  return {
    ...defaultHeroConfig,
    ...siteConfig.hero
  }
}
```

### 2. Section Component
```tsx
// components/sections/hero/index.tsx
import { getHeroConfig } from '@/lib/config'
import { HeroFullscreenLeft } from './HeroFullscreenLeft'
import { HeroFullscreenCenter } from './HeroFullscreenCenter'

const variants = {
  'fullscreen-left': HeroFullscreenLeft,
  'fullscreen-center': HeroFullscreenCenter,
  // ...
}

export function Hero() {
  const config = getHeroConfig()
  const Component = variants[config.variant]
  return <Component {...config} />
}
```

### 3. Page Builder
```tsx
// app/page.tsx
import { getSiteConfig } from '@/lib/config'
import * as Sections from '@/components/sections'

export default function Page() {
  const config = getSiteConfig()

  return (
    <>
      <Sections.Navigation />
      {config.sections.map(section => {
        const Component = Sections[section.id]
        return section.enabled && <Component key={section.id} />
      })}
    </>
  )
}
```

---

## Następne kroki

1. [ ] Stworzyć `SectionWrapper` i `SectionHeader` jako reużywalne komponenty
2. [ ] Refaktorować Hero na warianty (fullscreen-left, center, split)
3. [ ] Stworzyć uproszczone schematy JSON dla każdej sekcji
4. [ ] Stworzyć `lib/config.ts` do czytania configu
5. [ ] Przetestować na nowym kliencie (Fixman)

---

## Przykład pełnego site config

```json
{
  "meta": {
    "name": "Niedziela & Kłusek",
    "tagline": "Konstrukcje żelbetowe",
    "phone": "696 092 434",
    "email": "pbitarnow@gmail.com"
  },

  "sections": [
    { "id": "hero", "enabled": true },
    { "id": "whyUs", "enabled": true },
    { "id": "services", "enabled": true },
    { "id": "forWhom", "enabled": true },
    { "id": "process", "enabled": true },
    { "id": "portfolio", "enabled": true },
    { "id": "faq", "enabled": true },
    { "id": "contact", "enabled": true }
  ],

  "hero": {
    "variant": "fullscreen-left",
    "badge": "KONSTRUKCJE ŻELBETOWE",
    "headline": ["ŻELBET DLA BUDOWNICTWA", "PRZEMYSŁOWEGO", "I MIESZKANIOWEGO"],
    "headlineAccent": 1
  },

  "whyUs": {
    "variant": "4-column-icons",
    "items": [...]
  }
}
```
