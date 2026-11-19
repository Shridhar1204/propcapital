"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { kicker, shell } from "@/lib/content";
import { LineReveal } from "@/components/line-reveal";
import { MediaFrame } from "@/components/media-frame";

export function Closing() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) return;
    form.reset();
    setStatus("Nothing was sent or stored. The fields were cleared.");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-ink/10 py-24 md:py-32"
    >
      <div className={shell}>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className={kicker}>Contact</p>
            <h2
              id="contact-title"
              className="display mt-5 text-[clamp(2.8rem,5.2vw,5rem)] text-ink"
            >
              <LineReveal lines={["Your next move", "starts here."]} />
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-7 text-ash">
              An enquiry, when the channel is live, is the way to begin. This
              form shows the shape of that note. It does not deliver one.
            </p>
          </div>
          <MediaFrame
            src="/images/arrival.jpg"
            alt="Sample photograph of a bright modern interior used beside the enquiry."
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[16/10] lg:col-span-6"
            mode="reveal"
            position="center"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-16 grid gap-10 border-t border-ink/10 pt-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <p className={kicker}>Enquiry preview</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ash">
              Name, email, and a few lines. Submitting does not contact
              PropCapital and does not save what you type.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            <label className="block">
              <span className={kicker}>Name</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink outline-none placeholder:text-ash focus:border-ink"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className={kicker}>Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink outline-none placeholder:text-ash focus:border-ink"
                placeholder="you@example.com"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className={kicker}>Note</span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-3 text-[15px] text-ink outline-none placeholder:text-ash focus:border-ink"
                placeholder="What you are hoping to find"
              />
            </label>
            <div className="sm:col-span-2 flex flex-col items-start gap-4">
              <button
                type="submit"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-coral px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-[#d94332]"
              >
                Preview enquiry
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </button>
              {status ? (
                <p role="status" className="max-w-md text-sm leading-6 text-ink">
                  {status}
                </p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
