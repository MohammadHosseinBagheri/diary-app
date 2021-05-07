import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  PixelRatio,
  TextInput,
  Image,
} from 'react-native';
import {
  BACKGROUND_COLOR,
  FONT_FAMILY,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
} from '../../constant/styles';
import {Button, Input} from 'native-base';
import Slider from '@react-native-community/slider';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {addDiary} from '../../utils/diary/diary.utils';
import useOpenRealm from '../../hooks/OpenRealm';
import {DiarySchema} from '../../schema/Diary';
import {HOME_SCREEN} from '../../constant/routes';
import {INITIAL_VALUES} from '../../constant/diary';
const AddDiary = props => {
  const navigation = useNavigation();
  const realm = useOpenRealm(DiarySchema);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: values => {
      addDiary(values, realm, props.route.params.setDiary).then(() =>
        navigation.goBack(HOME_SCREEN),
      );
      formik.resetForm()
    },
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentHeader}>
        <Input
          onChangeText={formik.handleChange('title')}
          placeholderTextColor="#fff"
          style={styles.diaryTitle}
          placeholder="Write diary title"
        />
      </View>
      <View style={[styles.blackLine, {left: 20}]} />
      <View style={[styles.blackLine, {right: 20}]} />

      <View style={styles.contentDiaryText}>
        <Input
          style={{
            textAlignVertical: 'top',
            fontFamily: FONT_FAMILY,
            color: '#fff',
          }}
          onChangeText={formik.handleChange('text')}
          placeholderTextColor="#fff"
          multiline
          numberOfLines={15}
          placeholder="Write diary"
        />
      </View>
      <Button onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add Diary</Text>
        <Image source={require('../../assets/icons/add.png')} />
      </Button>
    </ScrollView>
  );
};

export default AddDiary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    padding: MAIN_PADDING,
    zIndex: 1,
  },
  contentHeader: {
    height: 50,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: PixelRatio.get() * 5,
    borderRadius: 8,
    elevation: 5,
    zIndex: 1,
  },
  diaryTitle: {
    color: '#fff',
    zIndex: 1,
    fontFamily: FONT_FAMILY,
  },
  contentDiaryText: {
    // minHeight: PixelRatio.get() * 200,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    borderRadius: 8,
    zIndex: 1,
    marginTop: 20,
    fontFamily: FONT_FAMILY,
    elevation: 5,
  },
  blackLine: {
    position: 'absolute',
    top: 60,
    width: 10,
    borderRadius: 40,
    height: 40,
    backgroundColor: 'black',
    zIndex: 100,
    elevation: 10,
  },
  button: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: MAIN_PADDING,
    marginBottom: MAIN_PADDING,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    width: 160,
    padding: MAIN_PADDING,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {fontSize: 18, fontFamily: FONT_FAMILY, color: '#fff'},
});
