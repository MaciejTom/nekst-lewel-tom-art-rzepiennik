# Website Builder - Jak dziala aplikacja

## Czym jest ta apka?

Content-driven website builder. Jeden zestaw komponentow (sekcji) + rozne pliki z trescia = rozne strony.
Komponenty nie maja w sobie zadnych tekstow ani zdjec - wszystko przychodzi z plikow content.

---

## Architektura w 3 zdaniach

1. **Typy** (`src/types/`) - definiuja ksztalt danych dla kazdej sekcji
2. **Content** (`src/content/`) - pliki z danymi (teksty, zdjecia, ustawienia wariantow)
3. **Komponenty** (`src/components/sections/`) - renderuja dane, nie wiedza CZYJEJ strony dotycza

```
Content (dane)  -->  Komponent (renderowanie)  -->  Strona (kompozycja)
```

---

## Struktura plikow

```
src/
├── app/                          # Strony (Next.js App Router)
│   ├── layout.tsx                # Root layout - fonty, motyw, <html>
│   ├── globals.css               # WSZYSTKIE style + 3 motywy CSS
│   ├── page.tsx                  # Glowna strona (Niedziela & Klusek)
│   └── demo/
│       ├── layout.tsx            # Layout demo - importuje demo.css
│       ├── demo.css              # Nadpisania CSS dla /demo
│       └── page.tsx              # Strona demo (showcase komponentow)
│
├── components/
│   ├── sections/                 # GLOWNE komponenty sekcji
│   │   ├── navigation.tsx        # Nawigacja (fixed, mobile menu)
│   │   ├── hero-section.tsx      # Hero (fullscreen, centered, minimal)
│   │   ├── hero-split.tsx        # Hero split (tekst + obraz 50/50)
│   │   ├── why-us-section.tsx    # Dlaczego my (grid-3/4/6, cards)
│   │   ├── services-section.tsx  # Uslugi (taby + zdjecia)
│   │   ├── for-whom-section.tsx  # Dla kogo (karty z obrazami)
│   │   ├── process-section.tsx   # Proces (kroki 01-04)
│   │   ├── portfolio-section.tsx # Realizacje (mozaika zdjec)
│   │   ├── faq-section.tsx       # FAQ (akordeon)
│   │   ├── contact-section.tsx   # Kontakt (formularz + dane + mapa)
│   │   └── Footer.tsx            # Stopka
│   │
│   ├── ui/                       # Bazowe komponenty UI (shadcn)
│   │   ├── button.tsx
│   │   ├── accordion.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── ...
│   │
│   ├── builder/                  # Alternatywne komponenty (config-driven)
│   │   ├── Hero.tsx              # Czyta config z JSON
│   │   ├── WhyUs.tsx
│   │   └── ...
│   │
│   └── theme-switcher.tsx        # Przelacznik motywow (Dark/Light/Sunny)
│
├── content/                      # DANE - tresc stron
│   ├── niedziela-klusek/         # Strona glowna (firma budowlana)
│   │   ├── hero.ts               # 3 warianty hero
│   │   ├── why-us.ts
│   │   ├── services.ts
│   │   ├── navigation.ts
│   │   ├── contact.ts
│   │   ├── ...
│   │   └── index.ts              # Eksportuje wszystko
│   │
│   └── demo/                     # Strona demo (showcase)
│       ├── hero-variants.ts      # 3 hero + 1 split
│       ├── why-us-variants.ts    # 5 wariantow grid
│       ├── services.ts
│       ├── ...
│       └── index.ts
│
├── types/                        # Definicje TypeScript
│   ├── common.ts                 # SectionHeader (tagline, title, titleAccent)
│   ├── hero.ts                   # HeroContent
│   ├── hero-split.ts             # HeroSplitContent
│   ├── navigation.ts             # NavigationContent
│   ├── why-us.ts                 # WhyUsContent
│   ├── services.ts               # ServicesContent
│   ├── for-whom.ts               # ForWhomContent
│   ├── process.ts                # ProcessContent
│   ├── portfolio.ts              # PortfolioContent
│   ├── faq.ts                    # FaqContent
│   ├── contact.ts                # ContactContent
│   ├── footer.ts                 # FooterContent
│   ├── site.ts                   # SiteContent (calosc)
│   └── index.ts                  # Re-eksporty
│
└── lib/
    ├── utils.ts                  # cn() - laczenie klas Tailwind
    └── config.ts                 # Czytanie configu JSON (builder)
```

