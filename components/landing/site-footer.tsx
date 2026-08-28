import Link from "next/link";
import { footerLinks, org } from "@/lib/content";
import { PlaneMark } from "@/components/ui/marks";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/paper-airplanes-inc-",
    path: "M4.5 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM3.2 8h2.6v9H3.2V8Zm5 0h2.5v1.2c.4-.7 1.3-1.4 2.7-1.4 2 0 3.4 1.2 3.4 3.8V17h-2.6v-4.9c0-1.3-.5-2-1.6-2-1 0-1.7.6-1.7 2V17H8.2V8Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/paperairplanesinc/",
    path: "M6.5 2.5h7A4 4 0 0 1 17.5 6.5v7a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4Zm3.5 4.2a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm0 1.7a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Zm4-2.6a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/paperairplanesinc",
    path: "M11.2 17.5v-6.2h2.1l.3-2.4h-2.4V7.3c0-.7.2-1.2 1.2-1.2h1.3V4c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.7H6.5v2.4h2.1v6.2h2.6Z",
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,var(--section-glow)_0%,transparent_70%)] opacity-70"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <PlaneMark className="h-8 w-8" />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-extrabold tracking-tight text-fg">
                  Paper Airplanes
                </span>
                <span className="mt-0.5 text-[10px] font-medium tracking-[0.16em] text-fg-subtle uppercase">
                  Learning Continuity
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-pretty text-fg-subtle">
              {org.tagline}. Bridging gaps in language, higher education and
              professional skills for individuals affected by conflict — since
              2014.
            </p>

            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg/60 transition-all duration-300 hover:border-line-strong hover:bg-tint hover:text-fg"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-[11px] font-bold tracking-[0.16em] text-fg/85 uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13px] text-fg-subtle transition-colors duration-300 hover:text-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[12px] text-fg-faint">
            Copyright © {new Date().getFullYear()} {org.name} | {org.ein}
          </p>
          <p className="text-[12px] text-fg-faint">
            Content sourced from{" "}
            <a
              href={org.website}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-fg"
            >
              paper-airplanes.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
