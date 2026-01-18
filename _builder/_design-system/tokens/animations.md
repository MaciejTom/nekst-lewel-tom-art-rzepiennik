# Tokeny animacji

> ZASADA: Używaj TYLKO czasów i easingów z tej listy. Spójność animacji = profesjonalizm.

## Duration (czas trwania)

| Token | Klasa | Wartość | Użycie |
|-------|-------|---------|--------|
| fast | `duration-200` | 200ms | Micro-interactions (ikony, tooltips) |
| normal | `duration-300` | 300ms | Kolory, opacity, bordery |
| slow | `duration-500` | 500ms | Transform, scale, większe zmiany |
| slower | `duration-700` | 700ms | Wyjątkowo - duże obrazy (unikaj) |

### Zasada: Szybsze = mniejsze zmiany
```tsx
// Zmiana koloru tekstu
transition-colors duration-300

// Skalowanie obrazu
transition-transform duration-500

// Zmiana opacity
transition-opacity duration-300
```

## Transition properties

| Klasa | Animuje | Użycie |
|-------|---------|--------|
| `transition-colors` | color, background-color, border-color | Hover na tekście, borderach |
| `transition-transform` | transform (scale, rotate, translate) | Obrazy, ikony |
| `transition-opacity` | opacity | Elementy pojawiające się |
| `transition-all` | wszystko | Złożone animacje (ostrożnie) |

## Standardowe kombinacje

### Karta z hover:
```tsx
<div className="
  border border-border
  hover:border-primary/30
  transition-colors
  duration-300
">
```

### Obraz w karcie:
```tsx
<Image className="
  transition-transform
  duration-500
  group-hover:scale-105
"/>
```

### Tekst hover:
```tsx
<h3 className="
  text-white
  group-hover:text-primary
  transition-colors
  duration-300
">
```

### Element pojawiający się:
```tsx
<div className="
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-300
">
```

## Scale (skalowanie)

| Token | Klasa | Użycie |
|-------|-------|--------|
| subtle | `scale-105` | Obrazy, karty - standardowy hover |
| medium | `scale-110` | UNIKAJ - zbyt agresywne |

```tsx
// ✅ Dobrze
group-hover:scale-105

// ❌ Za dużo
group-hover:scale-110
```

## Framer Motion - wejście elementów

### Standard dla kart w gridzie:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1, duration: 0.5 }}
>
```

### Parametry:
| Parametr | Wartość | Znaczenie |
|----------|---------|-----------|
| `y: 20` | 20px | Odległość startu (subtelna) |
| `delay: index * 0.1` | 100ms per element | Staggered animation |
| `duration: 0.5` | 500ms | Czas animacji |
| `once: true` | boolean | Animuj tylko raz |

### Wariant dla większych elementów:
```tsx
transition={{ delay: index * 0.15, duration: 0.5 }}  // wolniejszy stagger
```

## CSS Keyframes (Hero)

```css
.animate-fade-up {
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
```

## Animate pulse (dla akcentów)

```tsx
// Pulsująca kropka przy labelach
<div className="w-2 h-2 bg-primary animate-pulse" />
```

## ZAKAZANE

```tsx
// ❌ Nie używaj:
duration-150    // → za szybkie, użyj duration-200
duration-1000   // → za wolne
scale-110       // → za agresywne, użyj scale-105
ease-in-out     // → Tailwind default jest OK
```
