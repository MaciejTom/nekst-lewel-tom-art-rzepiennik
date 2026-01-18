# Website Builder Agent

System do generowania stron internetowych z konfiguracji JSON.

## Struktura

```
_builder/
├── README.md                 # Ten plik
├── prompts/                  # Prompty dla AI
│   └── generate-page.md      # Główny prompt do generowania strony
│
├── _config/                  # System konfiguracji
│   ├── _schema/              # JSON Schema definicje
│   │   ├── project.schema.json   # Globalne zmienne (~100)
│   │   └── hero.schema.json      # Hero section (~80)
│   │   └── [TODO: więcej sekcji]
│   └── sites/                # Konfiguracje konkretnych stron
│       └── niedziela-klusek.json # Przykład
│
├── _design-system/           # Dokumentacja dla AI
│   ├── README.md             # Jak AI ma używać systemu
│   ├── tokens/               # Dozwolone wartości
│   │   ├── colors.md
│   │   ├── spacing.md
│   │   ├── typography.md
│   │   └── animations.md
│   ├── patterns/             # Wzorce do reużycia
│   │   ├── hover-effects.md
│   │   ├── overlays.md
│   │   ├── icons.md
│   │   └── borders.md
│   ├── sections/             # Specyfikacje sekcji
│   │   ├── _schema.md
│   │   └── hero.md
│   └── components/           # Małe klocki
│       ├── section-label.md
│       └── stat-display.md
│
└── templates/                # Gotowe szablony TSX (TODO)
    └── [hero-image.tsx, hero-split.tsx, ...]
```

## Jak używać

### 1. Stwórz config dla klienta

```json
// _config/sites/nazwa-firmy.json
{
  "meta": { "name": "Nazwa Firmy", "industry": "construction" },
  "theme": { "colors": { "primary": "#FF5E00" } },
  "sections": [
    { "id": "hero", "variant": "hero-image" },
    { "id": "services", "variant": "services-tabs" }
  ],
  "hero": { ... }
}
```

### 2. Wywołaj AI z promptem

```
Przeczytaj _builder/prompts/generate-page.md
Wygeneruj stronę na podstawie _builder/_config/sites/nazwa-firmy.json
```

### 3. AI generuje kod

AI czyta:
- Config klienta (co ma być na stronie)
- Schema (jakie opcje są dostępne)
- Design system (jakie wartości są dozwolone)
- Patterns (jak implementować hover, overlay, etc.)

I produkuje gotowe komponenty TSX.

## Hierarchia zmiennych

```
POZIOM 1: PROJEKT (globalne)
├── meta.name, theme.colors.primary, layout.containerWidth

POZIOM 2: SEKCJA
├── hero.variant, hero.badge.show, hero.stats.columns

POZIOM 3: ELEMENT
├── hero.cta.primary.style.variant, hero.cta.primary.icon.name

POZIOM 4: SZCZEGÓŁ
├── hero.cta.primary.hover.background, hero.cta.primary.icon.animation
```

## TODO

- [ ] Schematy: services, portfolio, faq, contact, footer, process, why-us
- [ ] Templates TSX dla każdego wariantu
- [ ] Generator CLI: `npx builder generate --config=firma.json`
- [ ] Walidacja configu względem schema
- [ ] Preview mode

## Branże wspierane

- `construction` - firmy budowlane, żelbet (ciemny industrial)
- `services` - usługi remontowe, hydraulika (jasny, przyjazny)
- `manufacturing` - produkcja (TODO)
- `real-estate` - nieruchomości (TODO)
