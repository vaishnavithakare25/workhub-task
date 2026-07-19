import { useAuthStore } from "../features/auth/store/auth.store";
export const requestInterceptor = (config) => {
    const token = useAuthStore.getState().user?.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};
export const requestErrorInterceptor = (error) => {
    return Promise.reject(error);
};
export const responseInterceptor = (response) => {
    return response;
};
export const responseErrorInterceptor = (error) => {
    if (error.response?.status === 401) {
        useAuthStore.getState().logout();
        window.location.href = "/";
    }
    return Promise.reject(error);
};
