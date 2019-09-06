
import { createReducer } from 'redux-act';

import * as ALL from '../actions/favorites';

const getDefaultState = () => [];

export default () =>
  createReducer(
    {
      [ALL.addMovieToFavorites]: (state, payload) => !state.includes(payload) ? state.concat(payload) : state,
      [ALL.removeMovieFromFavorites]: (state, payload) => state.filter(id => id !== payload)
    },
    getDefaultState()
  );
