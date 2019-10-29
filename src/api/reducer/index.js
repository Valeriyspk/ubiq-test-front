import { combineReducers } from "redux";
import { createSelector } from "reselect";

import login from "./login";
import websocket from "./websocket";

export default combineReducers({
  login,
  websocket
});

export const getIsLogedIn = state => state.reducers.api.login.get("isLogedIn");

export const getIsPending = state => state.reducers.api.login.get("isPending");

export const getLoginError = state =>
  state.reducers.api.login.get("loginError");

export const getWebsocket = state =>
  state.reducers.api.websocket.get("websocket");

export const getMessages = state =>
  state.reducers.api.websocket.get("messages");

export const makeGetIsLogedIn = () =>
  createSelector(
    [getIsLogedIn],
    isLogedIn => isLogedIn
  );

export const makeGetIsPending = () =>
  createSelector(
    [getIsPending],
    isPending => isPending
  );

export const makeGetLoginError = () =>
  createSelector(
    [getLoginError],
    loginError => loginError
  );

export const makeGetWebsocket = () =>
  createSelector(
    [getWebsocket],
    ws => ws
  );

export const makeGetMessages = () =>
  createSelector(
    [getMessages],
    messages => messages
  );
