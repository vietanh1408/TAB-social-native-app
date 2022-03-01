import {Formik} from 'formik';
import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {UICustomInput} from '../components/index';
import UICustomButton from '../components/UICustomButton';
import {
  colors,
  fontSizes,
  images,
  validate as validateError,
} from '../constants/index';
import {validate} from '../extensions/index';

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

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = values => {
    console.log('values...', values);
  };

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
        <KeyboardAwareScrollView>
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <Image source={images.avatar} style={styles.avatar} />
              <Text style={styles.welcome}>
                Chào mừng bạn đến với TAB - social
              </Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.formTitle}>ĐĂNG KÝ</Text>
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
                  {console.log('errors...', errors)}
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
            <Text style={{color: colors.black, textAlign: 'center'}}>
              Nếu bạn đã có tài khoản? Hãy{' '}
              <Text style={{color: colors.secondPrimary, fontWeight: 'bold'}}>
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
