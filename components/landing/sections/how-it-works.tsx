import { howItWorks } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,var(--color-iris-600)_0%,transparent_70%)] opacity-18 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Five steps from{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                first hello
              </span>{" "}
              to first job.
            </>
          }
          body="Matched pairs meet on a mutually agreed platform for a 90-minute session, once a week, for 18 weeks. Miss three sessions and the match is automatically remade — momentum is the whole point."
        />

        <div className="relative mt-20">
          <svg
            aria-hidden
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-7 hidden h-24 w-full lg:block"
          >
            <defs>
              <linearGradient id="step-arc" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--color-dawn-400)" stopOpacity="0" />
                <stop offset="0.15" stopColor="var(--color-dawn-400)" stopOpacity="0.6" />
                <stop offset="0.55" stopColor="var(--color-aurora-400)" stopOpacity="0.5" />
                <stop offset="0.9" stopColor="var(--color-iris-400)" stopOpacity="0.45" />
                <stop offset="1" stopColor="var(--color-iris-400)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 40 74 C 260 6, 420 96, 620 44 S 980 6, 1160 58"
              fill="none"
              stroke="url(#step-arc)"
              strokeWidth="1.5"
              strokeDasharray="9 12"
              className="animate-trail"
            />
          </svg>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 110} as="li" className="h-full">
                <div className="group relative flex h-full flex-col rounded-3xl border border-line bg-card p-6 backdrop-blur-md transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-line-strong hover:bg-card-hover">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-white/12 to-white/3 text-[13px] font-extrabold text-fg ring-1 ring-white/10 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-110">
                      {step.step}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-dawn-400/70 shadow-[0_0_10px_2px_var(--color-dawn-500)] transition-transform duration-500 group-hover:scale-150" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold tracking-tight text-fg">
                    {step.name}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-pretty text-fg-muted">
                    {step.body}
                  </p>

                  <span
                    aria-hidden
                    className="mt-5 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-dawn-400/80 to-transparent transition-transform duration-600 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                  />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
