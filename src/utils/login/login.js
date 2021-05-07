import {Alert} from 'react-native';
import {HOME_SCREEN} from '../../constant/routes';

export const handleSubmit = async (values, navigation, realm, alertOpen) => {
  //get user
  let user = await realm.objects('user');
  // console.log(user.length)
  //if user not found create user
  if (user.length === 0) {
    await realm.write(async () => {
      //create user
      let res = realm.create('user', {
        _id: Math.round(Math.random() * 10000),
        email: values.email,
        password: values.password,
      });
      if (res) {
        await realm.close();
        await navigation.navigate(HOME_SCREEN);
      } else alertOpen('isnt', false);
    });
  } else if (user.length !== 0) {
    const isExist = await user.find(item => item.email === values.email);
    if (!isExist) alertOpen('Username or password are invalid', false);
    else {
      const isExist = await user.find(item => item.email === values.email);
      console.log(isExist);

      const {email, password} = isExist;
      //check password
      if (password === values.password) {
        alertOpen('Successful', true);
        setTimeout(async () => {
          await realm.close();
          console.log(navigation)
          await navigation.navigate(HOME_SCREEN);
        }, 2000);
      } else {
        alertOpen('Check Username or Password');
      }
    }
  }
};
