import { combineReducers } from "redux";
import { logIn } from "./Login.reducer.js";

const rootReducer = combineReducers({
  logIn,
});

export default rootReducer;
