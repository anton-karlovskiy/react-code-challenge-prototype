
import React from 'react';

import { increment, decrement } from '../../actions/spin';

import { connectTo } from '../../utils/generic';

const Spin = ({ increment, decrement, spinNumber }) => {
  return (
    <div>
      <h1>{spinNumber}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
};

const mapStateToProps = state => ({
  spinNumber: state.spin
});

const mapActionsToProps = {
  increment,
  decrement
};

export default connectTo(mapStateToProps, mapActionsToProps, Spin);
