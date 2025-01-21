import httpInstance from '@/utils/http.js';
import axios from 'axios';

export const getUserList = () => {
    return httpInstance.get('/api/users');
};

export const getUserById = (userId) => {
    return httpInstance.get(`/api/users/${userId}`);
};

export const createUser = (userData) => {
    return httpInstance.post('/api/users', userData);
};

export const updateUser = (userId, userData) => {
    return httpInstance.put(`/api/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
    return httpInstance.delete(`/api/users/${userId}`);
};