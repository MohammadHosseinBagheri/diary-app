import { useNavigation } from '@react-navigation/native';
import {Body, Button, Left, Right} from 'native-base';
import React from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { BACKGROUND_COLOR, ICON_COLOR, MAIN_PADDING } from '../../constant/styles';
import { openDrawer } from '../../utils/header/header.utils';

const Header = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Left style={styles.left}>
        <TouchableOpacity onPress={openDrawer(navigation)} style={styles.button}>
          <Image style={styles.iconColor} source={require('../../assets/icons/menu.png')} />
        </TouchableOpacity>
      </Left>
      <Right style={styles.right}>
        <TouchableOpacity>
          <Image  source={require('../../assets/icons/sun.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.iconColor} source={require('../../assets/icons/arrow-swap.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.iconColor} source={require('../../assets/icons/search.png')} />
        </TouchableOpacity>
      </Right>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    padding:MAIN_PADDING
  },
  left: {
    height: '100%',
    justifyContent: 'center',
  },
  body: {
    height: '100%',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'transparent',
  },
  iconColor:{
      tintColor:ICON_COLOR
  }
});
