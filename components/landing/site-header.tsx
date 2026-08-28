"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, org } from "@/lib/content";
import { ArrowRight, PlaneMark } from "@/components/ui/marks";
import { ThemeToggle } from "@/components/ui";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The drawer covers the page, so stop the page behind it from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
        scrolled
          ? "border-b border-line bg-surface/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={`${org.name} — home`}
        >
          <span className="relative">
            <PlaneMark className="h-8 w-8 transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-6" />
            <span className="absolute inset-0 -z-10 rounded-full bg-dawn-500/40 blur-lg" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-fg">
              Paper Airplanes
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-[0.16em] text-fg-subtle uppercase">
              Learning Continuity
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] font-medium text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    className="h-2.5 w-2.5 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="m3 4.5 3 3 3-3" />
                  </svg>
                </a>

                <div className="pointer-events-none absolute top-full left-1/2 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-[var(--ease-out-expo)] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="glass ring-gradient relative overflow-hidden rounded-2xl p-2 shadow-2xl shadow-fg/15">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-tint"
                      >
                        <span className="text-[13.5px] font-semibold text-fg">
                          {child.label}
                        </span>
                        <span className="text-[11.5px] text-fg-subtle">
                          {child.hint}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle className="hidden sm:flex" />
          <a
            href="#portal"
            className="hidden rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-fg/85 transition-colors hover:border-line-strong hover:bg-tint sm:block"
          >
            Sign in
          </a>
          <a
            href="#involved"
            className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-dawn-500 to-dawn-400 px-4.5 py-2 text-[13px] font-bold text-on-accent transition-transform duration-300 hover:scale-[1.03] sm:flex sm:items-center sm:gap-1.5"
          >
            Donate
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-4.5">
              <span
                className={`absolute left-0 block h-0.5 w-full rounded bg-fg transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full rounded bg-fg transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-surface/95 backdrop-blur-2xl transition-all duration-400 ease-[var(--ease-out-expo)] lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-8">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-line py-3">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-bold text-fg"
              >
                {item.label}
              </a>
              {"children" in item && item.children && (
                <div className="mt-2 flex flex-col gap-1.5 pl-3">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="text-sm text-fg-subtle"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#portal"
              onClick={() => setOpen(false)}
              className="rounded-full border border-line-strong py-3 text-center text-sm font-semibold text-fg"
            >
              Sign in to the portal
            </a>
            <a
              href="#involved"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-dawn-500 to-dawn-400 py-3 text-center text-sm font-bold text-on-accent"
            >
              Donate
            </a>

            <div className="mt-3 flex items-center justify-between rounded-full border border-line px-4 py-2">
              <span className="text-[13px] font-semibold text-fg-muted">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
