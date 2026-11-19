import { kicker, principles, serviceGroups, shell } from "@/lib/content";
import { LineReveal } from "@/components/line-reveal";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";

export function WhyPropCapital() {
  const [discovery, intelligence, assistance, support] = principles;

  return (
    <section
      id="services"
      aria-labelledby="approach-title"
      className="border-t border-ink/10 py-24 md:py-32"
    >
      <div className={shell}>
        <p className={kicker}>Services</p>
        <h2
          id="approach-title"
          className="display mt-4 max-w-4xl text-[clamp(2.7rem,5vw,4.7rem)] text-ink"
        >
          <LineReveal lines={["Property, with", "more support"]} />
        </h2>

        <article className="mt-16 grid items-start gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
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
          <div className="lg:col-span-7">
            <MediaFrame
              src="/images/gurugram/apartments.jpg"
              alt="Illustrative residential apartment buildings in Gurugram, Delhi NCR."
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="aspect-[16/11] w-full"
              mode="parallax"
              position="center"
            />
            <p className={`${kicker} mt-3`}>Illustrative residential buildings · Gurugram</p>
          </div>
        </article>

        <article className="mt-24 grid items-center gap-8 border-t border-ink/10 pt-16 lg:grid-cols-12 lg:gap-12">
          <MediaFrame
            src="/images/noida/sector78.jpg"
            alt="Illustrative residential apartment buildings in Noida, Delhi NCR."
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="aspect-[4/5] lg:col-span-4"
            mode="reveal"
            position="center"
          />
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-5xl tracking-[-0.04em] text-ink">
              {intelligence.index}
            </p>
            <h3 className="display mt-4 text-3xl text-ink md:text-4xl">
              {intelligence.title}
            </h3>
            <p className="mt-6 max-w-xl font-serif text-2xl leading-snug text-ink md:text-[1.7rem]">
              Homes, workspaces and investment property — across the brief.
            </p>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-ash">
              {intelligence.body}
            </p>
            <p className={`${kicker} mt-4`}>Illustrative residential buildings · Noida</p>
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
            alt="Illustrative photograph of a living room; not a current listing."
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
              View contact status
            </a>
          </Reveal>
          <MediaFrame
            src="/images/closing.jpg"
            alt="Illustrative photograph of a double-height living room; not a current listing."
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="aspect-[5/4] lg:col-span-5 lg:col-start-8"
            mode="parallax"
            position="center"
          />
        </article>

        <div className="mt-24 border-t border-ink/10 pt-16">
          <p className={kicker}>Services at a glance</p>
          <div className="mt-8 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <article
                key={group.index}
                className="border-t border-ink/10 py-6"
              >
                <p className="font-serif text-3xl tracking-[-0.04em] text-ink">
                  {group.index}
                </p>
                <h3 className="display mt-3 text-2xl text-ink">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ash">
                  {group.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 border-t border-ink/10 pt-5 text-sm leading-6 text-ash">
            This page does not display live property listings, connect to IRA,
            run the financial calculators or accept enquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
