import {combineReducers} from 'redux';
import authorsReducer from './authorsReducer';

const rootReducer = combineReducers({authorsReducer});

export default rootReducer;
