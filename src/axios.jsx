import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://pawstory.p-e.kr/', // Base URL for the API
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;