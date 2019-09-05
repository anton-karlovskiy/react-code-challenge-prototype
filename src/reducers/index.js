
import { combineReducers } from 'redux';

import spin from './spin';

export default combineReducers({
  ...Object.entries({
    spin
  }).reduce(
    (acc, [key, createReducer]) => ({
      ...acc,
      [key]: createReducer()
    }),
    {}
  )
});