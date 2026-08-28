import { involvement } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "@/components/ui/marks";

export function Involved() {
  return (
    <section id="involved" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get involved"
          title={
            <>
              Four doors. Pick the one you can{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                walk through
              </span>
              .
            </>
          }
          body="No prior tutoring experience is necessary, and Arabic is not required. Two to four hours a week is a real semester for somebody."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {involvement.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="h-full">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col bg-surface/80 p-8 transition-colors duration-500 hover:bg-card-hover sm:p-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-dawn-600)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-12"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-extrabold tracking-tight text-fg sm:text-[1.75rem]">
                    {item.title}
                  </h3>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-400 group-hover:border-dawn-400/50 group-hover:bg-dawn-500/12">
                    <ArrowRight className="h-4 w-4 text-fg/70 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                </div>

                <p className="relative mt-4 max-w-md text-[14px] leading-relaxed text-pretty text-fg-muted">
                  {item.body}
                </p>

                <div className="relative mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-8">
                  <span className="rounded-full bg-tint px-3 py-1 text-[11px] font-semibold tracking-wide text-fg-subtle">
                    {item.meta}
                  </span>
                  <span className="text-[13px] font-bold text-accent underline decoration-dawn-400/0 underline-offset-4 transition-all duration-300 group-hover:decoration-dawn-400/50">
                    {item.cta}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
