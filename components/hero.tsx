"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { kicker, shell } from "@/lib/content";
import { LineReveal } from "@/components/line-reveal";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

const ease = [0.76, 0, 0.24, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="pb-8 pt-3 md:pb-12 md:pt-6" aria-labelledby="hero-title">
      <div className={shell}>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-4">
            <h1 id="hero-title" className="display text-[clamp(3.15rem,6.5vw,6.6rem)] text-ink">
              <LineReveal lines={["Real estate.", "Reimagined."]} immediate />
            </h1>
            <Reveal immediate delay={0.28}>
              <p className="mt-8 max-w-sm text-[15px] leading-7 text-ash">
                Residential and commercial property discovery across Delhi NCR,
                with personalised guidance for buyers, investors, NRI clients
                and property owners.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#properties"
                  className="group inline-flex h-12 items-center gap-3 rounded-full bg-coral px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-[#d94332]"
                >
                  Explore markets
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink"
                >
                  Discover services
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </Reveal>
          </div>

          <motion.div
            className="lg:col-span-7"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.15, ease, delay: 0.12 }}
          >
            <MediaFrame
              src="/images/hero.jpg"
              alt="Illustrative photograph of a modern home; this is not a PropCapital listing."
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[16/11] w-full"
              mode="parallax"
              priority
              position="center 45%"
            />
            <div className="mt-3 flex items-start justify-between gap-6">
              <p className={kicker}>Illustrative photography · not a listing</p>
              <p className={`${kicker} text-right`}>
                Places
                <br />
                people
                <br />
                belong
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid items-end gap-6 md:mt-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <MediaFrame
              src="/images/light.jpg"
              alt="Illustrative photograph of a bright living room; not a current listing."
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[16/10] w-full"
              mode="still"
            />
            <p className={`${kicker} mt-3`}>Residential · commercial · investment</p>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:px-4 lg:pb-2" delay={0.08}>
            <p className="display text-[clamp(2.4rem,4vw,3.6rem)] text-ink">
              Clarity
              <br />
              before
              <br />
              commitment.
            </p>
          </Reveal>

          <Reveal className="grid grid-cols-[1fr_auto] items-stretch gap-4 lg:col-span-3" delay={0.12}>
            <MediaFrame
              src="/images/terrace.jpg"
              alt="Illustrative photograph of a home at dusk; not a current listing."
              sizes="(min-width: 1024px) 18vw, 70vw"
              className="aspect-[4/5] w-full"
              mode="still"
              position="center"
            />
            <p className={`${kicker} flex flex-col justify-between py-1`}>
              <span>Delhi</span>
              <span>Gurugram</span>
              <span>Noida</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-ink/10 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-ash sm:flex-row sm:items-center sm:justify-between">
          <span>PropCapital.ai</span>
          <span>Property, across Delhi NCR</span>
          <span>Discovery / Guidance / Support</span>
        </div>
      </div>
    </section>
  );
}
