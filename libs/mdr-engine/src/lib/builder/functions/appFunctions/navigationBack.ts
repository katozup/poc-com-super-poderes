import { navigationHistory, ANALYTICS_RULES } from '@zup-mgm/utils';
import { appActions, store} from '@zup-mgm/mgm-redux-store'
const { PAGE } = ANALYTICS_RULES;

export default function () {
  store.dispatch(appActions.startLoading());
  navigationHistory.goBack();
  store.dispatch(appActions.dispatchPageLoad(PAGE));
  return;
}
