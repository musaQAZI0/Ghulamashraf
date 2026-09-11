import { createArticle } from "@/lib/actions";
import { prisma } from "@/lib/db";

export default async function AdminArticlesPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <section className="admin-page">
      <span className="eyebrow">Articles</span>
      <h1>Create and manage articles.</h1>
      <form className="admin-form" action={createArticle}>
        <label>
          Title
          <input name="title" placeholder="Article title" required />
        </label>
        <label>
          Slug
          <input name="slug" placeholder="leave blank to auto-generate" />
        </label>
        <label>
          Category
          <select name="categoryId" defaultValue="">
            <option value="">Uncategorized</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </select>
        </label>
        <label>
          Status
          <select name="status" defaultValue="DRAFT">
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </label>
        <label>
          Featured image URL
          <input name="featuredImage" placeholder="https://..." />
        </label>
        <label>
          Excerpt
          <textarea name="excerpt" placeholder="Short editorial summary" />
        </label>
        <label>
          Content
          <textarea name="content" placeholder="Article body" required />
        </label>
        <label>
          SEO title
          <input name="seoTitle" placeholder="Optional search title" />
        </label>
        <label>
          SEO description
          <textarea name="seoDescription" placeholder="Optional search description" />
        </label>
        <button className="primary-button" type="submit">
          Save Article
        </button>
      </form>
    </section>
  );
}
