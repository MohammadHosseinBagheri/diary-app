import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {
  FONT_FAMILY,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
} from '../../constant/styles';
import * as Animatable from 'react-native-animatable';
import CardNavbar from '../common/nav-bar/CardNavbar';
import {navigateToEditScree, removeItem} from '../../utils/diary/diary.utils';
import {useNavigation} from '@react-navigation/native';

const DiaryFlatListItem = props => {
  const {title, text, id, date, index, realm, setDiary} = props;
  
  const navigation = useNavigation();
  const animation = {
    0: {translateX: 80 * index, opacity: 0},
    1: {translateX: 0, opacity: 1},
  };
  return (
    <Animatable.View
      animation={animation}
      duration={700}
      useNativeDriver
      delay={index * 1000}
      style={styles.container}>
      <TouchableOpacity style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <CardNavbar
            backgroundColor="red"
            onPress={removeItem}
            diary={{title, text, id}}
            realm={realm}
            setDiary={setDiary}
          />
          <CardNavbar
            backgroundColor="#FFFF00"
            onPress={()=>()=>navigateToEditScree(
              navigation,
              realm,
              setDiary,
              text,
              title,
              id,
            )}
          />
          <CardNavbar backgroundColor="#00E676" />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.titleText}>Title: {title}</Text>
          <ImageBackground
            style={{
              width: 50,
              height: 50,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            source={require('../../assets/icons/Calendar.png')}>
            <Text style={{marginBottom: 10, color: '#fff'}}>
              {new Date(date).getDate()}
            </Text>
          </ImageBackground>
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default DiaryFlatListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    minHeight: 150,
    marginBottom: MAIN_PADDING,
    marginTop: MAIN_PADDING,
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: '#F2BE54',
    padding: MAIN_PADDING,
    elevation: 5,
    zIndex: 1,
  },
  titleText: {
    fontFamily: FONT_FAMILY,
    fontSize: 20,
    color: 'white',
  },
  text: {
    fontFamily: FONT_FAMILY,
    color: 'white',
    fontSize: 16,
  },
});
