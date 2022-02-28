import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const UICustomInput = props => {
  const {placeholder, isPassword = false, ...rest} = props;

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          {...rest}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    marginHorizontal: 24,
    marginVertical: 16,
    borderWidth: 1,
    padding: 20,
    borderRadius: 30,
    fontSize: 16,
  },
});

export default UICustomInput;
