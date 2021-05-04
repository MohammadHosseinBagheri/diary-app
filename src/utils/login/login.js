import {Alert} from 'react-native';
import {HOME_SCREEN} from '../../constant/routes';

export const handleSubmit = async (values, navigation, realm, alertOpen) => {
  let user;
  await realm.write(async () => {
    user = await realm.create('user', {
      _id: 9,
      email: values.email,
      password: values.password,
    });
  });
  if (!user) {
    alertOpen('Registration is failed');
  } else {
    realm.close();
    navigation.navigate(HOME_SCREEN);
  }
  console.log('user', user);
};
