import React from 'react';
import {StyleSheet, Text, View, ScrollView, PixelRatio} from 'react-native';
import {
  BACKGROUND_COLOR,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
} from '../../constant/styles';
import {Input} from 'native-base';
const AddDiary = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Header</Text>
      <View style={styles.contentHeader}>
        <Input
          placeholderTextColor="#fff"
          style={styles.diaryTitle}
          placeholder="Write diary title"
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 80,
          width: 10,
          borderRadius: 40,
          left: 20,
          height: 40,
          backgroundColor: 'black',
          zIndex: 100,
          elevation: 10,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 80,
          width: 10,
          borderRadius: 40,
          right: 20,
          height: 40,
          backgroundColor: 'black',
          zIndex: 100,
          elevation: 10,
        }}
      />
      <View style={styles.contentDiaryText}>
        <Input placeholder="Write diary"  />
      </View>
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

    zIndex: 1,
  },
  diaryTitle: {
    color: '#fff',
    zIndex: 1,
  },
  contentDiaryText: {
    minHeight: PixelRatio.get() * 200,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    borderRadius: 8,
    zIndex: 1,
    marginTop: 20,
  },
});
