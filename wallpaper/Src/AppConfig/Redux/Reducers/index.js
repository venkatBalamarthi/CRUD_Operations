import {combineReducers} from 'redux';
import {CLEAR_STORE} from '../Types';
import timeZonesReducer from './timeZones';

const appReducer = combineReducers({
  timeZonesReducer,
});

const rootReducer = (state, action) => {
  return appReducer(action.type === CLEAR_STORE ? undefined : state, action);
};

export default rootReducer;
