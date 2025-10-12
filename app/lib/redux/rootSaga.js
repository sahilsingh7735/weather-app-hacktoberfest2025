import { all } from "redux-saga/effects";
// import weatherSaga from "./weather/weatherSaga";

export default function* rootSaga() {
  yield all([
    // weatherSaga()
]);
}