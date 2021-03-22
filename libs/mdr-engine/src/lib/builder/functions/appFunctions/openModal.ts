import { store, modalActions } from '@zup-mgm/mgm-redux-store';

export default function ({componentId, analytics}) {
  store.dispatch(modalActions.showModal(componentId));
  if (analytics) {
    analytics.analyticsFunction(analytics.analyticsParameter);
  }
  return;
}
