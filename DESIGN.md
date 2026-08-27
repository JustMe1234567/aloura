# Aloura Design & Brand System

This is the canonical design reference for every Aloura page, collection, campaign, and product experience. New work should feel recognizably Aloura without reproducing any external retailer. When this file conflicts with older generated design notes, follow this file and the current storefront implementation.

## 1. Brand foundation

### Positioning

Aloura is modern fine jewelry for personal milestones and everyday rituals. The brand pairs the confidence of a luxury house with the warmth of a knowledgeable private jeweler.

### Brand promise

**Fine jewelry for the stories only you can tell.**

### Personality

- Refined, warm, intimate, assured
- Editorial rather than ornamental
- Modern rather than trendy
- Personal rather than sentimental
- Transparent rather than technical

### Experience principles

1. **The jewelry leads.** Photography and product information receive the strongest visual emphasis.
2. **Luxury through restraint.** Use scale, space, material, and typography—not excessive decoration.
3. **Shoppable storytelling.** Every editorial section should lead naturally to a collection, product, or service.
4. **Fixed and clear.** Specifications and prices are presented confidently. Never imply a configurator or dynamic price.
5. **Human guidance.** Explain materials and service in calm, direct language.

## 2. Visual identity

### Color tokens

| Token | Value | Use |
|---|---:|---|
| `--color-ink` | `#171512` | Primary text, dark buttons, footer |
| `--color-espresso` | `#28241F` | Dark editorial panels |
| `--color-ivory` | `#F4F0E8` | Primary page background |
| `--color-paper` | `#F7F4EE` | Light merchandise sections |
| `--color-oat` | `#ECE7DF` | Collection and supporting sections |
| `--color-mist` | `#DFE8E7` | Press, trust, and calm service moments |
| `--color-gold` | `#B0926E` | Selective accent and hover state |
| `--color-stone` | `#685F55` | Secondary copy on light surfaces |
| `--color-line` | `rgba(23,21,18,.16)` | Borders and dividers |
| `--color-white` | `#FFFFFF` | Text on photography and dark surfaces |
| `--color-error` | `#B42318` | Form and checkout errors only |

Ivory should dominate. Dark espresso is reserved for high-contrast editorial or footer areas. Gold is an accent, not a default background. Avoid bright yellow gold, cool gray interfaces, gradients unrelated to photography, and playful color blocking.

### Typography

Current implementation uses dependable system fonts:

- **Display:** Georgia, serif
- **Interface/body:** Arial, Helvetica, sans-serif

For final brand font licensing, the preferred pairing is **Cormorant** for display and **Montserrat** for interface/body. Preserve the proportions below when fonts change.

| Style | Desktop | Mobile | Guidance |
|---|---:|---:|---|
| Campaign display | `58–104px` | `48–58px` | Serif, weight 400, line-height `.88–.95`, tight tracking |
| Page title | `60–108px` | `52–64px` | Serif, weight 400 |
| Section title | `34–78px` | `32–50px` | Serif, weight 400 |
| Product title | `48–74px` | `42–52px` | Serif, weight 400 |
| Editorial body | `17–20px` | `16–18px` | Serif, line-height `1.55–1.7` |
| Interface body | `14–16px` | `16px` minimum for inputs/body | Sans, line-height `1.5–1.7` |
| Eyebrow/label | `8–10px` | `9–11px` | Sans, uppercase, letter-spacing `.13–.22em` |
| Price | `11–14px` | `12–14px` | Sans, tabular numerals |

Use sentence case for headings and buttons. Uppercase is reserved for navigation, labels, eyebrows, and compact actions. Italics may emphasize one phrase in a campaign headline; do not italicize product names.

### Wordmark

`ALOURA` is set in a restrained serif with generous tracking. `FINE JEWELRY` sits below as a very small sans-serif descriptor. Never stretch, outline, shadow, or place the wordmark over visually busy areas without sufficient contrast.

## 3. Layout system

### Breakpoints

- Small phone: `375px`
- Large phone/tablet: `768px`
- Desktop navigation transition: `900px`
- Standard desktop: `1024px`
- Large editorial canvas: `1440px+`

### Spacing scale

