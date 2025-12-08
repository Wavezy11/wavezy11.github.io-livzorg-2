# LIV Zorg one-page site (Amania-inspired)

## Bestanden
- `index.html` — one-page site met secties (hero, intro, diensten, over-ons, werkwijze, downloads, contact), scrollspy en back-to-top.
- `style.css` — LIV kleurentokens, Amania-achtige spacing/animaties, responsive grid/flex.
- `script.js` — hamburger, accordions, scrollspy/timeline, smooth scroll, back-to-top.
- `assets/` — logo, keurmerken, hero- en dienstbeelden uit aangeleverde assets.

## Kleur- en typetokens
- `--liv-brand-primary: #81c94c`
- `--liv-brand-secondary: #2b421e`
- `--liv-accent: #68ae34`
- `--liv-bg: #f7f9f5`
- `--liv-text-dark: #1f241e`
- `--liv-text-light: #ffffff`
Typo: Poppins (koppen), Inter (body). Radii: 8/16px. Shadows: zachte lift, hover translateY(-4..6px). Animaties: `fadeInUp` hero, `pulse` voor active markers, accordion max-height en chevron-rotate, hover-lift cards, back-to-top fade+slide. Prefers-reduced-motion schakelt animaties uit.

## Inhoudsbron & mapping
- Koppen/teksten afkomstig uit aangeleverde HTML van livzorg.nl (Welkom-bij tekst, kernwaarden Toegewijd/Mensgericht/Meebewegend, Diensten-beschrijvingen Ambulante hulp, Dagbesteding, Begeleid wonen, Crisisopvang; missie/kwaliteit/snel-inzetbaar; team-bullets; contactgegevens en social links).
- Downloads: links naar Privacyverklaring, Klachtenregeling, Uitsluitingscriteria zoals op livzorg.nl/disclaimer (geen lokale PDF ontvangen).
- Contact: Parkweg 226 A, 3119 CR Schiedam; tel 085-2129 384; WhatsApp +31 617 54 05 97; info@livzorg.nl; openingstijden ma-vr 09:00-18:00.

## Componenten
- Sticky header met CTA, desktop nav, mobiele hamburger.
- Hero met full-bleed beeld, gradient overlay, dubbele CTA.
- Timeline/scrollspy links (desktop), mobiele progress dots.
- Diensten grid met feather-achtige iconen en accordions.
- Over ons split layout + waarden cards.
- Werkwijze 5-stappen lijst met uitklapdetails + info box.
- Downloads cards met CTA naar PDF-links.
- Contact: info+socials en Formspree-formulier, embedded Google Maps.
- Footer: logo + keurmerken (BPSW, SKJ), contactblok, nav-links, copyright + back-to-top.

## Toetsing / QA checklist
- Semantiek: header/nav/main/section/footer, aria-labels op nav/accordions, skip-link.
- Keyboard: focus styles op links/inputs, hamburger toggles nav, accordions focusable.
- Images: responsive, `loading="lazy"` (niet op hero), gebruik WebP assets.
- Performance: geen zware libs, <5KB JS, kritieke styles boven de fold mogelijk inline bij build; gebruik WebP.
- Accessibility: respects `prefers-reduced-motion`; form labels en required velden; contrast met donkere tekst op licht bg en lichte tekst op donkergroene hero/footer.
- Browser: modern evergreen; fallback zonder JS toont alle panelcontent dichtgeklapt maar aanwezig.

## Content gaps
- Geen losse PDF-bestanden meegeleverd; download-links verwijzen naar bestaande site. Voeg lokale PDF's toe in `assets` en update de hrefs indien beschikbaar.

