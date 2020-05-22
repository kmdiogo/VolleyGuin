import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

export const getAllUsers = () => {
    return instance.get('/user')
}

export const login = (username, password) => {
    return instance.post('/auth', {username, password});
}