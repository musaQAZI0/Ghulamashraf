import Link from "next/link";
import { Mail, Search } from "lucide-react";
import { navItems } from "@/lib/site-content";

function routeFor(item: string) {
  return item === "Home" ? "/" : `/${item.toLowerCase()}`;
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Ghulam <em>Ashraf</em></strong>
        <span>Essays, media, travel notes, and public reflection.</span>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <Link href={routeFor(item)} key={item}>
            {item}
          </Link>
        ))}
      </nav>
      <div className="footer-actions">
        <Link href="/articles">
          <Search size={15} /> Search articles
        </Link>
        <a href="mailto:contact@ghulamashraf.com">
          <Mail size={15} /> Email
        </a>
      </div>
    </footer>
  );
}
