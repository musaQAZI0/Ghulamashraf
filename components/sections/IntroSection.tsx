import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function IntroSection() {
  return (
    <AnimatedSection eyebrow="A note from the author" title="Thinking carefully is a form of public service.">
      <div className="intro-grid">
        <p>
          Dr. Ghulam Sarwar Ashraf brings academic discipline to questions of education, public life, faith, and culture,
          writing with clarity, moral purpose, and a commitment to constructive contribution.
        </p>
        <Link className="text-link" href="/about">
          Full professional profile <ArrowRight size={16} />
        </Link>
      </div>
    </AnimatedSection>
  );
}
