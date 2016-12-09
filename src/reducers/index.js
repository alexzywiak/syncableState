import { combineReducers } from 'redux';
import timeReducer from './timeReducer';

const rootReducer = combineReducers({
  timeState: timeReducer
});

export default rootReducer;
