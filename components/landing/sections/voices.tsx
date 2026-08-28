"use client";

import { useState } from "react";
import { spotlights, testimonials } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "@/components/ui/marks";

const TABS = [
  { id: "students", label: "From our students" },
  { id: "tutors", label: "From our tutors" },
] as const;

export function Voices() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("students");
  const quotes = testimonials[tab];

  return (
    <section id="voices" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              The part that doesn&apos;t fit in a{" "}
              <span className="font-serif italic font-normal text-gradient-dawn">
                statistic
              </span>
              .
            </>
          }
          body="Students and tutors describe the same thing from two directions — a real relationship, held together across borders by a weekly 90 minutes."
        />

        {/* Tabs */}
        <Reveal delay={140}>
          <div className="mt-12 flex justify-center">
            <div
              role="tablist"
              aria-label="Testimonials"
              className="glass relative inline-flex rounded-full p-1"
            >
              {TABS.map((item) => {
                const active = tab === item.id;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(item.id)}
                    className={`relative rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
                      active ? "text-on-accent" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-dawn-400 to-dawn-300" />
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Quote grid — keyed on the tab so cards re-run their entrance */}
        <div key={tab} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((item, i) => (
            <Reveal key={item.name} delay={i * 90} className="h-full">
              <figure className="group glass ring-gradient relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5">
                <span
                  aria-hidden
                  className="font-serif text-6xl leading-none text-dawn-400/30 transition-colors duration-500 group-hover:text-dawn-400/55"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-4 mb-6 text-[14px] leading-relaxed text-pretty text-fg/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-dawn-400/85 to-iris-500/85 text-[12px] font-extrabold text-on-accent">
                    {item.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-bold text-fg">
                      {item.name}
                    </span>
                    <span className="block text-[11.5px] text-fg-subtle">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Where they landed */}
        <Reveal delay={120}>
          <div className="mt-20">
            <h3 className="text-center text-[11px] font-bold tracking-[0.24em] text-accent-cool uppercase">
              Where our students landed
            </h3>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spotlights.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} className="h-full">
              <div className="group relative flex h-full items-start gap-4 rounded-2xl border border-line bg-card p-5 transition-all duration-500 hover:border-line-strong hover:bg-card-hover">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-mint-500/12 ring-1 ring-mint-400/20">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 text-accent-mint"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 2.5 12.3 7l5 .7-3.6 3.5.9 5-4.6-2.4L5.4 16l.9-5L2.7 7.7l5-.7L10 2.5Z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[13.5px] font-bold text-fg">
                      {item.name}
                    </span>
                    <span className="rounded-full bg-tint px-2 py-0.5 text-[10px] font-semibold tracking-wide text-fg-subtle uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-pretty text-fg-muted">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Fills the last cell of the grid, and asks for the next story. */}
          <Reveal delay={spotlights.length * 80} className="h-full">
            <a
              href="#involved"
              className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-dashed border-line-strong bg-transparent p-5 transition-all duration-500 hover:border-dawn-400/45 hover:bg-dawn-500/6"
            >
              <span>
                <span className="block text-[13.5px] font-bold text-fg">
                  Your story next
                </span>
                <span className="mt-1.5 block text-[13px] leading-snug text-fg-muted">
                  Applications open every spring and fall
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-fg/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
