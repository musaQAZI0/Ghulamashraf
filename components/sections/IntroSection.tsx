import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IntroSection() {
  return (
    <AnimatedSection eyebrow="Introduction" title="A thoughtful voice for readers who value depth.">
      <div className="intro-grid">
        <p>
          Dr. Ghulam Sarwar Ashraf&apos;s work brings together academic discipline, public reflection, and a commitment to
          constructive contribution. The site is designed as a refined home for biography, articles, media, and long-form
          reading.
        </p>
        <Link className="text-link" href="/about">
          Full professional profile <ArrowRight size={16} />
        </Link>
      </div>
    </AnimatedSection>
  );
}
