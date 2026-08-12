import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { articleCategories, featuredArticles, latestArticles } from "@/lib/site-content";

function categoryHref(category: string) {
  return category === "All Articles" ? "/articles" : `/articles/${category.toLowerCase().replaceAll(" ", "-")}`;
}

export default function ArticlesPage() {
  return (
    <SiteFrame>
      <section className="page-hero">
        <span className="eyebrow">Articles</span>
        <h1>Readable, elegant long-form thinking.</h1>
        <p>
          A clean archive for essays across education, politics, technology, Islam, travel, and general reflection.
        </p>
      </section>
      <section className="archive-layout">
        <aside className="filter-panel" aria-label="Article categories">
          {articleCategories.map((category) => (
            <Link href={categoryHref(category)} key={category}>
              {category}
            </Link>
          ))}
        </aside>
        <div className="archive-grid">
          {featuredArticles.map((article, index) => (
            <ArticleCard article={article} index={index} key={article.title} />
          ))}
          {latestArticles.map((article) => (
            <Link className="archive-row-card" href="/articles/sample-article" key={article.title}>
              <span className="badge">{article.category}</span>
              <h3>{article.title}</h3>
              <p>Publication date: {article.date}</p>
              <strong>
                Read article <ArrowRight size={15} />
              </strong>
            </Link>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
