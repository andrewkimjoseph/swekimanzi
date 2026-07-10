## Problem
The hero section in `src/routes/index.tsx` has visual proportion and alignment issues:

- The avatar grid column is `200px` but the avatar wrapper allows `max-w-[220px]`, so the image is constrained and the column feels tight against the large text block.
- The tagline uses `min-h-[3rem]`, creating a large empty gap between the tagline and the description paragraph.
- The two CTA buttons are visually heavy (full width, large padding, thick shadows) and dominate the lower portion of the hero.
- Text hierarchy feels unbalanced: the name is very large (`text-5xl`), the tagline is `text-lg`, and the description is `text-sm`, with uneven spacing between them.
- On mid-width desktop (the viewport in the screenshot), the text block wraps awkwardly while the image remains large.

## Plan
1. **Rebalance the hero grid**
   - Change `md:grid-cols-[200px_1fr]` to a wider fixed column, e.g. `md:grid-cols-[240px_1fr]` or `md:grid-cols-[280px_1fr]`, and remove the `max-w-[220px]` constraint so the avatar fills its column naturally.
   - Vertically align the grid to `items-start` instead of `items-center` so the text block reads from the top of the image, creating a cleaner anchor.

2. **Tighten vertical rhythm**
   - Remove the `min-h-[3rem]` from the tagline wrapper.
   - Use consistent, smaller gaps between the name, tagline, description, and CTAs (e.g. `gap-3` or `gap-4` instead of mixed spacing).
   - Ensure the tagline component itself does not reserve excessive height.

3. **Refine CTA proportions**
   - Reduce button padding slightly so the buttons feel like supporting elements, not the main visual weight.
   - Consider making the buttons inline at the `sm` breakpoint instead of full-width stacked, or keep them side-by-side but with a more balanced width ratio.
   - Ensure both buttons share the same height and baseline alignment.

4. **Adjust type scale and spacing**
   - Slightly reduce the name size on desktop or tighten line-height (`leading-[1.05]` is fine but verify it does not collide with the tagline).
   - Bump the description from `text-sm` to `text-base` so it does not feel visually lighter than the tagline.
   - Keep the brutalist style intact (hard borders, offset shadows, uppercase display type).

5. **Verify responsive behavior**
   - Check mobile: the avatar should stack above the text and remain centered with a reasonable max width.
   - Check the breakpoint around `768px` to avoid the awkward mid-width state shown in the screenshot.

## Outcome
A hero section where the avatar and text feel proportionally balanced, vertical spacing is consistent, and the CTAs support rather than overwhelm the content.