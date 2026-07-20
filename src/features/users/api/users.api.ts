import { apiClient } from "../../../api";
import { UserQueryParams } from "../types/user-query.type";
export const getUsers = async (
  params: UserQueryParams
) => {
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

export const getUserById = async (id: number) => {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
};