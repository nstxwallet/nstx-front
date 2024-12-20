import axios from "axios";

export const instance = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});
instance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (
			(error.response && error.response.status === 401) ||
			error.response.status === 403
		) {
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
