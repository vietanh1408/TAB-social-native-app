import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (data) => {
        try {
            const { data: response } = await authApi.login(data)
            return response
        } catch (error) {
            console.log('error......', error)
        }
    }
)