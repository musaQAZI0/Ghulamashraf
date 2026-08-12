export default function AdminMediaPage() {
  return (
    <section className="admin-page">
      <span className="eyebrow">Media</span>
      <h1>Upload images safely.</h1>
      <form className="admin-form" action="/api/media" method="post" encType="multipart/form-data">
        <label>
          Image
          <input name="file" type="file" accept="image/jpeg,image/png,image/webp,image/avif" />
        </label>
        <button className="primary-button" type="submit">
          Upload Media
        </button>
      </form>
    </section>
  );
}
