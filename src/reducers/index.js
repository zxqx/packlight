import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gearList from './gearList';
import user from './user';
import { reducer as uiReducer } from 'redux-ui';

const rootReducer = combineReducers({
  gearList,
  user,
  ui: uiReducer,
  routing
});

export default rootReducer;
