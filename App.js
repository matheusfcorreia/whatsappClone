import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './src/routes';
import reducers from './src/reducers';

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <Routes />
    </Provider>
  );
};
