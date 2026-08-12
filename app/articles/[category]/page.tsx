import Link from "next/link";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { articleCategories, featuredArticles, latestArticles } from "@/lib/site-content";

function categoryHref(category: string) {
  return category === "All Articles" ? "/articles" : `/articles/${category.toLowerCase().replaceAll(" ", "-")}`;
}

export default async function CategoryPage(props: PageProps<"/articles/[category]">) {
  const { category } = await props.params;
  const title = category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const categoryArticles = featuredArticles.filter((article) => article.category.toLowerCase() === title.toLowerCase());
  const relatedArticles = latestArticles.filter((article) => article.category.toLowerCase() === title.toLowerCase());
  const hasCategoryArticles = categoryArticles.length > 0 || relatedArticles.length > 0;

  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Article Category</span>
        <h1>{title}</h1>
        <p>Focused writing and notes from the {title.toLowerCase()} archive.</p>
      </section>
      <section className="archive-layout">
        <aside className="filter-panel" aria-label="Article categories">
          {articleCategories.map((item) => (
            <Link className={item === title ? "active-link" : ""} href={categoryHref(item)} key={item}>
              {item}
            </Link>
          ))}
        </aside>
        <div className="archive-grid">
          {(hasCategoryArticles ? categoryArticles : featuredArticles).map((article, index) => (
            <ArticleCard article={article} index={index} key={article.title} />
          ))}
          {relatedArticles.map((article) => (
            <Link className="archive-row-card" href="/articles/sample-article" key={article.title}>
              <span className="badge">{article.category}</span>
              <h3>{article.title}</h3>
              <p>Published {article.date}</p>
              <strong>Read article</strong>
            </Link>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
