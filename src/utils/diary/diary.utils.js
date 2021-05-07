import {EDIT_DIARY_SCREEN} from '../../constant/routes';

export const addDiary = async (values, realm, setDiary) => {
  // console.log('rrrrrrrrrrrr', realm, setDiary);
  realm.write(async () => {
    const date = new Date();
    let diary1 = await realm.create('diary', {
      _id: Math.round(Math.random() * 100000),
      title: values.title,
      text: values.text,
      date: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ),
    });
    setDiary(prev => {
      // console.log("prev",prev);
      return [
        ...prev,
        {
          _id: diary1._id,
          text: diary1.text,
          title: diary1.title,
          date: diary1.date,
        },
      ].sort((a, b) => b.date - a.date);
    });
  });
};

export const removeItem = (realm, diary, setDiary) => () => {
  let temporary = [];
  // console.log('render');
  // console.log('realmt', realm);
  // console.log(diary.id);
  realm.write(() => {
    let deletingDiary = realm.objectForPrimaryKey('diary', diary.id);

    realm.delete(deletingDiary);
    console.log(deletingDiary);
  });
  const newData = realm.objects('diary');
  newData.map(item =>
    temporary.push({
      _id: item._id,
      text: item.text,
      title: item.title,
      date: item.date,
    }),
  );
  setDiary(temporary);
};

export const navigateToEditScree = (
  navigation,
  realm,
  setDiary,
  text,
  title,
  id,
) =>  {
  navigation.navigate(EDIT_DIARY_SCREEN, {realm, setDiary, text, title, id});
};
