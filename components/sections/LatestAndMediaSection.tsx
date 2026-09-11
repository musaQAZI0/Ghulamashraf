import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { LatestArticleRow } from "@/components/cards/LatestArticleRow";
import { latestArticles } from "@/lib/site-content";

export function LatestAndMediaSection() {
  return (
    <section className="split-section" id="media">
      <div>
        <span className="eyebrow">Latest Articles</span>
        <h2>Recently published.</h2>
        {latestArticles.length > 0 ? (
          <div className="latest-list">
            {latestArticles.map((article) => (
              <LatestArticleRow
                category={article.category}
                title={article.title}
                date={article.date}
                key={article.title}
              />
            ))}
          </div>
        ) : (
          <div className="latest-empty">
            <p>No articles have been published yet.</p>
          </div>
        )}
      </div>
      <div className="media-panel">
        <span className="eyebrow">Media</span>
        <h2>Conversations beyond the written page.</h2>
        <p className="media-panel-copy">Talks, interviews, reflections, and public conversations gathered in one place.</p>
        <div className="media-actions">
          <Link className="media-button" href="/media" aria-label="Explore media archive">
            <Play size={18} />
          </Link>
          <Link className="text-link" href="/media">
            Explore media <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
