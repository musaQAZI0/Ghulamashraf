import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type TopicCardProps = {
  title: string;
  description: string;
};

export function TopicCard({ title, description }: TopicCardProps) {
  const href =
    title === "Travel & Leisure"
      ? "/travel"
      : `/articles/${title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;

  return (
    <Link className="topic-card" href={href}>
      <small>Explore</small>
      <span>{title}</span>
      <p>{description}</p>
      <ArrowUpRight size={20} />
    </Link>
  );
}
