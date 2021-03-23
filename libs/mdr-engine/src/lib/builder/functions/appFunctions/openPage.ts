import { navigationHistory } from '@zup-mgm/utils';
import { appActions, store } from '@zup-mgm/mgm-redux-store';

export default function (actionParameters) {
  const { url, analytics } = actionParameters;
  if (analytics) {
    analytics.analyticsFunction(analytics.analyticsParameter);
  }
  store.dispatch(appActions.startLoading());
  navigationHistory.push(url);
  return;
}
