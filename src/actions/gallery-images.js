
import { createAction } from 'redux-act';

// action creators for reducer
export const setFetchGalleryImagesRequest = createAction();
export const setFetchGalleryImagesSuccess = createAction();
export const setFetchGalleryImagesFailure = createAction();

// action creators for saga
export const getGalleryImages = createAction();
