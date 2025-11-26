// src/services/userService.js

import api from "../../api/api";

const userService = {
  // CREATE USER (with image)
  create: async (formData) => {
    return await api.post("/api/auth/register", formData,{
      headers: {
      "Content-Type": "multipart/form-data",
    },
    });
  },

  // GET ALL USERS
  getAll: async () => {
    return await api.get("/api/users/");
  },

  // GET USER BY ID
  getById: async (id) => {
    return await api.get(`/api/users/${id}/`);
  },

  // UPDATE USER (supports file upload)
  update: async (id, formData) => {
    return await api.put(`/api/users/${id}/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  // DELETE USER
  delete: async (id) => {
    return await api.delete(`/api/users/${id}/`);
  },

  // CHANGE PASSWORD
  changePassword: async (id, passwords) => {
    return await api.put(`/api/users/${id}/change-password/`, passwords);
  },
};

export default userService;
