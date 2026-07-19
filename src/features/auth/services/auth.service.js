import { apiClient } from "../../../api";
export const login = async (payload) => {
    const response = await apiClient.post("/auth/login", payload);
    return response.data;
};
// get complete user details
export const getUserById = async (id) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
};
