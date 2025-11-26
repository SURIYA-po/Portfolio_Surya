// src/services/userService.js
import api from "../../api/api";

// --------------------------
// CREATE USER (Registration)
// --------------------------
export const createUser = async (formData) => {
  // formData may contain file (avatar), so we cannot send JSON
  return await api.post("/api/users/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// --------------------------
// GET ALL USERS
// --------------------------
export const getUsers = async () => {
  return await api.get("/api/users/");
};

// --------------------------
// GET SINGLE USER
// --------------------------
export const getUserById = async (id) => {
  return await api.get(`/api/users/${id}/`);
};

// --------------------------
// UPDATE USER
// Can update name, email, role, avatar, password
// --------------------------
export const updateUser = async (id, formData) => {
  return await api.put(`/api/users/${id}/`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// --------------------------
// DELETE USER
// --------------------------
export const deleteUser = async (id) => {
  return await api.delete(`/api/users/${id}/`);
};

// --------------------------
// CHANGE PASSWORD (Optional)
// --------------------------
export const changePassword = async (id, passwords) => {
  return await api.put(`/api/users/${id}/change-password/`, passwords);
};
