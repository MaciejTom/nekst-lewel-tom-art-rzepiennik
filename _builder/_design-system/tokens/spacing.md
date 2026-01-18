# Tokeny odstępów (Spacing)

> ZASADA: Używaj TYLKO wartości z tej listy. Zachowuj spójność w całym projekcie.

## Padding sekcji (pionowy)

| Token | Klasa | Wartość | Użycie |
|-------|-------|---------|--------|
| section-default | `py-24` | 96px | Standardowy padding wszystkich sekcji |
| section-hero | `py-32` | 128px | Hero - może być większy |
| section-footer | `py-12` | 48px | Footer - mniejszy |

### Przykład:
```tsx
<section className="py-24">  // ✅ Standardowa sekcja
<section className="py-32">  // ✅ Hero
<section className="py-16">  // ❌ Niestandardowy - unikaj
```

## Gap (odstępy między elementami)

| Token | Klasa | Wartość | Użycie |
|-------|-------|---------|--------|
| gap-lg | `gap-8` | 32px | Duże odstępy (między kolumnami) |
| gap-md | `gap-6` | 24px | Standardowy gap między kartami |
| gap-sm | `gap-4` | 16px | Mniejsze odstępy |
| gap-xs | `gap-2` | 8px | Minimalne odstępy (np. ikona + tekst) |

### Przykłady:
```tsx
// Grid kart
<div className="grid grid-cols-4 gap-6">

// Elementy w karcie
<div className="flex items-center gap-4">

// Ikona + tekst
<div className="flex items-center gap-2">
```

## Padding wewnętrzny (elementy)

| Token | Klasa | Wartość | Użycie |
|-------|-------|---------|--------|
| card-lg | `p-8` | 32px | Duże karty |
| card-md | `p-6` | 24px | Standardowe karty |
| card-sm | `p-4` | 16px | Małe karty, boxy |
| button | `px-8 py-4` | 32px/16px | Duże buttony |
| button-sm | `px-4 py-2` | 16px/8px | Małe buttony |

## Margin (marginesy)

| Token | Klasa | Wartość | Użycie |
|-------|-------|---------|--------|
| header-bottom | `mb-16` | 64px | Odstęp nagłówka sekcji od contentu |
| header-bottom-sm | `mb-12` | 48px | Mniejszy odstęp nagłówka |
| title-bottom | `mb-6` | 24px | Odstęp tytułu od opisu |
| text-bottom | `mb-4` | 16px | Odstęp między paragrafami |

### Wzorzec nagłówka sekcji:
```tsx
<div className="mb-16">           // Odstęp od contentu
  <span className="mb-4 block">   // Label "/ USŁUGI"
    / USŁUGI
  </span>
  <h2 className="mb-6">           // Tytuł
    ZAKRES ROBÓT
  </h2>
  <p>                             // Opis (opcjonalny)
    Wykonujemy konstrukcje...
  </p>
</div>
```

## Container

```tsx
// Standardowy container
<div className="container mx-auto px-6">

// Wąski container (np. FAQ, tekst)
<div className="container mx-auto px-6 max-w-4xl">
```

## ZAKAZANE

```tsx
// ❌ Niestandardowe wartości
py-20    // → użyj py-24
gap-5    // → użyj gap-4 lub gap-6
p-5      // → użyj p-4 lub p-6
mb-10    // → użyj mb-8 lub mb-12
```
