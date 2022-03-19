import { Formik } from 'formik';
import React, { useEffect } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { UICustomInput, Loading } from '../components/index';
import UICustomButton from '../components/UICustomButton';
import { colors, fontSizes, images } from '../constants/index';
import { validate } from '../extensions/index';
import { useAuth } from '../hooks/useAuth';
import { fetchLogin } from '../reducers/auth/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = Yup.object().shape({
  username: validate.username(),
  password: validate.password(),
});

const Login = props => {
  const { navigation, route } = props;

  const { navigate, goBack } = navigation;

  const initialValues = {
    username: '',
    password: '',
  };

  const dispatch = useDispatch()

  const { loading } = useAuth()

  const onSubmit = async (values) => {
    await dispatch(fetchLogin({ emailOrPhone: values.username, password: values.password }))


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
      <KeyboardAwareScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            flex: 100,
          }}>
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <Image source={images.avatar} style={styles.avatar} />
              <Text style={styles.welcome}>
                Chào mừng bạn đến với TAB - social
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.formTitle}>ĐĂNG NHẬP</Text>
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
                      placeholder={'Tên đăng nhập hoặc email'}
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
                  <View style={styles.rememberWrapper}>
                    <Text style={{ color: colors.black }}>Ghi nhớ tài khoản</Text>
                    <Text style={{ color: colors.secondPrimary }}>
                      Quên mật khẩu
                    </Text>
                  </View>
                  <UICustomButton
                    content={'ĐĂNG NHẬP'}
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
            <View style={styles.socialLogin}>
              <Text style={(styles.socialItem, { color: colors.black })}>
                Hoặc đăng nhập với
              </Text>
              <Image style={styles.socialItem} source={images.googleLogo} />
              <Image style={styles.socialItem} source={images.facebookLogo} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                color: colors.black,
                paddingVertical: 16,
              }}>
              Nếu bạn chưa có tài khoản? Hãy{' '}
              <Text
                style={{ color: colors.secondPrimary, fontWeight: 'bold' }}
                onPress={() => navigate('Register')}>
                Đăng ký
              </Text>{' '}
              ngay
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

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
    flex: 100,
    justifyContent: 'flex-end',
  },

  rememberWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    marginBottom: 24,
  },

  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },

  socialItem: {
    marginHorizontal: 8,
  },
});
