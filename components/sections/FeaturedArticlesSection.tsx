import { ArticleCard } from "@/components/cards/ArticleCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { featuredArticles } from "@/lib/site-content";

export function FeaturedArticlesSection() {
  return (
    <AnimatedSection eyebrow="Selected writing" title="Ideas worth sitting with.">
      <div className="featured-grid">
        {featuredArticles.map((article, index) => (
          <ArticleCard
            article={article}
            featured={index === 0}
            index={index}
            key={article.title}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
