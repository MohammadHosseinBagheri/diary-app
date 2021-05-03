import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';

import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  SPLASH_SCREEN,
} from '../constant/routes';
import SplashScreen from './splash/SplashScreen';
import HomeScreen from './home/HomeScreen';
import LoginScreen from './auth/login/LoginScreen';
import RegisterScreen from './auth/register/RegisterScreen';
import CustomDrawerContent from '../components/common/drawer/DrawerContent';

// const Stack = createStackNavigator();
// const MainStack = () => (
//   <Stack.Navigator headerMode="none">
//     <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
//     <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
//     <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
//     <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
//   </Stack.Navigator>
// );
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
      }}
      drawerType="slide"
      drawerStyle={{
        width: '100%',
      }}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={SPLASH_SCREEN} component={SplashScreen} />
      <Drawer.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Drawer.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
    </Drawer.Navigator>
  );
};
const Config = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default Config;
