export const getAllDiary = async (realm, setDiary) => {
  //   const allDiary = await realm.objects('diary');
  //   console.log('diary', allDiary);
  const allDiary = await realm.objects('diary');
  const allFieldDiary = await allDiary?.map(item => ({
    _id: item._id,
    title: item.title,
    text: item.text,
  }));
  setDiary(allFieldDiary);
  //   return realm;
  // realm.write(async () => {
  //   let diary1 = await realm.create('diary', {
  //     _id: Math.round(Math.random() * 100000),
  //     title: 'diary',
  //     text: 'it is test for M.hossein',
  //   });
  //   console.log("diary",diary1)
  // });
};
