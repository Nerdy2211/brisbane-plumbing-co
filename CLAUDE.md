# Brisbane Plumbing Co. — Website Project v2

## Project Overview
A premium multi-page website for a Brisbane-based plumbing business (placeholder name: "Brisbane Plumbing Co." — real name TBC). The design philosophy is "The Architectural Plumb" — high-end industrial minimalism that treats plumbing as refined craft. Think luxury architectural firm, not emergency tradie. Warm earth tones, vast negative space, editorial typography, and layered materiality inspired by stone, copper, and graphite.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel via GitHub
- **Icons:** Lucide React (thin-stroke, 1px linear style — technical blueprint feel)
- **Animations:** GSAP + ScrollTrigger
- **Fonts:** Manrope (headlines/display) + Inter (body/functional text) via next/font/google

## Design System
Refer to `DESIGN.md` for the complete specification. Stitch HTML exports in `/stitch-exports/` are the source of truth for visual implementation. **Always preserve exact Stitch Tailwind classes when converting to React.**

### Creative Direction: "The Architectural Plumb"
- Intentional asymmetry — avoid rigid centred grids
- Vast negative space — if you think there's enough space, add 20% more
- Layered materiality — depth via tonal shifts, not drop shadows
- Off-centre layouts, overlapping typography, breathing zones
- Premium materials and photography carry the brand weight

### Colour Palette (Earth & Workshop)
```
primary:                  #79542e  — Muted Bronze (CTAs, key highlights ONLY)
primary-container:        #956c44  — Bronze light (gradient CTAs)
surface:                  #fbf9f4  — Warm Off-White "Stone" (main background)
surface-container-low:    #f5f3ee  — Warm cream (alternate sections)
surface-container-lowest: #ffffff  — Pure white (card backgrounds)
surface-container-highest:#e4e2dd  — Warm grey (hover states on cards)
surface-variant:          #e4e2dd  — Block out content areas
on-surface:               #1b1c19  — Charcoal (primary headings, text)
secondary:                #5f5e5e  — Graphite (secondary UI, supporting text)
on-primary:               #ffffff  — White (text on bronze buttons)
outline-variant:          #d8c3b4  — Ghost borders (20% opacity only)
tertiary:                 #665a4a  — Muted brown (warnings, subtle accents)
error:                    #ba1a1a  — Error (use sparingly, small label text only)
```

### Typography (Dual Sans-Serif — Editorial Feel)
| Token | Font | Size | Notes |
|-------|------|------|-------|
| display-lg | Manrope | 3.5rem | Tight tracking (-2%), leading 1.1. For hero headlines. |
| headline-md | Manrope | 1.75rem | Bold, industrial weight. Section headings. |
| title-lg | Inter | 1.375rem | Medium weight, leading 1.5. Sub-headings. |
| body-lg | Inter | 1.0rem | Regular, leading 1.6. Body text. |
| label-md | Inter | 0.75rem | ALL-CAPS, tracked out (+10%). Section labels. |

Use `display-lg` for large asymmetric numbers (e.g., "01", "02") to guide users through service processes.

