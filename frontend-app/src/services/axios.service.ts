import axios from 'axios';

import type User from '@/interfaces/users/user.interface';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:80';


const login = (user: User) => {
    axios.get('/sanctum/csrf-cookie').then((response) => {
        console.log(response, user);
    });
};

export const BackendApi = {
    login,
};
