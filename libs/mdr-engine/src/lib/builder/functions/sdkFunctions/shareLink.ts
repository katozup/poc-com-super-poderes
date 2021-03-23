import { store, shareActions } from '@zup-mgm/mgm-redux-store';

export default function (actionParameters) {
  const { type, componentId, analytics } = actionParameters;
  store.dispatch(shareActions.shareRequest(type, componentId));

  if (analytics) {
    analytics.analyticsFunction(analytics.analyticsParameter);
  }

  return;
}
