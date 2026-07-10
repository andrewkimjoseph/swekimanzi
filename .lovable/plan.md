Swap the Navy Trust palette for the uploaded 5-color set while keeping the current brutalist styling (2px hard borders, 0-radius, offset block shadows, uppercase display type). Only tokens and a few semantic mappings change — no layout/component rewrites.

## New palette

| # | Name | Hex | Role |
|---|------|-----|------|
| 01 | Medium Slate Blue | `#8806ff` | primary (buttons, key highlights) |
| 02 | Periwinkle | `#a8baff` | accent (hovers, secondary marks) |
| 03 | Columbia Blue | `#c8beff` | foreground / borders / shadows (off-lavender on black) |
| 04 | Rich Black | `#0c0c18` | background / shell |
| 05 | Celadon | `#b9f0d7` | secondary accent (tags, success-ish highlights) |

Rich Black stays the canvas, Columbia Blue replaces the previous off-white for borders/shadows/type, Medium Slate Blue becomes the primary action color, Periwinkle and Celadon carry secondary accents.

## Changes

### 1. `src/styles.css` — `@theme inline` tokens
Replace the Navy Trust `--color-*` block with:
- `--color-background: #0c0c18`
- `--color-foreground: #c8beff`
- `--color-shell: #0c0c18`
- `--color-surface: #14142a` (Rich Black lifted ~6% for card surface separation)
- `--color-muted: #1a1a33`
- `--color-muted-foreground: #a8baff`
- `--color-card` / `--color-popover` / `--color-secondary`: `#14142a` with foreground `#c8beff`
- `--color-primary: #8806ff`, `--color-primary-foreground: #ffffff`
- `--color-accent: #a8baff`, `--color-accent-foreground: #0c0c18`
- `--color-secondary-accent: #b9f0d7` (new token for Celadon; used by `tech-badge` and section labels)
- `--color-border` / `--color-input` / `--color-ring: #c8beff`
- `--color-destructive: #ff6b6b` (unchanged), destructive-foreground `#0c0c18`

Update the three brutal shadow tokens to use Columbia Blue so hard offsets stay visible on Rich Black:
- `--shadow-brutal-sm: 2px 2px 0 0 #c8beff`
- `--shadow-brutal: 4px 4px 0 0 #c8beff`
- `--shadow-brutal-lg: 8px 8px 0 0 #c8beff`

Set `<meta name="theme-color">` in `src/routes/__root.tsx` head to `#0c0c18`.

### 2. Semantic accent touches in `src/styles.css`
Small tweaks so all five colors show up intentionally, not just primary:
- `tech-badge`: keep transparent bg + Columbia Blue border, but on `:hover` swap background to `#b9f0d7` (Celadon) with Rich Black text — gives the marquee/tag chips a lively accent.
- `section-label`: primary bg stays Medium Slate Blue with white text.
- `nav-segmented-item:hover`: use `--color-muted` (unchanged behavior, just re-tinted by tokens).
- `nav-segmented-item-active`: inverts to `#c8beff` bg + `#0c0c18` text (already the pattern, just via new tokens).
- `pill-link` underline: switch to Periwinkle (`--color-accent`) so it reads as a link accent, not body text.
- Footer/link `hover:text-primary` becomes Medium Slate Blue automatically.

### 3. `TypingTagline` cursor
Cursor block currently uses `bg-foreground`. Keep it, but the class `text-primary`/`bg-primary` references were removed in the previous brutalist pass — no change needed. Verify tagline still reads as Columbia Blue on Rich Black.

### 4. Memory update
Update `mem://index.md` Core rules and `mem://design/palette` to describe the new palette (Medium Slate Blue / Periwinkle / Columbia Blue / Rich Black / Celadon) so future changes stay on-palette. Remove the "Navy Trust" description.

### 5. Verify
- `bun run typecheck`.
- Playwright screenshots at 390×844 (mobile) and 1280×900 (desktop) of `/`, `/work`, `/about`, `/contact` to confirm: Rich Black background, Columbia Blue borders/shadows visible, Medium Slate Blue primary CTA, Periwinkle/Celadon accents present, no leftover navy or steel blue.

## Outcome
Same brutalist structure — hard 2px borders, 0-radius, offset block shadows, uppercase display type — now on a Rich Black canvas with Medium Slate Blue as the loud primary, Columbia Blue as the structural off-color, and Periwinkle + Celadon as supporting accents.
