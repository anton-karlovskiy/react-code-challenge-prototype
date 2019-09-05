
import React from 'react';

// action dispatches
import { increment, decrement } from '../../actions/spin';
// sagas
import { doubleIncrement, doubleDecrement } from '../../actions/doubleSpin';

import { connectTo } from '../../utils/generic';

const Spin = ({ increment, decrement, spinNumber, doubleIncrement, doubleDecrement }) => {
  return (
    <div>
      <h1>{spinNumber}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => doubleIncrement()}>Double Increment</button>
      <button onClick={() => doubleDecrement()}>Double Decrement</button>
    </div>
  )
};

const mapStateToProps = state => ({
  spinNumber: state.spin
});

const mapActionsToProps = {
  increment,
  decrement,
  doubleIncrement,
  doubleDecrement
};

export default connectTo(mapStateToProps, mapActionsToProps, Spin);
