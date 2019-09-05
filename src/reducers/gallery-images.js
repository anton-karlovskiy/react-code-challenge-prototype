
import { createReducer } from 'redux-act';

import * as ALL from '../actions/gallery-images';

const getDefaultState = () => ({
  results: [],
  isFetching: false,
  isError: false,
  // allFetched: false, // TODO: total pages should be provided by API for this
  page: 0
});

export default () =>
  createReducer(
    {
      [ALL.setFetchGalleryImagesRequest]: state => ({
        ...state,
        isFetching: true,
        isError: false
      }),
      [ALL.setFetchGalleryImagesSuccess]: (state, payload) => ({
        isFetching: false,
        isError: false,
        results: [
          ...state.results,
          ...payload.filter(id => !state.results.includes(id))
        ],
        page: state.page + 1
      }),
      [ALL.setFetchGalleryImagesFailure]: state => ({
        ...state,
        isFetching: false,
        isError: true
      })
    },
    getDefaultState()
  );
