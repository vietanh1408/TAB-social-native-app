export default {
    required: 'Mục này không được để trống',
    password: (length = 6) => {
        return `Mật khẩu phải có ít nhất ${length} ký tự`;
    },
    email: 'Email không đúng định dạng',
    phoneNumber: 'Số điện thoại không đúng định dạng',
    confirmPassword: 'Mật khẩu không khớp',
};