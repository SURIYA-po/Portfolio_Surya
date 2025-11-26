import React, { useState } from "react";
import "../css/BlogPostForm.css";

export default function BlogPostForm() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    tags: [],
    tagInput: "",
    coverImage: "",
    isPublished: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Auto-generate slug from title
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title.toLowerCase().trim().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    setForm({ ...form, title, slug });
  };

  // Add tags
  const addTag = (e) => {
    e.preventDefault();
    if (form.tagInput.trim() !== "") {
      setForm({
        ...form,
        tags: [...form.tags, form.tagInput.trim()],
        tagInput: "",
      });
    }
  };

  // Remove tags
  const removeTag = (tag) => {
    setForm({
      ...form,
      tags: form.tags.filter((t) => t !== tag),
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("title", form.title);
  data.append("slug", form.slug);
  data.append("content", form.content);
  data.append("excerpt", form.excerpt);
  data.append("isPublished", form.isPublished);
  data.append("coverImage", form.coverImage);

  form.tags.forEach((tag) => data.append("tags[]", tag));

  console.log("Blog FormData:", ...data);
};

  return (
    <div className="blog-overlay">
      <form className="blog-card" onSubmit={handleSubmit}>
        <h2>Create Blog Post</h2>

        <div className="input-group">
          <label>Blog Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Slug (auto-generated)</label>
          <input type="text" name="slug" value={form.slug} readOnly />
        </div>

        <div className="input-group">
          <label>Excerpt</label>
          <input
            type="text"
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Short summary of your blog"
          />
        </div>

        <div className="input-group">
          <label>Content</label>
          <textarea
            name="content"
            rows="5"
            value={form.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* TAG INPUT */}
        <div className="input-group">
          <label>Tags</label>
          <div className="tag-row">
            <input
              type="text"
              name="tagInput"
              value={form.tagInput}
              onChange={handleChange}
              placeholder="Add a tag and press +"
            />
            <button className="tag-add-btn" onClick={addTag}>
              +
            </button>
          </div>

          <div className="tag-list">
            {form.tags.map((tag, index) => (
              <span
                key={index}
                className="tag"
                onClick={() => removeTag(tag)}
              >
                {tag} ×
              </span>
            ))}
          </div>
        </div>

        <div className="input-group">
  <label>Cover Image</label>
  <input
    type="file"
    name="coverImage"
    accept="image/*"
    onChange={(e) => setForm({ ...form, coverImage: e.target.files[0] })}
  />
</div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="isPublished"
            checked={form.isPublished}
            onChange={(e) =>
              setForm({ ...form, isPublished: e.target.checked })
            }
          />
          <label>Publish Now</label>
        </div>

        <button className="blog-btn" type="submit">Publish Blog</button>
      </form>
    </div>
  );
}
