import { TopicCard } from "@/components/cards/TopicCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { topics } from "@/lib/site-content";

export function TopicsSection() {
  return (
    <AnimatedSection eyebrow="Explore topics" title="Writing across the questions that shape public life.">
      <div className="topic-grid">
        {topics.map((topic) => (
          <TopicCard title={topic.title} description={topic.description} key={topic.title} />
        ))}
      </div>
    </AnimatedSection>
  );
}
