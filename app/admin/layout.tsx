import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

const adminLinks = [
  ["Dashboard", "/admin"],
  ["Articles", "/admin/articles"],
  ["Categories", "/admin/categories"],
  ["Media", "/admin/media"],
  ["Pages", "/admin/pages"],
  ["Users", "/admin/users"],
  ["Settings", "/admin/settings"],
];

export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <section className="admin-login-shell">
        <div className="admin-login-card">
          <span className="eyebrow">Admin</span>
          <h1>Sign in to manage the website.</h1>
          <form className="contact-form" action="/api/auth/login" method="post">
            <label>
              Email
              <input name="email" type="email" placeholder="admin@example.com" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button className="primary-button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin">
          GA Admin
        </Link>
        <nav aria-label="Admin navigation">
          {adminLinks.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <span>{user.name} · {user.role}</span>
      </aside>
      <div className="admin-content">{children}</div>
    </section>
  );
}
