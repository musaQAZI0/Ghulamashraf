"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { articleCategories, navItems } from "@/lib/site-content";

function routeFor(item: string) {
  return item === "Home" ? "/" : `/${item.toLowerCase()}`;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(item: string) {
    const route = routeFor(item);
    return route === "/" ? pathname === route : pathname === route || pathname.startsWith(`${route}/`);
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Primary navigation"
    >
      <Link className="brand-mark" href="/">
        <span>GA</span>
        <strong>Ghulam <em>Ashraf</em></strong>
      </Link>
      <div className="desktop-nav">
        {navItems.map((item) =>
          item === "Articles" ? (
            <div className="dropdown" key={item}>
              <Link className={`nav-link ${isActive(item) ? "active-link" : ""}`} href="/articles">
                Articles <ChevronDown size={14} />
              </Link>
              <div className="dropdown-panel">
                {articleCategories.map((category) => (
                  <Link
                    href={category === "All Articles" ? "/articles" : `/articles/${category.toLowerCase().replaceAll(" ", "-")}`}
                    key={category}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link className={`nav-link ${isActive(item) ? "active-link" : ""}`} href={routeFor(item)} key={item}>
              {item}
            </Link>
          ),
        )}
      </div>
      <button
        className="icon-button mobile-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {menuOpen && (
        <motion.div id="mobile-navigation" className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map((item) => (
            <Link className={isActive(item) ? "active-link" : ""} onClick={() => setMenuOpen(false)} href={routeFor(item)} key={item}>
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
