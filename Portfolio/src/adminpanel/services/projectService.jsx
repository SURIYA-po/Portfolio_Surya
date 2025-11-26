// src/services/projectService.js
import api from "../api/api";

// ---------------------------------------
// CREATE PROJECT (with image upload)
// ---------------------------------------
export const createProject = async (formData) => {
  return await api.post("/api/projects/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ---------------------------------------
// GET ALL PROJECTS
// ---------------------------------------
export const getProjects = async () => {
  return await api.get("/api/projects/");
};

// ---------------------------------------
// GET PROJECT BY ID
// ---------------------------------------
export const getProjectById = async (id) => {
  return await api.get(`/api/projects/${id}/`);
};

// ---------------------------------------
// UPDATE PROJECT
// ---------------------------------------
export const updateProject = async (id, formData) => {
  return await api.put(`/api/projects/${id}/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ---------------------------------------
// DELETE PROJECT
// ---------------------------------------
export const deleteProject = async (id) => {
  return await api.delete(`/api/projects/${id}/`);
};

// ---------------------------------------
// TOGGLE PROJECT VISIBILITY (Public/Private)
// ---------------------------------------
export const toggleProjectVisibility = async (id, isPublic) => {
  return await api.patch(`/api/projects/${id}/visibility/`, { isPublic });
};
