Goal: Keep the current Navy Trust colors (deep navy, steel blue, off-white) but swap the soft, calm aesthetic for a proper brutalist treatment — hard edges, heavy borders, offset block shadows, raw typography.

## Direction

Brutalism here means: thick off-white borders on every surface, sharp 0px corners, chunky offset shadows (not glow, not soft depth), oversized display type with tight tracking, all-caps utility labels, exposed grid lines, no blur/backdrop effects, no color-mix soft hovers. Interaction feels physical: hover nudges the block, active slams it into place with shadow collapsing.

## Changes

### 1. Tokens (`src/styles.css`)
- Keep all `--color-*` values as-is (Navy Trust stays).
- Radius: set `--radius-brutal: 0`.
- Borders: bump `--color-border` / `--color-input` from 14% to solid off-white (`#e8edf3`) and use 2px border widths in utilities.
- Shadows: replace the current soft drop shadows with hard offset blocks:
  - `--shadow-brutal-sm: 2px 2px 0 0 #e8edf3`
  - `--shadow-brutal: 4px 4px 0 0 #e8edf3`
  - `--shadow-brutal-lg: 8px 8px 0 0 #e8edf3`
- Remove `--text-gradient` usage sites (brutalism = flat color, no gradient text).

### 2. Utilities (`src/styles.css`)
- `header-bar`: drop `backdrop-filter: blur`, use solid `--color-background`, thicken bottom border to 2px solid off-white.
- `card`, `card-muted`, `project-card`, `tech-badge`: 2px solid off-white border, 0 radius, hard offset shadow. `project-card:hover` translates `-3px, -3px` and swaps to `--shadow-brutal-lg`.
- `btn-hero-primary`: primary navy blue fill, 2px off-white border, hard offset shadow; `:active` translates `4px, 4px` and drops shadow to 0.
- `btn-hero-tertiary`: transparent, 2px off-white border, off-white text (not steel blue), hard shadow on hover.
- `section-label` / `section-label-inverse`: 2px border, 0 radius, uppercase kept.
- `nav-segmented`: replace the pill/rounded container with a flat row of hard-bordered tabs. `nav-segmented-item` gets 2px off-white border, 0 radius, uppercase; active state inverts to off-white background + navy text with an inset offset shadow.
- `pill-link`: keep the underline but thicken to 3px and switch color to off-white.
- Add a subtle repeating background grid utility (`bg-grid`) for the app shell so the brutalist grid is visible behind content.

### 3. Components
- `PlaceholderImage` / `AvatarPlaceholder`: already use `shadow-brutal` — will inherit the new hard shadow automatically; verify borders read as 2px off-white.
- `StackMarquee`: thicken top/bottom borders to 2px off-white.
- `TypingTagline`: swap `text-primary` to `text-foreground` so the tagline reads flat off-white against navy (brutalist prefers flat, high-contrast type).
- `Header` (`__root.tsx`): confirm logo uses display font at its heaviest weight; no other structural changes.

### 4. Typography pass
- Bump hero H1 tracking tighter and weight to 800 where it currently sits lower.
- All uppercase labels get `letter-spacing: 0.12em` for that Swiss-brutalist feel.

### 5. Verify
- `bun run typecheck`.
- Playwright screenshots on mobile (390×844) and desktop for `/`, `/work`, `/about`, `/contact` to confirm: hard borders visible, offset shadows present, no blur, no glow, colors unchanged.

## Outcome
Same Navy Trust palette, but the site reads as intentional brutalist design — heavy off-white borders on navy, chunky offset shadows, sharp corners, loud typographic hierarchy.
