import api from "./axiosInstance";

export const menuApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllMenu: build.query({
            query: (page, limit) => ({
                url: `/api/v1/menuItems/getAllMenuItems?page=${page}&limit=${limit}`,
                method: "GET",
            }),
        }),
        getHealthyItems: build.query({
            query: (page, limit) => ({
                url: `/api/v1/menuItems/filterMenuItems&page=${page}&limit=${limit}`,
                method: "GET",
                params: {
                    isHealthy: true
                }
            }),
        }),
    }),
})