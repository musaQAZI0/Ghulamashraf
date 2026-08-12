"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { articleCategories, navItems } from "@/lib/site-content";

function routeFor(item: string) {
  return item === "Home" ? "/" : `/${item.toLowerCase()}`;
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <strong>Ghulam Ashraf</strong>
      </Link>
      <div className="desktop-nav">
        {navItems.map((item) =>
          item === "Articles" ? (
            <div className="dropdown" key={item}>
              <Link className="nav-link active-link" href="/articles">
                Articles <ChevronDown size={14} />
              </Link>
              <div className="dropdown-panel">
                {articleCategories.map((category) => (
                  <Link href={`/articles/${category.toLowerCase().replaceAll(" ", "-")}`} key={category}>
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link className="nav-link" href={routeFor(item)} key={item}>
              {item}
            </Link>
          ),
        )}
      </div>
      <button
        className="icon-button mobile-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {menuOpen && (
        <motion.div className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          {navItems.map((item) => (
            <Link onClick={() => setMenuOpen(false)} href={routeFor(item)} key={item}>
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
