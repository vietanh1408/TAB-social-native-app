import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView, StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Loading, UICustomButton, UICustomInput } from '../components/index';
import {
  colors,
  fontSizes,
  images,
  validate as validateError
} from '../constants/index';
import { validate } from '../extensions/index';
import { useAuth } from '../hooks/useAuth';
import { fetchRegister } from '../reducers/auth/api';

const schema = Yup.object().shape({
  username: validate.username(),
  email: validate.email(),
  phoneNumber: validate.phoneNumber(),
  password: validate.password(6),
  confirmPassword: validate.confirmPassword(
    'password',
    validateError.confirmPassword,
  ),
});

const Register = props => {
  const { navigation, route } = props;

  const { navigate, goBack } = navigation;

  const initialValues = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const dispatch = useDispatch()

  const { loading } = useAuth()

  const onSubmit = async (values) => {
    await dispatch(fetchRegister({
      username: values.username,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password
    }))
    const token = await AsyncStorage.getItem('token')

    if (token) {
      navigate('Home')
    }
  };

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'column',
          flex: 100,
        }}>
        <KeyboardAwareScrollView style={{ marginBottom: 16 }}>
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <Image source={images.avatar} style={styles.avatar} />
              <Text style={styles.welcome}>
                Chào mừng bạn đến với TAB - social
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.formTitle}> ĐĂNG KÝ </Text>
            <Formik
              initialValues={initialValues}
              onSubmit={values => onSubmit(values)}
              validationSchema={schema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.form}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <UICustomInput
                      placeholder={'Tên đăng nhập'}
                      fieldName="username"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values}
                      errors={errors}
                      touched={touched}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <UICustomInput
                      placeholder={'Email'}
                      fieldName="email"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values}
                      errors={errors}
                      touched={touched}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <UICustomInput
                      placeholder={'Số điện thoại'}
                      fieldName="phoneNumber"
                      onChangeText={handleChange('phoneNumber')}
                      onBlur={handleBlur('phoneNumber')}
                      value={values}
                      errors={errors}
                      touched={touched}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <UICustomInput
                      placeholder={'Mật khẩu'}
                      fieldName="password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values}
                      errors={errors}
                      touched={touched}
                      isPassword={true}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <UICustomInput
                      placeholder={'Nhập lại mật khẩu'}
                      fieldName="confirmPassword"
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values}
                      errors={errors}
                      touched={touched}
                      isPassword={true}
                    />
                  </TouchableWithoutFeedback>
                  <UICustomButton content={'ĐĂNG KÝ'} onPress={handleSubmit} />
                </View>
              )}
            </Formik>
            <Text style={{ color: colors.black, textAlign: 'center' }}>
              Nếu bạn đã có tài khoản ? Hãy{' '}
              <Text
                style={{ color: colors.secondPrimary, fontWeight: 'bold' }}
                onPress={() => navigate('Login')}>
                Đăng nhập
              </Text>{' '}
              ngay
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const flexColStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const borderTest = {
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 100,
    backgroundColor: colors.white,
  },
  header: {
    ...flexColStyle,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    overflow: 'hidden',
  },
  headerWrapper: {
    ...flexColStyle,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  welcome: {
    color: colors.white,
    fontSize: fontSizes.h5,
    textAlign: 'center',
    marginTop: 32,
  },

  body: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    flex: 100,
  },

  formTitle: {
    textAlign: 'center',
    fontSize: fontSizes.h3,
    color: colors.black,
    fontWeight: 'bold',
  },

  form: {
    marginVertical: 16,
    marginTop: 8,
    flex: 100,
    justifyContent: 'flex-end',
  },
});
