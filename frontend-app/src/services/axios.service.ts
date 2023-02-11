import axios from 'axios';

import type User from '@/interfaces/users/user.interface';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:80';

const login = (user: User) => {
    return axios.get('/sanctum/csrf-cookie').then((response) => {
        console.log(
            "[BackendApi] [GET] '/sanctum/csrf-cookie' response: ",
            response,
            ' user:',
            user
        );
        return axios.post('/login', user).then((response) => {
            console.log("[BackendApi] [GET] '/login' response: ", response);
            return response;
        });
    });
};

const getUser = () => {
    return axios.get('/api/user').then((response) => {
        console.log("[BackendApi] [GET] 'api/user' response: ", response);
        return response;
    });
};

export const BackendApi = {
    login,
    getUser,
};
