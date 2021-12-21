import { actionTypes } from './constants';

const defaultState = {
  user: null,
};

export default function userPageReducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}