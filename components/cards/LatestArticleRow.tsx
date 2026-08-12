import Link from "next/link";
import { CalendarDays } from "lucide-react";

type LatestArticleRowProps = {
  category: string;
  title: string;
  date: string;
};

export function LatestArticleRow({ category, title, date }: LatestArticleRowProps) {
  return (
    <Link href="/articles" className="latest-row">
      <span className="badge">{category}</span>
      <strong>{title}</strong>
      <small>
        <CalendarDays size={14} /> {date}
      </small>
    </Link>
  );
}
