import * as Yup from 'yup';
import { validate } from '../constants';
import { regex } from '../constants/index';

const username = () => {
    return Yup.string().required(validate.required);
};

const password = (length = 6) => {
    return Yup.string()
        .required(validate.required)
        .min(length, validate.password(length));
};

const email = () => {
    return Yup.string().required(validate.email).email(validate.email);
};

const phoneNumber = () => {
    return Yup.string()
        .required(validate.required)
        .min(10, validate.phoneNumber)
        .matches(regex.phoneRegExp, validate.phoneNumber);
};

const confirmPassword = (fieldName, error) => {
    return Yup.string()
        .required(validate.required)
        .oneOf([Yup.ref(fieldName), null], error);
};

export default {
    username,
    password,
    email,
    phoneNumber,
    confirmPassword,
};