const stats = [
  ["Articles", "Manage drafts, published essays, and archives"],
  ["Categories", "Organize education, politics, technology, Islam, and travel"],
  ["Media", "Upload validated website images and galleries"],
  ["Settings", "Control SEO, users, and site configuration"],
];

export default function AdminDashboardPage() {
  return (
    <section className="admin-page">
      <span className="eyebrow">Dashboard</span>
      <h1>Website management hub.</h1>
      <div className="admin-card-grid">
        {stats.map(([title, body]) => (
          <article className="admin-card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
