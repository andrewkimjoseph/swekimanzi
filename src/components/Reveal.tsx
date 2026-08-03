import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  when = "inView",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  when?: "inView" | "mount";
}) {
  const reduce = useReducedMotion();
  const hidden = reduce ? false : { opacity: 0, y: 24 };
  const visible = { opacity: 1, y: 0 };
  const transition = { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const };

  if (when === "mount") {
    return (
      <motion.div
        initial={hidden}
        animate={visible}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-40px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
