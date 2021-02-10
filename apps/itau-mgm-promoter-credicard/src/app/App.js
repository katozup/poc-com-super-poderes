import React, { lazy, Suspense } from 'react';
import './App.scss';
import payload from '../payload_05.json';

function LoadingMessage() {
  return <h2>Loading...</h2>;
}

const LazyComponent = lazy(async () => await import('../routes/routes'));

function getTheme(theme) {
  const regx = new RegExp('credicard');
  if (theme === '' || !regx.test(theme)) {
    return 'credicard-theme-default';
  }
  //TODO: Fix import
  require(`../../../../libs/shared/assets/src/assets/themes/${theme}.css`);
  return theme;
}

function App() {
  return (
    <div className={`App ${getTheme(payload.whiteLabel.cssTheme)}`}>
      <Suspense fallback={<LoadingMessage />}>
        <LazyComponent payload={payload}></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
