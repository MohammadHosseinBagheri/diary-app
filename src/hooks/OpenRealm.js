import React, {useEffect, useState} from 'react';
import Realm from 'realm';
import {UserSchema} from '../schema/User';
const openRealm = async () => {
  let realm = await Realm.open({
    path: 'myrealm',
    schema: [UserSchema],
  });
  return realm;
};
const useOpenRealm =  () => {
  const [realm, setRealm] = useState(null);
  useEffect(() => {
    openRealm().then(data => setRealm(data));
  }, []);

  return realm;
};
export default useOpenRealm;
