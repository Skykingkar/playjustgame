// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, verifyOtp } from '../api/authApi';

export const login = createAsyncThunk('auth/login', async (phone) => {
    const response = await loginUser(phone);
    return response.data;
});

export const verifyOtpCode = createAsyncThunk('auth/verifyOtp', async ({ otp, phone }) => {
    const response = await verifyOtp(otp, phone);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, status: null },
    reducers: {
        logout: (state) => { state.user = null; },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'otpSent';
            })
            .addCase(verifyOtpCode.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = 'authenticated';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
