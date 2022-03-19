import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";
import { errorHandler } from '../../extensions';

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (data) => {
        try {
            const { data: response } = await authApi.login(data)
            return response
        } catch (error) {
            errorHandler.alertError(error)
        }
    }
)

export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (data) => {
        try {
            const { data: response } = await authApi.register(data)
            return response
        } catch (error) {
            console.log('error.......'.error.response)
            errorHandler.alertError(error)
        }
    }
)