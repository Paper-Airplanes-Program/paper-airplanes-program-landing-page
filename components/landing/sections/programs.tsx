import { programs } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ArrowRight, Check } from "@/components/ui/marks";

/** `color` drives the cursor glow and the tick marks, and flips with the
 *  theme so it stays legible on a pale surface as well as a dark one. */
const ACCENTS = {
  aurora: {
    color: "var(--accent-cool)",
    text: "text-accent-cool",
    chip: "bg-aurora-500/14 text-accent-cool",
    glow: "from-aurora-500/25",
  },
  iris: {
    color: "var(--accent-iris)",
    text: "text-accent-iris",
    chip: "bg-iris-500/14 text-accent-iris",
    glow: "from-iris-500/25",
  },
  dawn: {
    color: "var(--accent)",
    text: "text-accent",
    chip: "bg-dawn-500/14 text-accent",
    glow: "from-dawn-500/25",
  },
  mint: {
    color: "var(--accent-mint)",
    text: "text-accent-mint",
    chip: "bg-mint-500/12 text-accent-mint",
    glow: "from-mint-500/20",
  },
} as const;

/**
 * A 7/5 bento. The wide slot goes to the two programs with the most to say;
 * the narrow slot drops its bullets to a single column so nothing cramps.
 */
const LAYOUT = [
  { span: "lg:col-span-7", bullets: "sm:grid-cols-2" },
  { span: "lg:col-span-5", bullets: "sm:grid-cols-2" },
  { span: "lg:col-span-7", bullets: "sm:grid-cols-2" },
  { span: "lg:col-span-5", bullets: "" },
];

export function Programs() {
  return (
    <section id="programs" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our programs"
          title={
            <>
              Three programs, one{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                unbroken
              </span>{" "}
              path.
            </>
          }
          body="Language first, then technical skill, then the job or the scholarship. Each program hands the student to the next one — nobody is dropped at the end of a semester."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {programs.map((program, i) => {
            const accent = ACCENTS[program.accent as keyof typeof ACCENTS];
            const layout = LAYOUT[i];

            return (
              <Reveal
                key={program.id}
                delay={i * 100}
                className={`${layout.span} h-full`}
              >
                <SpotlightCard accent={accent.color} className="h-full">
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -top-28 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${accent.glow} to-transparent blur-3xl`}
                  />

                  <div className="relative flex h-full flex-col p-7 sm:p-9">
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10.5px] font-bold tracking-[0.13em] uppercase ${accent.chip}`}
                    >
                      {program.eyebrow}
                    </span>

                    <h3 className="mt-5 text-[clamp(1.5rem,2.7vw,2.15rem)] leading-tight font-extrabold tracking-[-0.025em] text-fg">
                      {program.name}
                    </h3>

                    <p className="mt-3.5 max-w-xl text-[14.5px] leading-relaxed text-pretty text-fg-muted">
                      {program.summary}
                    </p>

                    <ul className={`mt-6 grid gap-2.5 ${layout.bullets}`}>
                      {program.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[13.5px] leading-snug text-fg/78"
                        >
                          <span
                            className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                            style={{
                              background: `color-mix(in oklab, ${accent.color} 22%, transparent)`,
                            }}
                          >
                            <Check
                              className="h-2.5 w-2.5"
                              style={{ color: accent.color }}
                            />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      {program.metrics.length > 0 && (
                        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6">
                          {program.metrics.map((metric) => (
                            <div key={metric.label}>
                              <div
                                className={`text-xl font-extrabold tracking-tight ${accent.text}`}
                              >
                                {metric.value}
                              </div>
                              <div className="mt-0.5 text-[11px] tracking-wide text-fg-faint">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <a
                        href="#involved"
                        className="group/link mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-fg/85 transition-colors hover:text-fg"
                      >
                        {program.id === "legacy"
                          ? "Read the history"
                          : `Join ${program.name}`}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
