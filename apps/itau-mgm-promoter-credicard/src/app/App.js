import React, { lazy, Suspense } from 'react';
import './App.scss';
import store from '@zup-mgm/mgm-redux-store';
import { Creators as appActions } from '../../../../libs/mgm-redux-store/src/lib/ducks/app';
import { CARD_TYPE } from '../../../../libs/utils/src/lib/constants';
import { useSelector } from 'react-redux';
import { Loading } from '@zup-mgm/ui-components';

const LazyComponent = lazy(async () => await import('../routes/routes'));

function App() {
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
    store.dispatch(appActions.initApp(CARD_TYPE.CREDICARD));
    return <Loading loadPrimary={false} />;
  }
  
  return (
    <div id='app' className={`App`}>
      <Suspense fallback={<Loading loadPrimary={false} />}>
        <LazyComponent></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
