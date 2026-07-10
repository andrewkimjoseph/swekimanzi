## Goal
Make the mobile navigation feel less crowded by collapsing the four inline links into a single toggle that opens a dropdown menu.

## What will change
1. **Header component (`src/routes/__root.tsx`)**
   - Add a mobile-only hamburger toggle button using `lucide-react` icons (`Menu` / `X`).
   - Keep the existing horizontal nav links for desktop (`md:flex`), hide them on mobile.
   - Add a mobile dropdown panel that appears below the header when the toggle is open.
   - Dropdown items will be the same four nav links stacked vertically, using existing semantic tokens (`bg-background`, `border-border`, `text-foreground`, `text-primary`).
   - Use `motion/react` for a smooth open/close animation and respect reduced motion.
   - Auto-close the dropdown when a link is clicked or the route changes.

2. **Styles (`src/styles.css`)**
   - No new color tokens needed. Reuse existing utilities and Tailwind variable classes.
   - May add one small `@utility` for the mobile dropdown container if it keeps the JSX cleaner.

## Verification
- Run typecheck.
- Capture mobile preview screenshots of the closed and open menu states.
- Confirm desktop layout is unchanged.

## Notes
- The uploaded screenshot will be used as visual reference for the current crowded navbar, not embedded in the app.
- No backend or route changes required.