import Link from "next/link";

type TopicCardProps = {
  title: string;
  description: string;
};

export function TopicCard({ title, description }: TopicCardProps) {
  return (
    <Link className="topic-card" href="/articles">
      <span>{title}</span>
      <p>{description}</p>
    </Link>
  );
}
