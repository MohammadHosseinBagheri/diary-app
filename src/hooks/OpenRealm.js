import React, {useEffect, useState} from 'react';
import Realm from 'realm';
const openRealm = async schema => {
  let realm = await Realm.open({
    path: 'myrealm',
    schema: [schema],
  });
  return realm;
};
const useOpenRealm = schema => {
  const [realm, setRealm] = useState(null);
  useEffect(() => {
    openRealm(schema).then(data => setRealm(data));
  }, []);

  return realm;
};
export default useOpenRealm;
