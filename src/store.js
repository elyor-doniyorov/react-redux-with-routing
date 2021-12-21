import { createStore, combineReducers } from "redux";
import homePageReducer from "./containers/HomePage/reducers";
import userPageReducer from "./containers/UserPage/reducer";

const reducers = combineReducers({
  homePageReducer,
  userPageReducer,
});

export default createStore(reducers);
