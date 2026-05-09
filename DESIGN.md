---
name: Digital Brutalist Prep
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e4beb6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ab8982'
  outline-variant: '#5b403a'
  surface-tint: '#ffb4a4'
  primary: '#ffb4a4'
  on-primary: '#630e00'
  primary-container: '#ff5733'
  on-primary-container: '#580c00'
  inverse-primary: '#b72301'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#929191'
  on-tertiary-container: '#2a2a2a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a4'
  on-primary-fixed: '#3d0600'
  on-primary-fixed-variant: '#8c1800'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 84px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 36px
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
spacing:
  unit: 4px
  gutter: 24px
  margin-sm: 16px
  margin-md: 40px
  margin-lg: 80px
  border-width: 3px
  hard-shadow: 6px
---

## Brand & Style

This design system is built for high school students navigating the high-stakes world of test preparation. It rejects the soft, corporate safety of traditional EdTech in favor of **Digital Brutalism**. The aesthetic is raw, confident, and high-energy, utilizing stark contrasts and heavy structural elements to create a sense of urgency and importance.

The personality is "Intellectual Punk"—it is polished enough to be trustworthy but bold enough to feel subversive and fun. By using heavy strokes, "illegal" bright accents, and unconventional layouts, the design system transforms the chore of studying into a high-octane digital experience.

## Colors

The palette is anchored by a deep **Dark Charcoal (#131313)** background, providing a sophisticated, low-fatigue canvas for late-night study sessions. 

The primary driver of the UI is **Vibrant Orange (#FF5733)**, a high-energy, "warning-sign" hue that demands attention and injects heat into the interface. This is complemented by pure white for maximum legibility and a secondary charcoal (#222222) for nested containers. Interactive states should utilize the primary orange aggressively to indicate focus and success.

## Typography

Typography is a structural element in this design system. We use **Syne** for all headings; its extra-bold weights and unique glyphs provide the "Digital Brutalist" edge. For maximum impact, headlines should be set with tight leading and slight negative letter-spacing.

**Inter** is utilized for body copy to ensure that complex test questions and explanations remain highly readable. **Space Mono** (available via the "technical" genre) is used for labels, metadata, and progress indicators to lean into the digital, systematic nature of the platform.

## Layout & Spacing

The layout follows a rigid, visible grid. Elements are separated by generous gutters and defined by **3px solid black or white borders**. 

We employ a 12-column fluid grid for desktop and a 4-column grid for mobile. Spacing is intentional and mathematical, using a 4px base unit. Instead of soft margins, we use "hard" dividers and container blocks that stack vertically. On desktop, large "hero" margins of 80px keep the content focused and prevent the brutalist elements from becoming overwhelming.

## Elevation & Depth

This design system rejects naturalistic shadows. Depth is achieved through **Hard Shadows** (offset strokes) and **Layered Borders**.

1.  **Level 0 (Surface):** The #131313 background.
2.  **Level 1 (Cards/Containers):** Surfaces with a 3px border.
3.  **Level 2 (Interactive):** When hovered or active, elements "lift" by showing a solid orange (#FF5733) or white offset shadow (6px x 6px) with 100% opacity. 

There are no blurs, no gradients, and no transparency. Everything is opaque and structurally distinct.

## Shapes

The shape language is strictly **Sharp (0px)**. Every button, input field, and card must have 90-degree corners. This reinforces the "Brutalist" architectural influence and ensures the thick borders connect seamlessly without awkward gaps. Geometric patterns—such as diagonal hatches or checkerboards—can be used as background fills for decorative containers to add visual energy.

## Components

### Buttons
Buttons are the primary high-energy element. They feature a 3px black border and a solid Orange (#FF5733) fill. On hover, the button should shift its position 4px up and 4px left, revealing a solid white "hard shadow" underneath. Text is set in Syne Bold, Uppercase.

### Input Fields
Inputs use a Dark Charcoal (#222222) fill with a 3px white border. When focused, the border changes to Orange (#FF5733). Placeholder text is set in Space Mono for a "terminal" feel.

### Cards
Cards are used for practice questions and module selection. They feature a 3px white border. To differentiate "active" modules, apply a diagonal Orange-and-Black striped header bar (6px height) at the top of the card.

### Progress Bars
Progress bars are thick (16px height) with a 3px border. The "unfilled" portion is #222222, and the "filled" portion is a solid block of Orange (#FF5733). No rounded caps; everything remains rectangular.

### Chips & Tags
Small labels used for subject categories (e.g., "ALGEBRA", "READING"). These use Space Mono, have a 2px border, and a transparent background. On "Select," they flip to a solid Orange background with black text. 