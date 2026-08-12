import { ArticleCard } from "@/components/cards/ArticleCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { featuredArticles } from "@/lib/site-content";

export function FeaturedArticlesSection() {
  return (
    <AnimatedSection eyebrow="Featured Articles" title="Editorial essays with weight, clarity, and care.">
      <div className="featured-grid">
        {featuredArticles.map((article, index) => (
          <ArticleCard article={article} index={index} key={article.title} />
        ))}
      </div>
    </AnimatedSection>
  );
}
