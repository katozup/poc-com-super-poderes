import { store, shareActions, appActions } from '@zup-mgm/mgm-redux-store';

export default function (onClick) {
  const { actionParameter } = onClick;
  const { type, componentId } = actionParameter;
  store.dispatch(appActions.setAction(onClick));
  store.dispatch(shareActions.shareRequest(type, componentId));
  return;
}
