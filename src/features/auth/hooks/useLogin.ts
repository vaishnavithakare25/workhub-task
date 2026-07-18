import { useMutation } from "@tanstack/react-query";
import { login, getUserById } from "../services/auth.service";

export function useLogin() {
  return useMutation({
    mutationFn: async (payload) => {
     
      const loginResponse = await login(payload);

      
      const user = await getUserById(loginResponse.id);

    
      return {
        ...loginResponse,
        role: user.role,
      };
    },
  });
}