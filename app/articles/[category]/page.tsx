import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArchiveStory } from "@/components/cards/ArchiveStory";
import { SiteFrame } from "@/components/layout/SiteFrame";
import {
  formatArticleDate,
  getPublishedArticleBySlug,
  getPublishedArticlesByCategorySlug,
  readingTime,
} from "@/lib/articles";
import { articleCategories } from "@/lib/site-content";

function categoryHref(category: string) {
  return category === "All Articles" ? "/articles" : `/articles/${category.toLowerCase().replaceAll(" ", "-")}`;
}

function renderContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

type CategoryRouteProps = { params: Promise<{ category: string }> };

export async function generateMetadata(props: CategoryRouteProps): Promise<Metadata> {
  const { category } = await props.params;
  const article = await getPublishedArticleBySlug(category);

  if (article) {
    return {
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt ?? undefined,
    };
  }

  const categoryResult = await getPublishedArticlesByCategorySlug(category);

  if (categoryResult) {
    return {
      title: categoryResult.category.name,
      description: `Essays and reflections gathered around ${categoryResult.category.name.toLowerCase()}.`,
    };
  }

  return {};
}

export default async function CategoryOrArticlePage(props: CategoryRouteProps) {
  const { category } = await props.params;
  const article = await getPublishedArticleBySlug(category);

  if (article) {
    const paragraphs = renderContent(article.content);

    return (
      <SiteFrame>
        <article className="article-page">
          <header>
            <span className="eyebrow"><i /> {article.category?.name ?? "Article"}</span>
            <h1>{article.title}</h1>
            {article.excerpt && <p>{article.excerpt}</p>}
            <div className="article-meta">
              <span>{formatArticleDate(article.publishedAt ?? article.createdAt)} <i aria-hidden="true" /> {readingTime(article.content)}</span>
              {article.author?.name && <span>{article.author.name}</span>}
            </div>
          </header>
          {article.featuredImage && (
            <div className="article-featured-image">
              <Image src={article.featuredImage} alt="" width={1200} height={720} sizes="(max-width: 900px) calc(100vw - 32px), 1180px" />
            </div>
          )}
          <div className="article-content">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </SiteFrame>
    );
  }

  const categoryResult = await getPublishedArticlesByCategorySlug(category);
  if (!categoryResult) notFound();

  const { category: knownCategory, articles } = categoryResult;

  return (
    <SiteFrame>
      <main className="articles-page category-page">
        <section className="category-hero">
          <span className="eyebrow"><i /> Article collection</span>
          <h1>{knownCategory.name}</h1>
          <p>Essays and reflections gathered around {knownCategory.name.toLowerCase()}.</p>
        </section>
        <nav className="articles-category-nav" aria-label="Article categories">
          {articleCategories.map((item) => (
            <Link className={item.toLowerCase() === knownCategory.name.toLowerCase() ? "active" : ""} href={categoryHref(item)} key={item}>{item}</Link>
          ))}
        </nav>
        {articles.length > 0 ? (
          <section className="articles-archive" aria-label={`${knownCategory.name} articles`}>
            {articles.map((item, index) => (
              <ArchiveStory
                article={{
                  category: item.category?.name ?? knownCategory.name,
                  title: item.title,
                  date: formatArticleDate(item.publishedAt ?? item.createdAt),
                  href: `/articles/${item.slug}`,
                  excerpt: item.excerpt ?? undefined,
                  readingTime: readingTime(item.content),
                  tone: "plain",
                }}
                featured={index === 0}
                key={item.id}
              />
            ))}
          </section>
        ) : (
          <section className="archive-empty">
            <h2>Writing for this collection is coming soon.</h2>
            <p>Explore the complete archive in the meantime.</p>
            <Link className="secondary-button" href="/articles">View all articles</Link>
          </section>
        )}
      </main>
    </SiteFrame>
  );
}
