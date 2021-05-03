import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  PixelRatio
} from 'react-native';
import { HOME_FLATLIST_BACKGROUND, MAIN_PADDING } from '../../constant/styles';

const EmptyFlatList = () => {
  return (
    <TouchableOpacity style={styles.emptyList}>
      <View style={styles.contentContainer}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/icons/Calendar.png')}>
          <Text style={styles.text}>{new Date().getDay()}</Text>
        </ImageBackground>
        <Text style={styles.text}>
          {new Date().toDateString().split(' ')[1]}
        </Text>
      </View>
      <Text style={{color: 'white'}}>
        Hello {'\n'} Now you can write your first diary
      </Text>
    </TouchableOpacity>
  );
};

export default EmptyFlatList;

const styles = StyleSheet.create({
  emptyList: {
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    height: PixelRatio.get() * 65,
    borderRadius: 14,
    padding: MAIN_PADDING,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageBackground: {
    width: 80,
    height: 80,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    alignItems: 'center',
  },
  text: {color: 'white', fontSize: 18},
});
