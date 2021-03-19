import { history } from '@zup-mgm/utils';
import { appActions, store} from '@zup-mgm/mgm-redux-store'

export default function () {
  store.dispatch(appActions.startLoading());
  history.goBack();
  return;
}
