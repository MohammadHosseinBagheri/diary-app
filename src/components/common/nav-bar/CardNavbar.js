import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MAIN_PADDING} from '../../../constant/styles';
import {DiarySchema} from '../../../schema/Diary';

const CardNavbar = ({
  backgroundColor,
  diary = null,
  realm = null,
  setDiary = null,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress(realm, diary, setDiary)}
      style={[styles.container, {backgroundColor}]}
    />
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
