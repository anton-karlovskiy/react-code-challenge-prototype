
import React from 'react';
import { Provider } from 'react-redux';

import ImageGallery from './containers/ImageGallery';
import { configureStore } from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ImageGallery />
  </Provider>
);

export default App;
