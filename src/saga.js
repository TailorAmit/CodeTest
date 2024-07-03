import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import { LoginTypes, RegisterTypes } from "./types";
import axios from "axios";

function* loginSaga() {
  try {
    const res = yield axios.get(
      "https://pazuru-com-api.stage.norway.everymatrix.com/v1/player/login/player"
    );
    const data = yield res.json();
    yield put(LoginSucess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* RagisterSaga(data) {
  try {
    const res = yield fetch(
      "https://pazuru-com-api.stage.norway.everymatrix.com/v1/player/login/player",
      {
        body: data,
      }
    );
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(LoginTypes.lOADING, loginSaga)]);
  yield all([takeLatest(RegisterTypes.lOADING, RagisterSaga)]);
}

export default rootSaga;
