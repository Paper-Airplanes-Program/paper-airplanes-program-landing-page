import Link from "next/link";

import { AuroraField, FlightPaths, Starfield } from "@/components/ui/backdrop";
import { ArrowRight, PlaneGlyph } from "@/components/ui/marks";
import { org } from "@/lib/content";

export type ErrorCode = 403 | 404;

/**
 * The plane that did not arrive. It is the logo mark blown up to hero size,
 * flying off the end of a flight trail, with a badge saying why the trip ended
 * here: a padlock for a route that is closed, a question mark for one that was
 * never on the map.
 */
function LostPlane({ code, className = "" }: { code: ErrorCode; className?: string }) {
  const badge = code === 403 ? "var(--accent)" : "var(--accent-cool)";

  return (
    <svg
      viewBox="0 0 240 170"
      fill="none"
      aria-hidden
      className={`overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id="es-body" x1="118" y1="18" x2="192" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--mark-a)" />
          <stop offset="0.5" stopColor="var(--mark-b)" />
          <stop offset="1" stopColor="var(--mark-c)" />
        </linearGradient>
        <linearGradient id="es-fold" x1="140" y1="62" x2="190" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--mark-fold-a)" />
          <stop offset="1" stopColor="var(--mark-fold-b)" />
        </linearGradient>
        <linearGradient id="es-trail" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--trail-2)" stopOpacity="0" />
          <stop offset="0.45" stopColor="var(--trail-2)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--trail-2)" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="es-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="var(--color-dawn-500)" stopOpacity="0.26" />
          <stop offset="1" stopColor="var(--color-dawn-500)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="150" cy="52" r="66" fill="url(#es-glow)" />

      {/* The route so far — it simply stops. */}
      <path
        d="M 2 150 C 44 156, 74 140, 96 118 S 124 94, 136 80"
        stroke="url(#es-trail)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="10 14"
        className="animate-trail"
      />

      {/* A 404 has nothing ahead of it either: the route dissolves. */}
      {code === 404 && (
        <g fill="var(--accent-cool)">
          <circle cx="196" cy="17" r="2.2" opacity="0.5" />
          <circle cx="207" cy="12" r="1.7" opacity="0.34" />
          <circle cx="216" cy="8.5" r="1.3" opacity="0.22" />
        </g>
      )}

      {/* The float lives on a wrapper: a CSS transform on the same element
          would override the positioning transform attribute below it. */}
      <g className="animate-float [transform-box:view-box] [transform-origin:center]">
        <g transform="translate(108 14) scale(2.5)">
          <path
            d="M29.4 3.1 2.9 13.6c-.9.4-.8 1.7.1 2l6.9 2.2 2.6 8.3c.3.9 1.5 1.1 2.1.3l3.6-4.5 7 5.2c.7.5 1.7.1 1.9-.7l3.5-21.8c.1-.9-.8-1.6-1.6-1.3Z"
            fill="url(#es-body)"
          />
          <path
            d="m12.5 17.8 16.6-13.6-13.9 15.5-.1 5.9c0 .4-.6.5-.7.1l-1.9-7.9Z"
            fill="url(#es-fold)"
          />
        </g>
      </g>

      <circle cx="190" cy="95" r="27" fill={badge} opacity="0.13" />
      <circle
        cx="190"
        cy="95"
        r="21"
        fill="var(--card)"
        stroke="var(--line-strong)"
        strokeWidth="1.2"
      />

      {code === 403 ? (
        <g>
          <path
            d="M184.6 91.5v-2.6a5.4 5.4 0 0 1 10.8 0v2.6"
            stroke={badge}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <rect x="181.6" y="91" width="16.8" height="13.4" rx="3.4" fill={badge} />
          <circle cx="190" cy="96.4" r="1.7" fill="var(--card)" />
          <path d="M190 97.6v2.6" stroke="var(--card)" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <path
            d="M185.4 90.6a4.9 4.9 0 0 1 9.5 1.6c0 3.3-4.7 3.6-4.7 6.4"
            stroke={badge}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="190.2" cy="103" r="1.8" fill={badge} />
        </g>
      )}
    </svg>
  );
}

const COPY = {
  403: {
    eyebrow: "Access denied",
    lead: "This flight path is",
    accent: "reserved",
    body: "You do not have permission to open this page. Sign in to the portal it belongs to, or head back to the runway you came from.",
    secondary: { label: "Open the portals", href: "/#portal" },
  },
  404: {
    eyebrow: "Page not found",
    lead: "Looks like you’re",
    accent: "off-course",
    body: "We can’t find the page you’re looking for. It may have moved, or the link that brought you here is out of date.",
    secondary: { label: "Explore our programs", href: "/#programs" },
  },
} as const;

/** The handful of places worth offering someone who landed nowhere. */
const QUICK_LINKS = [
  { label: "Our mission", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "How it works", href: "/#how" },
  { label: "Impact", href: "/#impact" },
  { label: "Get involved", href: "/#involved" },
] as const;

/**
 * 403 and 404 share one screen: the hero's sky, the hero's typography, and a
 * single change of copy and badge between them. An error page is still the
 * site, so it is built out of the same materials rather than a bare fallback.
 */
export function ErrorScreen({ code }: { code: ErrorCode }) {
  const copy = COPY[code];

  return (
    <main className="grain relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden py-20">
      <AuroraField />
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <Starfield />
      <FlightPaths className="opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-surface" />

      <div className="relative mx-auto w-full max-w-2xl px-5 text-center sm:px-8">
        <LostPlane code={code} className="mx-auto w-[min(17rem,58vw)]" />

        <span className="glass mx-auto -mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.15em] text-accent uppercase">
          <span className="h-1 w-1 rounded-full bg-dawn-400" />
          {copy.eyebrow}
        </span>

        <p className="mt-5 font-serif text-[clamp(4.5rem,17vw,8.5rem)] leading-[0.82] tracking-[-0.02em] text-gradient">
          {code}
          <span className="text-accent">.</span>
        </p>

        <h1 className="mt-4 text-[clamp(1.7rem,5vw,2.7rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-balance text-fg">
          {copy.lead}{" "}
          <span className="font-serif font-normal italic text-gradient-dawn">
            {copy.accent}
          </span>
          .
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-pretty text-fg-muted sm:text-base">
          {copy.body}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            href="/"
            className="group glow-dawn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-dawn-500 via-dawn-400 to-dawn-300 px-7 py-3.5 text-[15px] font-bold text-on-accent transition-transform duration-300 ease-[var(--ease-spring)] hover:scale-[1.035] sm:w-auto"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Go back home</span>
            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href={copy.secondary.href}
            className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-fg transition-colors duration-300 hover:bg-tint-2 sm:w-auto"
          >
            <PlaneGlyph className="h-4 w-4 text-accent-cool" />
            {copy.secondary.label}
          </Link>
        </div>

        <nav
          aria-label="Popular pages"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-2"
        >
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-fg-subtle transition-colors duration-300 hover:bg-tint hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 font-serif text-[14px] italic text-fg-faint">
          &ldquo;{org.motto}&rdquo;
        </p>
      </div>
    </main>
  );
}
