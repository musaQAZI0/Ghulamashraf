"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp } from "@/components/ui/AnimatedSection";

export function HeroSection() {
  return (
    <section className="hero-section">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }}>
        <span className="eyebrow"><i /> Writer · Academic · Public Intellectual</span>
        <h1>Ideas in service of <em>society.</em></h1>
        <p className="hero-name">Dr. Ghulam Sarwar Ashraf</p>
        <p className="tagline">Learn · Inspire · Motivate · Contribute</p>
        <p className="hero-intro">
          Scholarship, reflection, and public commentary on education, faith, culture, and the responsibilities we share.
        </p>
        <div className="cta-row">
          <Link className="primary-button" href="/articles">
            Read Articles <ArrowRight size={18} />
          </Link>
          <Link className="secondary-button" href="/about">
            View Profile <ArrowDownRight size={18} />
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
      </motion.div>
    </section>
  );
}
