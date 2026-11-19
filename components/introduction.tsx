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
              <LineReveal
                lines={["A better way", "to discover", "property."]}
              />
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[15px] leading-7 text-ash">
                Most property search is built for speed. PropCapital is built
                for judgment. A home is given the space to be understood, and
                IRA is there when you want to think aloud before you take the
                next step.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-ink">
                What you see here is the house style: quiet type, generous
                room, and photography standing in until real listings arrive.
              </p>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7 lg:pb-24">
            <MediaFrame
              src="/images/intro.jpg"
              alt="Sample photograph of a timber and glass house set among trees."
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[16/11] w-full"
              mode="reveal"
              position="center 60%"
            />
            <Reveal className="relative z-10 mt-5 w-[78%] sm:w-[52%] lg:absolute lg:-bottom-2 lg:-left-10 lg:mt-0 lg:w-[46%]">
              <div className="ring-[10px] ring-ivory">
                <MediaFrame
                  src="/images/gallery.jpg"
                  alt="Sample photograph of a sunlit living room with tall garden windows."
                  sizes="(min-width: 1024px) 24vw, 70vw"
                  className="aspect-[4/5] w-full"
                  mode="still"
                  position="center"
                />
              </div>
              <p className={`${kicker} mt-4`}>Sample photography</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
