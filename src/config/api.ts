import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { errorInterceptor, successInterceptor } from "./interceptors";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: "/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.response.use(successInterceptor, errorInterceptor);

export { api };
