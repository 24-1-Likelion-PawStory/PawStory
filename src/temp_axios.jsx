import axios from 'axios';

const axiostemps= axios.create({
    baseURL: 'https://pawstory.p-e.kr/', // Base URL for the API
});

axiostemps.interceptors.request.use(
    config => {
        const token = localStorage.getItem('temp_accesstoken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiostemps;