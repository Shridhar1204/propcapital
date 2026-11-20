"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { kicker, marketAreas, marketHighlights, shell } from "@/lib/content";

export function FeaturedProperties() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = marketHighlights[index];
  const count = marketHighlights.length;

  function select(next: number, focus = false) {
    const wrapped = (next + count) % count;
    setIndex(wrapped);
    if (focus) tabs.current[wrapped]?.focus();
  }

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, current: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowUp") {
      return;
    }
    event.preventDefault();
    const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    select(current + delta, true);
  }

  return (
    <section
      id="properties"
      aria-labelledby="properties-title"
      className="scroll-mt-24 border-t border-ink/10 py-24 md:py-32"
    >
      <div className={shell}>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className={kicker}>Delhi NCR</p>
            <h2
              id="properties-title"
              className="display mt-4 text-[clamp(2.5rem,4.4vw,4.4rem)] text-ink"
            >
              Market
              <br />
              in focus
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-ash">
            Property search and advisory across Delhi, Gurugram, Noida and
            Faridabad. The imagery is illustrative; no live listings are shown.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div
            role="tablist"
            aria-label="Delhi NCR markets"
            className="flex gap-5 lg:col-span-1 lg:flex-col lg:gap-4 lg:pt-2"
          >
            {marketHighlights.map((market, marketIndex) => {
              const selected = marketIndex === index;
              return (
                <button
                  key={market.id}
                  ref={(node) => {
                    tabs.current[marketIndex] = node;
                  }}
                  id={`market-tab-${market.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="market-panel"
                  aria-label={`Explore ${market.name}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(marketIndex)}
                  onKeyDown={(event) => onTabKey(event, marketIndex)}
                  className={`w-fit border-b pb-1 font-serif text-sm tracking-[0.14em] transition-colors ${
                    selected
                      ? "border-coral text-ink"
                      : "border-transparent text-ash hover:text-ink"
                  }`}
                >
                  0{marketIndex + 1}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div
              id="market-panel"
              role="tabpanel"
              aria-labelledby={`market-tab-${active.id}`}
              className="relative aspect-[16/11] overflow-hidden bg-[#e4dfd4]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.045 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={active.image}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: active.position }}
                  />
                </motion.div>
              </AnimatePresence>
              <p className="absolute left-4 top-4 bg-ivory px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink">
                Illustrative imagery
              </p>
            </div>
            <p className={`${kicker} mt-3`}>
              {active.name} · illustrative imagery · {String(index + 1).padStart(2, "0")} of {String(count).padStart(2, "0")}
            </p>
          </div>

          <div className="flex flex-col lg:col-span-4 lg:pl-2">
            <p className={kicker}>Delhi NCR market</p>
            <h3 className="display mt-4 text-[clamp(2.6rem,3.6vw,3.8rem)] text-ink">
              {active.name}
            </h3>
            <p className={`${kicker} mt-4 text-ink`}>
              Residential and commercial property
            </p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-ash">
              {active.summary} No property shown here is a listing, and
              availability, pricing and project details are not provided.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              <div>
                <dt className={kicker}>Area</dt>
                <dd className="mt-2 font-serif text-2xl text-ink">NCR</dd>
              </div>
              <div>
                <dt className={kicker}>Focus</dt>
                <dd className="mt-2 font-serif text-2xl text-ink">Homes</dd>
              </div>
              <div>
                <dt className={kicker}>Also</dt>
                <dd className="mt-2 font-serif text-2xl text-ink">Work</dd>
              </div>
            </dl>

            <div className="mt-8 flex items-center justify-between gap-4">
              <a
                href="#services"
                className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
              >
                Explore services
              </a>
              <button
                type="button"
                onClick={() => select(index + 1)}
                className="grid size-16 shrink-0 place-items-center rounded-full bg-coral text-ivory transition-colors hover:bg-[#d94332]"
                aria-label="Show the next Delhi NCR market"
              >
                <ArrowRight className="size-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-5">
          <p className={kicker}>Delhi NCR coverage</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {marketAreas.map((area) => (
              <li
                key={area}
                className="border-b border-ink/15 pb-3 font-serif text-2xl text-ink"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
