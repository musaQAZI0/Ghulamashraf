"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { fadeUp } from "@/components/ui/AnimatedSection";

type ArticleCardProps = {
  article: {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    tone: string;
  };
  index: number;
  featured?: boolean;
};

export function ArticleCard({ article, index, featured = false }: ArticleCardProps) {
  return (
    <motion.article
      className={`article-card ${featured ? "article-card-featured" : "article-card-compact"} ${article.tone}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12 }}
    >
      <div className="article-image" aria-hidden="true" />
      <div className="article-card-content">
        <span className="badge">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="article-meta">
          <span>{article.date} <i aria-hidden="true" /> {article.readingTime}</span>
          <Link href="/articles/sample-article" aria-label={`Read ${article.title}`}>
            <span>Read article</span> <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
