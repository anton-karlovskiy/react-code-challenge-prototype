
import { takeLatest } from 'redux-saga/effects';

import * as galleryImagesActions from '../actions/gallery-images';
import * as galleryImagesSagas from './gallery-images';

export default function* saga() {
  const relations = [
    [galleryImagesActions, galleryImagesSagas]
  ]

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
};
