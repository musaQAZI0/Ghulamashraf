import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { ArchiveStory } from "@/components/cards/ArchiveStory";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { formatArticleDate, getPublishedArticles, readingTime } from "@/lib/articles";
import { articleCategories } from "@/lib/site-content";

function categoryHref(category: string) {
  return category === "All Articles" ? "/articles" : `/articles/${category.toLowerCase().replaceAll(" ", "-")}`;
}

export const metadata: Metadata = {
  title: "Articles",
  description: "Essays on education, politics, technology, Islam, travel, and public life.",
};

type ArticlesPageProps = { searchParams: Promise<{ q?: string | string[] }> };

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const rawQuery = (await searchParams).q;
  const query = (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery)?.trim() ?? "";
  const needle = query.toLowerCase();
  const articles = await getPublishedArticles();
  const visibleArticles = articles.filter((article) =>
    !needle || [article.category?.name, article.title, article.excerpt].some((value) => value?.toLowerCase().includes(needle)),
  );

  return (
    <SiteFrame>
      <main className="articles-page">
        <section className="articles-hero">
          <div>
            <span className="eyebrow"><i /> Essays & reflections</span>
            <h1>Ideas for thoughtful <em>public life.</em></h1>
            <p>Writing on education, faith, technology, culture, travel, and the responsibilities we share.</p>
          </div>
          <form className="articles-search" action="/articles" role="search">
            <label htmlFor="article-search">Search the archive</label>
            <div>
              <Search aria-hidden="true" size={18} />
              <input id="article-search" name="q" type="search" defaultValue={query} placeholder="Title, topic, or keyword" />
              <button type="submit">Search</button>
            </div>
          </form>
        </section>

        <nav className="articles-category-nav" aria-label="Article categories">
          {articleCategories.map((category) => (
            <Link className={category === "All Articles" ? "active" : ""} href={categoryHref(category)} key={category}>{category}</Link>
          ))}
        </nav>

        {query && <p className="articles-result-count">{visibleArticles.length} results for &quot;{query}&quot;</p>}

        {visibleArticles.length > 0 ? (
          <section className="articles-archive" aria-label="Article archive">
            {visibleArticles.map((article, index) => (
              <ArchiveStory
                article={{
                  category: article.category?.name ?? "General",
                  title: article.title,
                  date: formatArticleDate(article.publishedAt ?? article.createdAt),
                  href: `/articles/${article.slug}`,
                  excerpt: article.excerpt ?? undefined,
                  readingTime: readingTime(article.content),
                  tone: "plain",
                }}
                featured={!query && index === 0}
                key={article.id}
              />
            ))}
          </section>
        ) : (
          <section className="archive-empty">
            <h2>{query ? "No articles found." : "No articles published yet."}</h2>
            <p>{query ? "Try a broader topic or return to the complete archive." : "The archive will appear here once the first article is published."}</p>
            {query && <Link className="secondary-button" href="/articles">Clear search</Link>}
          </section>
        )}
      </main>
    </SiteFrame>
  );
}
