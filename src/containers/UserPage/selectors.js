import { createSelector } from "reselect";
import userPageReducer from './reducers';

const userPageState = (state) => state.userPageReducer;

export const makeSelectUsers = createSelector(userPageState, userPageReducer => userPageReducer.user);
