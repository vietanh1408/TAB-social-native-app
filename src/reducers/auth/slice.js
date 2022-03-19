import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "./api";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    token: '',
    loading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.loading = false
        })

        builder.addCase(fetchLogin.fulfilled, async (state, action) => {
            state.loading = true
            state.token = action.payload.accessToken
            try {

                await AsyncStorage.setItem('token', action.payload.accessToken)

            } catch (error) {
                throw error
            }
        })
    }
})

const { reducer } = authSlice
export default reducer