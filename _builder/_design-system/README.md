# Design System dla AI

> Ten folder zawiera specyfikację design systemu zoptymalizowaną pod generowanie przez AI.
> Czytaj pliki w kolejności: README → tokens/ → patterns/ → sections/

## Cel systemu

Umożliwić AI (Claude Code) generowanie spójnych, profesjonalnych sekcji stron internetowych poprzez:
1. Zamknięte listy dozwolonych wartości (tokens)
2. Wzorce do reużycia (patterns)
3. Schematy sekcji z wariantami (sections)

## Struktura folderów

```
_design-system/
├── tokens/           # Dozwolone wartości (kolory, spacing, typography)
│   ├── colors.md
│   ├── spacing.md
│   ├── typography.md
│   └── animations.md
│
├── patterns/         # Wzorce wizualne do reużycia
│   ├── hover-effects.md
│   ├── borders.md
│   ├── overlays.md
│   └── icons.md
│
├── sections/         # Specyfikacje sekcji strony
│   ├── _schema.md    # Jak opisywać sekcję
│   ├── hero.md
│   ├── services.md
│   └── ...
│
└── components/       # Małe reużywalne elementy
    ├── section-label.md
    └── ...
```

## Jak AI powinno używać tego systemu

### Przy generowaniu nowej sekcji:

1. **Przeczytaj tokens/** - poznaj dozwolone wartości
2. **Przeczytaj patterns/** - poznaj standardowe wzorce
3. **Przeczytaj sections/{nazwa}.md** - poznaj schemat konkretnej sekcji
4. **Generuj kod** używając TYLKO wartości z tokenów i wzorców z patterns

### Zasady:

- **NIGDY** nie wymyślaj własnych kolorów - użyj `tokens/colors.md`
- **NIGDY** nie wymyślaj własnych odstępów - użyj `tokens/spacing.md`
- **ZAWSZE** używaj wzorców hover z `patterns/hover-effects.md`
- **ZAWSZE** sprawdź czy sekcja ma warianty w `sections/`

## Quick Reference - Najważniejsze wartości

```tsx
// Kolory (z Tailwind CSS variables)
text-white              // główny tekst
text-muted-foreground   // tekst pomocniczy
text-primary            // akcent (pomarańczowy)
bg-background           // tło ciemne (#0a0a0a)
bg-black                // tło czarne
bg-card                 // tło kart (#171717)
border-border           // bordery (#262626)

// Spacing sekcji
py-24                   // standardowy padding sekcji (96px)
py-32                   // hero padding (128px)
gap-6                   // odstęp między kartami
gap-4                   // mniejsze odstępy

// Typography
text-4xl md:text-5xl    // nagłówki H2 sekcji
text-lg                 // intro text
text-base               // body text
text-sm                 // metadata, labels

// Hover (standard)
hover:border-primary/30 transition-colors duration-300
group-hover:scale-105 transition-transform duration-500
group-hover:text-primary transition-colors duration-300
```

## Kontekst projektu

- **Framework**: Next.js 16 + Tailwind CSS 4
- **UI Library**: shadcn/ui
- **Theme**: TweakCN (konfiguracja w globals.css)
- **Animacje**: Framer Motion
- **Branża docelowa**: Budownictwo, usługi B2B
