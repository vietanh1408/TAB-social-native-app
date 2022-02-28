import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fontSizes} from '../constants/index';

const UICustomButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}> {props.content} </Text>
    </TouchableOpacity>
  );
};

export default UICustomButton;

const styles = StyleSheet.create({
  button: {
    height: 60,
    marginHorizontal: 24,
    marginVertical: 16,
    backgroundColor: colors.black,
    height: 60,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.h4,
    fontWeight: 'bold',
  },
});
