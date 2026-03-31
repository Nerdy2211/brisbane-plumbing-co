# Design System Specification: High-End Industrial Minimalist

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Plumb"**
This design system moves away from the "emergency utility" aesthetic common in the plumbing industry. Instead, it adopts the language of high-end architectural firms and luxury material suppliers. We treat water systems as a refined craft. The experience is defined by **intentional asymmetry**, vast amounts of **negative space**, and a **layered materiality** that mirrors stone, copper, and graphite.

To break the "template" look, designers must avoid rigid, centered grids. Use off-center layouts, overlapping typography, and "breathing zones" where no content exists, allowing the premium materials and photography to carry the brand's weight.

---

## 2. Colors & Materiality
The palette is rooted in the earth and the workshop—warm stones, oxidized metals, and deep charcoal.

### Palette Roles
- **Primary (`#79542e`):** Muted Bronze. Use for primary actions and key brand highlights.
- **Surface (`#fbf9f4`):** Warm Off-White. The "Stone" base for the entire experience.
- **Secondary (`#5f5e5e`):** Graphite. Used for secondary UI elements and supporting text.
- **On-Surface (`#1b1c19`):** Charcoal. High-contrast legibility for primary headings.

### The "No-Line" Rule
Traditional 1px solid borders for sectioning are strictly prohibited. Section boundaries must be defined through:
1.  **Background Color Shifts:** Transitioning from `surface` to `surface-container-low` (`#f5f3ee`).
2.  **Tonal Transitions:** Using `surface-variant` (`#e4e2dd`) to block out content areas.

### The "Glass & Gradient" Rule
To mimic the reflection of polished fixtures, use **Glassmorphism** for floating headers or navigation bars. Use `surface` at 80% opacity with a `20px` backdrop-blur. For CTAs, apply a subtle linear gradient from `primary` (`#79542e`) to `primary-container` (`#956c44`) at a 135-degree angle to give the bronze a metallic "soul."

---

## 3. Typography
We utilize a dual-sans-serif approach to create a modern, editorial feel. **Manrope** provides a geometric, architectural rhythm for displays, while **Inter** ensures technical precision for functional text.

| Level | Token | Font | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display LG** | `display-lg` | Manrope | 3.5rem | Tight tracking (-2%), Leading 1.1 |
| **Headline MD**| `headline-md`| Manrope | 1.75rem | Bold, Industrial weight |
| **Title LG**   | `title-lg`   | Inter   | 1.375rem | Medium weight, Leading 1.5 |
| **Body LG**    | `body-lg`    | Inter   | 1.0rem  | Regular, Leading 1.6 (Generous) |
| **Label MD**   | `label-md`   | Inter   | 0.75rem | All-caps, tracked out (+10%) |

**Editorial Note:** Use `display-lg` for large, asymmetrically placed numbers (e.g., "01") to guide the user through service processes.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering**, mimicking stacked sheets of fine material rather than artificial light sources.

- **The Layering Principle:** Place a `surface-container-lowest` (`#ffffff`) card on a `surface-container-low` (`#f5f3ee`) background. This creates a "lift" that feels architectural rather than digital.
- **Ambient Shadows:** When a floating element (like a modal) is required, use a shadow with a 40px blur, 0% spread, and 6% opacity using the `on-surface` color. It should feel like a soft glow, not a drop shadow.
- **The Ghost Border:** If a boundary is required for accessibility, use the `outline-variant` (`#d8c3b4`) at 20% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
- **Primary:** Background `primary` (`#79542e`), text `on-primary` (`#ffffff`). Shape: `sm` (0.125rem) for a sharp, technical look.
- **Tertiary:** No background. Underline using a 1px `primary` border with `10px` offset. On hover, the underline expands to a 2px stroke.

### Input Fields
- **Style:** Minimalist underline style or "Ghost Box." 
- **States:** Default uses `outline-variant`. On focus, transition the bottom border to `primary` (Bronze). No "Emergency Red" for errors; use `error` (`#ba1a1a`) only in small, `label-sm` helper text.

### Cards & Lists
- **Rule:** Forbid the use of divider lines. 
- **Execution:** Separate list items using the `spacing-6` (2rem) scale. For service cards, use a slight background shift to `surface-container-highest` (`#e4e2dd`) on hover to indicate interactivity.

### Signature Component: The "Material Spec" Chip
Used to highlight specific fixtures or materials (e.g., "Brushed Copper," "Travertine").
- **Style:** `surface-container-low` background, `secondary` text, `sm` roundedness. Include a 4px circular "swatch" of the actual material color next to the text.

---

## 6. Do's and Don'ts

### Do:
- **Use "Wasteful" Whitespace:** If you think there is enough space, add 20% more. Use `spacing-24` (8.5rem) between major sections.
- **Asymmetric Imagery:** Align text to the left and high-quality photography of copper pipes or stone textures to the far right, slightly overlapping the grid.
- **Muted Accents:** Use the bronze `primary` color sparingly—only for the "Primary Path."

### Don't:
- **Don't use "Emergency" Colors:** Avoid bright reds or yellows for alerts. Use `tertiary` (`#665a4a`) for warnings to maintain the premium calm.
- **Don't use Rounded Corners:** Avoid `full` or `xl` roundedness. Stick to `sm` (0.125rem) or `none` to maintain the industrial, precision-engineered feel.
- **Don't use Stock Iconography:** Avoid generic, bubbly icons. Use thin-stroke (1px) linear icons that look like technical blueprints.