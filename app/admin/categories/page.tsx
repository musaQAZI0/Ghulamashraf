import { createCategory } from "@/lib/actions";

export default function AdminCategoriesPage() {
  return (
    <section className="admin-page">
      <span className="eyebrow">Categories</span>
      <h1>Organize article topics.</h1>
      <form className="admin-form" action={createCategory}>
        <label>
          Name
          <input name="name" placeholder="Category name" />
        </label>
        <button className="primary-button" type="submit">
          Create Category
        </button>
      </form>
    </section>
  );
}
