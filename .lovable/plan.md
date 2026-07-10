Replace the current mobile dropdown menu with a side drawer that slides in from the right.

## What will change

### `src/routes/__root.tsx`
- Keep the hamburger toggle button and the desktop horizontal nav exactly as-is.
- Replace the dropdown `motion.nav` with a full-height side drawer:
  - Slides in from the right (`x: "100%"` → `x: 0`).
  - Fixed position, top-0 right-0, width ~72% of viewport (max-w-xs), full height.
  - Background `bg-background/95` with `backdrop-blur-md` and a subtle left border `border-border`.
  - Stacked nav links with larger tap targets and the same active-state styling.
- Add a backdrop/overlay behind the drawer:
  - Fades in with `AnimatePresence`.
  - Clicking it closes the menu.
  - `fixed inset-0 bg-background/40` or similar semitransparent scrim.
- Keep auto-close on route change (already wired via `useRouterState`).
- Respect reduced motion: skip the slide animation when `useReducedMotion()` is true.

### `src/styles.css`
- No new color tokens needed. Reuse existing semantic utilities.
- If needed, add a tiny `@utility` for drawer shadow/elevation, but prefer existing `shadow-brutal` or `shadow-brutal-lg`.

## Verification
- Run typecheck / build.
- Capture mobile viewport screenshots of the closed and open menu states.
- Confirm tapping a link closes the drawer and navigates correctly.
- Confirm desktop layout is unchanged.