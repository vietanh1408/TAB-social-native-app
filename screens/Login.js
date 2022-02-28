import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {UICustomInput} from '../components/index';
import UICustomButton from '../components/UICustomButton';
import {colors, fontSizes, images} from '../constants/index';

const Login = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsShowKeyboard(true);
    });

    Keyboard.addListener('keyboardDidHide', () => {
      setIsShowKeyboard(false);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <ScrollView
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        {!isShowKeyboard && (
          <View style={styles.header}>
            <View style={styles.headerWrapper}>
              <Image source={images.avatar} style={styles.avatar} />
              <Text style={styles.welcome}>
                Chào mừng bạn đến với TAB - social
              </Text>
            </View>
          </View>
        )}
        <View style={styles.loginWrapper}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSizes.h3,
            }}>
            ĐĂNG NHẬP
          </Text>
        </View>
        <View>
          <UICustomInput
            placeholder={'Tên đăng nhập hoặc email'}
            // autoFocus={true}
          />
          <UICustomInput placeholder={'Mật khẩu'} isPassword={true} />
        </View>
        <View style={styles.rememberWrapper}>
          <View>
            <Text style={{color: colors.black}}>Ghi nhớ tài khoản</Text>
          </View>
          <View>
            <Text style={{color: colors.secondPrimary}}>Quên mật khẩu</Text>
          </View>
        </View>
        <UICustomButton
          content={'ĐĂNG NHẬP'}
          onPress={() => console.log('Login....')}
        />
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
  },
});
