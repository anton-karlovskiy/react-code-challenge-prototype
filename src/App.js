
import React from 'react';
import { Provider } from 'react-redux';

import Spin from './components/Spin';
import { configureStore } from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Spin />
  </Provider>
);

export default App;
