import { shareActions } from '../../../../../../mgm-redux-store/src/lib/ducks/creatorsActions';
import store from '@zup-mgm/mgm-redux-store';

export default function (type, buttonIndex, componentId) {
  store.dispatch(shareActions.shareRequest(type, buttonIndex, componentId));
  return;
}