### Critical Design Rules
1. **NO BORDERS/DIVIDERS** — Section boundaries defined by background colour shifts ONLY (surface → surface-container-low → surface-variant). No 1px solid borders.
2. **NO ROUNDED CORNERS** — Use border-radius `sm` (0.125rem) or `none`. No rounded-lg, rounded-xl, or rounded-full. Sharp, precision-engineered feel.
3. **NO DROP SHADOWS** — Depth via tonal layering (lighter card on slightly darker background). If floating element needs shadow, use 40px blur, 0% spread, 6% opacity of on-surface colour.
4. **NO STOCK PHOTOS OF PEOPLE** — Only close-ups of copper pipes, brass fittings, stone textures, tools, fixtures, industrial valves, water systems. Warm-toned architectural photography.
5. **NO GENERIC ICONS** — Thin-stroke (1px) linear icons that look like technical blueprints. No bubbly/rounded icon styles.
6. **BRONZE IS PRECIOUS** — Use primary (#79542e) sparingly — only for the "Primary Path" (main CTAs, key highlights). Overusing it kills the premium feel.
7. **GLASSMORPHISM HEADER** — Sticky nav uses surface at 80% opacity + 20px backdrop-blur.
8. **CTA GRADIENTS** — Primary buttons use subtle linear gradient from primary (#79542e) to primary-container (#956c44) at 135 degrees for metallic bronze effect.

### Elevation System
- Cards: `surface-container-lowest` (#ffffff) card on `surface-container-low` (#f5f3ee) background. Architectural lift.
- Floating elements: 40px blur, 0% spread, 6% opacity shadow using on-surface colour.
- Ghost borders: `outline-variant` (#d8c3b4) at 20% opacity ONLY when needed for accessibility.
- Card hover: Background shifts to `surface-container-highest` (#e4e2dd).

### Spacing
- Between major sections: `spacing-24` (8.5rem) minimum — generous "wasteful" whitespace
- Between content blocks: `spacing-6` (2rem)
- List items separated by space, NEVER by divider lines

---

## Business Information (Placeholders)
- **Business name:** Brisbane Plumbing Co. (placeholder — real name TBC)
- **Phone:** 0400 000 000 (placeholder)
- **Email:** info@brisbaneplumbingco.com.au (placeholder)
- **Location:** Brisbane, QLD
- **Service area:** Greater Brisbane, Logan, Moreton Bay, Redlands
- **ABN:** XX XXX XXX XXX (placeholder)
- **QBCC Licence:** #XXXXXXX (placeholder)
- **Established:** "Since 2010" (placeholder)

---

## Page Structure & Content

### Navigation
Glassmorphic sticky header: Logo "Brisbane Plumbing Co." | Services | Service Areas | About | FAQ | "Get a Quote" button (bronze gradient)

---

### PAGE 1: HOME

**Hero Section**
- Label (label-md, caps): "BRISBANE'S LOCAL PLUMBER"
- Headline (display-lg): "Quality Plumbing You Can Count On."
- Subtext (body-lg): "From blocked drains to full renovations — licensed, insured, and built on doing the job right the first time."
- Two CTAs: "Get a Quote" (bronze gradient fill) | "Our Services" (tertiary underline style)
- Right side: Premium image of brass/copper fittings (warm-toned, no people)
- Layout: Asymmetric — text left-aligned, image right and slightly overlapping grid

**Trust Bar**
- Row of 6 items, minimal styling:
  - QBCC Licensed | Fully Insured | Same-Day Service | Workmanship Guaranteed | 4.9★ Google Rating | Family Owned

**Services Grid**
- Label (label-md): "WHAT WE DO"
- Headline (headline-md): "Plumbing Services Across Brisbane"
- 8 service cards (tonal lift cards — white on cream background):

1. **Blocked Drains** — "Drains backing up? We'll find the cause with CCTV cameras and clear it fast with high-pressure jet rodding. No guesswork."
2. **Hot Water Systems** — "Supply, install, and repair all hot water systems — gas, electric, solar, and heat pump. Same-day replacements available."
3. **Leak Detection** — "Hidden leaks waste water and cause damage. We use the latest detection technology to find and fix leaks without tearing up your property."
4. **Gas Fitting** — "Licensed gas fitter for cooktops, BBQs, hot water, heaters, and gas line installations. Safety compliance certificates provided."
5. **General Maintenance** — "Leaking taps, running toilets, burst pipes, and everything in between. No job is too small — we'll sort it quickly."
6. **Kitchen & Bathroom** — "Renovating or building new? We work with your builder or designer to get the plumbing right — from rough-in to finished fixtures."
7. **Stormwater & Drainage** — "Stormwater and sewer pipe repairs, new installations, CCTV inspections, and drainage solutions for homes and commercial properties."
8. **Commercial Plumbing** — "Reliable plumbing for offices, retail, restaurants, and body corporate. Maintenance plans and priority response available."

**Featured Service Sections** (3 showcase blocks with images)

Section A — "Blocked Drains & Drainage"
- Body: "We don't just clear the blockage — we find out why it happened. Using CCTV drain cameras and high-pressure water jetters, we diagnose the root cause and fix it properly so it doesn't come back. Whether it's tree roots, grease buildup, or damaged pipes, we've seen it all."
- Chips: "CCTV Inspection" | "High-Pressure Jetting" | "Root Cause Fix"
- Image: Dark close-up of drain/pipe (no people)

Section B — "Hot Water Systems"
- Body: "No hot water? We can usually get you sorted the same day. We install, repair, and service all types — gas, electric, solar, and heat pump — from brands like Rheem, Rinnai, Bosch, and Dux. We'll help you choose the right system for your home and budget."
- Chips: "All Brands" | "Same-Day Service" | "Energy Efficient Options"
- Image: Clean hot water system or copper piping photo

Section C — "Renovations & New Builds"
- Body: "Planning a bathroom reno or building a new home? We work alongside builders and designers to make sure the plumbing is done right from the start. From first-fix rough-in to final fixture installation, we handle it all with care and attention to detail."
- Chips: "New Builds" | "Renovations" | "Queenslanders"
- Image: Premium tap/fixture close-up (brass, gold tones)

**Service Area Preview**
- Label: "WHERE WE WORK"
- Brief text: "We service all of Brisbane — from the inner city to the outer suburbs. If you're in South East QLD, we can help."
- Link to Service Areas page

**Testimonials**
- 2-3 testimonials in clean card layout
- Testimonial 1: "Called about a burst pipe on a Saturday morning. They were here within the hour, found the problem straight away, and fixed it properly. Cleaned up after themselves too. Couldn't ask for better service." — Sarah M., Paddington
- Testimonial 2: "Really impressed with the honest advice. They replaced our old hot water system and explained all the options clearly without pushing us to overspend. Fair price, great work." — James T., Indooroopilly
- Testimonial 3: "We've used them three times now — blocked drain, new gas cooktop, and a bathroom reno. Reliable, on time, and the quality of work is excellent every time. They're our go-to plumber." — Michelle R., Bulimba
- Initial avatar, name, suburb
- Star rating

**Contact/CTA Section**
- Label: "GET IN TOUCH"
- Headline: "Let's Talk About Your Plumbing."
- Subtext: "Whether it's an urgent repair or a planned renovation, give us a call or fill in the form and we'll get back to you quickly."
- CTAs: "Get a Quote" | "Call 0400 000 000"

**Footer**
- Logo + tagline: "Quality plumbing, gas fitting, and drainage services for Brisbane homes and businesses."
- Columns: Explore (Services, Process, Service Areas, About, FAQ) | Company (Privacy Policy, Terms of Service, Contact Us) | Contact (Phone, Email, Location)
- QBCC Licence, ABN
- © 2026

---

### PAGE 2: SERVICES
Full services page with all 8 services expanded. Each service gets:
- Icon, title, 2-3 paragraph description covering what we do, how we do it, and why it matters
- Common problems we fix (bullet points)
- "Get a Quote" CTA
- Reuses homepage service data but with more detail

---

### PAGE 3: SERVICE AREAS

**Hero**
- Label: "WHERE WE WORK"
- Headline: "Servicing All of South East Queensland."
- Subtext: "From Brisbane's inner suburbs to Logan, Moreton Bay, and the Redlands — we're local, we know the area, and we're ready to help."

**Region Cards** (3 columns):
1. **Brisbane** — Inner City & CBD, Paddington & West End, New Farm & Teneriffe, Southside suburbs
2. **Moreton Bay** — Redcliffe Peninsula, North Lakes & Mango Hill, Pine Rivers & Strathpine
3. **Logan & Redlands** — Logan Central & Springwood, Underwood & Sunnybank, Capalaba & Cleveland

**Commitment Banner**
- "We Show Up When We Say We Will"
- "Our jobs are planned properly from the start — no shortcuts, no surprises. Every job is carried out by a licensed plumber who takes the time to do it right."
- "Workmanship Guaranteed" badge

**Why Local Matters** (3 points):
1. **We Know Brisbane's Plumbing** — "Brisbane's mix of older Queenslanders, modern builds, and subtropical conditions means every home is different. We've worked on thousands of Brisbane properties and understand the common issues."
2. **Council Compliant** — "Different councils have different rules. We make sure all our work meets the specific requirements for your area — whether that's Brisbane City, Logan, or Moreton Bay."
3. **Right Materials for Your Area** — "Water quality and soil conditions vary across Brisbane. We recommend materials and systems that are suited to your specific location for longer-lasting results."

**Material Showcase** — Finish options: Brushed Copper, Brushed Graphite, Polished Chrome, Satin Brass, Matte Black

---

### PAGE 4: ABOUT

**Hero**
- Label: "ABOUT US"
- Headline: "Built on Doing the Job Right."
- Body: "We started this business with a simple idea — be the kind of plumber you'd actually recommend to your mates. That means showing up on time, being upfront about costs, doing quality work, and leaving your place clean when we're done."

**Section: Quality Over Shortcuts**
- "We'd rather take the time to fix something properly than rush through and have you calling us back next month. Every connection, every seal, and every fitting is done to last. That's not a sales pitch — it's just how we work."

**Section: Licensed & Insured**
- "We're fully QBCC licensed, insured, and qualified as plumbers, drainers, and gas fitters. We keep our training up to date and our standards high."
- 3 trust pillars: "QBCC Licensed" | "Fully Insured" | "Master Plumber"

**Section: Built for Brisbane**
- "Whether it's a straightforward tap repair or a complete new build, we bring the same level of care to every job. Brisbane homeowners and businesses trust us because we deliver — and we've got the reviews to prove it."

**CTA**
- "Ready to get started?"
- CTAs: "Get a Quote" | "Call 0400 000 000"

---

### PAGE 5: FAQ

**Hero**
- Label: "COMMON QUESTIONS"
- Headline: "Frequently Asked Questions"
- Subtext: "Everything you need to know about our services, pricing, and how we work. If your question isn't answered here, give us a call."

**Licensing & Qualifications**
- "We're fully licensed with the Queensland Building and Construction Commission (QBCC). All our plumbers are qualified and insured, and we carry public liability cover on every job."
- Badges: "QBCC #XXXXXXX" | "Fully Insured" | "Public Liability"

**Business Hours**
- Mon — Fri: 7:00am — 5:00pm
- Saturday: 9:00am — 12:00pm
- Sunday: Closed
- "For urgent issues during business hours, we'll do our best to get to you the same day."

**How Quoting Works**
1. "Give Us a Call or Fill In the Form — Tell us what's going on and we'll ask a few questions to understand the issue."
2. "We'll Come Take a Look — For most jobs, we need to see it in person to give you an accurate quote. No charge for the assessment on standard jobs."
3. "Clear Written Quote — You'll get a straightforward quote that breaks down what needs doing and what it'll cost. No surprises."

**What Areas Do You Cover?**
- "We service all of greater Brisbane, Logan, Moreton Bay, and the Redlands. If you're unsure whether you're in our area, just give us a call."

**What Types of Work Do You Do?**
- "Everything from a dripping tap to a full house replumb. Blocked drains, hot water systems, gas fitting, renovations, new builds, commercial maintenance — we cover it all."

**Bottom CTA**
- "Still have a question? We're happy to help."
- "Call Us" | "Send a Message"

---

## Animations Spec
- Section headings: Word-by-word fade-in + slide-up (GSAP ScrollTrigger)
- Service cards: Stagger scale(0.95→1) + fade on scroll
- Featured images: Clip-path curtain reveal on scroll
- CTA buttons: Magnetic hover + bronze gradient shift
- Smooth scrolling: Lenis
- Large asymmetric numbers ("01", "02"): Fade in with parallax offset
- All play once: toggleActions "play none none none"
- Respect prefers-reduced-motion

---

## Coding Constraints & Standards

### Architecture
- Next.js App Router (app/ directory)
- Components in `/src/components/` by feature
- UI components in `/src/components/ui/`
- Content data in `/src/data/` as typed constants
- Business info in single `constants.ts`
- Max 150 lines per component

### TypeScript
- Strict mode, no `any`, proper interfaces

### Tailwind
- All Stitch colour tokens defined in `tailwind.config.ts`
- Mobile-first responsive
- Tailwind only, no CSS modules
- `cn()` utility for conditional classes

### Components
- Server Components default, "use client" only when needed
- GSAP/Lenis wrapped in dynamic import `ssr: false`
- `next/image`, `next/link`, `next/font/google`

### Performance
- WebP images, lazy load below fold
- Individual Lucide icon imports only
- GSAP client-side only
- Target 90+ Lighthouse

### Stitch Workflow
- HTML exports in `/stitch-exports/` are visual source of truth
- Preserve exact Stitch Tailwind classes when converting to React
- All Stitch colour tokens must be in tailwind.config.ts

### Common Bugs
- Hydration: browser-API components → "use client" + dynamic import
- Images: `/public/images/` → `/images/filename.jpg`
- Phone: `tel:0400000000` href, "0400 000 000" display
- GSAP + SSR: dynamic import only
- Stale cache: delete `.next`, rebuild
- Run `npm run build` after each section

---

## SEO Strategy

### Page Titles & Descriptions
- Home: "Brisbane Plumbing Co. | Licensed Plumber Brisbane | Same-Day Service"
  - "Brisbane's trusted local plumber. Blocked drains, hot water systems, gas fitting, renovations & emergency plumbing. QBCC licensed, fully insured. Call 0400 000 000."
- Services: "Plumbing Services Brisbane | Residential & Commercial | Brisbane Plumbing Co."
  - "Complete plumbing services across Brisbane — blocked drains, hot water, gas fitting, leak detection, renovations, and commercial plumbing. Get a quote today."
- Service Areas: "Plumber Brisbane, Logan, Moreton Bay & Redlands | Brisbane Plumbing Co."
  - "Servicing all of South East QLD — Brisbane CBD, Northside, Southside, Logan, Moreton Bay, and Redlands. Local plumber who knows your area. QBCC licensed."
- About: "About Brisbane Plumbing Co. | QBCC Licensed Brisbane Plumber"
  - "Family-owned Brisbane plumbing business. QBCC licensed, fully insured. Quality workmanship on every job — from simple repairs to full renovations."
- FAQ: "Plumbing FAQ | Pricing, Process & Licensing Info | Brisbane Plumbing Co."
  - "Common questions about our plumbing services, quoting process, business hours, and licensing. Straightforward answers for Brisbane homeowners."

### SEO Structure
- Semantic HTML with proper heading hierarchy (one H1 per page)
- Open Graph tags on all pages
- All images: descriptive alt text with location keywords
- Schema markup: LocalBusiness type
- Individual service pages can be added later for deeper SEO

---

## Current Status
- [x] Project scaffolding
- [x] Homepage — Hero
- [x] Homepage — Trust bar
- [x] Homepage — Services grid
- [x] Homepage — Featured services (×3)
- [x] Homepage — Service area preview
- [x] Homepage — Testimonials
- [x] Homepage — Contact CTA
- [x] Homepage — Footer
- [x] Services page
- [x] Service Areas page
- [x] About page
- [x] FAQ page
- [ ] GSAP animations
- [ ] Lenis smooth scroll
- [ ] Custom thin-stroke service icons
- [ ] Mobile responsive pass
- [ ] SEO meta tags + Open Graph
- [ ] Google Maps embed
- [ ] Lighthouse audit
- [ ] Deploy to Vercel
