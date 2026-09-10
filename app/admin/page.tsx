const stats = [
  ["Articles", "12", "Draft, schedule, and maintain the editorial archive"],
  ["Categories", "06", "Keep public topics clear, balanced, and discoverable"],
  ["Media", "03", "Prepare interviews, press links, and image galleries"],
  ["Settings", "Live", "Review SEO, users, permissions, and site configuration"],
];

export default function AdminDashboardPage() {
  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <span className="eyebrow"><i /> Dashboard</span>
          <h1>Website management hub.</h1>
          <p>Quickly review the editorial system, content areas, and publishing tools from one focused workspace.</p>
        </div>
        <a className="primary-button" href="/admin/articles">New Article</a>
      </div>
      <div className="admin-card-grid">
        {stats.map(([title, value, body]) => (
          <article className="admin-card" key={title}>
            <strong>{value}</strong>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
