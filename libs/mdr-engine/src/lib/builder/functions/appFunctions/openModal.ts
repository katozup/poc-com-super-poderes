import { store, modalActions, appActions } from '@zup-mgm/mgm-redux-store';
import { ANALYTICS_RULES } from '@zup-mgm/utils';
const { MODAL } = ANALYTICS_RULES;

export default function (onClick) {
  const { actionParameter } = onClick;
  const { componentId, analytics } = actionParameter;
  
  store.dispatch(appActions.setAction(onClick));
  store.dispatch(appActions.stopPageLoad(MODAL));
  store.dispatch(modalActions.showModal(componentId));

  if (analytics) {
    analytics.analyticsFunction(analytics.analyticsParameter);
  }
  return;
}
