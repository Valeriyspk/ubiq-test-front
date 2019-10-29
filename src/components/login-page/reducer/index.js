import { combineReducers } from "redux";
import { createSelector } from "reselect";

import user from "./user";

export default combineReducers({
  user
});

export const getUserName = state =>
  state.reducers.loginPage.user.get("userName");

export const makeGetUserName = () =>
  createSelector(
    [getUserName],
    userName => userName
  );
