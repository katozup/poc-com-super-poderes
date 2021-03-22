import { store, modalActions } from '@zup-mgm/mgm-redux-store';

export default function () {
  store.dispatch(modalActions.closeModal());
  return;
}
