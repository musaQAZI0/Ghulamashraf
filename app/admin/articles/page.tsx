import { createArticle } from "@/lib/actions";

export default function AdminArticlesPage() {
  return (
    <section className="admin-page">
      <span className="eyebrow">Articles</span>
      <h1>Create and manage articles.</h1>
      <form className="admin-form" action={createArticle}>
        <label>
          Title
          <input name="title" placeholder="Article title" />
        </label>
        <label>
          Excerpt
          <textarea name="excerpt" placeholder="Short editorial summary" />
        </label>
        <label>
          Content
          <textarea name="content" placeholder="Article body" />
        </label>
        <button className="primary-button" type="submit">
          Save Draft
        </button>
      </form>
    </section>
  );
}
