import { combineReducers } from 'redux';

import analytics from './analytics';
import share from './share';
import sdk from './sdk';
import app from './app';
import error from './error'
import modal from './modal';

export default combineReducers({
  app,
  analytics,
  share,
  sdk,
  error,
  modal
});
