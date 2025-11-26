// src/services/blogService.js
import api from "../api/api";

// ------------------------------------
// CREATE BLOG POST (with image upload)
// ------------------------------------
export const createBlog = async (formData) => {
  return await api.post("/api/blogs/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ------------------------------------
// GET ALL BLOGS
// ------------------------------------
export const getBlogs = async () => {
  return await api.get("/api/blogs/");
};

// ------------------------------------
// GET BLOG BY ID
// ------------------------------------
export const getBlogById = async (id) => {
  return await api.get(`/api/blogs/${id}/`);
};

// ------------------------------------
// UPDATE BLOG (title, content, file, tags, etc.)
// ------------------------------------
export const updateBlog = async (id, formData) => {
  return await api.put(`/api/blogs/${id}/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ------------------------------------
// DELETE BLOG
// ------------------------------------
export const deleteBlog = async (id) => {
  return await api.delete(`/api/blogs/${id}/`);
};

// ------------------------------------
// PUBLISH / UNPUBLISH BLOG
// ------------------------------------
export const togglePublish = async (id, isPublished) => {
  return await api.patch(`/api/blogs/${id}/publish/`, { isPublished });
};

// ------------------------------------
// INCREMENT LIKES (Optional feature)
// ------------------------------------
export const likeBlog = async (id) => {
  return await api.post(`/api/blogs/${id}/like/`);
};

// ------------------------------------
// INCREMENT SHARES (Optional feature)
// ------------------------------------
export const shareBlog = async (id) => {
  return await api.post(`/api/blogs/${id}/share/`);
};
