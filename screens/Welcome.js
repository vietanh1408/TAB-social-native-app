import React from 'react';
import {Image, Text, View} from 'react-native';
import {UICustomInput} from '../components/index';
import {colors, fontSizes, images} from '../constants/index';

const Welcome = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      {/* <ImageBackground
                    source={images.background}
                    resizeMode="cover"
                    style={{
                      flex: 1,
                    }}> */}
      <View
        style={{
          flexDirection: 'row',
          height: 280,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          overflow: 'hidden',
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Image
            source={images.avatar}
            style={{
              width: 75,
              height: 75,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: fontSizes.h5,
              textAlign: 'center',
              marginTop: 32,
            }}>
            Chào mừng bạn đến với TAB - social
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 24,
          paddingBottom: 24,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'red',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h3,
          }}>
          ĐĂNG NHẬP
        </Text>
      </View>
      <View>
        <UICustomInput placeholder={'Tên đăng nhập hoặc email'} />
        <UICustomInput placeholder={'Mật khẩu'} isPassword={true} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 24,
        }}>
        <View>
          <Text style={{color: colors.black}}>Ghi nhớ tài khoản</Text>
        </View>
        <View>
          <Text style={{color: colors.secondPrimary}}>Quên mật khẩu</Text>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Welcome;
