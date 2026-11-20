"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory transition-colors ${
        scrolled || open ? "border-b border-ink/10" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1500px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[5.25rem] lg:px-10 xl:px-14">
        <a href="#top" className="flex min-w-0 items-center gap-4">
          <span className="font-serif text-[1.65rem] leading-none tracking-[-0.03em] text-ink">
            PropCapital.ai
          </span>
          <span className="hidden h-px w-10 bg-ink/25 xl:block" aria-hidden="true" />
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-ash xl:block">
            Property, with intention
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-10 items-center rounded-full border border-ink/15 px-4 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-coral px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-[#d94332]"
          >
            Contact
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
            />
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-full bg-coral px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-ivory"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 flex flex-col bg-ivory px-6 py-8 lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="display block py-2 text-5xl text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-auto inline-flex h-12 w-fit items-center gap-2 rounded-full bg-coral px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory"
            onClick={() => setOpen(false)}
          >
            Contact
            <ArrowUpRight className="size-4" strokeWidth={1.5} />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
