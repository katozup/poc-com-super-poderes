import { shareActions } from '@zup-mgm/mgm-redux-store';

export default function (store, type, buttonIndex, gatewayAppKey) {
  store.dispatch(shareActions.shareRequest(type, buttonIndex, gatewayAppKey))
  return;
}
