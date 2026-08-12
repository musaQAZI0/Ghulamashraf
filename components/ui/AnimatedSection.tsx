"use client";

import { motion } from "motion/react";

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

type AnimatedSectionProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function AnimatedSection({ eyebrow, title, children }: AnimatedSectionProps) {
  return (
    <motion.section
      className="content-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={fadeUp}
      transition={{ duration: 0.65 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}
