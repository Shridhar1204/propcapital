"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type MediaFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  mode?: "parallax" | "reveal" | "still";
  position?: string;
};

export function MediaFrame({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  priority = false,
  mode = "still",
  position = "center",
}: MediaFrameProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode === "still") return;
    const frameEl = frame.current;
    const innerEl = inner.current;
    if (!frameEl || !innerEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        if (mode === "parallax") {
          gsap.fromTo(
            innerEl,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: frameEl,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        if (mode === "reveal") {
          gsap.fromTo(
            frameEl,
            { clipPath: "inset(16% 0% 16% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: {
                trigger: frameEl,
                start: "top 92%",
                end: "top 42%",
                scrub: 0.65,
              },
            },
          );
        }
      }, frameEl);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [mode]);

  const travel = mode === "parallax";

  return (
    <div ref={frame} className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        ref={inner}
        className={
          travel ? "absolute inset-x-0 -top-[12%] -bottom-[12%]" : "absolute inset-0"
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName ?? ""}`}
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}
