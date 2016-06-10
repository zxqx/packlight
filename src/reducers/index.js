import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gearList from './gearList';
import { reducer as uiReducer } from 'redux-ui';

const rootReducer = combineReducers({
  gearList,
  ui: uiReducer,
  routing
});

export default rootReducer;
