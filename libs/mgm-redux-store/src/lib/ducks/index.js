import { combineReducers } from 'redux';

import analytics from './analytics';
import share from './share';
import sdk from './sdk';
import app from './app';

export default combineReducers({
  app,
  analytics,
  share,
  sdk
});
