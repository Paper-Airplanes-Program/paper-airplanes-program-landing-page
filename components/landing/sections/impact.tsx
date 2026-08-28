import { displacement, funnel2025, impactFigures } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const maxFunnel = Math.max(...funnel2025.map((s) => s.value));
const acceptanceRate = Math.round(
  (funnel2025[1].value / funnel2025[0].value) * 100,
);

export function Impact() {
  return (
    <section id="impact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Impact"
          title={
            <>
              The numbers behind{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                2025
              </span>
              .
            </>
          }
          body="Demand runs far ahead of capacity — which is exactly why tutors and funding matter. Every figure here is from the organisation's own reporting."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {/* Proportion bar — who our students are */}
          <Reveal className="lg:col-span-7">
            <figure className="glass ring-gradient relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-9">
              <figcaption>
                <h3 className="text-lg font-extrabold tracking-tight text-fg">
                  Who our students are
                </h3>
                <p className="mt-1.5 text-[13px] text-fg-subtle">
                  Displacement status across the 2025 student body
                </p>
              </figcaption>

              {/* The bar. 24px thick, 2px surface gaps, 4px rounded outer ends. */}
              <div
                className="mt-8 flex h-6 w-full gap-0.5"
                role="img"
                aria-label="Displacement status: internally displaced 48.68 percent, other displacement or migration status 37.17 percent, registered refugees 14.15 percent."
              >
                {displacement.map((slice, i) => (
                  <div
                    key={slice.label}
                    className={`group relative h-full transition-[filter] duration-300 hover:brightness-115 ${
                      i === 0 ? "rounded-l-[4px]" : ""
                    } ${i === displacement.length - 1 ? "rounded-r-[4px]" : ""}`}
                    style={{
                      width: `${slice.value}%`,
                      background: slice.color,
                    }}
                  >
                    {/* Hover tooltip */}
                    <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2.5 -translate-x-1/2 scale-95 rounded-lg border border-line bg-surface/95 px-2.5 py-1.5 text-[11.5px] whitespace-nowrap text-fg opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                      <span className="font-bold">{slice.value}%</span>{" "}
                      <span className="text-fg-subtle">{slice.label}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend — the dependable identity channel */}
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-3">
                {displacement.map((slice) => (
                  <li key={slice.label} className="flex items-start gap-2.5">
                    <span
                      className="mt-1 h-2.5 w-2.5 shrink-0 rounded-[3px]"
                      style={{ background: slice.color }}
                      aria-hidden
                    />
                    <span>
                      <span className="block text-lg leading-none font-extrabold text-fg">
                        {slice.value}%
                      </span>
                      <span className="mt-1 block text-[12px] leading-snug text-fg-subtle">
                        {slice.label}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-md text-[12.5px] leading-relaxed text-pretty text-fg-faint">
                Students join from 46+ nationalities. Displacement status is
                self-reported at application and recorded for the whole 2025
                intake.
              </p>

              <details className="group mt-auto border-t border-line pt-5">
                <summary className="cursor-pointer list-none text-[12px] font-semibold text-fg-subtle transition-colors hover:text-fg">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      viewBox="0 0 12 12"
                      className="h-2.5 w-2.5 transition-transform duration-300 group-open:rotate-90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    >
                      <path d="m4.5 3 3 3-3 3" />
                    </svg>
                    View as table
                  </span>
                </summary>
                <table className="mt-4 w-full text-left text-[12.5px]">
                  <thead className="text-fg-faint">
                    <tr>
                      <th scope="col" className="pb-2 font-semibold">
                        Status
                      </th>
                      <th scope="col" className="pb-2 text-right font-semibold">
                        Share
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-fg/75">
                    {displacement.map((slice) => (
                      <tr key={slice.label} className="border-t border-line">
                        <th scope="row" className="py-2 font-normal">
                          {slice.label}
                        </th>
                        <td className="py-2 text-right tabular-nums">
                          {slice.value}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </details>
            </figure>
          </Reveal>

          {/* Funnel — one measure, two stages, one hue */}
          <Reveal delay={120} className="lg:col-span-5">
            <figure className="glass ring-gradient relative h-full overflow-hidden rounded-3xl p-7 sm:p-9">
              <figcaption>
                <h3 className="text-lg font-extrabold tracking-tight text-fg">
                  English Program, 2025
                </h3>
                <p className="mt-1.5 text-[13px] text-fg-subtle">
                  Applications received against seats we could offer
                </p>
              </figcaption>

              <div className="mt-8 space-y-6">
                {funnel2025.map((stage) => (
                  <div key={stage.stage}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-[12.5px] text-fg-muted">
                        {stage.stage}
                      </span>
                      <span className="text-xl font-extrabold text-fg">
                        {stage.value.toLocaleString("en-US")}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-[4px] bg-[color-mix(in_oklab,var(--color-chart-2)_16%,transparent)]">
                      <div
                        className="h-full rounded-[4px]"
                        style={{
                          width: `${(stage.value / maxFunnel) * 100}%`,
                          background: "var(--color-chart-2)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-dawn-400/18 bg-dawn-500/8 p-5">
                <div className="text-[clamp(2.25rem,4.5vw,3rem)] leading-none font-extrabold tracking-tight text-accent">
                  {acceptanceRate}%
                </div>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-pretty text-fg-muted">
                  of applicants got a seat. The other {100 - acceptanceRate}% were
                  turned away for one reason — not enough tutors.
                </p>
                <a
                  href="#involved"
                  className="mt-4 inline-flex text-[12.5px] font-bold text-accent underline decoration-dawn-400/40 underline-offset-4 transition-colors hover:text-accent"
                >
                  Close that gap — become a tutor
                </a>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* KPI tiles */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactFigures.map((figure, i) => (
            <Reveal key={figure.label} delay={i * 80}>
              <div className="group rounded-2xl border border-line bg-card p-6 transition-all duration-500 hover:border-line-strong hover:bg-card-hover">
                <div className="text-3xl leading-none font-extrabold tracking-tight text-fg">
                  {figure.value}
                </div>
                <div className="mt-2.5 text-[12.5px] text-fg-subtle">
                  {figure.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
