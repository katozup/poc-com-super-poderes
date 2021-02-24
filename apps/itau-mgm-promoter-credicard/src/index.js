import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@zup-mgm/mgm-redux-store';
import App from './app/App';

import './index.css';

const init = async () => {
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept();
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

init();
