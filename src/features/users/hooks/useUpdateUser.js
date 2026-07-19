import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLocalUser } from "../services/localUserServices";
// import { updateLocalUser } from "../services/localUserService";
import { userKeys } from "../queryKeys";
export function useUpdateUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (user) => {
            updateLocalUser(user);
            return user;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: userKeys.lists(),
            });
        },
    });
}
