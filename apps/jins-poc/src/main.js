import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { Provider } from 'react-redux';
import { store } from '@zup-mgm/mgm-redux-store';
// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );