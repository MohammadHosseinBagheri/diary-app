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
  StatusBar
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
const FlastListAnimation = Animatable.createAnimatableComponent(FlatList);
const HomeScreen = () => {
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
        <FlastListAnimation
          animation="fadeInDown"
          style={{elevation:10,padding:MAIN_PADDING}}
          contentContainerStyle={{elevation:10}}
          useNativeDriver
          duration={500}
          delay={300}
          data={null}
          ListEmptyComponent={EmptyFlatList}
        />
      <Footer />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
  },
  image: {
    width: '100%',
    height: PixelRatio.get() * 100,
  },
  text: {color: '#fff', fontSize: 18, padding:MAIN_PADDING,paddingBottom: 5},
});
