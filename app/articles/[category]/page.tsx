import { ArticleCard } from "@/components/cards/ArticleCard";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { featuredArticles } from "@/lib/site-content";

export default async function CategoryPage(props: PageProps<"/articles/[category]">) {
  const { category } = await props.params;
  const title = category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Article Category</span>
        <h1>{title}</h1>
        <p>Category landing page with editorial cards, badges, publication metadata, and room for filtering.</p>
      </section>
      <section className="featured-grid route-featured-grid">
        {featuredArticles.map((article, index) => (
          <ArticleCard article={article} index={index} key={article.title} />
        ))}
      </section>
    </SiteFrame>
  );
}
