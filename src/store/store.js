import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['auth']
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(rootReducer)
)

export const createStore = (options) => {
    return configureStore({
        reducer: persistedReducer,
        ...options,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: [thunk]
    })
}

export const store = createStore()

export const persistor = persistStore(store)

