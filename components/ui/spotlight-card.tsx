"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  accent?: string;
  style?: CSSProperties;
};

export function SpotlightCard({
  children,
  className = "",
  accent = "var(--color-aurora-400)",
  style,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight glass ring-gradient relative overflow-hidden rounded-3xl transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 ${className}`}
      style={{ "--spot": accent, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}
