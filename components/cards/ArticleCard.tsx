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
    tone: string;
  };
  index: number;
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.article
      className={`article-card ${article.tone}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12 }}
    >
      <div className="article-image" />
      <span className="badge">{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="article-meta">
        <span>{article.date}</span>
        <Link href="/articles">
          Read article <ArrowRight size={15} />
        </Link>
      </div>
    </motion.article>
  );
}
