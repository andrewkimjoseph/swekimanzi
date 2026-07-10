Goal: Replace the current lavender/pink brutalist palette with a Neon Mint tech palette and move from heavy black-outline brutalism to a cleaner, modern tech look.

## Changes

1. **Redesign tokens in `src/styles.css`**
   - Map the Neon Mint palette to semantic tokens:
     - `--color-background`: deep navy `#0d1b2a`
     - `--color-foreground`: mint-tinted white `#e7fbf6`
     - `--color-primary`: bright mint `#2dd4a8`
     - `--color-primary-foreground`: deep navy `#0d1b2a`
     - `--color-accent`: vivid mint `#73ffb8`
     - `--color-accent-foreground`: deep navy `#0d1b2a`
     - `--color-muted`: dark teal `#1b4332`
     - `--color-muted-foreground`: mint-white
     - `--color-surface/card/popover`: dark teal `#1b4332`
     - `--color-border/ring/input`: subtle mint-white at low opacity
     - `--color-destructive`: warm error red
   - Update `--shadow-brutal*` to soft glow/elevation shadows using `color-mix` with primary mint instead of hard black offsets.

2. **Refactor `@utility` classes**
   - `app-shell`, `header-bar`: use `--color-background` and a subtle bottom border instead of lavender/black.
   - `btn-hero-primary`: mint background, navy text, subtle shadow, no black border.
   - `btn-hero-tertiary`: transparent with mint border/text.
   - `card`, `card-muted`, `project-card`, `tech-badge`: dark teal surfaces, mint accents, subtle borders/shadows, hover lift without hard offsets.
   - `section-label` / `section-label-inverse`: mint/dark variants.
   - `pill-link`: mint underline color.

3. **Audit and update component/routes for hardcoded colors**
   - Search for `text-white`, `text-black`, `bg-black`, `border-black`, `bg-white`, `text-white/...` in `src/components/` and `src/routes/`.
   - Replace with semantic classes: `text-foreground`, `text-primary`, `text-accent`, `bg-background`, `bg-surface`, `border-border`, etc.
   - Update `theme-color` meta in `src/routes/__root.tsx` to `#0d1b2a`.

4. **Verify**
   - Run `bun run typecheck`.
   - Open the preview and confirm the home, work, about, and contact pages render with the new palette and no broken contrast.

## Outcome
A cohesive dark tech look with mint accents, softer shadows, and no heavy black brutalist outlines.