
import { combineReducers } from 'redux';

import galleryImages from './gallery-images';
import favorites from './favorites';

export default combineReducers({
  ...Object.entries({
    galleryImages,
    favorites
  }).reduce(
    (acc, [key, createReducer]) => ({
      ...acc,
      [key]: createReducer()
    }),
    {}
  )
});
