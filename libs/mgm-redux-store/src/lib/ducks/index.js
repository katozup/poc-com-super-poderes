import { combineReducers } from 'redux';

import analytics from './analytics';
import share from './share';
import userData from './userData';
import app from './app';

export default combineReducers({
  app,
  analytics,
  share,
  userData
});
