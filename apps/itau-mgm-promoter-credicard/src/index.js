import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import configure from './configure';
// import Routes from './routes/routes';
// import sentryInitFile from './sentry/sentryInitFile';
import store from './store';
// import setAppVersionToWindow from './util/setAppVersionToWindow';
import App from './app/App';

import './index.css';
import './styles/base.scss';

// sentryInitFile();



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
