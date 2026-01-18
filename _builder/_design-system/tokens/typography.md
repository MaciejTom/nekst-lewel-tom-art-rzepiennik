# Tokeny typografii

> ZASADA: Używaj TYLKO klas z tej listy. Zachowuj hierarchię wizualną.

## Fonty

| Token | CSS Variable | Font | Użycie |
|-------|--------------|------|--------|
| display | `font-display` | Bebas Neue | Nagłówki H1, H2, duże tytuły |
| sans | `font-work` | Work Sans | Body text, opisy |
| mono | `font-mono` | System mono | Labels, kody, numery |

### Automatyczne przypisanie (globals.css):
```css
h1, h2, h3 { font-family: var(--font-display); }
body, h4, h5, h6, p { font-family: var(--font-work); }
```

## Rozmiary tekstu

| Token | Klasa | Rozmiar | Użycie |
|-------|-------|---------|--------|
| heading-xl | `text-5xl` | 48px | H2 desktop |
| heading-lg | `text-4xl` | 36px | H2 mobile |
| heading-md | `text-3xl` | 30px | H3, tytuły kart dużych |
| heading-sm | `text-2xl` | 24px | H3, tytuły kart |
| heading-xs | `text-xl` | 20px | H4, tytuły małych elementów |
| body-lg | `text-lg` | 18px | Intro text, ważne opisy |
| body | `text-base` | 16px | Standardowy body text |
| body-sm | `text-sm` | 14px | Pomocniczy tekst, metadata |
| body-xs | `text-xs` | 12px | Labels, tagi, drobne info |

## Wzorce responsywne

### Nagłówek sekcji (H2):
```tsx
<h2 className="text-4xl md:text-5xl font-bold text-white">
  TYTUŁ <span className="text-primary">AKCENT</span>
</h2>
```

### Tytuł karty (H3):
```tsx
<h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
  Tytuł karty
</h3>
```

### Hero headline:
```tsx
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white">
  GŁÓWNY NAGŁÓWEK
</h1>
```

## Wagi fontów

| Token | Klasa | Użycie |
|-------|-------|--------|
| bold | `font-bold` | Nagłówki, tytuły, CTA |
| semibold | `font-semibold` | Podtytuły, ważne elementy |
| medium | `font-medium` | Linki, buttony, labels |
| normal | (default) | Body text |

## Tracking (letter-spacing)

| Token | Klasa | Użycie |
|-------|-------|--------|
| wide | `tracking-wide` | Nagłówki display |
| wider | `tracking-wider` | Uppercase labels |
| widest | `tracking-widest` | Section labels "/ USŁUGI" |

## Line height

| Token | Klasa | Użycie |
|-------|-------|--------|
| tight | `leading-tight` | Nagłówki wieloliniowe |
| none | `leading-none` | Logo, pojedyncze linie |
| relaxed | `leading-relaxed` | Body text, opisy |

## Wzorce tekstowe

### Section label:
```tsx
<span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">
  / USŁUGI
</span>
```

### Body intro:
```tsx
<p className="text-muted-foreground text-lg leading-relaxed">
  Opis sekcji z dłuższym tekstem...
</p>
```

### Metadata:
```tsx
<span className="text-xs text-muted-foreground uppercase tracking-wider">
  Kategoria
</span>
```

### Statystyka:
```tsx
<div className="text-3xl font-bold text-white">45+</div>
<div className="text-xs text-muted-foreground uppercase">Zrealizowanych projektów</div>
```

## ZAKAZANE

```tsx
// ❌ Nie używaj:
text-[18px]     // → użyj text-lg
font-light      // → rzadko potrzebne, unikaj
tracking-tight  // → używaj tylko świadomie dla display
```
