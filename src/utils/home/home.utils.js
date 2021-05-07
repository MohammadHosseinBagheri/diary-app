export const getAllDiary = async (realm, setDiary) => {
  //   const allDiary = await realm.objects('diary');
  //   console.log('diary', allDiary);
  const allDiary = await realm.objects('diary');
  const allFieldDiary = await allDiary?.map(item => ({
    _id: item._id,
    title: item.title,
    text: item.text,
    date:item.date
  }));
  setDiary(allFieldDiary);
};
