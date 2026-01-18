# Wzorce borderów

> ZASADA: Bordery tworzą strukturę. Używaj ich konsekwentnie.

## 1. Standardowy border karty

```tsx
<div className="border border-border">
```

**Użycie**: Wszystkie karty, boxy, kontenery

---

## 2. Border z hover

```tsx
<div className="border border-border hover:border-primary/30 transition-colors duration-300">
```

**Użycie**: Interaktywne karty, elementy klikalne

---

## 3. Active state border (tabs, nawigacja)

```tsx
// Active
<div className="border-l-4 border-primary">

// Inactive
<div className="border-l-4 border-transparent">
```

**Użycie**: Nawigacja, tabs, aktywne elementy

---

## 4. Separator (pionowy)

```tsx
<div className="w-px h-12 bg-border" />
```

**Użycie**: Między statystykami, grupami elementów

---

## 5. Separator (poziomy)

```tsx
<div className="border-t border-border" />

// Gradient separator
<div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
```

**Użycie**: Pod nagłówkiem sekcji, między grupami

---

## 6. Border-bottom dla podkreślenia

```tsx
// Statyczny akcent
<span className="border-b-4 border-primary pb-2">
  SŁOWO KLUCZOWE
</span>

// Link z podkreśleniem
<a className="border-b border-primary pb-1 hover:text-primary transition-colors">
  Link
</a>
```

**Użycie**: Wyróżnienie słowa kluczowego, linki

---

## 7. Corner accents (dekoracyjne)

```tsx
{/* Małe - subtelne */}
<div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/30" />

{/* Duże - wyraźne */}
<div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
```

**Użycie**: Ozdobne elementy na kartach, zdjęciach

---

## Kolory borderów

| Token | Klasa | Użycie |
|-------|-------|--------|
| Default | `border-border` | Standardowy |
| Hover | `border-primary/30` | Po najechaniu |
| Active | `border-primary` | Aktywny element |
| Subtle | `border-white/10` | Bardzo subtelny |
| Accent | `border-primary/40` | Ikony ghost |

---

## Grubości

| Token | Klasa | Użycie |
|-------|-------|--------|
| Default | `border` (1px) | Standardowy |
| Medium | `border-2` | Akcenty, corners |
| Thick | `border-4` | Silne wyróżnienie (border-l-4) |

---

## Wzorzec karty kompletny

```tsx
<div className="
  bg-card
  border border-border
  hover:border-primary/30
  transition-colors duration-300
  p-6
">
  <h3 className="text-white">Tytuł</h3>
  <p className="text-muted-foreground">Opis</p>
</div>
```

---

## Wzorzec nagłówka sekcji z separatorem

```tsx
<div className="flex items-end justify-between mb-12 border-b border-border pb-8">
  <div>
    <span className="text-primary">/ LABEL</span>
    <h2 className="text-white">TYTUŁ</h2>
  </div>
  <div className="text-right">
    <span className="text-muted-foreground">Info</span>
    <span className="text-primary">WARTOŚĆ</span>
  </div>
</div>
```

---

## ZAKAZANE

```tsx
// ❌ Różne kolory borderów w jednej sekcji
border-zinc-800   // → użyj border-border
border-white/5    // → użyj border-border lub border-white/10

// ❌ Brak hover na interaktywnych kartach
<div className="border border-border">  // → dodaj hover:border-primary/30

// ❌ Border-radius w industrialnym designie
rounded-lg  // → użyj rounded-sm lub brak (ostre kąty)
```
