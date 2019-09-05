
import { createAction } from 'redux-act'

export const doubleIncrement = createAction('increment the state by 2');
export const doubleDecrement = createAction('decrement the state by 2');