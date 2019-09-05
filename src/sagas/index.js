
import { takeLatest } from 'redux-saga/effects';

import * as doubleCalcActions from '../actions/doubleSpin';
import * as doubleCalcSagas from './doubleSpin';

export default function* saga() {
  const relations = [
    [doubleCalcActions, doubleCalcSagas],
  ]

  for (const [actions, sagas] of relations) {
    for (const [actionName, action] of Object.entries(actions)) {
      const saga = sagas[actionName];
      if (saga) yield takeLatest(action.getType(), saga);
    }
  }
};
