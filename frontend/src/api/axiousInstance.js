import axios from "axios";

const baseURL = "http://localhost:8000/api/v1";

export const axiousInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
});

axiousInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
)
