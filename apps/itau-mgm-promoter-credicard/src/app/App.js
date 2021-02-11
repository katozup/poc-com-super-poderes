import React, { lazy, Suspense } from 'react';
import './App.scss';
import payload from '../payload_04.json';
import { appActions } from '@zup-mgm/mgm-redux-store';
import store from '@zup-mgm/mgm-redux-store';

function LoadingMessage() {
  return <h2>Loading...</h2>;
}

const LazyComponent = lazy(async () => await import('../routes/routes'));

function getTheme(theme) {
  const regx = new RegExp('credicard');
  if (theme === '' || !regx.test(theme)) {
    return 'credicard-theme-default';
  }
  require(`../../../../libs/ui-components/src/themes/${theme}.css`)
  return theme;
}

function App() {
  store.dispatch(appActions.appInit())

  return (
    <div className={`App ${getTheme(payload.whiteLabel.cssTheme)}`}>
      <Suspense fallback={<LoadingMessage />}>
        <LazyComponent payload={payload}></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
