import * as actionTypes from '../actions/actionTypes';
import { Map } from 'immutable';

const initalSyncableState = Map({
  isStale: true,
  isFetching: false,
  value: null
});

export default (state = initalSyncableState, action) => {
  switch(action.type) {
    
    case actionTypes.UPDATE_TIME:
      return state.set('isStale', true);

    case actionTypes.FETCH_TIME_REQUESTED:
      return state.set('isFetching', true);

    case actionTypes.FETCH_TIME_SUCCESS:
      return state
        .set('value', action.payload)
        .set('isStale', false)
        .set('isFetching', false);

    default:
      return state;
  }
}