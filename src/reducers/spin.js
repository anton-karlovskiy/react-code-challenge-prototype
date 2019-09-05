
import { createReducer } from 'redux-act';

import * as ALL from '../actions/spin';

const getDefaultState = () => 0;

export default () =>
  createReducer(
    {
      [ALL.increment]: state => state + 1,
      [ALL.decrement]: state => state - 1
    },
    getDefaultState()
  );
