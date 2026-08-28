import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Reveal>
        <span
          className={`inline-flex items-center gap-2 rounded-full border border-line bg-tint px-3 py-1 text-[11px] font-bold tracking-[0.15em] text-accent-cool uppercase`}
        >
          <span className="h-1 w-1 rounded-full bg-dawn-400" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-balance text-fg">
          {title}
        </h2>
      </Reveal>

      {body && (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-[clamp(0.98rem,1.35vw,1.1rem)] leading-relaxed text-pretty text-fg-muted ${
              centered ? "mx-auto max-w-2xl" : ""
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
