import { navLinks, shell } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div
        className={`${shell} flex flex-col gap-8 py-8 md:flex-row md:items-end md:justify-between`}
      >
        <a href="#top" className="font-serif text-2xl tracking-[-0.03em] text-ink">
          PropCapital
        </a>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-ash">
          Discovery / Context / Care
        </p>
      </div>
      <div className={`${shell} border-t border-ink/10 py-4`}>
        <p className="text-xs leading-5 text-ash">
          Sample photography throughout, including images from Unsplash. Not
          current listings. No prices, names, or performance claims are shown
          until real property information is supplied.
        </p>
      </div>
    </footer>
  );
}
