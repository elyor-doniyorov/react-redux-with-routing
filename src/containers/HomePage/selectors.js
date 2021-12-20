import { createSelector } from "reselect";
import homePageReducer from './reducers';

const homePageState = (state) => state.homePageReducer;

export const makeSelectUsers = createSelector(homePageState, homePageReducer => homePageReducer.users);
