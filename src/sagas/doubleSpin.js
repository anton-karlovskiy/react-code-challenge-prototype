
import { put } from 'redux-saga/effects';

import { increment, decrement } from '../actions/spin';

export function* doubleIncrement() {
  yield put(increment());
  yield put(increment());
};

export function* doubleDecrement() {
  yield put(decrement());
  yield put(decrement());
};
