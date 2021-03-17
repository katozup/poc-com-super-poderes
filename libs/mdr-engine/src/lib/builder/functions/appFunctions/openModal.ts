import { store, modalActions } from '@zup-mgm/mgm-redux-store';

export default function (componentId) {
  store.dispatch(modalActions.showModal(componentId));
  return;
}
