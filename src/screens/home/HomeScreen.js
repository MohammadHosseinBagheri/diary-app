import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Header from '../../components/home/Header';
import {
  BACKGROUND_COLOR,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
} from '../../constant/styles';
import * as Animatable from 'react-native-animatable';
import EmptyFlatList from '../../components/home/EmptyFlatList';
import Footer from '../../components/home/Footer';
import useOpenRealm from '../../hooks/OpenRealm';
import {useEffect, useState} from 'react';
import {getAllDiary} from '../../utils/home/home.utils';
import {DiarySchema} from '../../schema/Diary';
import DiaryFlatListItem from '../../components/home/DiaryFlatListItem';
const FlastListAnimation = Animatable.createAnimatableComponent(FlatList);
const HomeScreen = () => {
  const realm = useOpenRealm(DiarySchema);
  const [diary, setDiary] = useState([]);
  console.log('render')
  console.log('diary', diary);
  useEffect(() => {
    getAllDiary(realm, setDiary);
    return () => {};
  }, [realm]);
  return (
    <>
      <StatusBar backgroundColor={BACKGROUND_COLOR} />
      <Header />
      <View style={styles.constainer}>
        <Animatable.Image
          animation="fadeInDown"
          duration={500}
          useNativeDriver
          style={styles.image}
          resizeMode="stretch"
          source={require('../../assets/images/banner.png')}
        />
        <Animatable.Text
          useNativeDriver
          animation="fadeInDown"
          duration={500}
          delay={200}
          style={styles.text}>
          {new Date().getFullYear()}
        </Animatable.Text>
        {/* <FlastListAnimation
          animation="fadeInDown"
          style={{elevation: 10, padding: MAIN_PADDING}}
          contentContainerStyle={{elevation: 10}}
          useNativeDriver
          duration={500}
          delay={300}
          data={diary}
          ListEmptyComponent={EmptyFlatList}
        /> */}
        <FlastListAnimation
          animation="fadeInDown"
          style={{padding: MAIN_PADDING, zIndex: 1, marginBottom: 5}}
          contentContainerStyle={{zIndex: 1}}
          useNativeDriver
          duration={500}
          delay={300}
          keyExtractor={item => String(item._id)}
          data={diary}
          snapToInterval={150 + MAIN_PADDING * 2 }
          renderItem={({item, index}) => (
            <DiaryFlatListItem
              index={index}
              title={item.title}
              text={item.text}
              id={item._id}
              date={item.date}
              realm={realm}
              setDiary={setDiary}
            />
          )}
          ListEmptyComponent={EmptyFlatList}
        />
        <Footer realm={realm} setDiary={setDiary} />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
    zIndex: 5,
  },
  image: {
    width: '100%',
    height: PixelRatio.get() * 100,
  },
  text: {color: '#fff', fontSize: 18, padding: MAIN_PADDING, paddingBottom: 5},
});