Use an 8px rhythm with selective 4px increments:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120px`

- Desktop page gutters: `3.5–5vw`
- Mobile page gutters: `16–24px`
- Standard desktop section padding: `80–120px`
- Standard mobile section padding: `64–80px`
- Grid gaps: `8–12px` for merchandise; `24–48px` for text/service layouts

### Grid behavior

- Featured categories: 4 columns desktop, 2 mobile
- Signature collections: 3 columns desktop, 1 mobile
- Bestseller/product rail: up to 6 compact columns on wide screens, 2 mobile
- Main catalog: 3 columns desktop, 2 mobile
- Editorial split: asymmetric `1.15/0.85` or `1.3/1`, stacked mobile
- Service strip: 4 columns desktop, 2 tablet, 1 small mobile

Always let grids reflow. Never introduce horizontal page scrolling. Use a horizontal rail only when it materially improves product browsing and include keyboard/button alternatives.

## 4. Photography and art direction

### Product photography

- Jewelry is sharp, accurately colored, and large enough to inspect.
- Use warm ivory, stone, muted blue-green, skin, or deep espresso backgrounds.
- Maintain consistent crop and scale within a product grid.
- Default product-card ratio: approximately `.82` portrait.
- Product detail hero can use a larger portrait or near-square crop.
- Do not use lifestyle photography as the sole product image.

### Campaign photography

- Intimate close crops, natural light, quiet gestures, and tactile materials.
- Prioritize hands, necklines, ears, and jewelry details over generic portraits.
- Images should feel observational and editorial, not like stock-office lifestyle imagery.
- Use subtle dark overlays only when required for text contrast.

### Image treatment

- No decorative borders, rounded-corner card language, heavy shadows, or loud filters.
- Crop with `object-fit: cover` and set a deliberate focal position.
- Declare aspect ratio or dimensions to prevent layout shift.
- Hero imagery loads eagerly; below-fold imagery loads lazily.
- Supply specific, meaningful alt text. Use empty alt text only for truly decorative repeats.

## 5. Core components

### Announcement bar

30px dark strip, centered uppercase message, concise secondary link. Use for one commercial or service message only. Never auto-rotate without pause controls.

### Header

- Desktop: centered wordmark, left primary navigation, right language/search/bag actions.
- Hero variant: transparent and white over photography.
- Interior variant: ivory background, ink text, fine lower border.
- Mobile: menu, centered wordmark, bag. Menu opens as a full-height ivory panel.
- All targets must be at least `44×44px`.

### Buttons and links

Primary rectangular buttons are square-cornered and compact, not pill-shaped.

- **Dark:** ink background, white text
- **Light:** ivory/paper background, ink text
- **Outline:** transparent with contextual border
- **Text link:** uppercase label with thin underline or directional arrow
- Minimum height: `48px` for primary actions
- Hover: shift toward muted antique gold; never cause layout movement
- Focus: visible 2–4px outline with sufficient contrast

One primary action per component or viewport area. Avoid more than two equal-weight calls to action.

### Product card

Required content:

1. Product image
2. Category eyebrow
3. Product name
4. Fixed formatted price
5. Full-card link to the product page

Desktop may reveal a “View piece” action over the image. Mobile must not rely on hover. Product names use serif; metadata and price use sans-serif. Use locale-aware currency and tabular numerals.

### Category tile

Image-first with a short category label below. Optional “Explore” chip may sit on the image. The label names a stable jewelry family—not a vague campaign slogan.

### Collection card

Large editorial photography, subtle lower gradient, collection title, one-line promise, and one action. Collection cards may be immersive; product cards should remain informational.

### Editorial split/banner

Use a large image paired with a short story: eyebrow, one expressive headline, up to three lines of body copy, and one action. Keep text measure under 65–70 characters.

### Trust/service strip

Use numbered items and plain language. Recommended topics: shipping and returns, lifetime care, responsible sourcing, and specialist guidance.

### Footer

Dark espresso full-width footer with:

- Large wordmark and one-line brand promise
- Newsletter with a visible label or accessible hidden label
- Shop, About, Client Care, and Visit groups
- Legal, language, and currency row

Keep recurring help and contact links in the same relative position on all pages.

## 6. Page templates

### Homepage sequence

1. Announcement and global header
2. Campaign hero with one message and up to two actions
3. Featured category edits
4. Signature collection cards
5. Two complementary commercial/editorial features
6. Bestsellers or new arrivals
7. Brand portrait or journal story
8. Press/social proof
9. Concierge or service story
10. Trust/service strip
11. Full footer

The sequence may be shortened for a campaign, but do not remove product discovery, brand proof, and service reassurance simultaneously.

### Collection page

- Interior header
- Short editorial title and description
- Persistent, keyboard-accessible filtering/sorting
- Product count
- 3-column desktop / 2-column mobile grid
- Applied filters remain visible and removable
- Empty results explain what happened and offer a reset
- Preserve filter and scroll state when returning from a product

### Product detail page

#### Desktop structure

Use a large gallery on the left (`55–62%`) and a focused purchase panel on the right (`38–45%`). The purchase panel may become sticky only if keyboard focus cannot be obscured.

#### Purchase panel order

1. Category/status eyebrow
2. Product name
3. Fixed price
4. Short emotional description
5. Fixed specification summary
6. Size selector only when the product genuinely has sizes
7. Primary “Add to bag” action
8. Installment/payment note
9. Shipping, returns, warranty, and care assurances

#### Product gallery

- Primary front or three-quarter product image first
- Detail/macro image second
- Scale/on-body image third
- Packaging or alternate angle after that
- Do not show controls for stone, carat, color, clarity, metal changes, or dynamic pricing
- Thumbnails and gallery controls must be keyboard accessible and have 44px touch targets

#### Product information

Use plain, fixed statements:

- Material: e.g. `14k solid yellow gold`
- Stone: e.g. `Lab-grown diamond`
- Total carat weight, dimensions, chain length, closure, and item weight when applicable
- Responsible sourcing and care information
- Shipping estimate stated separately from product specifications

Accordions may organize detail, shipping, and care, but essential purchase information must remain visible without expansion.

#### Mobile product page

- Gallery first, purchase content second
- Optional sticky bottom “Add to bag” bar after the main button leaves the viewport
- Reserve bottom padding so content is not hidden behind sticky UI
- Product name and price remain visible before variant/size decisions

#### Product recommendations

After the main details, use one restrained section such as “Wear it with” or “You may also love.” Show 2 products mobile and 4 desktop. Recommendations must never interrupt the primary purchase action.

## 7. Content and voice

### Voice

- Short, assured sentences
- Sensory but specific language
- Warm expertise without sales pressure
- Avoid jargon unless immediately explained
- Avoid clichés such as “timeless elegance,” “sparkle like never before,” and “luxury redefined”

### Naming

Collection names are evocative proper nouns: Solis, Luna, Muse, Aura. Product names combine the collection/name with a clear form: `Solis Diamond Signet`, `Muse Pavé Hoops`.

### Product description pattern

1. One sentence describing form and feeling
2. One sentence stating material, stone, or craftsmanship
3. Optional one sentence about styling or gifting

Example: “A sculptural 14k gold signet set with a brilliant-cut lab-grown diamond. Hand-finished for a softly substantial feel, it is designed to stand alone or anchor a ring stack.”

## 8. English and Hebrew

- English is the default U.S. experience: `lang="en"`, `dir="ltr"`, USD formatting.
- Hebrew uses `lang="he"`, `dir="rtl"`, and complete translated content—not navigation-only translation.
- Mirror layout flow, arrows, breadcrumbs, drawer alignment, and directional animation in RTL.
- Do not mirror product photography, logos, numerals, or universally recognized media controls.
- Keep product codes and Latin collection names readable using `dir="ltr"` or `bdi` inside Hebrew copy.
- Use locale-aware price formatting. Do not merely replace `$` with `₪` without a currency/conversion rule.
- Review Hebrew manually for grammar, line breaks, and mixed-direction text.

## 9. Interaction and motion

- Standard feedback: `150–300ms`
- Image hover zoom: max `1.025`, image only
- Reveal/stagger: `300–450ms`, 30–60ms between items
- Animate opacity and transform, not layout dimensions
- Motion communicates entry, hierarchy, or state; it is never continuous decoration
- All animations must be interruptible
- Respect `prefers-reduced-motion: reduce`
- Primary interactions work on click/tap and keyboard; hover is enhancement only

## 10. Accessibility and performance

- Normal text contrast: at least `4.5:1`; large text and UI boundaries: at least `3:1`
- Visible focus indicators on every interactive element
- Logical heading hierarchy with one page-level `h1`
- Skip link to main content on every page
- Icon-only controls require accessible names and state (`aria-expanded`, `aria-pressed`) where applicable
- Touch targets at least `44×44px`; web pointer targets at least `24×24px`
- Form fields need persistent labels, inline errors, and loading/success feedback
- Never use color alone to indicate selection, error, stock, or sale state
- Reserve media space to prevent cumulative layout shift
- Use responsive AVIF/WebP where supported and lazy-load noncritical media
- A 500-product grid must paginate, progressively load, or virtualize; never render all products at once
- Test at 375, 768, 1024, and 1440px and with browser zoom/text scaling

## 11. Do and do not

### Do

- Use large, intentional photography and generous whitespace
- Repeat commercial actions at logical decision points
- Combine editorial emotion with precise product facts
- Maintain consistent navigation, cards, labels, and footer across routes
- Treat fixed specifications and prices as a trust advantage

### Do not

- Copy With Clarity or any other retailer’s branding, copy, exact layouts, or assets
- Add Build Your Own, diamond databases, appointments, stone customization, or dynamic pricing
- Use rounded app-style cards, glass effects, glossy gradients, or heavy drop shadows
- Use emoji as interface icons
- Mix filled and outline icon styles
- Hide important product details in hover states or accordions
- Crowd mobile layouts with desktop density
- Use temporary stock imagery in final production without confirmed licensing

## 12. New-page checklist

Before a new page is complete, confirm:

- [ ] The page has one clear purpose and primary action
- [ ] It uses the shared header, announcement, service strip, and footer where appropriate
- [ ] Typography, colors, gutters, and section rhythm match this specification
- [ ] Product data shows fixed specifications and fixed prices
- [ ] English and Hebrew layouts are complete and directionally correct
- [ ] Images have intentional crops, dimensions/aspect ratios, and alt text
- [ ] Keyboard, touch, focus, and reduced-motion behavior work
- [ ] Mobile layouts work at 375px without horizontal scrolling
- [ ] Loading, empty, error, and success states are defined where needed
- [ ] Metadata, canonical URL, social preview, and structured product data are set
- [ ] The page does not introduce excluded configurator functionality

