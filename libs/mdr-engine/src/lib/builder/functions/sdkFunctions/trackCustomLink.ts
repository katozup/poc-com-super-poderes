import { analyticsActions } from '@zup-mgm/mgm-redux-store';
import store from '@zup-mgm/mgm-redux-store';

export default function (analyticsParameter) {
  store.dispatch(analyticsActions.addCustomLink(analyticsParameter));

  if(analyticsParameter.eventCategory) {
    store.dispatch(analyticsActions.addCustomLinkNps(analyticsParameter));
  }

  return;
}
