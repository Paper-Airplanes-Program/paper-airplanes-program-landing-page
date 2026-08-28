import { org } from "@/lib/content";
import { AuroraField, Starfield } from "@/components/ui/backdrop";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, PlaneGlyph } from "@/components/ui/marks";

export function ClosingCta() {
  return (
    <section className="relative px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="grain always-dark relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-ink-900 px-6 py-20 text-center sm:rounded-[2.5rem] sm:px-16 sm:py-28">
        <AuroraField className="opacity-80" />
        <Starfield className="opacity-70" />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <PlaneGlyph className="mx-auto h-9 w-9 animate-float text-dawn-400" />
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-8 text-[clamp(2rem,5.2vw,4rem)] leading-[1.06] font-extrabold tracking-[-0.035em] text-fg">
              <span className="block">One class.</span>
              <span className="block">One connection.</span>
              <span className="block font-serif font-normal italic text-gradient">
                One future changed.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <p className="mx-auto mt-6 max-w-xl text-[clamp(0.98rem,1.5vw,1.15rem)] leading-relaxed text-pretty text-fg-muted">
              4,343 people applied to the English Program last year. 1,012 got a
              seat. The difference between those two numbers is volunteers and
              funding — nothing else.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="https://www.paper-airplanes.org/support-us"
                target="_blank"
                rel="noreferrer"
                className="group glow-dawn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-dawn-500 via-dawn-400 to-dawn-300 px-8 py-4 text-[15px] font-bold text-on-accent transition-transform duration-300 ease-[var(--ease-spring)] hover:scale-[1.035] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Support a semester</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://www.paper-airplanes.org/volunteers"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold text-fg transition-colors duration-300 hover:bg-tint-2 sm:w-auto"
              >
                Volunteer as a tutor
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 text-[12px] tracking-wide text-fg-faint">
              {org.name} is a registered 501(c)(3) nonprofit · {org.ein}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
