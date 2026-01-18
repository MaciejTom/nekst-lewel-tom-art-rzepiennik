# Prompt: Nowy klient - tworzenie konfiguracji

## Twoja rola

Pomagasz stworzyć konfigurację JSON dla nowego klienta na podstawie informacji o firmie.

## Potrzebne informacje

Zapytaj użytkownika o:

1. **Nazwa firmy**
2. **Branża** (construction, services, manufacturing, real-estate)
3. **Telefon kontaktowy**
4. **Email**
5. **Adres / obszar działania**
6. **Główny kolor** (lub pozwól wybrać: pomarańczowy, niebieski, zielony, czerwony)
7. **Styl** (ciemny industrial / jasny przyjazny / korporacyjny)
8. **Jakie sekcje** (hero, why-us, services, portfolio, faq, contact, footer)

## Mapowanie branży na styl

| Branża | Domyślny styl | Kolory | Rogi |
|--------|--------------|--------|------|
| construction | industrial-dark | pomarańczowy/ciemny | ostre |
| services | clean-light | niebieski/jasny | zaokrąglone |
| manufacturing | corporate | granat/szary | małe |
| real-estate | minimal | złoty/biały | średnie |

## Template konfiguracji

```json
{
  "$schema": "../_schema/project.schema.json",

  "meta": {
    "name": "[NAZWA FIRMY]",
    "tagline": "[KRÓTKI SLOGAN]",
    "industry": "[construction|services|manufacturing|real-estate]",
    "locale": "pl-PL"
  },

  "contact": {
    "phone": "[TELEFON]",
    "email": "[EMAIL]",
    "address": {
      "city": "[MIASTO]",
      "street": "[ULICA]",
      "zip": "[KOD]"
    }
  },

  "theme": {
    "style": "[industrial-dark|clean-light|corporate|minimal]",
    "colors": {
      "primary": "[#HEX]",
      "background": "[#HEX]",
      "text": "[#HEX]"
    },
    "borderRadius": "[none|sm|md|lg]"
  },

  "sections": [
    { "id": "hero", "variant": "hero-image", "enabled": true },
    { "id": "why-us", "variant": "why-us-icons", "enabled": true },
    { "id": "services", "variant": "services-tabs", "enabled": true },
    { "id": "portfolio", "variant": "portfolio-mosaic", "enabled": true },
    { "id": "faq", "variant": "faq-accordion", "enabled": true },
    { "id": "contact", "variant": "contact-map", "enabled": true },
    { "id": "footer", "variant": "footer-simple", "enabled": true }
  ]
}
```

## Warianty sekcji do wyboru

### Hero
- `hero-image` - fullscreen zdjęcie w tle
- `hero-split` - tekst po lewej, zdjęcie po prawej
- `hero-centered` - wycentrowany tekst
- `hero-video` - video w tle

### Services
- `services-tabs` - zakładki z opisami
- `services-cards` - karty grid
- `services-accordion` - rozwijane

### Portfolio
- `portfolio-mosaic` - nieregularna siatka
- `portfolio-grid` - regularna siatka
- `portfolio-slider` - karuzela

### Contact
- `contact-map` - z mapą
- `contact-form` - sam formularz
- `contact-split` - formularz + info

## Przykład

```
User: Nowy klient - firma remontowa FIXMAN z okolic Stalowej Woli

AI: Zbieram informacje...
- Branża: services (remonty)
- Styl: clean-light (jasny, przyjazny)
- Primary: #2563eb (niebieski)
- Rogi: zaokrąglone (lg)

Tworzę config: _builder/_config/sites/fixman.json
```
