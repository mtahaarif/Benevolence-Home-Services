/**
 * Page transition wrapper.
 *
 * PERFORMANCE: this used to be a client component that rendered its children at
 * `opacity-0` and only faded them in from a `useEffect` after mount. That gated
 * every first paint — including the LCP element — behind hydration plus a
 * 1000ms transition, which is what put the homepage LCP at 3.38s. The fade is
 * now a pure CSS animation that runs on the very first frame the browser
 * paints, so nothing waits for JavaScript. Next remounts `template.tsx` on each
 * navigation, so the animation still replays between routes.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-fade-in">{children}</div>;
}
