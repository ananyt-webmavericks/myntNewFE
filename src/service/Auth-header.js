import axios from 'axios';

export const authAxios = axios.create();
authAxios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

authAxios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            if (error.response.status === 500) {
                localStorage.clear();
                window.location.href = '/login';
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error during request setup:', error.message);
        }
        return Promise.reject(error);
    }
);
