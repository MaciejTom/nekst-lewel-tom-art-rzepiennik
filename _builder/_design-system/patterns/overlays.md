# Wzorce overlays (nakładki)

> ZASADA: Każda sekcja POWINNA mieć grid overlay. Utrzymuj spójność rozmiaru i opacity.

## 1. Grid Pattern (kratka) - STANDARD

```tsx
<div
  className="absolute inset-0 opacity-[0.07]"
  style={{
    backgroundImage: `linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)`,
    backgroundSize: '40px 40px'
  }}
/>
```

### Parametry standardowe:
| Parametr | Wartość | Znaczenie |
|----------|---------|-----------|
| Kolor linii | `#27272A` | neutral-800 |
| Opacity | `0.07` | Subtelna, nie przeszkadza |
| Rozmiar | `40px 40px` | Standardowy grid |

### Wariant dla kart (wewnątrz obrazu):
```tsx
<div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
```

---

## 2. Gradient overlay (na obrazach)

### Od dołu (dla contentu na dole):
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
```

### Od dołu (lżejszy):
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
```

### Od góry i dołu (dla contentu na dole z przyciemnieniem góry):
```tsx
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
```

---

## 3. Hero overlay (złożony)

```tsx
{/* Główny gradient + grid + obraz */}
.hero-section {
  background-image:
    linear-gradient(to bottom, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.8) 60%, rgba(5,5,5,1) 100%),
    repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px),
    url('/hero-image.jpg');
}
```

---

## 4. Rebar pattern (specjalny dla Hero)

```tsx
<div className="absolute inset-0 rebar-pattern opacity-30" />
```

```css
.rebar-pattern {
  background-image:
    repeating-linear-gradient(90deg, transparent 0px, transparent 20px, rgba(255,94,0,0.1) 20px, rgba(255,94,0,0.1) 21px),
    repeating-linear-gradient(0deg, transparent 0px, transparent 20px, rgba(255,94,0,0.1) 20px, rgba(255,94,0,0.1) 21px);
}
```

---

## Kiedy używać którego

| Sekcja | Overlay |
|--------|---------|
| Hero | Złożony gradient + rebar pattern |
| Sekcja bg-background | Grid pattern opacity-[0.07] |
| Sekcja bg-black | Grid pattern opacity-[0.07] |
| Karta z obrazem | Gradient to-t from-black |
| Karta bez obrazu | Brak overlay |

---

## Z-index hierarchy

```tsx
<section className="relative overflow-hidden">
  {/* 1. Grid pattern - najniżej */}
  <div className="absolute inset-0 opacity-[0.07] z-0" />

  {/* 2. Content - wyżej */}
  <div className="relative z-10">
    ...
  </div>
</section>
```

---

## ZAKAZANE

```tsx
// ❌ Różne rozmiary grida
bg-[length:20px_20px]  // → użyj 40px_40px
bg-[length:60px_60px]  // → użyj 40px_40px

// ❌ Zbyt wysoka opacity
opacity-[0.15]  // → użyj 0.07

// ❌ Brak overflow-hidden na sekcji
<section>  // → dodaj overflow-hidden
```
