import Link from "next/link";
import { portals } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ArrowRight } from "@/components/ui/marks";

const ICONS: Record<string, React.ReactNode> = {
  Student: <path d="M12 3.5 2.5 8 12 12.5 21.5 8 12 3.5ZM21.5 8v5M6.5 10.2V16c0 1.6 2.5 2.8 5.5 2.8s5.5-1.2 5.5-2.8v-5.8" />,
  Teacher: (
    <path d="M3 5h18v11H3zM3 20h18M9 16v4M15 16v4M7.5 10.5l2.5 2 4-4.5" />
  ),
  Admin: (
    <path d="M12 2.5 4 6v6c0 4.6 3.3 8.4 8 9.5 4.7-1.1 8-4.9 8-9.5V6l-8-3.5ZM9.2 12.2l2 2 3.6-4" />
  ),
};

export function Portal() {
  return (
    <section id="portal" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,var(--section-glow)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One portal.{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                Three
              </span>{" "}
              ways in.
            </>
          }
          body="Students, teachers and administrators each get a workspace built around what they actually do — sharing one source of truth underneath."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {portals.map((portal, i) => (
            <Reveal key={portal.role} delay={i * 110} className="h-full">
              <SpotlightCard accent={portal.accent} className="h-full">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, color-mix(in oklab, ${portal.accent} 30%, transparent), transparent 70%)`,
                  }}
                />

                <div className="relative flex h-full flex-col p-7 sm:p-8">
                  <span
                    className="flex h-13 w-13 items-center justify-center rounded-2xl border"
                    style={{
                      background: `color-mix(in oklab, ${portal.accent} 12%, transparent)`,
                      borderColor: `color-mix(in oklab, ${portal.accent} 26%, transparent)`,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke={portal.accent}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {ICONS[portal.role]}
                    </svg>
                  </span>

                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-fg">
                    {portal.role}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-pretty text-fg-muted">
                    {portal.blurb}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {portal.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-[13px] text-fg/72"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{ background: portal.accent }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href={portal.href}
                      className="group/btn flex items-center justify-between gap-3 rounded-2xl border border-line bg-tint px-5 py-3.5 text-[13.5px] font-bold text-fg transition-all duration-400 hover:border-line-strong hover:bg-tint-2"
                    >
                      Enter the {portal.role.toLowerCase()} portal
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                        style={{ color: portal.accent }}
                      />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
