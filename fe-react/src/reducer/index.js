import { combineReducers } from "redux";
import useRuducer from "./useReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  student: useRuducer,
  status: statusReducer
});
