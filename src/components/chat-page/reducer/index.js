import { combineReducers } from "redux";
import { createSelector } from "reselect";

import chatMessage from "./chat-message";

export default combineReducers({
  chatMessage
});

export const getMessage = state =>
  state.reducers.chatPage.chatMessage.get("message");

export const makeGetMessage = () =>
  createSelector(
    [getMessage],
    message => message
  );
