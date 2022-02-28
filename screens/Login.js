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
import {colors, fontSizes, images} from '../constants/index';
import {validate} from '../extensions/index';

const schema = Yup.object().shape({
  username: validate.username(),
  password: validate.password(),
});

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = values => {
    console.log('values...', values);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <ScrollView
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <View style={styles.header}>
          <View style={styles.headerWrapper}>
            <Image source={images.avatar} style={styles.avatar} />
            <Text style={styles.welcome}>
              Chào mừng bạn đến với TAB - social
            </Text>
          </View>
        </View>
        <View style={styles.loginWrapper}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSizes.h3,
            }}>
            ĐĂNG NHẬP
          </Text>
        </View>
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
            <View>
              {console.log('errors...', errors)}
              <KeyboardAwareScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <UICustomInput
                    placeholder={'Tên đăng nhập hoặc email'}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    errors={errors}
                    touched={touched}
                    fieldName="username"
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <UICustomInput
                    placeholder={'Mật khẩu'}
                    isPassword={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    errors={errors}
                    touched={touched}
                    fieldName="password"
                  />
                </TouchableWithoutFeedback>
              </KeyboardAwareScrollView>
              <View style={styles.rememberWrapper}>
                <Text style={{color: colors.black}}>Ghi nhớ tài khoản</Text>
                <Text style={{color: colors.secondPrimary}}>Quên mật khẩu</Text>
              </View>
              <UICustomButton content={'ĐĂNG NHẬP'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const flexColStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
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
    height: 280,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
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
  loginWrapper: {
    ...flexColStyle,
    paddingTop: 24,
    paddingBottom: 24,
  },
  rememberWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 16,
  },
});
