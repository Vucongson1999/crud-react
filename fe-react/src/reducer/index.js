import { combineReducers } from "redux";
import studentRuducer from "./studentReducer";

export default combineReducers({
  student: studentRuducer,
});
