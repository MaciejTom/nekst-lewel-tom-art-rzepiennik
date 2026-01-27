# Wireframe Agent — Instrukcje

## Co to jest

System do konwersji prototypów HTML (ze Stitch, Google AI Studio itp.) na neutralne, reużywalne wireframe'y, które później można ostylować pod dowolnego klienta.

## Workflow

```
HTML prototype (Stitch)
        ↓
   [1] WIREFRAME — neutralny layout (ten dokument)
        ↓
   [2] DECORATION SPEC — zapisane dekoracje z oryginału (specs/*.md)
        ↓
   [3] STYLING — wireframe + content.md + globals.css + spec → produkcyjny komponent
```

**WAZNE:** Po kazdej zmianie (nowy wireframe, nowy styled, nowy spec) zaktualizuj `src/agent/wireframe/SECTIONS.md`.

---

## Faza 1: HTML → Wireframe

### Input
Surowy HTML — sekcja strony z prototypu.

### Output — 3 pliki

```
src/types/{name}.ts                              — interfejs TypeScript
src/content/wireframe/{name}.ts                   — placeholder content
src/components/wireframe/{name}-wireframe.tsx      — komponent wireframe
```

### Konwencje kodu

```tsx
import type { TypeName } from "@/types"
import { ImageIcon } from "lucide-react"

const w = {                              // ← ZAWSZE "w", nie "s"
  section: "bg-background py-24",
  container: "container mx-auto px-6",
  // ...pogrupowane: header, grid, card, cta
}

interface Props {
  content: TypeName
}

export function NameWireframe({ content }: Props) {
  // ...
}
```

- Brak `"use client"`
- Brak `framer-motion`, `next/image`
- Jedyny dozwolony import ikon: `lucide-react` (ImageIcon jako placeholder)

### Dozwolone tokeny kolorów

| Token | Użycie |
|-------|--------|
| `bg-background` | Tło sekcji |
| `bg-muted` | Placeholdery obrazów, subtle fill |
| `bg-background/90` | Overlay na content (np. overlay cards) |
| `text-foreground` | Tytuły (h2, h3) |
| `text-muted-foreground` | Opisy, labele, body text |
| `text-muted-foreground/30` | Ikony placeholder |
| `text-muted-foreground/50` | Tekst placeholder, labele |
| `border-border` | Wszystkie bordery — **zawsze `border-dashed`** |

### ZAKAZANE w wireframe

- `primary`, `secondary`, `accent` (kolory brandowe)
- `shadow-*` (cienie)
- `hover:*`, `group-hover:*` (efekty hover)
- `transition-*`, `duration-*` (animacje)
- `transform`, `scale-*`, `translate-*` (transformacje)
- `backdrop-blur-*`, gradienty
- `rounded-xl`, `rounded-full` (zaokrąglenia dekoracyjne)
- `cursor-pointer`

### Wlasciwosci dekoracji (decoration properties)

Niektore elementy WYGLADAJA strukturalnie, ale sa decyzjami dekoracyjnymi.
Wireframe je ZAZNACZA (pokazuje ze cos tu bedzie), ale NIE DEFINIUJE jak.
Spec opisuje mozliwe treatments.

| Element w wireframe | Jak zaznaczony | Mozliwe treatments (w spec) |
|---------------------|----------------|-----------------------------|
| Headline accent line | `border-b-2 border-dashed text-muted-foreground` | inny kolor, inny font, underline, bg highlight, gradient text, brak |
| Badge | `border border-dashed` | border-accent, solid bg, dot+text, rounded |
| Stat value | `text-foreground font-semibold` | text-primary, font-display, font-mono |
| Background image | `bg-muted` + ImageIcon | real image + gradient overlay + pattern |
| CTA variant | `border border-dashed` (oba takie same) | primary solid vs outline, 3D shadow, pill, with icon |
| Icon style | dashed box + "icon" | solid bg, outlined, ghost/transparent, naked |
| Typography font | brak font-* (default sans) | font-display, font-serif, font-mono |

