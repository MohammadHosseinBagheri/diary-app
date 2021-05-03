import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HOME_FLATLIST_BACKGROUND} from '../../constant/styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: HOME_FLATLIST_BACKGROUND,
          flex: 1,
          height: '100%',
          borderTopRightRadius: 100,
          justifyContent: 'center',
          zIndex:10,
          alignItems:'center'
        }}>
       <Image source={require("../../assets/icons/todo.png")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#2980b9',
          elevation: 8,
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
        }}>
            <Image source={require("../../assets/icons/edit.png")} />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: HOME_FLATLIST_BACKGROUND,
          height: 30,
          width: '100%',
          zIndex:0
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: HOME_FLATLIST_BACKGROUND,
          flex: 1,
          height: '100%',
          borderTopLeftRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:10,
          
        }}>
            <Image source={require("../../assets/icons/message.png")} />
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
  },
});
