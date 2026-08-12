import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

export default function SampleArticlePage() {
  return (
    <SiteFrame>
      <article className="article-page">
        <header>
          <Link className="text-link" href="/articles">
            <ArrowLeft size={16} /> Back to articles
          </Link>
          <span className="badge">Education</span>
          <h1>Reimagining Learning for a Generation That Reads the World Differently</h1>
          <p>
            A reflection on curiosity, discipline, and the teacher&apos;s role in shaping confident, ethical learners.
          </p>
          <div className="article-byline">
            <span>Dr. Ghulam Sarwar Ashraf</span>
            <span>Aug 8, 2026</span>
            <button type="button">
              <Share2 size={16} /> Share
            </button>
          </div>
        </header>
        <Image
          src="/editorial-hero.png"
          alt="Editorial study scene"
          width={1154}
          height={1400}
          className="article-featured-image"
        />
        <div className="article-content">
          <p>
            Long-form reading needs calm structure, generous spacing, and typography that lets the argument breathe.
            This article template is prepared for rich content, supporting paragraphs, quotes, related links, and
            previous or next navigation.
          </p>
          <p>
            The design keeps the reader focused: a narrow text measure, strong metadata, accessible controls, and a
            visual rhythm suited to essays rather than a busy news portal.
          </p>
          <blockquote>
            Education becomes powerful when knowledge is joined with character, responsibility, and service.
          </blockquote>
        </div>
        <nav className="article-pagination" aria-label="Article navigation">
          <Link href="/articles">
            <ArrowLeft size={16} /> Previous
          </Link>
          <Link href="/articles">
            Related articles <ArrowRight size={16} />
          </Link>
        </nav>
      </article>
    </SiteFrame>
  );
}
