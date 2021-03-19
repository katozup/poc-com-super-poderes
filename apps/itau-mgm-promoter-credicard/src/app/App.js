import React, { lazy, Suspense, useEffect } from 'react';
import './App.scss';
import { appActions, errorActions } from '@zup-mgm/mgm-redux-store';
import { closeWebview } from '@zup-mgm/mdr-engine';
import { CARD_TYPE, importCssTheme } from '@zup-mgm/utils';
import { Loading } from '@zup-mgm/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultError } from '@zup-mgm/ui-components';

const CREDICARD_THEME_DEFAULT = 'credicard-theme-default';

function App() {

  const hasCriticalError = useSelector((state) => state.error.hasCriticalError);
  const { whiteLabel } = useSelector((state) => state.app.sduiPayload);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.initApp(CARD_TYPE.CREDICARD));
  }, []);

  const setRetryActionButton = () => {
    dispatch(errorActions.tryAgain());
  };

  const setBackAction = () => {
    closeWebview();
  };

  if (hasCriticalError) {
    importCssTheme(CREDICARD_THEME_DEFAULT);
    return (
      <div id='defaultError' className={`App credicard-theme-default`}>
        <DefaultError
          backgroundImage={'/shared-assets/img/default_error_credicard.png'}
          retryAction={setRetryActionButton}
          backAction={setBackAction}
        />
      </div>
    );
  }

  if (!whiteLabel) {
    return <Loading loadPrimary={false} />;
  }

  const LazyComponent = lazy(async () => await import('../routes/routes'));
  
  return (
    <div id='app' className={`App ${whiteLabel.cssTheme}`}>
      <Suspense fallback={<Loading loadPrimary={false} />}>
        <LazyComponent></LazyComponent>
      </Suspense>
    </div>
  );
}

export default App;
