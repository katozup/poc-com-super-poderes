import { store, shareActions } from '@zup-mgm/mgm-redux-store';

export default function (componentId, analytics) {
  store.dispatch(shareActions.shareRequest(componentId));

  if (analytics && analytics.customLink) {
    analytics.customLink.analyticsFunction(analytics.customLink.analyticsParameter);
  }

  return;
}
