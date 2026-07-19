import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useAuthStore = create()(persist((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,
    login: (data) => set({
        user: data,
        token: data.accessToken,
        isAuthenticated: true,
    }),
    logout: () => set({
        user: null,
        token: null,
        isAuthenticated: false,
    }),
}), {
    name: "workhub-auth",
}));
