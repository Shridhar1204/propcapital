"use client";

import { useState } from "react";
import { iraGreeting, iraPrompts, kicker } from "@/lib/content";

type Turn = { id: string; from: "ira" | "visitor"; text: string };

const opening: Turn[] = [{ id: "greet", from: "ira", text: iraGreeting }];

export function IraPreview() {
  const [turns, setTurns] = useState<Turn[]>(opening);
  const [activePrompt, setActivePrompt] = useState<string | null>(null);

  function showPrompt(id: string) {
    const prompt = iraPrompts.find((item) => item.id === id);
    if (!prompt) return;
    setActivePrompt(id);
    setTurns([
      { id: "greet", from: "ira", text: iraGreeting },
      { id: `${id}-you`, from: "visitor", text: prompt.visitor },
      { id: `${id}-ira`, from: "ira", text: prompt.reply },
    ]);
  }

  return (
    <section
      id="ira"
      aria-labelledby="ira-title"
      className="scroll-mt-24 border-t border-ink/10 lg:grid lg:grid-cols-2"
    >
      <div className="px-4 py-20 sm:px-6 md:py-28 lg:py-32 lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-1500px)/2+2.5rem))] xl:pl-[max(3.5rem,calc((100vw-1500px)/2+3.5rem))]">
        <p className={kicker}>Assistant</p>
        <h2
          id="ira-title"
          className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)] text-ink"
        >
          IRA.
          <br />
          Your property
          <br />
          assistant.
        </h2>
        <p className="mt-8 max-w-md text-[15px] leading-7 text-ash">
          IRA is PropCapital’s AI property consultant concept for
          personalised, budget- and location-based discovery. This preview is
          not connected to a live AI model or property listings.
        </p>
        <ol className="mt-10 max-w-md border-t border-ink/10">
          {[
            "Describe your budget, location and property needs.",
            "Explore residential and commercial options.",
            "Prepare for a property consultation.",
          ].map((item, index) => (
            <li
              key={item}
              className="flex gap-6 border-b border-ink/10 py-4 text-[15px] text-ink"
            >
              <span className="font-serif text-sm text-ash">0{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-[#e7e2d6] px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:py-24 lg:pr-[max(2.5rem,calc((100vw-1500px)/2+2.5rem))] lg:pl-12 xl:pr-[max(3.5rem,calc((100vw-1500px)/2+3.5rem))]">
        <div className="flex items-baseline justify-between gap-4 border-b border-ink/15 pb-4">
          <p className="font-serif text-2xl tracking-[-0.03em] text-ink">IRA</p>
          <p className={kicker}>Prepared preview · not live</p>
        </div>

        <div className="flex min-h-[22rem] flex-col gap-8 py-8" aria-live="polite">
          {turns.map((turn) => (
            <article
              key={turn.id}
              className={turn.from === "visitor" ? "ml-auto max-w-md text-right" : "max-w-lg"}
            >
              <p className={kicker}>{turn.from === "visitor" ? "You" : "IRA"}</p>
              <p
                className={
                  turn.from === "ira"
                    ? "mt-2 font-serif text-xl leading-snug text-ink"
                    : "mt-2 text-[15px] leading-7 text-ink"
                }
              >
                {turn.text}
              </p>
            </article>
          ))}
        </div>

        <div className="border-t border-ink/15 pt-5">
          <p className={kicker}>Example questions</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {iraPrompts.map((prompt) => {
              const selected = activePrompt === prompt.id;
              return (
                <button
                  key={prompt.id}
                  type="button"
                  onClick={() => showPrompt(prompt.id)}
                  aria-pressed={selected}
                  className={`h-10 rounded-full border px-4 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                    selected
                      ? "border-ink bg-ink text-ivory"
                      : "border-ink/20 text-ink hover:border-ink"
                  }`}
                >
                  {prompt.label}
                </button>
              );
            })}
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-ash">
            Choosing a prompt shows a prepared reply. Nothing is sent, and no
            live property search is performed.
          </p>
          <label htmlFor="ira-draft" className="mt-6 block">
            <span className="sr-only">Message to IRA</span>
            <input
              id="ira-draft"
              disabled
              placeholder="Live conversation is not connected"
              className="w-full cursor-not-allowed border-b border-ink/20 bg-transparent py-3 text-sm text-ash placeholder:text-ash"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
