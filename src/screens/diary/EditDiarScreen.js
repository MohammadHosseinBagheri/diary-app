import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  PixelRatio,
} from 'react-native';
import {Input, Button} from 'native-base';
import {useFormik} from 'formik';
import {INITIAL_VALUES} from '../../constant/diary';
import {
  BACKGROUND_COLOR,
  FONT_FAMILY,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
} from '../../constant/styles';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN} from '../../constant/routes';
const EditDiarScreen = props => {
  const navigation = useNavigation();
  const {
    route: {params},
  } = props;
  const {id, text, title, realm, setDiary} = params;
  // console.log(id, text, title, realm, setDiary);
  const formik = useFormik({
    initialValues: {
      text,
      title,
    },
    onSubmit: values => {
      const diary = realm.objects('diary');
      let allDiary = diary.map(item => ({
        _id: item._id,
        text: item.text,
        title: item.title,
        date: item.date,
      }));
      const updateDiary = allDiary.find(item => item._id === id);
      const filtredDiary = allDiary.filter(item => item._id !== id);
      if (filtredDiary.length === 0) {
        setDiary([{...updateDiary, text: values.text, title: values.title}]);
      } else {
        setDiary(
          [
            ...filtredDiary,
            {...updateDiary, text: values.text, title: values.title},
          ].sort((a, b) => b.date - a.date),
        );
      }
      const test = realm.objects('diary').filtered('_id == $0', id);
      realm.write(() => {
        test[0].text = values.text;
        test[0].title = values.title;
      });
      formik.resetForm();
      navigation.goBack();
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
          value={formik.values.title}
          defaultValue={formik.values.title}
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
          value={formik.values.text}
          defaultValue={formik.values.text}
          placeholder="Write diary"
        />
      </View>
      <Button onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Edit Diary</Text>
        <Image source={require('../../assets/icons/add.png')} />
      </Button>
    </ScrollView>
  );
};

export default EditDiarScreen;

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
