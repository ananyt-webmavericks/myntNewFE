import axios from 'axios';

export const authAxios = axios.create();
authAxios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = "Bearer " + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);