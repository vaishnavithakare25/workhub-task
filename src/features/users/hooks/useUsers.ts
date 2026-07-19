import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/users.api";
import { userKeys } from "../queryKeys";
import { UserModel } from "../model/user.model";
import { mapUserDtoToModel, mapUsersDtoToModel } from "../mapper/user.mapper";
import { UserQueryParams } from "../types/user-query.type";
import {PaginatedUsersModel} from "../model/paginated-users.model"  
import { getLocalUsers } from "../services/localUserServices";

export function useUsers(params: UserQueryParams) {
  return useQuery<PaginatedUsersModel>({
    queryKey: userKeys.list(params),
    queryFn: async () => {
      const response = await getUsers(params);
      
      const apiUsers = mapUsersDtoToModel(response.users);
      const localUsers = getLocalUsers();

      
      // return mapUsersDtoToModel(response.users);
        return {
        users: [...localUsers, ...apiUsers],
        total: response.total + localUsers.length,
        skip: response.skip,
        limit: response.limit,
      };
    },
  });
}