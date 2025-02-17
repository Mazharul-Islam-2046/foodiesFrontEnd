import { api } from "./axiosInstance";

// Menu API functions
export const menuApi = {
  getAllMenu: (page, limit) => {
    return api.get(`/menuItems/getAllMenuItems?page=${page}&limit=${limit}`, {
      
    });
  },
  
  getHealthyItems: (page, limit) => {
    return api.get(`/menuItems/filterMenuItems?page=${page}&limit=${limit}`, {
      params: {
        page,
        limit,
        isHealthy: true
      }
    });
  }
};