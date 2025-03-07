// src/api/authApi.js
import axios from 'axios';

export const loginUser = async (phoneNumber) => {
    return axios.post('/api/login', { phone: phoneNumber });
};

export const verifyOtp = async (otp, phoneNumber) => {
    return axios.post('/api/verify-otp', { otp, phone: phoneNumber });
};
