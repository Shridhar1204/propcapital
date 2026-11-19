"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { kicker, sampleProperties, shell } from "@/lib/content";

export function FeaturedProperties() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = sampleProperties[index];
  const count = sampleProperties.length;

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
            <p className={kicker}>Featured</p>
            <h2
              id="properties-title"
              className="display mt-4 text-[clamp(2.5rem,4.4vw,4.4rem)] text-ink"
            >
              Sample
              <br />
              properties
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-ash">
            Placeholders only. Names, locations, and prices stay blank until
            real property information is supplied.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div
            role="tablist"
            aria-label="Sample properties"
            className="flex gap-5 lg:col-span-1 lg:flex-col lg:gap-4 lg:pt-2"
          >
            {sampleProperties.map((property, propertyIndex) => {
              const selected = propertyIndex === index;
              return (
                <button
                  key={property.id}
                  ref={(node) => {
                    tabs.current[propertyIndex] = node;
                  }}
                  id={`property-tab-${property.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="property-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(propertyIndex)}
                  onKeyDown={(event) => onTabKey(event, propertyIndex)}
                  className={`w-fit border-b pb-1 font-serif text-sm tracking-[0.14em] transition-colors ${
                    selected
                      ? "border-coral text-ink"
                      : "border-transparent text-ash hover:text-ink"
                  }`}
                >
                  {property.id}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div
              id="property-panel"
              role="tabpanel"
              aria-labelledby={`property-tab-${active.id}`}
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
                Sample — not a listing
              </p>
            </div>
            <p className={`${kicker} mt-3`}>
              Sample photography · {active.id} of {String(count).padStart(2, "0")}
            </p>
          </div>

          <div className="flex flex-col lg:col-span-4 lg:pl-2">
            <p className={kicker}>Sample listing</p>
            <h3 className="display mt-4 text-[clamp(2.6rem,3.6vw,3.8rem)] text-ink">
              Sample
              <br />
              residence
            </h3>
            <p className={`${kicker} mt-4 text-ink`}>
              {active.id} — Location pending
            </p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-ash">
              A placeholder composition. The photograph is sample imagery.
              Name, place, size, and price will replace this note when a real
              listing is provided.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-ink/10 pt-6">
              <div>
                <dt className={kicker}>Status</dt>
                <dd className="mt-2 font-serif text-2xl text-ink">Sample</dd>
              </div>
              <div>
                <dt className={kicker}>Name</dt>
                <dd className="mt-2 font-serif text-2xl text-ink">Pending</dd>
              </div>
              <div>
                <dt className={kicker}>Place</dt>
                <dd className="mt-2 font-serif text-2xl text-ink">Pending</dd>
              </div>
            </dl>

            <div className="mt-10 flex items-center justify-between gap-4 lg:mt-auto lg:pt-12">
              <a
                href="#contact"
                className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
              >
                Enquire about this sample
              </a>
              <button
                type="button"
                onClick={() => select(index + 1)}
                className="grid size-16 shrink-0 place-items-center rounded-full bg-coral text-ivory transition-colors hover:bg-[#d94332]"
                aria-label="Show the next sample property"
              >
                <ArrowRight className="size-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {sampleProperties.slice(0, 3).map((property) => {
            const propertyIndex = sampleProperties.findIndex((item) => item.id === property.id);
            const selected = propertyIndex === index;
            return (
              <button
                key={property.id}
                type="button"
                onClick={() => select(propertyIndex)}
                className={`group relative aspect-[4/3] overflow-hidden text-left ${
                  selected ? "ring-1 ring-inset ring-ink" : ""
                }`}
                aria-label={`Show sample ${property.id}`}
              >
                <Image
                  src={property.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: property.position }}
                />
                <span className="absolute bottom-3 left-3 bg-ivory px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-ink">
                  {property.id}
                </span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => select(index + 1)}
            className="flex min-h-36 flex-col justify-between bg-ink p-5 text-left text-ivory"
          >
            <span className="text-[11px] font-medium uppercase leading-5 tracking-[0.18em]">
              Sample
              <br />
              only
            </span>
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em]">
              Next sample
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
