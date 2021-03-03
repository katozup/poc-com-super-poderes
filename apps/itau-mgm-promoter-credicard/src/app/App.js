import React, { lazy, Suspense, useEffect } from 'react';
import './App.scss';
import { Creators as appActions } from '../../../../libs/mgm-redux-store/src/lib/ducks/app';
import { Loading } from '@zup-mgm/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultError } from '@zup-mgm/ui-components';
import closeWebview from '../../../../libs/mdr-engine/src/lib/builder/functions/sdkFunctions/closeWebview';
const LazyComponent = lazy(async () => await import('../routes/routes'));
import { Creators as ErrorTypes } from '../../../../libs/mgm-redux-store/src/lib/ducks/error';

function App() {
  const loading = useSelector((state) => state.app.loading);
  const hasCriticalError = useSelector((state) => state.error.hasCriticalError);
  const { whiteLabel } = useSelector((state) => state.app.sduiPayload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.initApp());
  }, []);

  const setRetryActionButton = () => {
    dispatch(ErrorTypes.tryAgain());
  };

  const setBackAction = () => {
    closeWebview();
  };

  if (hasCriticalError) {
    return (
      <div id='defaultError' className={`App ${whiteLabel.cssTheme}`}>
        <DefaultError
          retryAction={setRetryActionButton}
          backAction={setBackAction}
        />
      </div>
    );
  }

  if (loading) {
    return <Loading loadPrimary={false} />;
  }

  return (
    <div id='app' className={`App ${whiteLabel.cssTheme}`}>
      <Suspense fallback={<Loading loadPrimary={false} />}>
        <LazyComponent></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
