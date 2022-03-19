import { Alert } from "react-native"

const alertError = (error) => {
    Alert.alert('Lỗi', error.response.data.message ?? 'Lỗi máy chủ')
}

export default {
    alertError
}