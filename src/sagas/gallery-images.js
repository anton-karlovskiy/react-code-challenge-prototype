
import { put, select, call } from 'redux-saga/effects';

import * as API from '../api';
import { setFetchGalleryImagesRequest, setFetchGalleryImagesSuccess, setFetchGalleryImagesFailure } from '../actions/gallery-images';

export function* getGalleryImages({ payload }) {
  try {
    yield put(setFetchGalleryImagesRequest());
    const page = yield select(state => state.galleryImages.page);
    const results = yield call(API.getGalleryImages, page, payload.limit);
    
    yield put(setFetchGalleryImagesSuccess(results));
  } catch (error) {
    yield put(setFetchGalleryImagesFailure());
  }
};
