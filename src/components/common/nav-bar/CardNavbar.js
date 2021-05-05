import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MAIN_PADDING} from '../../../constant/styles';

const CardNavbar = ({backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}></TouchableOpacity>
  );
};

export default CardNavbar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 18,
    height: 18,
    marginRight: MAIN_PADDING,
  },
});
