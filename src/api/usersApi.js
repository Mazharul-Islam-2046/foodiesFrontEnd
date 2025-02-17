import { api } from "./axiosInstance";

export const usersApi = {
  login: (credentials) => {
    return api.post("/api/v1/users/auth/login", credentials);
  },
  
  register: (credentials) => {
    return api.post("/api/v1/users/auth/register", credentials);
  }
};