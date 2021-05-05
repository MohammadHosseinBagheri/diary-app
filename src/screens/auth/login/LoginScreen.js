import {Button, Input, Item} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  BACKGROUND_COLOR,
  HOME_FLATLIST_BACKGROUND,
  MAIN_PADDING,
} from '../../../constant/styles';
import * as Animatable from 'react-native-animatable';
import {useFormik} from 'formik';
import {initialValues, validationSchema} from '../../../constant/login';
import {handleSubmit} from '../../../utils/login/login';
import {useNavigation} from '@react-navigation/native';
import useOpenRealm from '../../../hooks/OpenRealm';
import Alert from '../../../components/modals/Alert';
import {UserSchema} from '../../../schema/User';

const LoginScreen = () => {
  const navigation = useNavigation();
  const realm = useOpenRealm(UserSchema);
  const alertModal = useRef();
  const open = (text, type) => {
    alertModal.current.open(text, type);
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => handleSubmit(values, navigation, realm, open),
    validationSchema: validationSchema,
  });
  useEffect(() => {
    const test=async()=>{
      await realm.close()
    }
    return () => {
      test()
    };
  }, []);
  console.log(realm);
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <Animatable.Image
        useNativeDriver
        animation="fadeInDown"
        delay={300}
        duration={500}
        style={styles.image}
        source={require('../../../assets/images/login.png')}
      />
      <Animatable.View
        useNativeDriver
        animation="fadeInDown"
        delay={500}
        duration={500}
        style={styles.titleContainer}>
        <Text style={styles.text}>Login Form</Text>
      </Animatable.View>
      <Animatable.View
        useNativeDriver
        animation="fadeInDown"
        delay={800}
        duration={500}
        style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={formik.handleChange('email')}
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={styles.inputStyle}
            placeholder="Email"
          />
          <View style={styles.iconContainer}>
            <Image source={require('../../../assets/icons/message-5.png')} />
          </View>
        </View>
        {formik.errors.email && (
          <Text style={{color: 'tomato'}}>{formik.errors.email}</Text>
        )}
        <View style={styles.inputContainer}>
          <Input
            onChangeText={formik.handleChange('password')}
            placeholderTextColor="#fff"
            style={styles.inputStyle}
            placeholder="password"
          />
          <View style={styles.iconContainer}>
            <Image source={require('../../../assets/icons/lock.png')} />
          </View>
        </View>
        {formik.errors.password && (
          <Text style={{color: 'tomato'}}>{formik.errors.password}</Text>
        )}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            alignSelf: 'center',
            marginVertical: 8,
          }}>
          <Button
            // disabled={formik.errors.email || formik.errors.password}
            onPress={formik.handleSubmit}
            // onPress={() => open('succesfully', false)}
            style={{
              width: 150,
              justifyContent: 'center',
              borderRadius: 8,
              elevation: 8,
              backgroundColor: BACKGROUND_COLOR,
            }}>
            <Text style={{color: '#fff'}}>Login</Text>
          </Button>
        </View>
      </Animatable.View>
      <Alert ref={alertModal} />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    paddingHorizontal: MAIN_PADDING,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  titleContainer: {
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    marginTop: PixelRatio.get() * 10,
    marginBottom: PixelRatio.get() * 10,
    padding: 10,

    borderRadius: 8,
    // elevation: 8,
  },
  image: {
    width: '100%',
    height: PixelRatio.get() * 100,
    marginTop: 15,
  },
  formContainer: {
    display: 'flex',
    padding: MAIN_PADDING,
    backgroundColor: HOME_FLATLIST_BACKGROUND,
    borderRadius: 8,
    // elevation: 8,
    // minHeight: 200,
  },
  inputStyle: {
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 8,
    elevation: 4,
    marginVertical: 8,
    color: '#fff',
  },
  iconContainer: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 7,
    marginRight: 8,
    borderRadius: 8,
    elevation: 4,
  },
  inputContainer: {flexDirection: 'row-reverse', alignItems: 'center'},
});
