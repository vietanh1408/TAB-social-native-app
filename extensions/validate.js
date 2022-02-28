import * as Yup from 'yup';
import { validate } from '../constants';

const username = () => {
    return Yup.string().required(validate.required);
};

const password = () => {
    return Yup.string().required(validate.required).min(6, validate.password);
};

export default {
    username,
    password,
};