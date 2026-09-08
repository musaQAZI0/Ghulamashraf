import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveStory } from "@/components/cards/ArchiveStory";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { articleCategories, featuredArticles, latestArticles } from "@/lib/site-content";

function categoryHref(category: string) {
  return category === "All Articles" ? "/articles" : `/articles/${category.toLowerCase().replaceAll(" ", "-")}`;
}

export default async function CategoryPage(props: PageProps<"/articles/[category]">) {
  const { category } = await props.params;
  const title = category.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  const knownCategory = articleCategories.find((item) => item.toLowerCase() === title.toLowerCase());
  if (!knownCategory || knownCategory === "All Articles") notFound();

  const articles = [
    ...featuredArticles,
    ...latestArticles.map((article) => ({ ...article, excerpt: "A considered note from the wider archive.", readingTime: "4 min read", tone: "plain" })),
  ].filter((article) => article.category.toLowerCase() === title.toLowerCase());

  return (
    <SiteFrame>
      <main className="articles-page category-page">
        <section className="category-hero">
          <span className="eyebrow"><i /> Article collection</span>
          <h1>{knownCategory}</h1>
          <p>Essays and reflections gathered around {knownCategory.toLowerCase()}.</p>
        </section>
        <nav className="articles-category-nav" aria-label="Article categories">
          {articleCategories.map((item) => (
            <Link className={item === knownCategory ? "active" : ""} href={categoryHref(item)} key={item}>{item}</Link>
          ))}
        </nav>
        {articles.length > 0 ? (
          <section className="articles-archive" aria-label={`${knownCategory} articles`}>
            {articles.map((article, index) => <ArchiveStory article={article} featured={index === 0} key={article.title} />)}
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
