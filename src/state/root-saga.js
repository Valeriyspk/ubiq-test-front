/* eslint-disable no-console */
import { all, fork } from "redux-saga/effects";

import apiStartup from "../api/sagas";

function* startup() {
  try {
    yield all([apiStartup()]);
  } catch (e) {
    if (e.name !== "SagaCancellationException") {
      console.log(e);
    }
  }
}

export default function makeRoot(store) {
  return function*() {
    yield fork(startup, store);
  };
}