---

## Jak dziala komponent sekcji

Kazdy komponent przyjmuje JEDEN prop: `content` z typowanymi danymi.

Przyklad - WhyUsSection:

```tsx
// TYP (src/types/why-us.ts)
interface WhyUsContent {
  title: string
  titleAccent?: string
  subtitle?: string
  items: Array<{
    image?: string
    title: string
    description: string
  }>
  layoutVariant?: 'auto' | 'grid-3' | 'grid-4' | 'grid-6' | 'cards'
  showPattern?: boolean
}

// CONTENT (src/content/niedziela-klusek/why-us.ts)
export const whyUsContent: WhyUsContent = {
  title: "Dlaczego zlecic nam",
  titleAccent: "roboty zelbetowe",
  items: [
    { image: "/icon.png", title: "Pelny zakres", description: "..." },
    { image: "/icon2.png", title: "Wlasny zespol", description: "..." },
    // ...
  ],
  layoutVariant: 'auto',
  showPattern: true,
}

// UZYCIE W STRONIE (src/app/page.tsx)
<WhyUsSection content={whyUsContent} />
```

Komponent sam decyduje jak wyrenderowac dane na podstawie `layoutVariant` i liczby itemow.

---

## Jak dziala system motywow

### 3 motywy zdefiniowane w globals.css

Kazdy motyw to zestaw ~45 zmiennych CSS na selektorze `[data-theme="X"]`:

| Motyw        | Selektor                    | Tlo       | Primary   | Charakter         |
|--------------|-----------------------------|-----------|-----------|-------------------|
| Industrial   | `.dark`, `[data-theme="industrial"]` | `#1a1a1a` | `#3d6b9f` | Ciemny, stalowy  |
| Minimal      | `[data-theme="minimal"]`    | `#ffffff`  | `#4a5568` | Jasny, czysty    |
| Sunny        | `[data-theme="sunny"]`      | `#fefdfb`  | `#ca8a04` | Cieplo-zolty     |

### Jak przelaczanie dziala

1. `layout.tsx` ma inline script ktory PRZED renderem React czyta `localStorage('theme')` i ustawia `data-theme` na `<html>`
2. `ThemeSwitcher` (client component) zmienia `data-theme` i `localStorage`
3. Komponenty uzywaja klas Tailwind (`bg-background`, `text-primary`, `border-border`) ktore sa mapowane na zmienne CSS
4. Zmiana `data-theme` = natychmiastowa zmiana WSZYSTKICH kolorow

### Zmienne CSS uzywane przez komponenty

```css
--background       /* Tlo strony */
--foreground       /* Kolor tekstu */
--primary          /* Glowny kolor (przyciski, akcenty) */
--primary-foreground /* Tekst na primary */
--secondary        /* Drugie tlo */
--muted            /* Stonowane tlo */
--muted-foreground /* Stonowany tekst */
--accent           /* Kolor akcentu */
--card             /* Tlo kart */
--border           /* Obramowania */
--input            /* Tlo inputow */
--ring             /* Focus ring */
```

### Nadpisywanie motywu per podstrona

Przyklad: `/demo` ma wlasny `demo.css` ktory nadpisuje zmienne tylko na tej podstronie.
Import w `demo/layout.tsx`.

---

## Jak zbudowac nowa strone

### Krok 1: Stworz folder content

```
src/content/moja-firma/
├── navigation.ts
├── hero.ts
├── why-us.ts
├── services.ts
├── ... (ktore sekcje chcesz)
└── index.ts       # eksportuje wszystko
```

### Krok 2: Wypelnij dane

