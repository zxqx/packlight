import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gearList from './gearList';

const rootReducer = combineReducers({
  gearList,
  routing
});

export default rootReducer;
