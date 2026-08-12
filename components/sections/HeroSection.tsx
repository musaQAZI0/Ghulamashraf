"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp } from "@/components/ui/AnimatedSection";

export function HeroSection() {
  return (
    <section className="hero-section">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
        <span className="eyebrow">Writer - Academic - Public Intellectual</span>
        <h1>Dr. Ghulam Sarwar Ashraf</h1>
        <p className="tagline">Learn - Inspire - Motivate - Contribute</p>
        <p className="hero-intro">
          A premium personal publication platform for thoughtful essays, professional reflections, public commentary,
          media work, and journeys across ideas, society, faith, and culture.
        </p>
        <div className="cta-row">
          <Link className="primary-button" href="/articles">
            Read Articles <ArrowRight size={18} />
          </Link>
          <Link className="secondary-button" href="/about">
            View Profile
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, clipPath: "inset(12% 0 12% 0 round 28px)", y: 28 }}
        animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 28px)", y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/editorial-hero.png"
          alt="Editorial study scene representing academic writing"
          width={1154}
          height={1400}
          priority
        />
        <div className="hero-note">
          <BookOpen size={18} />
          <span>Essays rooted in scholarship, service, and moral imagination.</span>
        </div>
      </motion.div>
    </section>
  );
}