```ts
// src/content/moja-firma/hero.ts
import type { HeroContent } from '@/types'

export const heroContent: HeroContent = {
  badge: "MOJA FIRMA",
  headline: ["Robimy", "Swietne Rzeczy"],
  headlineAccentLine: 1,
  subheadline: "Opis firmy...",
  ctaPrimary: { text: "Zadzwon", href: "tel:123456789", type: "phone" },
  backgroundImage: "/hero-bg.jpg",
  overlayOpacity: 0.7,
  showPattern: true,
  patternType: 'grid',
  contentPosition: 'left',
  minHeight: 'screen',
}
```

### Krok 3: Stworz strone

```tsx
// src/app/moja-firma/page.tsx
import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { WhyUsSection } from "@/components/sections/why-us-section"
import { Footer } from "@/components/sections/Footer"

import { navigationContent, heroContent, whyUsContent, footerContent } from "@/content/moja-firma"

export default function MojaFirmaPage() {
  return (
    <>
      <Navigation content={navigationContent} />
      <main>
        <HeroSection content={heroContent} />
        <WhyUsSection content={whyUsContent} />
      </main>
      <Footer content={footerContent} />
    </>
  )
}
```

---

## Warianty komponentow

### Hero

| Prop               | Opcje                                     | Efekt                          |
|--------------------|--------------------------------------------|--------------------------------|
| `contentPosition`  | `'left'`, `'center'`                       | Tekst po lewej lub na srodku   |
| `minHeight`        | `'screen'`, `'80vh'`, `'70vh'`, `'60vh'`   | Wysokosc sekcji                |
| `patternType`      | `'rebar'`, `'grid'`, `'dots'`, `'none'`    | Wzor w tle                     |
| `showDecorations`  | `true`, `false`                            | Dekoracyjne kwadraty           |
| `showScrollIndicator` | `true`, `false`                         | Strzalka "scroll" na dole      |
| `buttonVariant`    | `'default'`, `'shadow'`, `'outline'`       | Styl przyciskow CTA            |

### Hero Split

Osobny komponent (`hero-split.tsx`) - tekst po lewej, obraz po prawej, 50/50.

### Why Us

| `layoutVariant` | Efekt                          |
|-----------------|--------------------------------|
| `'auto'`        | Automatycznie wg liczby itemow |
| `'grid-3'`      | 3 kolumny                      |
| `'grid-4'`      | 4 kolumny                      |
| `'grid-6'`      | 3x2 grid                       |
| `'cards'`        | 2 kolumny, duze karty          |

### Navigation Logo

| `logo.type`   | Efekt                    |
|----------------|--------------------------|
| `'initials'`   | Kwadrat z literami (NK)  |
| `'text'`       | Tekst                    |
| `'image'`      | Obrazek                  |

---

## Stack technologiczny

| Co               | Czym                        |
|------------------|-----------------------------|
| Framework        | Next.js 16.1 (App Router)   |
| React            | 19.2                        |
| Jezyk            | TypeScript 5 (strict)       |
| Style            | Tailwind CSS v4 + zmienne CSS |
| Animacje         | Framer Motion               |
| UI Components    | Radix UI + shadcn           |
| Ikony            | lucide-react                |
| Fonty            | Inter, Roboto Slab, Bebas Neue, Work Sans |

---

## Komendy

```bash
npm run dev    # Uruchom dev server (localhost:3000)
npm run build  # Build produkcyjny
npm run start  # Uruchom build produkcyjny
npm run lint   # Sprawdz ESLint
```

---

## Builder (planowany rozwoj)

W `src/components/builder/` sa komponenty ktore czytaja config z JSON (`_builder/_config/sites/*.json`).
Docelowo: jeden plik JSON = cala strona. Na razie system sections/content jest glowny.

W `_builder/` jest dokumentacja architektury, schematy JSON i szablony.

---

## Podsumowanie flow

```
1. Uzytkownik wchodzi na /
2. layout.tsx laduje fonty + sprawdza motyw z localStorage
3. page.tsx importuje content z niedziela-klusek/
4. Kazda sekcja dostaje swoj content jako prop
5. Komponenty renderuja dane uzywajac zmiennych CSS z aktywnego motywu
6. Motyw mozna zmienic ThemeSwitcherem (zapisuje do localStorage)
```

Nowa strona = nowy folder w content/ + nowy page.tsx. Komponenty te same.
