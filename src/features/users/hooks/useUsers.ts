import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/users.api";
import { userKeys } from "../queryKeys";
import { UserModel } from "../model/user.model";
import { mapUserDtoToModel, mapUsersDtoToModel } from "../mapper/user.mapper";
import { UserQueryParams } from "../types/user-query.type";


export function useUsers(params: UserQueryParams) {
  return useQuery<UserModel[]>({
    queryKey: userKeys.list(params),
    queryFn: async () => {
      const response = await getUsers(params);

      
      return mapUsersDtoToModel(response.users);
    },
  });
}