import { store, analyticsActions } from '@zup-mgm/mgm-redux-store';

export default function (analyticsParameter) {
  store.dispatch(analyticsActions.addPageLoad(analyticsParameter));
  return;
}