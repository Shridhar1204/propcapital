import { ArrowRight } from "lucide-react";
import { kicker, shell } from "@/lib/content";
import { LineReveal } from "@/components/line-reveal";
import { MediaFrame } from "@/components/media-frame";

export function Closing() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-t border-ink/10 py-24 md:py-32"
    >
      <div className={shell}>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className={kicker}>Contact details</p>
            <h2
              id="contact-title"
              className="display mt-5 text-[clamp(2.8rem,5.2vw,5rem)] text-ink"
            >
              <LineReveal lines={["A clearer next", "step in property."]} />
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-7 text-ash">
              PropCapital’s services span buyers, investors, NRI clients,
              commercial property buyers, owners and referral partners across
              Delhi NCR.
            </p>
          </div>
          <MediaFrame
            src="/images/arrival.jpg"
            alt="Illustrative photograph of a bright modern interior; not a current listing."
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[16/10] lg:col-span-6"
            mode="reveal"
            position="center"
          />
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className={kicker}>Enquiry channel</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ash">
              Not connected
            </p>
          </div>
          <div className="border-t border-ink/10 pt-5 lg:col-span-8 lg:pt-0">
            <p className="max-w-xl text-[15px] leading-7 text-ink">
              No email address, phone number or enquiry destination has been
              provided, so this page does not collect or send personal
              information.
            </p>
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.16em] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
            >
              Review services
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
