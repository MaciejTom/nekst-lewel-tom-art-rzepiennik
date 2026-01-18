# Hero Section

## Meta
- **ID**: `hero`
- **Tło**: `bg-background` (może mieć obraz w tle z overlay)
- **Pozycja**: 1 (zawsze pierwsza sekcja)
- **Padding**: `py-32` (wyjątek - większy niż standardowy)
- **Min-height**: `min-h-screen`

---

## Warianty

### 1. `hero-image` (obecny)
Pełnoekranowy z obrazem w tle, tekst po lewej.
- Obraz: full-screen background z gradient overlay
- Tekst: wyrównany do lewej, max-w-4xl
- Najlepszy dla: wizualne branże (budownictwo, architektura)

### 2. `hero-split`
Dwie kolumny - tekst lewo, obraz/grafika prawo.
- Grid: `lg:grid-cols-2`
- Najlepszy dla: produkty, SaaS

### 3. `hero-centered`
Tekst wycentrowany, bez obrazu lub z subtelnymi elementami.
- Tekst: `text-center max-w-3xl mx-auto`
- Najlepszy dla: minimalistyczne brandy

### 4. `hero-video`
Video w tle zamiast obrazu.
- Video: autoplay, muted, loop
- Najlepszy dla: dynamiczne branże

---

## Anatomia

### Wymagane elementy
| Element | Klasa/Styl | Opis |
|---------|------------|------|
| `headline` | `text-5xl sm:text-6xl lg:text-8xl font-bold text-white` | Główny nagłówek H1 |
| `cta_primary` | Button `bg-primary text-white` | Główny CTA |

### Opcjonalne elementy
| Element | Klasa/Styl | Opis |
|---------|------------|------|
| `badge` | `px-4 py-1.5 border border-primary/50 text-primary text-sm` | Label nad nagłówkiem |
| `subtitle` | `text-lg sm:text-xl text-muted-foreground max-w-2xl` | Opis pod nagłówkiem |
| `cta_secondary` | Button `variant="outline"` | Drugi CTA |
| `stats` | Grid 3 kolumny | Statystyki na dole |
| `scroll_indicator` | Animowana strzałka/linia | Wskaźnik scrollowania |
| `background_overlay` | Grid pattern + gradient | Nakładka na obraz |
| `decorative_elements` | Geometryczne kształty | Elementy dekoracyjne |

---

## Props / Konfiguracja

| Prop | Typ | Default | Opis |
|------|-----|---------|------|
| `showBadge` | boolean | `true` | Wyświetl badge nad nagłówkiem |
| `showSubtitle` | boolean | `true` | Wyświetl opis |
| `showStats` | boolean | `true` | Wyświetl statystyki |
| `showScrollIndicator` | boolean | `true` | Wyświetl wskaźnik scroll |
| `showDecorativeElements` | boolean | `true` | Geometryczne dekoracje |
| `backgroundType` | `'image' \| 'gradient' \| 'none'` | `'image'` | Typ tła |
| `backgroundImage` | string | - | URL obrazu tła |
| `gridOverlay` | boolean | `true` | Kratka na tle |
| `ctaStyle` | `'buttons' \| 'phone' \| 'both'` | `'both'` | Styl CTA |
| `statsCount` | number | `3` | Ile statystyk pokazać |
| `headlineAccentWord` | string | - | Które słowo wyróżnić kolorem |
| `headlineAccentStyle` | `'primary' \| 'underline' \| 'both'` | `'primary'` | Jak wyróżnić słowo |

---

## Content Schema (JSON)

```json
{
  "hero": {
    "badge": "KONSTRUKCJE ŻELBETOWE",
    "headline": {
      "lines": [
        "ŻELBET DLA BUDOWNICTWA",
        "PRZEMYSŁOWEGO",
        "I MIESZKANIOWEGO"
      ],
      "accentLine": 1,
      "accentStyle": "primary"
    },
    "subtitle": "Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów gotowy do wejścia na budowę. Tarnów i 4 województwa południowej Polski.",
    "cta": {
      "primary": {
        "text": "Zadzwoń: 696 092 434",
        "href": "tel:696092434",
        "icon": "ArrowRight"
      },
      "secondary": {
        "text": "Wyślij projekt do wyceny",
        "action": "scrollToContact"
      }
    },
    "stats": [
      { "value": "4", "label": "Województwa zasięgu" },
      { "value": "24h", "label": "Wycena projektu" },
      { "value": "100%", "label": "Własny zespół specjalistów" }
    ],
    "background": {
      "image": "/hero-construction.jpg",
      "overlay": "gradient",
      "gridPattern": true
    }
  }
}
```

---

## Przykład implementacji

```tsx
<section className="hero-section min-h-screen flex items-center relative overflow-hidden bg-background">
  {/* Background layers */}
  <div className="absolute inset-0 rebar-pattern opacity-30" />
  <div className="absolute top-1/4 right-0 w-64 h-64 border border-primary/20 transform rotate-45 translate-x-32" />

  <div className="container px-[5%] py-32 relative z-10">
    <div className="max-w-4xl">

      {/* Badge */}
      {showBadge && (
        <span className="inline-block px-4 py-1.5 border border-primary/50 text-primary text-sm font-medium mb-6 tracking-wider">
          {content.badge}
        </span>
      )}

      {/* Headline */}
      <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-none mb-6 tracking-wide">
        {content.headline.lines.map((line, i) => (
          <span key={i} className={i === content.headline.accentLine ? "text-primary" : "text-white"}>
            {line}<br/>
          </span>
        ))}
      </h1>

      {/* Subtitle */}
      {showSubtitle && (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10">
          {content.subtitle}
        </p>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary text-white">
          <a href={content.cta.primary.href}>
            {content.cta.primary.text}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </Button>
        <Button variant="outline" onClick={handleSecondaryClick}>
          {content.cta.secondary.text}
        </Button>
      </div>

      {/* Stats */}
      {showStats && (
        <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border max-w-2xl">
          {content.stats.map((stat, i) => (
            <div key={i}>
              <div className="font-display text-2xl sm:text-3xl text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

  {/* Scroll indicator */}
  {showScrollIndicator && (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
      <span className="text-xs tracking-widest">SCROLL</span>
      <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
    </div>
  )}
</section>
```

---

## Checklist przed użyciem

### Wymagane
- [ ] Headline jest krótki i czytelny (max 3 linie)
- [ ] CTA primary ma jasne wezwanie do akcji
- [ ] Kontrast tekstu na tle jest wystarczający

### Wariant z obrazem
- [ ] Obraz ma odpowiedni overlay (czytelność tekstu)
- [ ] Obraz jest zoptymalizowany (WebP, odpowiedni rozmiar)
- [ ] Grid pattern jest włączony

### Responsywność
- [ ] Headline skaluje się poprawnie (text-5xl → lg:text-8xl)
- [ ] CTA układają się pionowo na mobile
- [ ] Stats są czytelne na mobile

### Animacje
- [ ] Elementy mają staggered animation (delay)
- [ ] Scroll indicator jest animowany
