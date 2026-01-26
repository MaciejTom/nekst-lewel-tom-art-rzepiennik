# ENCYKLOPEDIA NEKST LEWEL STRON

Kompletny system designu do budowy stron dla malych i srednich firm.

---

## SPIS TRESCI

1. [DNA strony - co wspolne](#1-dna-strony)
2. [Zmienne stylowe - co sie zmienia](#2-zmienne-stylowe)
3. [Katalog sekcji - wszystkie mozliwe layouty](#3-katalog-sekcji)
4. [Elementy wspolne pomiedzy sekcjami](#4-elementy-wspolne)
5. [Decyzje per strona](#5-decyzje-per-strona)
6. [Struktura contentu](#6-struktura-contentu)

---

## 1. DNA STRONY - co jest wspolne na KAZDEJ stronie

Elementy STRUKTURALNE ktore sa ZAWSZE. Zmienia sie ich tresc, styl, kolorystyka - ale ISTNIEJA na kazdej stronie.

### 1.1 Struktura strony

```
NAVIGATION (fixed top)
HERO (jedna z wersji)
[SEKCJE SRODKOWE - wybierane z katalogu]
CONTACT
FOOTER
```

### 1.2 Elementy strukturalne

| Element | Opis |
|---------|------|
| **Container** | Kontener o stalej max-width, centrowany |
| **Section padding** | Kazda sekcja ma padding gora/dol |
| **Section header** | Kazda sekcja srodkowa ma: tagline + title + subtitle |
| **Badge/Tagline** | Maly tekst nad tytulem (w hero i w sekcjach) |
| **Hover states** | Kazda karta/link ma hover efekt |
| **Mobile menu** | Nawigacja ma mobile overlay |
| **Background pattern** | Wiekszosc sekcji moze miec subtelny wzor w tle |

### 1.3 Ikony

Zawsze Lucide React. Kazdy komponent z ikonami ma `iconMap` mapujacy string na komponent.

---

## 2. ZMIENNE STYLOWE - co sie zmienia miedzy stronami

Kazda strona to zestaw ZMIENNYCH. Nie "motyw" a lista wlasciwosci do ustawienia.

### 2.1 Paleta kolorow

```css
[data-theme="nazwa-klienta"] {
  --background: ...;           /* Tlo strony */
  --foreground: ...;           /* Glowny tekst */
  --primary: ...;              /* Akcent: buttony, linki, hover */
  --primary-foreground: ...;   /* Tekst na primary */
  --card: ...;                 /* Tlo kart */
  --border: ...;               /* Obramowania */
  --muted-foreground: ...;     /* Tekst drugorzedny */
  --secondary: ...;            /* Drugie tlo */
  --accent: ...;               /* Dodatkowy akcent */
  --radius: ...;               /* Zaokraglenia */
}
```

**Jasna vs ciemna** to po prostu inne wartosci tych zmiennych + klasa `.dark`.

**Primary color per branza:**

| Charakter | Kolor | Hex |
|-----------|-------|-----|
| Budowlany, solidny | Niebieski | `#3d6b9f` |
| Ciepły, lokalny | Zloty/zolty | `#ca8a04` |
| Elegancki, stonowany | Szary | `#4a5568` |
| Energetyczny | Czerwony | `#ef4444` |
| Ekologiczny | Zielony | `#22c55e` |
| Luksusowy | Fioletowy | `#8b5cf6` |
| Nowoczesny | Cyan | `#0891b2` |

**Zaokraglenia (--radius):**

| Wartosc | Charakter |
|---------|-----------|
| `0` | Ostry, industrial, techniczny |
| `0.25rem` | Profesjonalny |
| `0.5rem` | Przyjazny, nowoczesny |
| `0.75rem` | Miekki, lifestyle |

### 2.2 Typografia - ZMIENNA per strona

Fonty sa definiowane przez CSS variables i zmienne per strona:

```css
[data-theme="nazwa-klienta"] {
  --font-display: "Bebas Neue", sans-serif;   /* Naglowki H1-H3 */
  --font-body: "Work Sans", sans-serif;        /* Body text */
  --font-mono: "Fira Code", monospace;         /* Tagline, numery */
}
```

#### Rola fontow w systemie

| Rola | CSS Variable | Gdzie uzywany |
|------|-------------|---------------|
| **Display** | `--font-display` | H1, H2, H3, hero headline, section titles |
| **Body** | `--font-body` | Paragrafy, opisy, buttony, formularze |
| **Mono** | `--font-mono` | Tagline sekcji ("/ USLUGI"), numery FAQ, techniczne UI |

#### Gotowe zestawy fontow (pairings)

**A. MOCNY / INDUSTRIAL** - budowlaniec, rzemioslo, maszyny
| Display | Body | Charakter |
|---------|------|-----------|
| **Bebas Neue** | Work Sans | Condensed uppercase + neutralny body |
| **Oswald** | Source Sans 3 | Condensed, wezszy niz Bebas, czytelniejszy |
| **Archivo Black** | Inter | Gruby, masywny heading + czysty body |
| **Teko** | Roboto | Ultra-condensed tech + uniwersalny body |

**B. ELEGANCKI / SERIF** - prawo, nieruchomosci, premium
| Display | Body | Charakter |
|---------|------|-----------|
| **Playfair Display** | Lato | Klasyczny serif + czytelny sans |
| **DM Serif Display** | DM Sans | Spójny duet (ta sama rodzina) |
| **Cormorant Garamond** | Montserrat | Cienki serif + geometric sans |
| **Libre Baskerville** | Open Sans | Tradycyjny serif + neutralny body |

**C. NOWOCZESNY / GEOMETRIC** - tech, startup, SaaS
| Display | Body | Charakter |
|---------|------|-----------|
| **Montserrat** | Inter | Geometric headings + czysty body |
| **Poppins** | Nunito Sans | Zaokraglone, przyjazne, nowoczesne |
| **Space Grotesk** | IBM Plex Sans | Techniczno-geometric |
| **Outfit** | Plus Jakarta Sans | Nowoczesny, variable font |

**D. CIEPŁY / PRZYJAZNY** - restauracja, rodzinny biznes, lokalna usluga
| Display | Body | Charakter |
|---------|------|-----------|
| **Cabin** | Source Sans 3 | Humanistyczny, ciepły |
| **Nunito** | Open Sans | Zaokraglony, przyjazny |
| **Quicksand** | Rubik | Bardzo okragly, zabawny |
| **Josefin Sans** | Lato | Geometryczny ale miekki |

**E. PROFESJONALNY / CORPORATE** - konsulting, finanse, B2B
| Display | Body | Charakter |
|---------|------|-----------|
| **Raleway** | Open Sans | Elegancki sans + czytelny |
| **Barlow** | Roboto | Neutralny, korporacyjny |
| **Manrope** | Inter | Nowoczesny grotesque |
| **Albert Sans** | Noto Sans | Czysty, uniwersalny |

#### Reguly typografii w kodzie

Te sa STALE niezaleznie od wybranego fontu:

```css
h1, h2, h3 { font-family: var(--font-display); }
body { font-family: var(--font-body); }
.tagline { font-family: var(--font-mono); }
```

Co ZMIENNE per styl fontu:
| Wlasciwosc | Condensed (Bebas) | Serif (Playfair) | Geometric (Montserrat) |
|------------|-------------------|------------------|----------------------|
| `text-transform` | `uppercase` | `none` (normal case) | `none` lub `uppercase` |
| `letter-spacing` | `tracking-wide` | `tracking-tight` | `tracking-normal` |
| `font-weight` | `font-bold` | `font-bold` | `font-extrabold` |
| `line-height` | `leading-none` | `leading-tight` | `leading-tight` |

To oznacza ze reguly `uppercase tracking-wide` w globals.css NIE powinny byc hardcoded - powinny byc czescia konfiguracji fontu.

### 2.3 Spacing

| Element | Wartosc |
|---------|---------|
| Section padding | `py-20` / `py-24` / `py-32` (do wyboru per styl) |
| Container padding | `px-4` / `px-6` / `px-8` |
| Card gap | `gap-4` / `gap-6` / `gap-8` |

### 2.4 Cienie

| Styl | Uzycie |
|------|--------|
| Mocne (`shadow-lg`, `shadow-xl`) | Karty na ciemnym tle |
| Srednie (`shadow-md`) | Standardowe karty |
| Subtelne (`shadow-sm`) | Minimalistyczny styl |
| Brak | Ultra-flat design |

### 2.5 Pattern overlay

| Typ | Opis |
|-----|------|
| `grid` | Linie pionowe + poziome (40px) |
| `dots` | Kropki (20px) |
| `rebar` | Siatka zbrojna (20px, primary color) |
| `none` | Brak patternu |

---

## 3. KATALOG SEKCJI - wszystkie mozliwe layouty

Legenda:
- **JEST** = zaimplementowane
- **TODO** = do zrobienia (priorytetowe)
- **LATER** = pomysl na pozniej

---

### 3.1 NAVIGATION

#### NAV-A: Standard (JEST)
```
[LOGO]          [Link] [Link] [Link] [Link]     [CTA BUTTON]
```
Logo lewo, linki srodek, CTA prawo. Fixed top, blur on scroll.

#### NAV-B: Centered logo (TODO)
```
[Link] [Link]          [LOGO]          [Link] [Link]
```
Logo na srodku, linki po bokach.

#### NAV-C: Minimal (TODO)
```
[LOGO]                                          [MENU ☰]
```
Tylko logo + hamburger. Menu zawsze jako overlay (nie inline linki).

#### NAV-D: With topbar (TODO)
```
[tel: 696 092 434  |  email: biuro@firma.pl  |  Pon-Pt 8-16]   <-- topbar
──────────────────────────────────────────────────────────────
[LOGO]          [Link] [Link] [Link]                [CTA]       <-- main nav
```
Dodatkowy pasek nad nawigacja z danymi kontaktowymi. Znika na scroll.

---

### 3.2 HERO

#### HERO-A: Full Background (JEST)
```
+═══════════════════════════════════════════════+
║  [background image + gradient overlay]        ║
║                                               ║
║  [BADGE]                                      ║
║  HEADLINE LINE 1                              ║
║  HEADLINE LINE 2  ← accent color             ║
║  Subheadline text                             ║
║                                               ║
║  [PRIMARY CTA]  [SECONDARY CTA]              ║
║                                               ║
║  stat | stat | stat                           ║
║              SCROLL ↓                         ║
+═══════════════════════════════════════════════+
```
Opcje: `contentPosition` (left/center), `minHeight` (screen/80vh/70vh/60vh), pattern, dekoracje, stats, scroll indicator.

#### HERO-B: Split Contained (JEST)
```
+═══════════════════════════════════════════════+
║  container                          bg-secondary
║  ┌──────────────┐  ┌──────────────┐           ║
║  │ [Badge ●]    │  │              │           ║
║  │ HEADLINE     │  │  [ZDJECIE]   │           ║
║  │ highlight    │  │  rounded     │           ║
║  │ Sub text     │  │  border      │           ║
║  │              │  │  [overlay]   │           ║
║  │ [CTA] [CTA]  │  └──────────────┘           ║
║  │ stats icons  │                             ║
║  └──────────────┘       skewed bg decoration  ║
+═══════════════════════════════════════════════+
```

#### HERO-C: Split Edge-Bleed (JEST)
```
+══════════════════════╦════════════════════════+
║  container text      ║  IMAGE bleeds to edge  ║
║  [Badge ●]           ║                        ║
║  HEADLINE            ║  full cover            ║
║  highlight           ║  no border             ║
║  Sub text            ║  no rounding           ║
║                      ║                        ║
║  [CTA] [CTA]        ║  [overlay card]        ║
║  stats               ║                        ║
+══════════════════════╩════════════════════════+
```

#### HERO-D: Full Background + Form (TODO)
```
+═══════════════════════════════════════════════+
║  [background image + overlay]                 ║
║                                               ║
║  ┌──────────────┐  ┌──────────────┐           ║
║  │ HEADLINE     │  │ ┌──────────┐ │           ║
║  │ Sub text     │  │ │ Imie     │ │           ║
║  │              │  │ │ Email    │ │           ║
║  │ stats        │  │ │ Telefon  │ │           ║
║  │              │  │ │ Wiadom.  │ │           ║
║  │              │  │ │ [WYSLIJ] │ │           ║
║  └──────────────┘  │ └──────────┘ │           ║
║                    └──────────────┘           ║
+═══════════════════════════════════════════════+
```

#### HERO-E: Video Background (TODO)
Jak HERO-A ale z `<video>` zamiast `<img>`. Autoplay, muted, loop.

#### HERO-F: Minimal / Text Only (TODO)
```
+═══════════════════════════════════════════════+
║  bg-background (solid, no image)              ║
║                                               ║
║           HEADLINE                            ║
║           Sub text                            ║
║           [CTA]                               ║
║                                               ║
+═══════════════════════════════════════════════+
```

#### HERO-G: Split z listy/features (TODO)
```
+═══════════════════════════════════════════════+
║  ┌──────────────┐  ┌──────────────┐           ║
║  │ HEADLINE     │  │ ✓ Feature 1  │           ║
║  │ Sub text     │  │ ✓ Feature 2  │           ║
║  │              │  │ ✓ Feature 3  │           ║
║  │ [CTA] [CTA]  │  │ ✓ Feature 4  │           ║
║  └──────────────┘  └──────────────┘           ║
+═══════════════════════════════════════════════+
```

---

### 3.3 TRUST BAR / SOCIAL PROOF (TODO)

Waska sekcja umieszczana zaraz pod hero lub miedzy sekcjami.

#### TRUST-A: Logo strip
```
┌───────────────────────────────────────────────┐
│  Zaufali nam:                                 │
│  [LOGO] [LOGO] [LOGO] [LOGO] [LOGO] [LOGO]  │
└───────────────────────────────────────────────┘
```
Opcje: grayscale -> color on hover, marquee auto-scroll.

#### TRUST-B: Stats bar
```
┌───────────────────────────────────────────────┐
│  [200+]       [15 lat]      [100%]      [48h] │
│  Projektow    Doswiadcz.    Terminal.   Wycena │
└───────────────────────────────────────────────┘
```
Duze liczby. Opcja: animated count-up.

#### TRUST-C: Badges / certyfikaty
```
┌───────────────────────────────────────────────┐
│  [★ Google 4.9]  [🏆 ISO 9001]  [🛡 Gwarancja] │
└───────────────────────────────────────────────┘
```

#### TRUST-D: Testimonial mini
```
┌───────────────────────────────────────────────┐
│  "Swietna firma..." - Jan K.    ★★★★★  Google │
└───────────────────────────────────────────────┘
```
Jedna opinia w jednej linii z gwiazdkami.

---

### 3.4 FEATURES / WHY US (Dlaczego my)

#### FEAT-A: Grid z obrazkami (JEST)
```
┌───────────────────────────────────────────────┐
│  DLACZEGO MY / ROBOTY ZELBETOWE               │
│                                               │
│  [IMG]    [IMG]    [IMG]                      │
│  Tytul    Tytul    Tytul                      │
│  Opis     Opis     Opis                       │
│                                               │
│  [IMG]    [IMG]    [IMG]                      │
│  Tytul    Tytul    Tytul                      │
│  Opis     Opis     Opis                       │
└───────────────────────────────────────────────┘
```
Auto-grid: 3/4/5/6 items.

#### FEAT-B: Karty z ikonami w gridzie (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐          │
│  │ [icon] │  │ [icon] │  │ [icon] │          │
│  │ Tytul  │  │ Tytul  │  │ Tytul  │          │
│  │ Opis   │  │ Opis   │  │ Opis   │          │
│  │ tekst  │  │ tekst  │  │ tekst  │          │
│  └────────┘  └────────┘  └────────┘          │
│  ┌────────┐  ┌────────┐  ┌────────┐          │
│  │ [icon] │  │ [icon] │  │ [icon] │          │
│  │ Tytul  │  │ Tytul  │  │ Tytul  │          │
│  └────────┘  └────────┘  └────────┘          │
└───────────────────────────────────────────────┘
```
Karty z border + bg-card. Ikona w kolku/kwadracie.

#### FEAT-C: Split - tekst lewo, grid prawo (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌─────────────┐  ┌────────┐ ┌────────┐      │
│  │ DLACZEGO MY │  │ [icon] │ │ [icon] │      │
│  │             │  │ Tytul  │ │ Tytul  │      │
│  │ Opis dluzszy│  │ Opis   │ │ Opis   │      │
│  │ sekcji...   │  ├────────┤ ├────────┤      │
│  │             │  │ [icon] │ │ [icon] │      │
│  │ [CTA]       │  │ Tytul  │ │ Tytul  │      │
│  └─────────────┘  │ Opis   │ │ Opis   │      │
│                   └────────┘ └────────┘      │
└───────────────────────────────────────────────┘
```
Tytul + opis po lewej, grid 2x2 kart po prawej.

#### FEAT-D: Lista horyzontalna z separatorami (TODO)
```
┌───────────────────────────────────────────────┐
│  [icon]  Pelny zakres robot                   │
│          Fundamenty, sciany, stropy...        │
│  ─────────────────────────────────────────    │
│  [icon]  Wlasny zespol                        │
│          Wykwalifikowani zbrojarze...          │
│  ─────────────────────────────────────────    │
│  [icon]  Zasieg 4 wojewodztw                  │
│          Malopolskie, Podkarpackie...         │
└───────────────────────────────────────────────┘
```
Pełna szerokosc, ikona + tekst, separatory miedzy.

#### FEAT-E: Alternating rows (tekst-obraz / obraz-tekst) (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐            │
│  │ [ZDJECIE]   │  │ Tytul       │            │
│  │             │  │ Opis...     │            │
│  └─────────────┘  └─────────────┘            │
│  ┌─────────────┐  ┌─────────────┐            │
│  │ Tytul       │  │ [ZDJECIE]   │            │
│  │ Opis...     │  │             │            │
│  └─────────────┘  └─────────────┘            │
└───────────────────────────────────────────────┘
```
Naprzemiennie obraz/tekst. Dobre do opowiadania historii.

#### FEAT-F: Duze liczby / counters (TODO)
```
┌───────────────────────────────────────────────┐
│       200+          15          100%     48h   │
│     Projektow    Lat exp.    Terminal.  Wycena │
└───────────────────────────────────────────────┘
```
Wielkie liczby z count-up animacja. Moze byc standalone sekcja.

---

### 3.5 SERVICES / OFFER (Uslugi)

#### SERV-A: Interactive nav + display (JEST)
```
┌───────────────────────────────────────────────┐
│  / USLUGI  ZAKRES ROBOT                       │
│                                               │
│  ┌──────────┐  ┌────────────────────────┐     │
│  │ > Fund.  │  │  [zdjecie w tle]       │     │
│  │   Sciany │  │                        │     │
│  │   Stropy │  │  [icon] FUNDAMENTY     │     │
│  │   Spec.  │  │  Opis pelny...         │     │
│  │          │  │  ✓ feat  ✓ feat        │     │
│  └──────────┘  └────────────────────────┘     │
└───────────────────────────────────────────────┘
```
Nav list (4col) + display (8col). Klik zmienia display.

#### SERV-B: Karty w gridzie (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐          │
│  │ [icon] │  │ [icon] │  │ [icon] │          │
│  │ Tytul  │  │ Tytul  │  │ Tytul  │          │
│  │ Opis   │  │ Opis   │  │ Opis   │          │
│  │ [→]    │  │ [→]    │  │ [→]    │          │
│  └────────┘  └────────┘  └────────┘          │
└───────────────────────────────────────────────┘
```
Proste karty z ikona. Moze 2, 3, lub 4 kolumny.

#### SERV-C: Accordion / Expandable (TODO)
```
┌───────────────────────────────────────────────┐
│  [+] Fundamenty                               │
│  ─────────────────────────────────            │
│  [-] Sciany zelbetowe                         │
│      Opis pelny...                            │
│      ✓ feature  ✓ feature                     │
│      [zdjecie]                                │
│  ─────────────────────────────────            │
│  [+] Stropy                                   │
│  [+] Konstrukcje specjalne                    │
└───────────────────────────────────────────────┘
```

#### SERV-D: Tabs horizontal (TODO)
```
┌───────────────────────────────────────────────┐
│  [Fund.] [Sciany] [Stropy] [Specjalne]        │
│  ─────────────────────────────────────────    │
│  ┌─────────────┐  Tytul                       │
│  │ [ZDJECIE]   │  Opis pelny...               │
│  │             │  ✓ feature  ✓ feature        │
│  └─────────────┘                              │
└───────────────────────────────────────────────┘
```

#### SERV-E: Split - tekst lewo, duzy obraz prawo (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌─────────────┐  ┌───────────────────┐       │
│  │ / USLUGI    │  │                   │       │
│  │ Tytul       │  │   [DUZE ZDJECIE]  │       │
│  │             │  │                   │       │
│  │ ✓ Usluga 1 │  │                   │       │
│  │ ✓ Usluga 2 │  │                   │       │
│  │ ✓ Usluga 3 │  │                   │       │
│  │ ✓ Usluga 4 │  │                   │       │
│  │             │  │                   │       │
│  │ [CTA]       │  │                   │       │
│  └─────────────┘  └───────────────────┘       │
└───────────────────────────────────────────────┘
```

---

### 3.6 TARGET AUDIENCE / FOR WHOM (Dla kogo)

#### TARGET-A: Image cards with hover reveal (JEST)
```
┌───────────────────────────────────────────────┐
│  / ODBIORCY  DLA KOGO?        DOSTEPNOSC: NOW │
│                                               │
│  ┌──────────────────┐  ┌──────────────────┐   │
│  │ [bg image]       │  │ [bg image]       │   │
│  │ [icon]           │  │ [icon]           │   │
│  │ GENERALNI WYK.   │  │ PRZEMYSL         │   │
│  │ hover: opis+tags │  │ hover: opis+tags │   │
│  └──────────────────┘  └──────────────────┘   │
│  ┌──────────────────┐  ┌──────────────────┐   │
│  │ DEWELOPERZY      │  │ PRYWATNI         │   │
│  └──────────────────┘  └──────────────────┘   │
└───────────────────────────────────────────────┘
```
Karty 420px, gradient overlay, corner accents, expand on hover.

#### TARGET-B: Karty bez zdjec (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐          │
│  │ [icon] │  │ [icon] │  │ [icon] │          │
│  │ Tytul  │  │ Tytul  │  │ Tytul  │          │
│  │ Opis   │  │ Opis   │  │ Opis   │          │
│  │ [tag]  │  │ [tag]  │  │ [tag]  │          │
│  └────────┘  └────────┘  └────────┘          │
└───────────────────────────────────────────────┘
```

#### TARGET-C: Horizontal list (TODO)
```
┌───────────────────────────────────────────────┐
│  [icon] GENERALNI WYKONAWCY                   │
│  Opis dluzszy...              [tag] [tag]     │
│  ─────────────────────────────────────────    │
│  [icon] PRZEMYSL I HALE                       │
│  Opis dluzszy...              [tag] [tag]     │
└───────────────────────────────────────────────┘
```

---

### 3.7 PROCESS / HOW WE WORK (Jak pracujemy)

#### PROC-A: Numbered cards horizontal (JEST)
```
┌───────────────────────────────────────────────┐
│  JAK WYGLADA WSPOLPRACA                       │
│                                               │
│  ────── connecting line ──────────────────    │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ 01   │  │ 02   │  │ 03   │  │ 04   │     │
│  │[icon]│  │[icon]│  │[icon]│  │[icon]│     │
│  │Tytul │  │Tytul │  │Tytul │  │Tytul │     │
│  │LABEL │  │LABEL │  │LABEL │  │LABEL │     │
│  │opis  │  │opis  │  │opis  │  │opis  │     │
│  └──────┘  └──────┘  └──────┘  └──────┘     │
│                                               │
│  Masz projekt? → Zamow wycene                 │
└───────────────────────────────────────────────┘
```

#### PROC-B: Timeline vertical (TODO)
```
┌───────────────────────────────────────────────┐
│       ●                                       │
│       │  01. Zapytanie i wycena               │
│       │  Opis kroku...                        │
│       │                                       │
│       ●                                       │
│       │  02. Ustalenie szczegolow             │
│       │  Opis kroku...                        │
│       │                                       │
│       ●                                       │
│       │  03. Realizacja                       │
│       │  Opis kroku...                        │
│       │                                       │
│       ●                                       │
│       │  04. Odbiór                           │
└───────────────────────────────────────────────┘
```
Pionowa os czasu z kropkami. Dobra na mobile.

#### PROC-C: Alternating zigzag (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌────────────┐         01. Zapytanie         │
│  │ [img/icon] │         Opis...               │
│  └────────────┘                               │
│                                               │
│  02. Ustalenie         ┌────────────┐         │
│  Opis...               │ [img/icon] │         │
│                        └────────────┘         │
│                                               │
│  ┌────────────┐         03. Realizacja        │
│  │ [img/icon] │         Opis...               │
│  └────────────┘                               │
└───────────────────────────────────────────────┘
```
Kroki na przemian lewa-prawa.

#### PROC-D: Simple numbered list (TODO)
```
┌───────────────────────────────────────────────┐
│  01  Zapytanie i wycena                       │
│      Opis...                                  │
│  ─────────────────────────────────            │
│  02  Ustalenie szczegolow                     │
│      Opis...                                  │
│  ─────────────────────────────────            │
│  03  Realizacja                               │
│      Opis...                                  │
└───────────────────────────────────────────────┘
```
Minimalny - tylko numery i tekst z separatorami.

---

### 3.8 PORTFOLIO / GALLERY (Realizacje)

#### PORT-A: Mosaic grid (JEST)
```
┌───────────────────────────────────────────────┐
│  REALIZACJE                   45+ | 100%      │
│                                               │
│  ┌──────────────┐  ┌──────┐                  │
│  │  FEATURED    │  │ img  │                  │
│  │  2x2         │  │ card │                  │
│  │              │  ├──────┤                  │
│  │              │  │ img  │                  │
│  └──────────────┘  │ card │                  │
│  ┌──────────────┐  ├──────┤                  │
│  │  WIDE  2x1   │  │ img  │                  │
│  └──────────────┘  └──────┘                  │
│                                               │
│  [ZOBACZ PELNA GALERIE]                       │
└───────────────────────────────────────────────┘
```
Featured (2x2), wide (2x1), normal (1x1).

#### PORT-B: Equal grid (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │ img  │  │ img  │  │ img  │               │
│  │ card │  │ card │  │ card │               │
│  ├──────┤  ├──────┤  ├──────┤               │
│  │ img  │  │ img  │  │ img  │               │
│  │ card │  │ card │  │ card │               │
│  └──────┘  └──────┘  └──────┘               │
└───────────────────────────────────────────────┘
```
Rowne karty 3-kolumnowe.

#### PORT-C: Carousel / Slider (TODO)
```
┌───────────────────────────────────────────────┐
│  ◄                                        ►   │
│     ┌──────┐  ┌──────┐  ┌──────┐             │
│     │ img  │  │ img  │  │ img  │             │
│     │ card │  │ card │  │ card │             │
│     └──────┘  └──────┘  └──────┘             │
│                 ● ● ◉ ● ●                     │
└───────────────────────────────────────────────┘
```

#### PORT-D: Filterable grid (TODO)
```
┌───────────────────────────────────────────────┐
│  [Wszystkie] [Fundamenty] [Sciany] [Stropy]   │
│  ─────────────────────────────────────────    │
│  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │ img  │  │ img  │  │ img  │               │
│  └──────┘  └──────┘  └──────┘               │
└───────────────────────────────────────────────┘
```
Filtry kategorii nad gridem. Klik filtruje karty.

#### PORT-E: Before/After slider (LATER)
```
┌───────────────────────────────────────────────┐
│  ┌──────────────┤──────────────┐              │
│  │  PRZED       │  PO          │              │
│  │  [zdjecie]   ←slider→  [zdjecie]          │
│  └──────────────┤──────────────┘              │
└───────────────────────────────────────────────┘
```

#### PORT-F: Fullscreen lightbox (LATER)
Grid jak PORT-B ale klik otwiera zdjecie fullscreen z nawigacja strzalkami.

---

### 3.9 TESTIMONIALS / REVIEWS (Opinie) (TODO)

#### TEST-A: Cards grid
```
┌───────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ "Cytat   │  │ "Cytat   │  │ "Cytat   │   │
│  │  dlugi"  │  │  dlugi"  │  │  dlugi"  │   │
│  │ ★★★★★    │  │ ★★★★★    │  │ ★★★★☆    │   │
│  │ [avatar] │  │ [avatar] │  │ [avatar] │   │
│  │ Imie     │  │ Imie     │  │ Imie     │   │
│  │ Firma    │  │ Firma    │  │ Firma    │   │
│  └──────────┘  └──────────┘  └──────────┘   │
└───────────────────────────────────────────────┘
```

#### TEST-B: Single large slider
```
┌───────────────────────────────────────────────┐
│                                               │
│  "Dlugi cytat klienta o wspolpracy z firma   │
│   ktory pokazuje jakosc uslug..."             │
│                                               │
│  ★★★★★                                       │
│  Jan Kowalski — Firma ABC                     │
│                                               │
│  ◄  1/5  ►                                    │
└───────────────────────────────────────────────┘
```
Jeden duzy cytat, slider do nawigacji.

#### TEST-C: Split - tekst lewo, cards prawo
```
┌───────────────────────────────────────────────┐
│  ┌────────────┐  ┌──────────┐                │
│  │ OPINIE     │  │ "Cytat"  │                │
│  │ KLIENTOW   │  │ ★★★★★    │                │
│  │            │  │ Imie     │                │
│  │ ★ 4.9/5   │  ├──────────┤                │
│  │ 106 opinii│  │ "Cytat"  │                │
│  │            │  │ ★★★★★    │                │
│  │ [Google]   │  │ Imie     │                │
│  └────────────┘  └──────────┘                │
└───────────────────────────────────────────────┘
```

#### TEST-D: Masonry / Pinterest layout (LATER)
```
┌───────────────────────────────────────────────┐
│  ┌──────┐  ┌──────────┐  ┌──────┐           │
│  │short │  │ long     │  │short │           │
│  │quote │  │ quote    │  │quote │           │
│  └──────┘  │ ...      │  └──────┘           │
│  ┌──────────┐ ...     │  ┌──────────┐       │
│  │ medium  │  └──────────┘  │ medium  │       │
│  │ quote   │               │ quote   │       │
│  └──────────┘               └──────────┘       │
└───────────────────────────────────────────────┘
```
Rozne wysokosci kart w masonry layout.

---

### 3.10 CTA BANNER (TODO)

Prosta sekcja z haslem i buttonem. Moze byc MIEDZY innymi sekcjami.

#### CTA-A: Centered
```
┌═══════════════════════════════════════════════┐
│  bg-primary (lub dark, lub image)             │
│                                               │
│         GOTOWY NA WSPOLPRACE?                 │
│         Zadzwon lub wyslij zapytanie          │
│                                               │
│         [ZADZWON]  [WYSLIJ EMAIL]             │
└═══════════════════════════════════════════════┘
```

#### CTA-B: Split
```
┌═══════════════════════════════════════════════┐
│  GOTOWY NA WSPOLPRACE?      [ZADZWON] ──→    │
│  Wycena w 24h               [WYSLIJ EMAIL]   │
└═══════════════════════════════════════════════┘
```

#### CTA-C: With background image
```
┌═══════════════════════════════════════════════┐
│  [background image + overlay]                 │
│                                               │
│         HEADLINE                              │
│         [CTA]                                 │
└═══════════════════════════════════════════════┘
```

---

### 3.11 FAQ

#### FAQ-A: Accordion centered (JEST)
```
┌───────────────────────────────────────────────┐
│  FAQ  PYTANIA                                 │
│                                               │
│  01  Pytanie pierwsze                   [+]   │
│  ────────────────────────────────────         │
│  02  Pytanie drugie                     [-]   │
│      Odpowiedz na pytanie...                  │
│  ────────────────────────────────────         │
│  03  Pytanie trzecie                    [+]   │
└───────────────────────────────────────────────┘
```
Max-w-4xl, centered. Numerowane.

#### FAQ-B: Two columns - header lewo, accordion prawo (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌────────────┐  01  Pytanie           [+]   │
│  │ FAQ        │  02  Pytanie           [-]   │
│  │ Sub text   │      Odpowiedz...            │
│  │            │  03  Pytanie           [+]   │
│  │ [CTA]      │  04  Pytanie           [+]   │
│  └────────────┘                              │
└───────────────────────────────────────────────┘
```

#### FAQ-C: Two column grid (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌───────────────┐  ┌───────────────┐        │
│  │ Q: Pytanie?   │  │ Q: Pytanie?   │        │
│  │ A: Odpowiedz  │  │ A: Odpowiedz  │        │
│  ├───────────────┤  ├───────────────┤        │
│  │ Q: Pytanie?   │  │ Q: Pytanie?   │        │
│  │ A: Odpowiedz  │  │ A: Odpowiedz  │        │
│  └───────────────┘  └───────────────┘        │
└───────────────────────────────────────────────┘
```
Pytania i odpowiedzi widoczne od razu (nie accordion).

---

### 3.12 CONTACT (Kontakt)

#### CONT-A: Info + Map (JEST)
```
┌───────────────────────────────────────────────┐
│  KONTAKT                                      │
│                                               │
│  ┌──────────────┐  ┌──────────────┐          │
│  │ [phone]      │  │ [GOOGLE MAP] │          │
│  │ [email]      │  │ grayscale    │          │
│  │ [address]    │  │ [overlay]    │          │
│  │ [nip]        │  │              │          │
│  └──────────────┘  └──────────────┘          │
└───────────────────────────────────────────────┘
```

#### CONT-B: Info + Form (TODO)
```
┌───────────────────────────────────────────────┐
│  ┌──────────────┐  ┌──────────────┐          │
│  │ KONTAKT      │  │ [Imie]       │          │
│  │ [phone]      │  │ [Email]      │          │
│  │ [email]      │  │ [Wiadomosc]  │          │
│  │ [address]    │  │ [WYSLIJ]     │          │
│  └──────────────┘  └──────────────┘          │
└───────────────────────────────────────────────┘
```

#### CONT-C: Full-width map + floating card (TODO)
```
┌═══════════════════════════════════════════════┐
│  [=============== MAPA ================]      │
│  [                                     ]      │
│  [   ┌──────────────┐                 ]      │
│  [   │ KONTAKT      │                 ]      │
│  [   │ tel / email   │                 ]      │
│  [   │ adres         │                 ]      │
│  [   └──────────────┘                 ]      │
│  [                                     ]      │
└═══════════════════════════════════════════════┘
```

#### CONT-D: Centered simple (TODO)
```
┌───────────────────────────────────────────────┐
│                                               │
│         SKONTAKTUJ SIE Z NAMI                 │
│                                               │
│   [phone]  |  [email]  |  [address]           │
│                                               │
│         [FORMULARZ / CTA]                     │
│                                               │
└───────────────────────────────────────────────┘
```
Minimalistyczny, centered. Dane w jednej linii.

---

### 3.13 FOOTER

#### FOOT-A: Multi-column + big text (JEST)
```
┌───────────────────────────────────────────────┐
│  FIRMA          Nawigacja    Dane firmy       │
│  Opis...        Start        NIP: ...         │
│                 Oferta       Tarnow           │
│                 Realizacje                    │
│  ─────────────────────────────────────────    │
│      N I E D Z I E L A  &  K L U S E K       │
│  © 2024                    Design: ...        │
└───────────────────────────────────────────────┘
```

#### FOOT-B: Simple centered (TODO)
```
┌───────────────────────────────────────────────┐
│  FIRMA                                        │
│  tel  |  email  |  adres                      │
│  © 2024                                       │
└───────────────────────────────────────────────┘
```

#### FOOT-C: With social icons (TODO)
```
┌───────────────────────────────────────────────┐
│  FIRMA          Nawigacja     [FB][IG][LI]    │
│  Opis           Links...                      │
│  ─────────────────────────────────────────    │
│  © 2024                                       │
└───────────────────────────────────────────────┘
```

#### FOOT-D: Fat footer (TODO)
```
┌───────────────────────────────────────────────┐
│  FIRMA      Uslugi       Informacje    Social │
│  Opis       Fundament.   O nas         [FB]   │
│  tel        Sciany       Kariera       [IG]   │
│  email      Stropy       Blog          [LI]   │
│             Specjalne    Polityka              │
│  ─────────────────────────────────────────    │
│  © 2024  |  Polityka prywatnosci  |  Cookies  │
└───────────────────────────────────────────────┘
```

---

### 3.14 ABOUT / O NAS (LATER)

#### ABOUT-A: Text + image
```
┌───────────────────────────────────────────────┐
│  ┌─────────────┐  ┌─────────────┐            │
│  │ O NAS       │  │ [ZDJECIE]   │            │
│  │ Tekst...    │  │ zespol      │            │
│  │ historia    │  │             │            │
│  └─────────────┘  └─────────────┘            │
└───────────────────────────────────────────────┘
```

#### ABOUT-B: Timeline milestones
```
┌───────────────────────────────────────────────┐
│  2005 ──● Zalozenie firmy                     │
│  2010 ──● 100 realizacji                      │
│  2020 ──● 200+ projektow                     │
└───────────────────────────────────────────────┘
```

---

### 3.15 TEAM (LATER)

#### TEAM-A: Photo grid
```
┌───────────────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐     │
│  │ foto │  │ foto │  │ foto │  │ foto │     │
│  │ Imie │  │ Imie │  │ Imie │  │ Imie │     │
│  │ Rola │  │ Rola │  │ Rola │  │ Rola │     │
│  └──────┘  └──────┘  └──────┘  └──────┘     │
└───────────────────────────────────────────────┘
```

---

### 3.16 PRICING (LATER)

#### PRICE-A: Cards (2-3 tiers)
```
┌───────────────────────────────────────────────┐
│  ┌─────────┐  ┌───────────┐  ┌─────────┐    │
│  │ BASIC   │  │ ★ PRO     │  │ PREMIUM │    │
│  │ 99 zl   │  │ 199 zl    │  │ 399 zl  │    │
│  │ ✓ feat  │  │ ✓ feat    │  │ ✓ feat  │    │
│  │ ✓ feat  │  │ ✓ feat    │  │ ✓ feat  │    │
│  │ [WYBIERZ]│ │ [WYBIERZ] │  │[WYBIERZ]│    │
│  └─────────┘  └───────────┘  └─────────┘    │
└───────────────────────────────────────────────┘
```

#### PRICE-B: Simple list
```
┌───────────────────────────────────────────────┐
│  Usluga A .......................... od 500 zl│
│  Usluga B ........................ od 1000 zl│
│  Usluga C ........................ od 2000 zl│
│  [ZAMOW WYCENE]                               │
└───────────────────────────────────────────────┘
```

---

### 3.17 BLOG / NEWS (LATER)

#### BLOG-A: 3-card preview
```
┌───────────────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐         │
│  │ [img]  │  │ [img]  │  │ [img]  │         │
│  │ Data   │  │ Data   │  │ Data   │         │
│  │ Tytul  │  │ Tytul  │  │ Tytul  │         │
│  │ Intro  │  │ Intro  │  │ Intro  │         │
│  └────────┘  └────────┘  └────────┘         │
│  [WSZYSTKIE ARTYKULY]                         │
└───────────────────────────────────────────────┘
```

---

## 4. ELEMENTY WSPOLNE POMIEDZY SEKCJAMI

### 4.1 Badge / Tagline

Kazda sekcja MA mozliwosc badge/tagline. Styl zalezny od typu:

| Kontekst | Styl |
|----------|------|
| Hero (full bg) | Border + primary color, uppercase, rounded |
| Hero (split) | Background card + kolorowa kropka |
| Sekcja srodkowa | `font-mono text-sm tracking-widest uppercase text-primary` |

### 4.2 Section Header

```typescript
interface SectionHeader {
  tagline?: string
  title: string
  titleAccent?: string
  subtitle?: string
}
```

**Styl akcentu - WARIANTY (do wyboru per strona):**

| Styl | CSS | Przyklad |
|------|-----|----------|
| Inline color | `text-primary` | ZAKRES **ROBOT** |
| Underline | `border-b-4 border-primary` | ROBOTY̲ ̲Z̲E̲L̲B̲E̲T̲O̲W̲E̲ |
| Muted | `text-muted-foreground` | _PRACUJEMY?_ |
| Background | `bg-primary text-primary-foreground px-2` | ███ROBOT███ |
| New line | `<br>` + color | SKONTAKTUJ SIE\n**Z NAMI** |

### 4.3 Przyciski - system

3 warianty × 2 typy = 6 kombinacji:

| | default | shadow | outline |
|---|---------|--------|---------|
| **primary** | solid bg | solid bg + 3D shadow | border only |
| **secondary** | border + transparent | border + bg | border heavy |

Decyzja per strona: ktory wariant.

### 4.4 Dekoracje kart

| Dekoracja | Opis |
|-----------|------|
| Corner accents | 4 narozniki z border primary, pojawia sie na hover |
| Corner dot | Mala kropka primary w rogu, hover |
| Image glow | Poswiate bg-primary/5 blur-3xl za obrazkiem |
| Arrow button | Strzalka w rogu karty, hover |
| Tags | Uppercase mini-badges z border primary |
| Gradient overlay | Gradient na zdjeciu od dolu |
| Grid pattern on card | Subtelna siatka na karcie |
| Big number | Duzy numer w tle karty (np. 01, 02) |

### 4.5 Background pattern sekcji

| Typ | CSS |
|-----|-----|
| grid | `linear-gradient` krzyzowy, 40px |
| dots | `radial-gradient`, 20px |
| rebar | `repeating-linear-gradient` krzyzowy, 20px, primary color |
| none | brak |

---

## 5. DECYZJE PER STRONA

Checklist przy tworzeniu nowej strony:

### Styl wizualny
- [ ] Jasna czy ciemna?
- [ ] Primary color (hex)
- [ ] Zaokraglenia (0 / 0.25 / 0.5 / 0.75 rem)
- [ ] Font pairing (display + body)
- [ ] Heading text-transform (uppercase / normal)
- [ ] Heading letter-spacing (wide / tight / normal)

### Struktura
- [ ] Ktory hero layout? (A-G)
- [ ] Ktore sekcje srodkowe? (wybor z katalogu)
- [ ] Kolejnosc sekcji
- [ ] Ktory contact layout? (A-D)
- [ ] Ktory footer layout? (A-D)

### Elementy
- [ ] Wariant buttonow (default / shadow / outline)
- [ ] Styl akcentu tytulu (inline / underline / muted / bg)
- [ ] Pattern w tle (grid / dots / rebar / none)
- [ ] Dekoracje hero (tak / nie)
- [ ] Logo typ (initials / text / image)
- [ ] Badge/tagline styl per sekcja

### Tresc
- [ ] Nazwa firmy, telefon, email, adres, NIP
- [ ] Teksty per sekcja (content files)
- [ ] Zdjecia (URLs)
- [ ] Google Maps embed URL

---

## 6. STRUKTURA CONTENTU

### Folder klienta

```
src/content/nazwa-klienta/
  index.ts           # re-eksporty
  meta.ts            # nazwa, tel, email
  navigation.ts
  hero.ts
  [sekcje srodkowe].ts
  contact.ts
  footer.ts
```

### Motyw klienta

```css
/* W globals.css */
[data-theme="nazwa-klienta"] {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  --font-display: "Oswald", sans-serif;
  --font-body: "Source Sans 3", sans-serif;
  /* ...reszta zmiennych */
}
```

---

## PODSUMOWANIE

### Status implementacji

| Sekcja | Ile layoutow JEST | Ile layoutow MOZLIWYCH |
|--------|-------------------|----------------------|
| Navigation | 1 | 4 |
| Hero | 3 | 7 |
| Trust Bar | 0 | 4 |
| Features/Why Us | 1 (+grid variants) | 6 |
| Services | 1 | 5 |
| For Whom | 1 | 3 |
| Process | 1 | 4 |
| Portfolio | 1 | 6 |
| Testimonials | 0 | 4 |
| CTA Banner | 0 | 3 |
| FAQ | 1 | 3 |
| Contact | 1 | 4 |
| Footer | 1 | 4 |
| About | 0 | 2 |
| Team | 0 | 1 |
| Pricing | 0 | 2 |
| Blog | 0 | 1 |
| **TOTAL** | **12** | **~56** |

### Priorytety do implementacji

| Priorytet | Co | Dlaczego |
|-----------|-----|---------|
| **1. Font system** | Zmienne fonty, heading config | Bez tego kazda strona wyglada tak samo |
| **2. Fix hardcoded** | bg-black → bg-background, text-white → text-foreground, pattern colors | Motywy nie dzialaja dobrze |
| **3. Testimonials** | TEST-A (cards), TEST-B (slider) | Kazda firma potrzebuje opinii |
| **4. CTA Banner** | CTA-A (centered) | Przerywnik miedzy sekcjami |
| **5. Trust Bar** | TRUST-B (stats) | Social proof pod hero |
| **6. Contact Form** | CONT-B (info + form) | Formularz kontaktowy to must-have |
| **7. Nowe layouty Services** | SERV-B (karty) | Obecny interactive jest za skomplikowany dla malych firm |
| **8. Heading config** | uppercase/normal, tracking per font | Serif headings nie powinny byc uppercase |
