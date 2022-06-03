import { all } from "@redux-saga/core/effects";
import useSaga from "./useSaga";
import statusSaga from "./statusSaga";
function* rootSaga() {
    yield all([
      ...useSaga,
      ...statusSaga
    ]);
  }
  export default rootSaga;