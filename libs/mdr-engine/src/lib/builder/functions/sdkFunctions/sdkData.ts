import { store, sdkActions } from '@zup-mgm/mgm-redux-store';

export default function () {
  store.dispatch(sdkActions.sdkReducer());
  return;
}
