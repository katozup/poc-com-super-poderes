import React, { lazy, Suspense, useEffect } from 'react';
import './App.scss';
import { appActions, errorActions } from '@zup-mgm/mgm-redux-store';
import { closeWebview } from '@zup-mgm/mdr-engine';
import { CARD_TYPE } from '@zup-mgm/utils';
import { Loading } from '@zup-mgm/ui-components';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { DefaultError } from '@zup-mgm/ui-components';

const LazyComponent = lazy(async () => await import('../routes/routes'));

function App() {
  const loading = useSelector((state: RootStateOrAny) => state.app.loading);
  const hasCriticalError = useSelector((state: RootStateOrAny) => state.error.hasCriticalError);
  const { whiteLabel } = useSelector((state: RootStateOrAny) => state.app.sduiPayload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.initApp(CARD_TYPE.ITAUCARD));
  }, []);

  const setRetryActionButton = () => {
    dispatch(errorActions.tryAgain());
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

  console.log('tema', whiteLabel.cssTheme);

  return (
    <div id='app' className={`App ${whiteLabel.cssTheme}`}>
      <Suspense fallback={<Loading loadPrimary={false} />}>
        <LazyComponent></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
