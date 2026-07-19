import { apiClient } from "../../../api";
export const getUsers = async (params) => {
    const response = await apiClient.get("/users", {
        params: {
            limit: params.limit,
            skip: params.skip,
            sortBy: params.sortBy,
            order: params.order,
        },
    });
    return response.data;
};
export const getUserById = async (id) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
};
