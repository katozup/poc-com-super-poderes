import { store, shareActions } from '@zup-mgm/mgm-redux-store';

export default function (type, componentId, analytics) {
  store.dispatch(shareActions.shareRequest(type, componentId));

  if (analytics && analytics.customLink) {
    analytics.customLink.analyticsFunction(analytics.customLink.analyticsParameter);
  }

  return;
}
