import { kicker, shell } from "@/lib/content";
import { LineReveal } from "@/components/line-reveal";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

export function Introduction() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-t border-ink/10 py-24 md:py-32 lg:py-40"
    >
      <div className={shell}>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-6">
            <p className={kicker}>About</p>
            <h2
              id="about-title"
              className="display mt-5 text-[clamp(2.7rem,4.8vw,4.75rem)] text-ink"
            >
              <LineReveal lines={["Property, with", "a clearer", "point of view."]} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-ash">
                PropCapital serves first-time homebuyers, luxury buyers,
                investors, commercial property buyers, NRI clients, owners and
                referral partners across Delhi, Gurugram, Noida and Faridabad.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-ink">
                Services span residential and commercial discovery, buyer
                consultation, NRI and owner support, market information and
                property-owner referrals. No live property listings are shown
                on this page.
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7 lg:pb-24">
            <MediaFrame
              src="/images/intro.jpg"
              alt="Illustrative photograph of a timber and glass home; not a current listing."
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[16/11] w-full"
              mode="reveal"
              position="center 60%"
            />
            <Reveal className="relative z-10 mt-5 w-[78%] sm:w-[52%] lg:absolute lg:-bottom-2 lg:-left-10 lg:mt-0 lg:w-[46%]">
              <div className="ring-[10px] ring-ivory">
                <MediaFrame
                  src="/images/gallery.jpg"
                  alt="Illustrative photograph of a sunlit interior; not a current listing."
                  sizes="(min-width: 1024px) 24vw, 70vw"
                  className="aspect-[4/5] w-full"
                  mode="still"
                  position="center"
                />
              </div>
              <p className={`${kicker} mt-4`}>Illustrative photography · not a listing</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
