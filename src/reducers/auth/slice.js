import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin, fetchRegister } from "./api";
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
            state.loading = false
            state.token = action.payload.accessToken
            await AsyncStorage.setItem('token', action.payload.accessToken)
        })

        builder.addCase(fetchRegister.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchRegister.rejected, (state, action) => {
            state.loading = false
        })

        builder.addCase(fetchRegister.fulfilled, async (state, action) => {
            state.loading = false
            state.token = action.payload.accessToken
            await AsyncStorage.setItem('token', action.payload.accessToken)
        })

        // builder.addMatcher(
        //     (action) => action.type.startsWith('auth') && action.type.endsWith('pending'), 
        //     (state) => state.loading = true
        // )

        // builder.addMatcher(
        //     (action) => action.type.startsWith('auth') && action.type.endsWith('rejected'), 
        //     (state) => state.loading = false
        // )
    }
})

const { reducer } = authSlice
export default reducer