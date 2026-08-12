import { TopicCard } from "@/components/cards/TopicCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { topics } from "@/lib/site-content";

export function TopicsSection() {
  return (
    <AnimatedSection eyebrow="Explore Topics" title="A considered archive across public life and personal reflection.">
      <div className="topic-grid">
        {topics.map((topic) => (
          <TopicCard title={topic.title} description={topic.description} key={topic.title} />
        ))}
      </div>
    </AnimatedSection>
  );
}
