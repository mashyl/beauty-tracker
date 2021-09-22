import { call, put, takeLatest, fork, all } from "redux-saga/effects";
import {
  handleError,
  setDataKeysToLocalStorage,
  showSuccess,
} from "utils/helpers";
import { history } from "utils/history";
import * as ActionTypes from "./actions";
import * as ActionInterfaces from "./interfaces";
import Api from "./api";
import { ROUTES } from "constants/Routes";

function* deleteObject({ payload }: ActionInterfaces.DeleteObject) {
  try {
    const { data } =
      yield call(Api.deleteObject, payload.data);
    yield put(ActionTypes.deleteObject.success(data));
    setDataKeysToLocalStorage(data);
  } catch (e) {
    handleError(e);
    yield put(ActionTypes.deleteObject.failure(e));
  }
}

function* deleteObjectSaga() {
  yield takeLatest(ActionTypes.DELETE_OBJ, deleteObject);
}



export const appSaga = function* rootSaga() {
  yield all([
    fork(deleteObjectSaga),
  ]);
};
