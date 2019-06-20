import * as types from '../actions/actionTypes';

export const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_FRIENDS:
      return state;
    default:
      return state;
  }
};

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case types.AUTH:
      return true;
    default:
      return state;
  }
};
