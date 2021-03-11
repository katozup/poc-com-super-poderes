import { store, analyticsActions } from '@zup-mgm/mgm-redux-store';

export default function (analyticsParameter, componentId) {
  store.dispatch(analyticsActions.addCustomLink(analyticsParameter, componentId));

  if (analyticsParameter.eventCategory) {
    store.dispatch(analyticsActions.addCustomLinkNps(analyticsParameter, componentId));
  }

  return;
}
