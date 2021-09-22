import { all, fork } from "redux-saga/effects";
import { appSaga } from "./saga";

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
