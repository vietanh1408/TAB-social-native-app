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
    value,
    ...rest
  } = props;

  return (
    <SafeAreaView>
      <TextInput
        style={
          !!(errors[fieldName] && touched[fieldName])
            ? styles.inputError
            : styles.input
        }
        placeholder={placeholder}
        secureTextEntry={isPassword}
        value={value[fieldName]}
        {...rest}
      />
      {!!(errors[fieldName] && touched[fieldName]) ? (
        <Text style={styles.error}>{errors[fieldName]}</Text>
      ) : (
        <Text style={styles.error}></Text>
      )}
    </SafeAreaView>
  );
};

const styleInput = {
  height: 60,
  padding: 20,
  borderRadius: 30,
  fontSize: 16,
  position: 'relative',
  borderWidth: 1,
  borderColor: 'black',
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
    paddingHorizontal: 16,
    paddingVertical: 2,
    width: '100%',
  },
});

export default UICustomInput;
