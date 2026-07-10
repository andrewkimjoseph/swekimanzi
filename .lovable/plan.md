
## Goal

Replace all `src/assets/*.asset.json` CDN pointers with real image files served from `public/`, referenced by simple root-relative paths like `/logo-pax.png`.

## Steps

1. **Download** each asset from its CDN URL (from the `.asset.json` files) into `public/` using its `original_filename` (kebab-case names already match what you want: `logo-pax.png`, `avatar-andrew.png`, `badge-celo.png`, `photo-team-canvassing.jpg`, etc.).

   Files to fetch (16 total):
   - `avatar-andrew.png`
   - `badge-bwc7.png`, `badge-celo.png`, `badge-gooddollar.png`, `badge-prezenti.png`
   - `logo-canvassing.png`, `logo-celeste.png`, `logo-celina.png`, `logo-goclaim.png`, `logo-goodpax.png`, `logo-partify.png`, `logo-pax.png`, `logo-rez.png`, `logo-salamander.png`
   - `photo-salamander-community.jpg`, `photo-team-canvassing.jpg`

2. **Rewrite `src/components/PlaceholderImage.tsx`** — the only consumer. Drop all `.asset.json` imports and replace `ASSET_MAP` with a plain string-URL map plus a `fit` field:
   ```ts
   const ASSET_MAP: Record<string, { url: string; fit?: "cover" | "contain" }> = {
     "logo-pax": { url: "/logo-pax.png" },
     // ...
     "badge-celo": { url: "/badge-celo.png", fit: "contain" },
     "photo-team-canvassing": { url: "/photo-team-canvassing.jpg", fit: "cover" },
     // ...
   };
   ```
   Replace `avatarAndrew.url` with the literal `"/avatar-andrew.png"` in `AvatarPlaceholder`.

3. **Delete** every `src/assets/*.asset.json` file (16 files). Leave the CDN objects orphaned — acceptable since the user is fully switching off CDN for these.

4. **Verify** with a build; confirm home / work / contact pages still show images.

## Notes

- Naming stays exactly as-is (`logo-pax.png`, not `logo_pax.png`) since it matches your example intent and requires no code renames. Say the word if you want underscores instead.
- Files in `public/` are served at the root, so `/logo-pax.png` works in both dev and production without imports.
- No other code references `src/assets/*.asset.json` — only `PlaceholderImage.tsx` needs edits.
