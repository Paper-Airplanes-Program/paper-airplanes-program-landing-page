import { org, timeline } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlaneGlyph } from "@/components/ui/marks";

export function Mission() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="dot-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title={
            <>
              It started with{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                one Skype call
              </span>{" "}
              across a border.
            </>
          }
          body={`In 2013, ${org.founder} volunteered in Reyhanlı, Turkey, near the Syrian border, and met college students trying to finish degrees the war had interrupted. She started giving English conversation practice over Skype. Demand outgrew one person — so ten tutors were recruited, and in June 2014 the English Program launched.`}
        />

        {/* Mission / Vision */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {[
            {
              label: "Mission",
              text: org.mission,
              accent: "from-dawn-500/22",
              dot: "bg-dawn-400",
            },
            {
              label: "Vision",
              text: org.vision,
              accent: "from-aurora-500/22",
              dot: "bg-aurora-400",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 110}>
              <div className="glass ring-gradient relative h-full overflow-hidden rounded-3xl p-8 sm:p-10">
                <div
                  className={`pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${item.accent} to-transparent blur-3xl`}
                />
                <div className="relative flex items-center gap-2.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                  <span className="text-[11px] font-bold tracking-[0.2em] text-fg/55 uppercase">
                    Our {item.label}
                  </span>
                </div>
                <p className="relative mt-5 text-[clamp(1.05rem,1.7vw,1.35rem)] leading-[1.6] text-pretty text-fg/88">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          <Reveal>
            <h3 className="text-center text-[11px] font-bold tracking-[0.24em] text-accent-cool uppercase">
              A decade of learning continuity
            </h3>
          </Reveal>

          <div className="relative mt-12">
            {/* The flight line the milestones hang from */}
            <div
              aria-hidden
              className="absolute top-[7px] left-[7px] h-[calc(100%-14px)] w-px bg-gradient-to-b from-dawn-400/70 via-aurora-400/40 to-transparent lg:top-[7px] lg:left-0 lg:h-px lg:w-full lg:bg-gradient-to-r"
            />

            <ol className="grid gap-10 lg:grid-cols-6 lg:gap-5">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 90} as="li">
                  <div className="group relative pl-9 lg:pt-0 lg:pl-0">
                    <span className="absolute top-0 left-0 flex h-3.5 w-3.5 items-center justify-center lg:relative">
                      <span className="absolute h-3.5 w-3.5 rounded-full bg-dawn-400/25 transition-transform duration-500 group-hover:scale-150" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-dawn-400 shadow-[0_0_12px_2px_var(--color-dawn-500)]" />
                    </span>

                    <div className="lg:mt-5">
                      <div className="font-serif text-2xl text-gradient-dawn">
                        {item.year}
                      </div>
                      <div className="mt-1.5 text-sm font-bold text-fg">
                        {item.title}
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-pretty text-fg-subtle">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Founding quote */}
        <Reveal delay={120}>
          <figure className="glass ring-gradient relative mx-auto mt-20 max-w-4xl overflow-hidden rounded-3xl px-8 py-12 text-center sm:px-14">
            <PlaneGlyph className="mx-auto h-7 w-7 animate-float text-dawn-400/80" />
            <blockquote className="mt-6 font-serif text-[clamp(1.3rem,2.7vw,2rem)] leading-[1.45] text-balance text-fg/92">
              Leveraging internet connectivity to expand educational access — and
              building{" "}
              <em className="text-gradient-dawn not-italic">
                personal relationships
              </em>{" "}
              that extend mentoring far beyond the virtual classroom.
            </blockquote>
            <figcaption className="mt-6 text-[12px] font-semibold tracking-[0.14em] text-fg-subtle uppercase">
              Paper Airplanes · founded 2014 · {org.ein}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
