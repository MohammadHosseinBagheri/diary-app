import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HOME_FLATLIST_BACKGROUND} from '../../constant/styles';
import {handleNavigateToAdd} from '../../utils/footer/footer.utils';

const Footer = props => {
  const navigation = useNavigation();
  const {realm, setDiary} = props;
  // console.log('realmmmmmmmm', realm);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoButton}>
        <Image source={require('../../assets/icons/todo.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNavigateToAdd(navigation, {realm, setDiary})}
        style={styles.addDiary}>
        <Image source={require('../../assets/icons/edit.png')} />
      </TouchableOpacity>
      <View style={styles.tempView} />
      <TouchableOpacity style={styles.message}>
        <Image source={require('../../assets/icons/message.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 50,
    // backgroundColor: HOME_FLATLIST_BACKGROUND,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 20,
  },
  todoButton: {
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    flex: 1,
    height: '100%',
    borderTopRightRadius: 100,
    justifyContent: 'center',
    zIndex: 10,
    alignItems: 'center',
  },
  addDiary: {
    backgroundColor: '#2980b9',
    elevation: 10,
    flex: 1,
    height: '100%',
    position: 'absolute',
    left: '50%',
    bottom: 30,
    zIndex: 40,
    width: 50,
    height: 50,
    transform: [{translateX: -25}],
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    height: 30,
    width: '100%',
    zIndex: 0,
  },
  message: {
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    flex: 1,
    height: '100%',
    borderTopLeftRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
