import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import favicon from "@/assets/favicon.png";
import { reportError } from "../lib/error-reporting";
import { LoadingScreen } from "../components/LoadingScreen";

function NotFoundComponent() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Stars */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[10%] left-[15%] h-1 w-1 rounded-full bg-white/40 animate-pulse" />
        <div className="absolute top-[25%] left-[75%] h-0.5 w-0.5 rounded-full bg-white/30" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] left-[10%] h-1 w-1 rounded-full bg-white/25" />
        <div className="absolute top-[80%] left-[85%] h-0.5 w-0.5 rounded-full bg-white/50" />
        <div className="absolute top-[40%] left-[90%] h-1 w-1 rounded-full bg-white/20" />
        <div className="absolute top-[70%] left-[50%] h-0.5 w-0.5 rounded-full bg-white/30" />
        <div className="absolute top-[15%] left-[50%] h-1 w-1 rounded-full bg-white/35" />
        <div className="absolute -top-[20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Floating astronaut SVG */}
        <div className="mb-8" style={{ animation: "float-slow 6s ease-in-out infinite" }}>
          <svg viewBox="0 0 120 140" className="w-32 h-32 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Helmet */}
            <ellipse cx="60" cy="38" rx="26" ry="28" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <ellipse cx="60" cy="38" rx="18" ry="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            {/* Body */}
            <rect x="38" y="62" width="44" height="42" rx="12" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            {/* Chest panel */}
            <rect x="47" y="72" width="26" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <circle cx="53" cy="78" r="2" fill="rgba(255,255,255,0.3)" />
            <circle cx="60" cy="78" r="2" fill="rgba(255,255,255,0.3)" />
            <circle cx="67" cy="78" r="2" fill="rgba(255,255,255,0.3)" />
            {/* Arms */}
            <rect x="18" y="65" width="20" height="12" rx="6" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" transform="rotate(-15 28 71)" />
            <rect x="82" y="65" width="20" height="12" rx="6" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" transform="rotate(15 92 71)" />
            {/* Legs */}
            <rect x="42" y="102" width="15" height="24" rx="7" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            <rect x="63" y="102" width="15" height="24" rx="7" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            {/* Visor glare */}
            <ellipse cx="52" cy="30" rx="5" ry="3" fill="rgba(255,255,255,0.12)" transform="rotate(-20 52 30)" />
          </svg>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60 mb-6">
          Error 404
        </div>

        <h1 className="text-7xl md:text-9xl font-bold tracking-[-0.05em] text-white/10 mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white -mt-4 mb-4">
          Lost in Space
        </h2>
        <p className="text-white/50 max-w-sm mx-auto leading-relaxed mb-10">
          The page you're looking for drifted off orbit. Let's get you back to base.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:scale-[1.02] transition"
        >
          Back to Home
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { name: "theme-color", content: "#000000" },
      { title: "SpaceGrey — AI-first Digital Engineering" },
      {
        name: "description",
        content:
          "SpaceGrey builds AI systems, enterprise software, automation platforms and analytics for startups and global enterprises.",
      },
      { name: "author", content: "SpaceGrey" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "SpaceGrey — AI-first Digital Engineering" },
      {
        property: "og:description",
        content:
          "AI, software, automation and product engineering for teams building the future.",
      },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://spacegrey.in" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SpaceGrey — AI-first Digital Engineering" },
      { name: "twitter:description", content: "AI, software, automation and product engineering for teams building the future." },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: favicon, type: "image/png" },
      { rel: "apple-touch-icon", href: favicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.4s ease" }}>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
