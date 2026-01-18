# Schemat dokumentacji sekcji

> Ten plik definiuje strukturę opisu każdej sekcji. Używaj go jako template.

## Struktura pliku sekcji

```markdown
# {Nazwa sekcji}

## Meta
- ID: {id sekcji dla anchor links}
- Tło: {bg-background | bg-black}
- Pozycja: {która z kolei na stronie}

## Warianty
1. {nazwa-wariantu-1} - {krótki opis}
2. {nazwa-wariantu-2} - {krótki opis}

## Anatomia (elementy składowe)

### Wymagane
- {element} - {opis}

### Opcjonalne
- {element} - {opis}

## Props / Konfiguracja
| Prop | Typ | Default | Opis |
|------|-----|---------|------|

## Content Schema (JSON)
{struktura danych}

## Przykład implementacji
{kod}

## Checklist przed użyciem
- [ ] ...
```

---

## Przykład wypełnienia (skrócony)

```markdown
# Hero Section

## Meta
- ID: hero
- Tło: bg-background (wyjątek - może mieć obraz)
- Pozycja: 1 (zawsze pierwsza)

## Warianty
1. hero-image - z obrazem w tle
2. hero-split - tekst lewo, obraz prawo
3. hero-video - z video w tle
4. hero-minimal - tylko tekst, bez obrazu

## Anatomia

### Wymagane
- headline (H1) - główny nagłówek
- cta_primary - główny przycisk akcji

### Opcjonalne
- badge - mały label nad nagłówkiem
- subtitle - opis pod nagłówkiem
- cta_secondary - drugi przycisk
- stats - statystyki na dole
- scroll_indicator - wskaźnik scrollowania

## Props
| Prop | Typ | Default | Opis |
|------|-----|---------|------|
| showBadge | boolean | true | Pokazuj badge |
| showStats | boolean | true | Pokazuj statystyki |
| showScrollIndicator | boolean | true | Wskaźnik scroll |
| backgroundType | 'image' \| 'gradient' \| 'none' | 'image' | Typ tła |
```

---

## Poziomy konfiguracji

### Poziom 1: Wariant sekcji
Wybór głównego layoutu (split, centered, grid...)

### Poziom 2: Elementy do włączenia/wyłączenia
Badge, stats, scroll indicator, corner accents...

### Poziom 3: Style elementów
Która wersja hovera, jaki wariant ikony, czy border...

### Poziom 4: Content
Teksty, obrazy, dane

---

## Jak AI powinno używać schematów

1. **Czytaj Meta** - poznaj kontekst sekcji
2. **Wybierz Wariant** - dopasuj do potrzeb klienta
3. **Przejrzyj Anatomię** - upewnij się że masz wymagane elementy
4. **Skonfiguruj Props** - włącz/wyłącz opcjonalne elementy
5. **Wypełnij Content Schema** - podstaw dane klienta
6. **Sprawdź Checklist** - upewnij się że nic nie pominięto
