import counterReducer from "./like-counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
});

export default allReducers;
