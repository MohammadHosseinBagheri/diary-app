import {DiarySchema} from './Diary';

export const DiaryListSchema = {
  name: 'diaryList',
  properties: {
    _id: 'int',
    title: 'string',
    diary: {type: 'list', objectType: DiarySchema},
    userId: 'int',
  },
  primaryKey: '_id',
};
