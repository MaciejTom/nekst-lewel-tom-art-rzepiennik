# Mapowanie Relume → Builder

Komponenty Relume dostępne przez MCP, zmapowane na nasz system wariantów.

## Hero (header)

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `hero-split` | `header1` | split (2 col) | image right, 2 buttons, stats |
| `hero-split-left` | `header10` | split (2 col) | image left, form, stats |
| `hero-centered` | `header106` | centered | image inline, 2 buttons, stats |
| `hero-carousel` | `header102` | carousel | slider, 2 buttons, stats |
| `hero-tabs` | `header103` | stacked | tabs, 2 buttons, stats |

**Props header1:**
```typescript
{
  heading: string        // "ŻELBET DLA BUDOWNICTWA"
  description: string    // "Fundamenty, ściany, stropy..."
  buttons: ButtonProps[] // [{title, variant, href}]
  image: ImageProps      // {src, alt}
}
```

## Layout / Features (why-us, services, for-whom)

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `features-split` | `layout356-359` | split (2 col) | image, buttons, cards, icons, stats |
| `features-grid` | `layout365` | split | cards, icons |

## FAQ

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `faq-centered` | `faq1`, `faq2` | centered | accordion, button |
| `faq-split` | `faq3`, `faq10` | split (2 col) | accordion, button |
| `faq-icons` | `faq11` | split | accordion, icons |

## Contact

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `contact-centered` | `contact1` | centered | form, button |
| `contact-split` | `contact2` | split | form, button |
| `contact-split-image` | `contact10` | split | image left, form |
| `contact-icons` | `contact11`, `contact12` | centered/split | form, icons |

## Testimonials

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `testimonials-carousel` | `testimonial10-12` | carousel | slider, cards, icons |
| `testimonials-carousel-2col` | `testimonial15-16` | carousel (2 col) | slider, cards, video |

## Portfolio

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `portfolio-centered` | `portfolio1`, `portfolio10`, `portfolio12` | centered | image, button, icons |
| `portfolio-grid` | `portfolio11`, `portfolio13` | grid (3 col) | image, button, icons |

## Footer

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `footer-stacked` | `footer1` | stacked | form, icons |
| `footer-grid` | `footer10` | grid (4 col) | form, icons |
| `footer-simple` | `footer11-13` | stacked | icons, buttons |

## Navbar

| Nasz wariant | Relume ID | Layout | Features |
|--------------|-----------|--------|----------|
| `navbar-standard` | `navbar1`, `navbar10` | stacked | 2 buttons, icons |
| `navbar-split` | `navbar11`, `navbar12` | split | 2 buttons, icons |
| `navbar-mega` | `navbar13` | stacked | mega menu, icons |

---

## Jak używać

```typescript
// 1. Wyszukaj komponent
const results = await mcp.search_components({
  category: "header",
  has_image: true,
  has_buttons: true,
  limit: 5
});

// 2. Pobierz szczegóły
const component = await mcp.get_component({ component_id: "header1" });

// 3. Użyj props z naszego configu
const props = {
  heading: config.hero.headline.text.join(" "),
  description: config.hero.subtitle.text,
  buttons: [
    { title: config.hero.cta.primary.text, variant: "default" },
    { title: config.hero.cta.secondary.text, variant: "secondary" }
  ],
  image: { src: config.hero.background.image.src, alt: config.meta.name }
};
```

---

## Stats

| Kategoria | Ilość w Relume |
|-----------|---------------|
| header (hero) | 145 |
| layout (features) | 478 |
| contact | 30 |
| faq | 14 |
| testimonial | 43 |
| portfolio | 23 |
| footer | 17 |
| navbar | 22 |
| stats | 50 |
| **TOTAL** | **1400+** |
