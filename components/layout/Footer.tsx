import Link from "next/link";
import { Search } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <strong>GhulamAshraf.com</strong>
      <span>Premium personal publication platform</span>
      <Link href="/articles">
        <Search size={15} /> Search articles
      </Link>
    </footer>
  );
}
