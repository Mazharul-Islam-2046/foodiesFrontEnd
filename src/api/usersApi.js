import { api } from "./axiosInstance";

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (credentials) => ({
                url: "/api/v1/users/auth/login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: build.mutation({
            query: (credentials) => ({
                url: "/api/v1/users/auth/register",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
    overrideExisting: false,
});