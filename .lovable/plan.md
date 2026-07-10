Goal: Replace the current Neon Mint palette (bright mint glow, dark teal surfaces) with a calmer Navy Trust palette and remove the AI-coded glow aesthetic.

## Changes

1. **Redesign tokens in `src/styles.css`**
   - Map the Navy Trust palette to semantic tokens:
     - `--color-background`: deep navy `#0f1b3d`
     - `--color-foreground`: crisp off-white `#e8edf3`
     - `--color-primary`: muted steel blue `#3b6fa0`
     - `--color-primary-foreground`: off-white `#e8edf3`
     - `--color-accent`: lighter steel blue `#5b8ec2`
     - `--color-accent-foreground`: deep navy `#0f1b3d`
     - `--color-muted`: mid navy `#1e3a5f`
     - `--color-muted-foreground`: soft blue-gray `#b0c4d8`
     - `--color-surface/card/popover`: mid navy `#1e3a5f`
     - `--color-border/ring/input`: off-white at low opacity
     - `--color-destructive`: warm error red
   - Remove or drastically soften `--shadow-brutal*` — replace mint glow with subtle navy elevation or no glow at all.

2. **Refactor `@utility` classes**
   - `app-shell`, `header-bar`: use `--color-background` and a subtle off-white border.
   - `btn-hero-primary`: primary blue background, off-white text, no glow, subtle shadow.
   - `btn-hero-tertiary`: transparent with primary blue border/text.
   - `card`, `card-muted`, `project-card`, `tech-badge`: navy surfaces, subtle borders, calm hover states.
   - `section-label` / `section-label-inverse`: navy/primary variants.
   - `pill-link`: primary blue underline.

3. **Audit and update component/routes for hardcoded colors**
   - Search for remaining `text-white`, `text-black`, `bg-black`, `border-black`, `bg-white`, `text-white/...`, `text-primary`, `bg-primary`, or mint-specific values in `src/components/` and `src/routes/`.
   - Replace with semantic classes: `text-foreground`, `text-primary`, `bg-background`, `bg-surface`, `border-border`, etc.
   - Update `theme-color` meta in `src/routes/__root.tsx` to `#0f1b3d`.

4. **Verify**
   - Run `bun run typecheck`.
   - Open the preview and confirm the home, work, about, and contact pages render with the Navy Trust palette and no broken contrast or residual mint glow.

## Outcome
A calm, authoritative navy-and-white portfolio with subtle depth, no neon glow, and a more human, less AI-generated feel.