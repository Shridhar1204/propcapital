"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type LineRevealProps = {
  lines: string[];
  className?: string;
  immediate?: boolean;
  delay?: number;
};

export function LineReveal({
  lines,
  className,
  immediate = false,
  delay = 0,
}: LineRevealProps) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "115%" }}
            animate={immediate && !reduce ? { y: "0%" } : undefined}
            whileInView={!immediate && !reduce ? { y: "0%" } : undefined}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{
              duration: 0.95,
              delay: delay + index * 0.09,
              ease,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
