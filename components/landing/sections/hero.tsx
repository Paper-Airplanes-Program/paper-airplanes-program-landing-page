import { heroStats, org } from "@/lib/content";
import { AuroraField, FlightPaths, Starfield } from "@/components/ui/backdrop";
import { CountUp } from "@/components/ui/count-up";
import { ArrowRight, PlaneGlyph } from "@/components/ui/marks";

export function Hero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16">
      <AuroraField />
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <Starfield />
      <FlightPaths className="opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-surface" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href="#programs"
            className="group glass mx-auto inline-flex items-center gap-2.5 rounded-full py-1.5 pr-2 pl-2.5 text-[12.5px] font-medium text-fg-muted"
          >
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-dawn-500/18 px-2.5 py-1 text-[11px] font-bold tracking-wide whitespace-nowrap text-accent uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-dawn-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-dawn-400" />
              </span>
              Fall 2026
            </span>
            <span className="pr-1 whitespace-nowrap">
              Tutor applications are open
              <span className="hidden sm:inline"> — Aug 3 to Dec 20</span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </a>

          <h1 className="mt-8 text-[clamp(2.75rem,7.4vw,6.25rem)] leading-[0.94] font-extrabold tracking-[-0.035em] text-balance text-fg">
            Back to School.
            <span className="block">
              <span className="font-serif italic font-normal text-gradient">
                Forward
              </span>{" "}
              <span className="text-gradient">for Life.</span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[clamp(1rem,1.55vw,1.2rem)] leading-relaxed text-pretty text-fg-muted">
            {org.name} bridges gaps in language, higher education and professional
            skills for individuals affected by conflict — free, online, and taught
            one human being at a time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#involved"
              className="group glow-dawn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-dawn-500 via-dawn-400 to-dawn-300 px-7 py-3.5 text-[15px] font-bold text-on-accent transition-transform duration-300 ease-[var(--ease-spring)] hover:scale-[1.035] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Become A Change Maker</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#programs"
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-fg transition-colors duration-300 hover:bg-tint-2 sm:w-auto"
            >
              <PlaneGlyph className="h-4 w-4 text-accent-cool" />
              Explore our programs
            </a>
          </div>

          <p className="mt-8 font-serif text-[15px] italic text-fg-subtle">
            “{org.motto}”
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line backdrop-blur-xl sm:mt-20 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-card px-5 py-7 text-center transition-colors duration-400 hover:bg-card-hover sm:px-6"
            >
              <div className="text-[clamp(1.75rem,3.4vw,2.6rem)] leading-none font-extrabold tracking-tight text-gradient-dawn">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-[13px] font-semibold text-fg">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11.5px] text-fg-faint">
                {stat.note}
              </div>
              <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-dawn-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
