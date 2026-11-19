import { kicker, principles, shell } from "@/lib/content";
import { LineReveal } from "@/components/line-reveal";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

export function WhyPropCapital() {
  const [discovery, intelligence, assistance, support] = principles;

  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="border-t border-ink/10 py-24 md:py-32"
    >
      <div className={shell}>
        <p className={kicker}>Approach</p>
        <h2
          id="approach-title"
          className="display mt-4 max-w-4xl text-[clamp(2.7rem,5vw,4.7rem)] text-ink"
        >
          <LineReveal lines={["Why", "PropCapital"]} />
        </h2>

        <article className="mt-20 grid items-end gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="font-serif text-5xl tracking-[-0.04em] text-ink">
              {discovery.index}
            </p>
            <h3 className="display mt-4 text-3xl text-ink md:text-4xl">
              {discovery.title}
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-ash">
              {discovery.body}
            </p>
          </Reveal>
          <MediaFrame
            src="/images/court.jpg"
            alt="Sample photograph of a timber and glass house from the street."
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="aspect-[16/11] lg:col-span-7 lg:-mb-6"
            mode="parallax"
            position="center 40%"
          />
        </article>

        <article className="mt-24 grid items-center gap-8 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-12">
          <MediaFrame
            src="/images/stone.jpg"
            alt="Sample photograph of a screened facade beside a lap pool."
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="aspect-[4/5] lg:col-span-4"
            mode="reveal"
            position="left center"
          />
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-5xl tracking-[-0.04em] text-ink">
              {intelligence.index}
            </p>
            <h3 className="display mt-4 text-3xl text-ink md:text-4xl">
              {intelligence.title}
            </h3>
            <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-ink md:text-[1.7rem]">
              Figures earn their place. Until a listing is real, the page
              refuses to invent them.
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-ash">
              {intelligence.body}
            </p>
          </Reveal>
        </article>

        <article className="mt-24 border-t border-ink/10 pt-16">
          <div className="grid gap-6 lg:grid-cols-12">
            <p className="font-serif text-5xl tracking-[-0.04em] text-ink lg:col-span-2">
              {assistance.index}
            </p>
            <div className="lg:col-span-6">
              <h3 className="display text-3xl text-ink md:text-4xl">
                {assistance.title}
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-ash">
                {assistance.body}
              </p>
            </div>
          </div>
          <MediaFrame
            src="/images/living.jpg"
            alt="Sample photograph of a living room in afternoon light."
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="mt-10 aspect-[21/9] w-full lg:ml-[16%] lg:w-[84%]"
            mode="reveal"
            position="center 60%"
          />
        </article>

        <article className="mt-24 grid items-center gap-10 border-t border-ink/10 pt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="font-serif text-5xl tracking-[-0.04em] text-ink">
              {support.index}
            </p>
            <h3 className="display mt-4 text-3xl text-ink md:text-4xl">
              {support.title}
            </h3>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-ash">
              {support.body}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex text-[11px] font-medium uppercase tracking-[0.16em] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
            >
              Begin with an enquiry
            </a>
          </Reveal>
          <MediaFrame
            src="/images/closing.jpg"
            alt="Sample photograph of a double-height living room with a timber stair."
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="aspect-[5/4] lg:col-span-5 lg:col-start-8"
            mode="parallax"
            position="center"
          />
        </article>
      </div>
    </section>
  );
}
