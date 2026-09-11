import { ArticleCard } from "@/components/cards/ArticleCard";
import { getPublishedArticles, formatArticleDate, readingTime } from "@/lib/articles";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export async function FeaturedArticlesSection() {
  const articles = await getPublishedArticles(3);

  if (articles.length === 0) return null;

  return (
    <AnimatedSection eyebrow="Selected writing" title="Ideas worth sitting with.">
      <div className="featured-grid">
        {articles.map((article, index) => (
          <ArticleCard
            article={{
              category: article.category?.name ?? "General",
              title: article.title,
              excerpt: article.excerpt ?? "",
              date: formatArticleDate(article.publishedAt ?? article.createdAt),
              readingTime: readingTime(article.content),
              tone: "plain",
              href: `/articles/${article.slug}`,
            }}
            featured={index === 0}
            index={index}
            key={article.id}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
