import axios from 'axios';

const axiosInstance1 = axios.create({
    baseURL: 'https://pawstory.p-e.kr/', // Base URL for the API
});

axiosInstance1.interceptors.request.use(
    config => {
        const token = localStorage.getItem('temp_tokken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance1;