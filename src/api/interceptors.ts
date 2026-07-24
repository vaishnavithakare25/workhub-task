import { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { useAuthStore } from "../features/auth/store/auth.store";

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
) => {
  const token = useAuthStore.getState().user?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

export const requestErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};



export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};



export const responseErrorInterceptor = (error: AxiosError) => {
  if (!error.response) {
    console.error("Network Error");
    return Promise.reject(error);
  }

  switch (error.response.status) {
    case 400:
      console.error("Bad Request");
      break;

    case 401:
      useAuthStore.getState().logout();
      window.location.href = "/";
      break;

    case 403:
      console.error("Forbidden");
      break;

    case 404:
      console.error("Not Found");
      break;

    case 500:
      console.error("Internal Server Error");
      break;
  }

  return Promise.reject(error);
};
