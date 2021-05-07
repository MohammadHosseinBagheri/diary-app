import {ADD_DIARY_SCREEN} from '../../constant/routes';

export const handleNavigateToAdd = (navigation,realm,setDiary) => () => {
  navigation.navigate(ADD_DIARY_SCREEN,realm,setDiary);
};
