import { tickNextTime } from "./actions";
import { put, all, select } from "redux-saga/effects";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* backupData() {
  while (true) {
    yield delay(1000 * 10);
    const storeData = yield select(state => state);

    localStorage.setItem("timekeeper", JSON.stringify(storeData));
  }
}

function* tickLoop() {
  while (true) {
    yield delay(1000);
    yield put(tickNextTime());
  }
}

export default function* rootSaga() {
  yield all([tickLoop(), backupData()]);
}
