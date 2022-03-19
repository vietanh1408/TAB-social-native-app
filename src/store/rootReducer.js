import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";
import authReducer from '../reducers/auth/slice';

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['token']
}

export const rootReducer = {
    auth: persistReducer(authPersistConfig, authReducer),
}