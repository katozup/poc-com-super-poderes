import { counterActions } from '@zupmgm/mgm-redux-store';

export default function (param, store) {
  store.dispatch(counterActions.addCounter())
  return param;
}
