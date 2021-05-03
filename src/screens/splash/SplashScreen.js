import {useNavigation} from '@react-navigation/native';
// import {Button} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {LOGIN_SCREEN} from '../../constant/routes';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text>Splash</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.navigate(LOGIN_SCREEN);
        }}></Button>
      <Button
        title="home"
        onPress={() => {
          navigation.navigate('HOME_SCREEN');
        }}></Button>
      <Button
        title="home"
        onPress={() => {
          navigation.toggleDrawer();
        }}></Button>
      {/* <TouchableOpacity style={{backgroundColor:'red',margin:5}}
        onPress={() => {
          navigation.navigate('LOGIN_SCREEN');
        }}>
        <Text>login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'red',margin:5}}
        onPress={() => {
          navigation.navigate('HOME_SCREEN');
        }}>
        <Text>home</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SplashScreen;
