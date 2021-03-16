import React, { lazy, Suspense, useEffect } from 'react';
import './App.scss';
import { appActions, errorActions } from '@zup-mgm/mgm-redux-store';
import { closeWebview } from '@zup-mgm/mdr-engine';
import { CARD_TYPE, importCssTheme } from '@zup-mgm/utils';
import { AndroidLoading } from '@zup-mgm/ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultError } from '@zup-mgm/ui-components';

const LazyComponent = lazy(async () => await import('../routes/routes'));

function App() {
  const loading = useSelector((state) => state.app.loading);
  const hasCriticalError = useSelector((state) => state.error.hasCriticalError);
  const { whiteLabel } = useSelector((state) => state.app.sduiPayload);
  const cardType = useSelector((state) => state.app.cardType);
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

  const getDefaultTheme = () => {
    if (whiteLabel && whiteLabel.cssTheme) return whiteLabel.cssTheme;
    if (cardType === CARD_TYPE.LUIZACARD) return 'cartaoluiza-theme-default';
    if (cardType === CARD_TYPE.HIPERCARD) return 'hipercard-theme-default';
    return 'itaucard-theme-default';
  };

  if (hasCriticalError) {
    const defaultTheme = getDefaultTheme();
    importCssTheme(defaultTheme);
    return (
      <div id='defaultError' className={`App ${defaultTheme}`}>
        <DefaultError
          backgroundImage={'/shared-assets/img/default_error_itaucard.png'}
          retryAction={setRetryActionButton}
          backAction={setBackAction}
        />
      </div>
    );
  }

  if (loading) {
    return <AndroidLoading />;
  }

  return (
    <div id='app' className={`App ${whiteLabel.cssTheme}`}>
      <Suspense fallback={<AndroidLoading />}>
        <LazyComponent></LazyComponent>
      </Suspense>
    </div>
  );
}
export default App;