**Zasada:** Wireframe pokazuje GDZIE i CO, spec mowi JAK.

### Zamienniki elementów

#### Obraz → Placeholder

```tsx
<div className="w-full h-full bg-muted flex flex-col items-center justify-center gap-2">
  <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
  <span className="text-xs text-muted-foreground/50">{label}</span>
</div>
```

Label opisuje rolę: `"service 1"`, `"hero"`, `"featured 2x2"`, `"avatar"`, `"logo"`

#### Ikona → Placeholder

```tsx
<div className="w-10 h-10 border border-dashed border-border flex items-center justify-center">
  <span className="text-[10px] text-muted-foreground/50">icon</span>
</div>
```

#### Button / CTA → Placeholder

```tsx
<span className="inline-block border border-dashed border-border px-8 py-4 text-sm text-muted-foreground uppercase tracking-widest">
  {buttonText}
</span>
```

#### Dekoracyjne linie/separatory

```tsx
<div className="w-12 h-px bg-border mt-4" />
```

#### Feature dots

```tsx
<span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 shrink-0" />
```

### Typografia

- **h2 (tytuł sekcji):** `text-4xl font-semibold text-foreground`
- **h3 (tytuł karty/elementu):** `text-lg font-semibold text-foreground`
- **Body/opis:** `text-sm text-muted-foreground leading-relaxed` lub `text-lg`
- **Label/tagline:** `text-xs tracking-widest uppercase text-muted-foreground`
- **Brak `font-serif`** — to jest dekoracja, dodaje się w stylowaniu

### Content — placeholder tekst

- Tytuły sekcji: `"Section Title Goes Here"`
- Tytuły kart: `"Service Title One"`, `"Card Title"`
- Opisy: `"Short description of this service, its value and what the client gets."`
- Features: `"Feature point one"`, `"Feature point two"`
- Tagline: `"SECTION TAGLINE"`
- CTA: `"Call to Action"`, `"Looking for something else?"`
- Stats: `"00+"`, `"Label"`

### Co ZACHOWAĆ z HTML

1. **Grid/flex structure** — breakpointy (lg/md/sm), kolumny, gap
2. **Proporcje** — aspect ratio, heights (h-[500px], aspect-square)
3. **Hierarchia treści** — co jest h2 vs h3 vs p vs ul
4. **Wzorce** — alternating left/right, flex-wrap 3+2, mosaic grid
5. **Struktura wewnętrzna** — kolejność elementów w karcie
6. **Responsywność** — mobile-first breakpoints

### Co USUNĄĆ z HTML

1. Kolory brandowe (primary, red, navy)
2. Cienie (shadow-lg, shadow-2xl)
3. Hover efekty (hover:shadow, group-hover:scale)
4. Animacje (transition, duration, transform)
5. Gradienty (gradient-to-t, from-color)
6. Dekoracyjne obramowania (border-primary/20 offset)
7. Backdrop blur, opacity effects
8. Zaokrąglenia dekoracyjne (rounded-xl → pomiń)
9. Real images (→ ImageIcon placeholder)
10. Ikony Material Symbols (→ dashed box placeholder)

---

## Faza 2: Ekstrakcja dekoracji

Przy każdej konwersji HTML → wireframe, zapisz osobny plik w `src/agent/wireframe/specs/{name}.md` z opisem WSZYSTKICH dekoracji z oryginalnego HTML.

### Co zapisać w spec

Dla każdej kategorii elementu:

1. **Klasy CSS** — dokładne klasy Tailwind z oryginału
2. **Hover/focus** — co się dzieje na interakcji
3. **Transition** — jakie animacje, timing
4. **Kolory** — gdzie idzie primary, secondary (jako tokeny, nie hex)
5. **Zaokrąglenia** — jaki border-radius
6. **Cienie** — jakie shadow
7. **Typografia** — font-family, weight, size

