import { store, shareActions } from '@zup-mgm/mgm-redux-store';

export default function (type, componentId) {
  store.dispatch(shareActions.shareRequest(type, componentId));
  return;
}
