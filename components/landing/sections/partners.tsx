import { partners } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "@/components/ui/marks";

/** Split into two rows that scroll in opposite directions. */
const rowA = partners.slice(0, Math.ceil(partners.length / 2));
const rowB = partners.slice(Math.ceil(partners.length / 2));

function Row({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  return (
    <div className="fade-x flex overflow-hidden">
      <div
        className={`marquee-track flex shrink-0 gap-3 pr-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-card-hover px-5 py-3 text-[13.5px] font-semibold whitespace-nowrap text-fg/72 transition-colors duration-300 hover:border-line-strong hover:text-fg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-aurora-400/60" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  return (
    <section id="partners" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Partner with us"
          title={
            <>
              We don&apos;t do this{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                alone
              </span>
              .
            </>
          }
          body="Paper Airplanes partners with like-minded NGOs, academic institutions, and providers of language and skills training to maximise our students' and tutors' success."
        />
      </div>

      <Reveal delay={140}>
        <div className="mt-14 flex flex-col gap-3">
          <Row items={rowA} />
          <Row items={rowB} reverse />
        </div>
      </Reveal>

      <div className="mx-auto mt-14 max-w-7xl px-5 text-center sm:px-8">
        <Reveal delay={120}>
          <a
            href="https://www.paper-airplanes.org/partner-with-us"
            target="_blank"
            rel="noreferrer"
            className="group glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold text-fg transition-colors duration-300 hover:bg-tint-2"
          >
            Become a partner organisation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
