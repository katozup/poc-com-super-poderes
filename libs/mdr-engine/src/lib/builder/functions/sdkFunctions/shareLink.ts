import { shareActions } from '../../../../../../mgm-redux-store/src/lib/ducks/creatorsActions';
export default function (store, type, buttonIndex, gatewayAppKey) {
  store.dispatch(shareActions.shareRequest(type, buttonIndex, gatewayAppKey))
  return;
}