### Kategorie elementów w spec

- Section (tło, gradient overlay)
- Card container
- Image treatment
- Icon treatment
- Title typography
- Description typography
- Feature list
- Decorative elements (linie, separatory, border offsets)
- Button/CTA
- Hover effects (osobno, jako grupa)

### Format pliku spec

```md
# {Nazwa} — Decoration Spec

## Layout Pattern
{Opis layoutu: overlay cards, alternating rows, grid itp.}

## Wireframe
`src/components/wireframe/{name}-wireframe.tsx`

## Dekoracje

### Card
- Base: `rounded-xl overflow-hidden shadow-lg`
- Hover: `hover:shadow-2xl transition-all duration-500`

### Image
- ...
```

---

## Faza 3: Stylowanie wireframe'a

Kiedy user ma content + styl, bierze wireframe i mówi jak go ostylować.

### Input

1. Wireframe component (z `src/components/wireframe/`)
2. Decoration spec (z `src/agent/wireframe/specs/`) — opcjonalnie
3. `globals.css` — tokeny klienta (kolory, fonty)
4. Content data (teksty, zdjęcia)
5. Wskazówki stylu (np. "industrial", "warm", "minimalist")

### Output

```
src/components/sections/{name}-section.tsx  — stylowany komponent
src/content/{client}/{name}.ts              — content klienta
```

### Proces

1. Skopiuj wireframe jako bazę
2. Zamień `const w =` na `const s =`
3. Aplikuj dekoracje z spec (lub nowe wg wskazówek)
4. Zamień ImageIcon → `<img>` lub `next/image`
5. Zamień icon placeholders → Material Symbols (lub Lucide)
6. Zamień button placeholders → prawdziwe buttony
7. Dodaj `font-serif` na tytuły (jeśli theme tego wymaga)
8. Podmień content na dane klienta
9. Dodaj `"use client"` jeśli potrzeba (np. framer-motion)

---

## Referencja: oryginalne HTML (Stitch)

| Oryginał | Layout | Plik |
|----------|--------|------|
| Hero Fullscreen | Full-screen hero, badge + headline + CTA + stats + scroll | `src/agent/wireframe/originals/hero-fullscreen.tsx` |
| Overlay Cards | Tall cards z image bg, gradient, hover | `src/agent/wireframe/originals/overlay-cards.html` |
| Editorial Alternating | Alternating image+text rows z step badges | `src/agent/wireframe/originals/editorial-alternating.html` |

Każdy oryginał ma komentarz na górze wskazujący powiązany wireframe i spec.

## Referencja: istniejące wireframe'y

| Wireframe | Layout | Plik |
|-----------|--------|------|
| HeroWireframe | Full-screen, badge + 3-line headline + CTA + stats + scroll indicator | `src/components/wireframe/hero-wireframe.tsx` |
| PortfolioWireframe | Mosaic grid (featured 2x2 + normal 1x1 + wide 2x1) | `src/components/wireframe/portfolio-wireframe.tsx` |
| ServicesOverlayWireframe | Overlay cards flex-wrap 3+2, image bg + content overlay | `src/components/wireframe/services-overlay-wireframe.tsx` |
| ServicesEditorialWireframe | Alternating 50/50 image+text rows, step badges | `src/components/wireframe/services-editorial-wireframe.tsx` |

## Referencja: istniejące specs

| Spec | Layout | Plik |
|------|--------|------|
| Hero Fullscreen | Full-screen hero, rebar pattern, geometric decorations, stagger animations | `src/agent/wireframe/specs/hero-fullscreen.md` |
| Overlay Cards | Tall cards with image bg, gradient, hover effects | `src/agent/wireframe/specs/overlay-cards.md` |
| Editorial Alternating | Alternating image+text rows with decorative borders | `src/agent/wireframe/specs/editorial-alternating.md` |
