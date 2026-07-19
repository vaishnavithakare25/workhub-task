import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api/users.api";
import { userKeys } from "../queryKeys";
import { mapUserDtoToModel } from "../mapper/user.mapper";
import { getLocalUserById } from "../services/localUserServices";
export function useUserDetail(id) {
    return useQuery({
        queryKey: userKeys.detail(id),
        queryFn: async () => {
            // Check localStorage first
            const localUser = getLocalUserById(id);
            if (localUser) {
                return localUser;
            }
            const response = await getUserById(id);
            return mapUserDtoToModel(response);
        },
        enabled: !!id,
    });
}
