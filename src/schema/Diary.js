export const DiarySchema = {
  name: 'diary',
  properties: {
    _id: 'int',
    title: 'string',
    text: 'string',
    date:'date'
  },
  primaryKey: '_id',
};
