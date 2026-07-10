import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { socialLinks } from "../data/social";

function NotFoundComponent() {
  return (
    <div className="app-shell items-center justify-center">
      <div className="card my-auto text-center">
        <h1 className="font-display font-extrabold text-6xl">404</h1>
        <p className="mt-2 font-display uppercase tracking-widest text-xs">Page not found</p>
        <Link to="/" className="btn-hero-primary mt-6">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="app-shell items-center justify-center">
      <div className="card my-auto text-center">
        <h1 className="font-display font-bold text-2xl">Something broke</h1>
        <p className="mt-2 text-sm">Try again or head home.</p>
        <div className="mt-6 flex gap-2 flex-col">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-hero-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-hero-tertiary">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0d1b2a" },
      { title: "Andrew Kim Joseph | Founder & Builder on Celo" },
      {
        name: "description",
        content:
          "Founder of Canvassing, creator of Celina, and co-founder of Salamander Tech Hub. Research marketplaces, AI agents, and open-source communities in Africa.",
      },
      { name: "author", content: "Andrew Kim Joseph" },
      { property: "og:title", content: "Andrew Kim Joseph | Founder & Builder on Celo" },
      {
        property: "og:description",
        content:
          "Founder of Canvassing, creator of Celina, and co-founder of Salamander Tech Hub.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Andrew Kim Joseph" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@andrewkimjoseph" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400..800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const reduce = useReducedMotion();
  return (
    <motion.header
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="header-bar"
    >
      <Link to="/" className="font-display font-extrabold text-2xl text-foreground tracking-tight">
        AKJ
      </Link>
      <nav className="flex gap-2 flex-wrap justify-end">
        {NAV.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="section-label-inverse"
            activeProps={{ className: "section-label-inverse pill-link bg-primary/10" }}
            activeOptions={{ exact: true }}
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 mb-8 pt-8 border-t border-border text-center text-foreground/60 text-xs font-display">
      <p className="uppercase tracking-widest">Andrew Kim Joseph — building on Celo</p>
      <div className="mt-3 flex justify-center gap-4 text-foreground/85">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-4">GitHub</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-4">LinkedIn</a>
        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline underline-offset-4">X</a>
        <a href={`mailto:${socialLinks.email}`} className="hover:text-primary underline underline-offset-4">Email</a>
      </div>
    </footer>
  );
}

function AnimatedOutlet() {
  const reduce = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={reduce ? false : { opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        exit={reduce ? undefined : { opacity: 0, x: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-shell">
        <Header />
        <AnimatedOutlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
