import { sdkActions } from '../../../../../../mgm-redux-store/src/lib/ducks/creatorsActions';
import store from '@zup-mgm/mgm-redux-store';

export default function () {
  store.dispatch(sdkActions.sdkReducer());
  return;
}
