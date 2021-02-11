import store from './lib/store';

export default store;
export { Creators as counterActions } from './lib/ducks/counter';
export { Creators as analyticsActions } from './lib/ducks/analytics';
export { Creators as shareActions } from './lib/ducks/share';
