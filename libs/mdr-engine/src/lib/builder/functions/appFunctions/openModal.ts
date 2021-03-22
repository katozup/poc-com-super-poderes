import { store, modalActions, appActions } from '@zup-mgm/mgm-redux-store';

export default function (onClick) {
  const { actionParameter } = onClick;
  const { componentId, analytics } = actionParameter;
  
  store.dispatch(appActions.setAction(onClick));
  store.dispatch(modalActions.showModal(componentId));

  if (analytics) {
    analytics.analyticsFunction(analytics.analyticsParameter);
  }
  return;
}
