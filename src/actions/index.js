import moment from 'moment';
import * as actionTypes from './actionTypes';

function fakeApi() {
  return new Promise((resolve) => {
    resolve(moment().format('MMMM Do YYYY, h:mm:ss a'));
  });
}

function isCurrent(syncableState) {
  return syncableState && (!syncableState.get('isStale') || syncableState.get('isFetching'));
}

export const fetchTimeRequested = () => {
  return {
    type: actionTypes.FETCH_TIME_REQUESTED
  }
};

export const fetchTimeSuccess = time => {
  return {
    type: actionTypes.FETCH_TIME_SUCCESS,
    payload: time
  }
};

export const updateTime = () => {
  return {
    type: actionTypes.UPDATE_TIME
  }
};

export const fetchTime = () => {
  return (dispatch, getState) => {
    const syncableState = getState().timeState;

    if(isCurrent(syncableState)) {
      return;
    }
    dispatch(fetchTimeRequested());
    fakeApi().then(time => dispatch(fetchTimeSuccess(time)));
  }
};