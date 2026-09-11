import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ArchiveStoryProps = {
  article: {
    category: string;
    title: string;
    date: string;
    excerpt?: string;
    readingTime?: string;
    tone?: string;
  };
  featured?: boolean;
};

export function ArchiveStory({ article, featured = false }: ArchiveStoryProps) {
  return (
    <Link
      className={`archive-story ${featured ? "archive-story-featured" : ""} ${article.tone ?? "plain"}`}
      href="/articles"
    >
      <div className="archive-story-image" aria-hidden="true" />
      <div className="archive-story-copy">
        <span className="badge">{article.category}</span>
        <h2>{article.title}</h2>
        {article.excerpt && <p>{article.excerpt}</p>}
        <div className="archive-story-meta">
          <span>{article.date}{article.readingTime ? ` - ${article.readingTime}` : ""}</span>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}
