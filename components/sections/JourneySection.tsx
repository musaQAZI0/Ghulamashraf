"use client";

import { motion } from "motion/react";
import { AnimatedSection, fadeUp } from "@/components/ui/AnimatedSection";
import { milestones } from "@/lib/site-content";

export function JourneySection() {
  return (
    <AnimatedSection eyebrow="Selected experience" title="A career grounded in learning and service.">
      <div className="timeline">
        {milestones.slice(0, 3).map((milestone, index) => (
          <motion.div
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={milestone.title}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{milestone.title}</h3>
              <p>{milestone.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
