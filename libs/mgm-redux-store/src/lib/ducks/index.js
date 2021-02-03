import { combineReducers } from 'redux';

import analytics from './analytics';
import counter from './counter';

export default combineReducers({
  analytics,
  counter
});
