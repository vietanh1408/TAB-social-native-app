import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants';

const UICustomInput = props => {
  const {
    placeholder,
    isPassword = false,
    errors = {},
    touched = {},
    fieldName,
    ...rest
  } = props;

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={
            !!(errors[fieldName] && touched[fieldName])
              ? styles.inputError
              : styles.input
          }
          placeholder={placeholder}
          secureTextEntry={isPassword}
          {...rest}
        />
        {!!(errors[fieldName] && touched[fieldName]) && (
          <Text style={styles.error}>{errors[fieldName]}</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

const styleInput = {
  height: 60,
  marginHorizontal: 24,
  marginVertical: 20,
  borderWidth: 1,
  borderColor: colors.black,
  padding: 20,
  borderRadius: 30,
  fontSize: 16,
  position: 'relative',
};

const styles = StyleSheet.create({
  input: {
    ...styleInput,
  },
  inputError: {
    ...styleInput,
    borderColor: colors.red,
  },
  error: {
    color: colors.red,
    marginHorizontal: 32,
    position: 'absolute',
    bottom: 0,
  },
});

export default UICustomInput;
