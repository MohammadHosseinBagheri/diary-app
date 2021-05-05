import {Alert} from 'react-native';
import {HOME_SCREEN} from '../../constant/routes';

export const handleSubmit = async (values, navigation, realm, alertOpen) => {
  //get user
  let user = await realm.objects('user');

  const isExist = await user.find(item => item.email === values.email);

  //if user not found create user
  if (!isExist) {
    await realm.write(async () => {
      //create user
      let res = realm.create('user', {
        _id: Math.round(Math.random() * 10000),
        email: values.email,
        password: values.password,
      });
      if (res) {
        realm.close();
        navigation.navigate(HOME_SCREEN);
      } else alertOpen('isnt', false);
    });
  }
  //user found and now check validation
  else {
    const {email, password} = isExist;
    //check password
    if (password === values.password) {
      alertOpen('Successful', true);
      setTimeout(() => {
        navigation.navigate(HOME_SCREEN, {user: {...isExist}});
        realm.close();
      }, 2000);
    } else {
      alertOpen('Check Username or Password');
    }
  }
};
