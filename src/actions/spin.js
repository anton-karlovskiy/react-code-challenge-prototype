
import { createAction } from 'redux-act';

// Create an action creator (description is optional)
export const increment = createAction('increment the state');
export const decrement = createAction('decrement the state');