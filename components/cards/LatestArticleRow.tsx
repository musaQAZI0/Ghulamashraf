import Link from "next/link";
import { CalendarDays } from "lucide-react";

type LatestArticleRowProps = {
  category: string;
  title: string;
  date: string;
  href: string;
};

export function LatestArticleRow({ category, title, date, href }: LatestArticleRowProps) {
  return (
    <Link href={href} className="latest-row">
      <span className="badge">{category}</span>
      <strong>{title}</strong>
      <small>
        <CalendarDays size={14} /> {date}
      </small>
    </Link>
  );
}
