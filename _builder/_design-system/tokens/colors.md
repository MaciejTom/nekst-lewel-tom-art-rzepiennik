# Tokeny kolorów

> ZASADA: Używaj TYLKO klas z tej listy. Nigdy nie używaj wartości hex bezpośrednio w komponentach.

## Źródło prawdy

Wszystkie kolory zdefiniowane w `src/app/globals.css` jako CSS variables.

## Tła (Background)

| Token | Klasa Tailwind | Wartość | Użycie |
|-------|----------------|---------|--------|
| background | `bg-background` | #0a0a0a | Sekcje naprzemiennie (1, 3, 5...) |
| black | `bg-black` | #000000 | Sekcje naprzemiennie (2, 4, 6...) |
| card | `bg-card` | #171717 | Karty, boxy |
| card-transparent | `bg-card/50` lub `bg-card/30` | rgba | Karty z przezroczystością |
| primary | `bg-primary` | #FF5E00 | Buttony, akcenty |
| primary-transparent | `bg-primary/20` | rgba | Tła ikon, badge |

### Wzorzec naprzemiennych teł:
```
Hero        → bg-background (wyjątek - może być unikalny)
Why Us      → bg-black
Services    → bg-background
For Whom    → bg-black
Process     → bg-background
Portfolio   → bg-black
FAQ         → bg-background
Contact     → bg-black
Footer      → bg-background
```

## Tekst (Text)

| Token | Klasa Tailwind | Wartość | Użycie |
|-------|----------------|---------|--------|
| foreground | `text-white` | #FAFAFA | Nagłówki, główny tekst |
| muted | `text-muted-foreground` | #a3a3a3 | Opisy, tekst pomocniczy |
| primary | `text-primary` | #FF5E00 | Akcenty, linki, hover |
| black | `text-black` | #000000 | Tekst na primary background |

### Hierarchia tekstu:
```tsx
// Nagłówek sekcji
<h2 className="text-white">TYTUŁ <span className="text-primary">AKCENT</span></h2>

// Lub alternatywnie
<h2 className="text-white">TYTUŁ <span className="text-muted-foreground">SUBTYTUŁ</span></h2>

// Opis
<p className="text-muted-foreground">Opis sekcji...</p>

// Hover na tekście
<span className="text-white group-hover:text-primary transition-colors">
```

## Bordery (Border)

| Token | Klasa Tailwind | Wartość | Użycie |
|-------|----------------|---------|--------|
| border | `border-border` | #262626 | Standardowy border |
| border-hover | `hover:border-primary/30` | rgba | Border po hover |
| border-accent | `border-primary` | #FF5E00 | Wyróżniony border |
| border-subtle | `border-white/10` | rgba | Subtelny border na ciemnym tle |

## ZAKAZANE

```tsx
// ❌ NIE używaj:
bg-zinc-900        // → użyj bg-card
bg-neutral-950     // → użyj bg-background
text-zinc-400      // → użyj text-muted-foreground
text-neutral-400   // → użyj text-muted-foreground
border-zinc-800    // → użyj border-border
border-white/10    // → użyj border-border (chyba że świadomie chcesz subtelniejszy)
#FF5E00            // → użyj bg-primary lub text-primary
```

## Przykład poprawnego użycia

```tsx
<div className="bg-card border border-border hover:border-primary/30 transition-colors">
  <h3 className="text-white group-hover:text-primary transition-colors">
    Tytuł
  </h3>
  <p className="text-muted-foreground">
    Opis elementu
  </p>
</div>
```
