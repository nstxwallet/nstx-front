import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3001",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if ((error.response && error.response.status === 401) || error.response.status === 403) {
      sessionStorage.removeItem("token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error),
);

export const handleRequest = async <T>(request: Promise<{ data: T }>): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (_err) {
    throw new Error("Failed to fetch data");
  }
};

export const handleError = (
  error: { response: { data: { error: string; message: string } } } | null,
  defaultErrorMessage: string,
) => {
  if (error?.response?.data) {
    throw new Error(error.response.data.message);
  }
  throw new Error(defaultErrorMessage);
};
