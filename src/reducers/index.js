
import { combineReducers } from 'redux';

import galleryImages from './gallery-images';

export default combineReducers({
  ...Object.entries({
    galleryImages
  }).reduce(
    (acc, [key, createReducer]) => ({
      ...acc,
      [key]: createReducer()
    }),
    {}
  )
});
