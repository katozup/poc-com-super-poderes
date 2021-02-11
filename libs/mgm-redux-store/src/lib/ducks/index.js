import { combineReducers } from 'redux';

import analytics from './analytics';
import counter from './counter';
import share from './share';

export default combineReducers({
  analytics,
  counter,
  share,
});
