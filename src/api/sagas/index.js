import { fork } from "redux-saga/effects";

import { signUpReqest, signOutReqest } from "./login";

export default function* startup() {
  yield fork(signUpReqest);
  yield fork(signOutReqest);
}
