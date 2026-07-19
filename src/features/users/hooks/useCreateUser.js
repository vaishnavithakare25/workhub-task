import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLocalUser } from "../services/localUserServices";
// import { addLocalUser } from "../services/localUserService";
import { userKeys } from "../queryKeys";
export function useCreateUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (user) => {
            return addLocalUser(user);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: userKeys.lists(),
            });
        },
    });
}
