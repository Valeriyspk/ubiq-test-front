import { take, put, call } from "redux-saga/effects";

import {
  REQ_POST_SIGN_UP_USER,
  REQ_POST_SIGN_OUT_USER
} from "../actions/types";

import resPostSignUpUser from "../actions/RES_POST_SIGN_UP_USER";
import errPostSignUpUser from "../actions/ERR_POST_SIGN_UP_USER";
import resPostSignOutUser from "../actions/RES_POST_SIGN_OUT_USER";
import errPostSignOutUser from "../actions/ERR_POST_SIGN_OUT_USER";

import websocketConnect from "./websocket";

function signUpApi(userName) {
  return fetch("/api/login", {
    method: "POST",
    credentials: "same-origin",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    redirect: "follow",
    body: JSON.stringify({ userName })
  })
    .then(response => {
      return response.json().then(data => {
        return response.ok
          ? {
              response: data
            }
          : {
              error: data
            };
      });
    })
    .catch(() => {
      return { error: "Internal server errror" };
    });
}

function* signUp(userName) {
  const { response, error } = yield call(signUpApi, userName);
  if (!error) {
    yield put(resPostSignUpUser(response));
    yield call(websocketConnect);
  } else {
    yield put(errPostSignUpUser(error));
  }
}

export function* signUpReqest() {
  while (true) {
    const { userName } = yield take(REQ_POST_SIGN_UP_USER);
    yield call(signUp, userName);
  }
}

function signOutApi() {
  return fetch("/api/logout", {
    method: "POST",
    credentials: "same-origin",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    redirect: "follow"
  }).then(response => {
    return response.json().then(data => {
      return response.ok
        ? {
            response: data
          }
        : {
            error: data
          };
    });
  });
}

function* signOut() {
  const { response, error } = yield call(signOutApi);
  if (!error) {
    yield put(resPostSignOutUser(response));
  } else {
    yield put(errPostSignOutUser(error));
  }
}

export function* signOutReqest() {
  while (true) {
    yield take(REQ_POST_SIGN_OUT_USER);
    yield call(signOut);
  }
}
