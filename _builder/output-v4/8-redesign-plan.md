# Plan przerobienia sekcji - Niedziela & Kłusek

**Cel:** Przerobić każdą sekcję używając frontend-design skill (Tailwind + shadcn)
**Styl:** INDUSTRIAL - profesjonalny, solidny, budowlany
**Kolory:** Primary #1E3A5F, Accent #D4A84B

---

## Status zdjęć - DONE

| Sekcja | Zdjęcie | Status |
|--------|---------|--------|
| Hero | image.png | ✅ |
| Usługi - Fundamenty | 5.jpg | ✅ |
| Usługi - Ściany | 4.jpg | ✅ |
| Usługi - Stropy | image2.png | ✅ |
| Usługi - Specjalne | 3.jpg | ✅ |
| Realizacje 1 | image.png | ✅ |
| Realizacje 2 | 4.jpg | ✅ |
| Realizacje 3 | 3.jpg | ✅ |
| Realizacje 4 | 5.jpg | ✅ |

---

## Plan przerobienia sekcji

### 1. HERO

**Obecny stan:** Dwukolumnowy layout z tekstem i zdjęciem
**Do poprawy:**
- [ ] Dodać animację fade-in dla tekstu (staggered delay)
- [ ] Badge "Konstrukcje żelbetowe" → złoty akcent (#D4A84B)
- [ ] Highlight słów w H1 ("przemysłowego i mieszkaniowego")
- [ ] Hover effect na przyciskach (scale + shadow)
- [ ] Parallax lub subtle zoom na zdjęciu

**Komponenty shadcn:** Button (już jest)
**Ikony Lucide:** Phone, FileText, MapPin, Users, Clock (już są)

---

### 2. DLACZEGO MY (Why Us / USP)

**Obecny stan:** 4 karty z ikonami Lucide
**Do poprawy:**
- [ ] Większe ikony lub custom AI icons (dwukolorowe)
- [ ] Hover effect - karta podnosi się (translate-y + shadow)
- [ ] Numeracja "01", "02"... w kolorze accent
- [ ] Border-left accent na hover
- [ ] Animacja wejścia kart (staggered)

**Ikony Lucide:**
- Layers (Pełen zakres)
- Users (Własny zespół)
- MapPin (4 województwa)
- Clock (Wycena 24h)

**Alternatywnie:** AI-generated dwukolorowe z `7-ai-prompts.md`

---

### 3. DLA KOGO PRACUJEMY

**Obecny stan:** 4 karty segmentów klientów
**Do poprawy:**
- [ ] Ikony większe, w kółku z tłem accent/20
- [ ] Grid 2x2 desktop, stack mobile
- [ ] Subtle background pattern lub gradient
- [ ] Hover - ikona rotate lub scale

**Ikony Lucide:**
- Landmark (Generalni wykonawcy)
- Building (Deweloperzy)
- Factory (Przemysł)
- Home (Prywatni)

---

### 4. USŁUGI (Services)

**Obecny stan:** 4 karty ze zdjęciami klienta ✅
**Do poprawy:**
- [ ] Overlay gradient na zdjęciach dla czytelności
- [ ] Hover - zdjęcie zoom (scale-105)
- [ ] Badge z kategorią na zdjęciu
- [ ] Check items → accent color
- [ ] Card hover - subtle lift

**Ikony Lucide:** Cuboid, Blocks, Layers3, Cylinder (już są)

---

### 5. JAK PRACUJEMY (Process)

**Obecny stan:** 4 kroki procesu
**Do poprawy:**
- [ ] Timeline/stepper design
- [ ] Numery "01"-"04" w kolorze accent, duże
- [ ] Linia łącząca kroki (dashed)
- [ ] Ikony w kółkach
- [ ] Animacja - kroki pojawiają się po kolei przy scroll

**Ikony Lucide:**
- FileText (Zapytanie)
- Users (Szczegóły)
- HardHat (Realizacja)
- CheckCircle (Odbiór)

---

### 6. REALIZACJE (Portfolio)

**Obecny stan:** 4 karty ze zdjęciami klienta ✅
**Do poprawy:**
- [ ] Hover - overlay z "Zobacz więcej"
- [ ] Scale effect na zdjęciu
- [ ] Masonry lub grid z różnymi rozmiarami
- [ ] Lightbox po kliknięciu (opcjonalnie)
- [ ] Badge kategorii - złoty accent

---

### 7. FAQ

**Obecny stan:** Accordion z shadcn
**Do poprawy:**
- [ ] Active state - left border accent
- [ ] Ikona ChevronDown animowana
- [ ] Większy padding
- [ ] Hover na zamkniętym - tło muted
- [ ] Numeracja pytań "01.", "02."...

---

### 8. KONTAKT

**Obecny stan:** CTA + dane kontaktowe + placeholder mapy
**Do poprawy:**
- [ ] Prawdziwa mapa Google (iframe)
- [ ] Ikony w kółkach accent
- [ ] Hover na kontaktach (underline, color change)
- [ ] CTA button - złoty akcent, duży
- [ ] Background gradient lub pattern

**Ikony Lucide:** Phone, Mail, MapPin, Clock

---

### 9. NAVIGATION

**Obecny stan:** Sticky header z mobile menu
**Do poprawy:**
- [ ] Scroll effect - background blur + shadow
- [ ] Active link indicator
- [ ] Mobile menu animation (slide)
- [ ] Logo styling

---

### 10. FOOTER

**Obecny stan:** 3 kolumny z linkami
**Do poprawy:**
- [ ] Ikony social media
- [ ] Separator linia
- [ ] Copyright rok dynamiczny
- [ ] Hover na linkach - accent color

---

## Kolejność implementacji

1. **Navigation** - jako pierwszy, wpływa na całość
2. **Hero** - najważniejsza sekcja, pierwsze wrażenie
3. **Dlaczego my** - USP, kluczowe dla konwersji
4. **Usługi** - już mają zdjęcia, potrzebują polish
5. **Realizacje** - już mają zdjęcia, potrzebują hover
6. **Jak pracujemy** - timeline redesign
7. **Dla kogo** - proste poprawki
8. **FAQ** - accordion polish
9. **Kontakt** - mapa + CTA
10. **Footer** - ostatni szlif

---

## Efekty i animacje do dodania

```css
/* Hover lift */
.card-hover {
  @apply transition-all duration-300;
  @apply hover:-translate-y-1 hover:shadow-lg;
}

/* Image zoom */
.image-zoom {
  @apply transition-transform duration-500;
  @apply group-hover:scale-105;
}

/* Staggered fade-in */
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to { opacity: 1; transform: translateY(0); }
  from { transform: translateY(20px); }
}

/* Accent border on hover */
.accent-border-hover {
  @apply border-l-4 border-transparent;
  @apply hover:border-accent;
}
```

---

## Checklist końcowy

- [ ] Wszystkie sekcje mają zdjęcia klienta
- [ ] Ikony Lucide w spójnym stylu
- [ ] Hover effects na kartach
- [ ] Animacje wejścia
- [ ] Mobile responsive
- [ ] Dark mode (opcjonalnie)
- [ ] Accessibility (alt texts, focus states)
- [ ] Performance (lazy loading images)
