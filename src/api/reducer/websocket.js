/* eslint-disable no-case-declarations */
import { Map } from "immutable";
import * as types from "../actions/types";

const initState = Map({
  websocket: {},
  messages: []
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.WEBSOCKET_CONNECTION_OPEN:
      return state.merge({
        websocket: action.webSocket
      });
    case types.WEBSOCKET_CONNECTION_CLOSED:
      return state.merge({
        websocket: null
      });
    case types.WEBSOCKET_HANDLE_MESSAGE:
      const newMessage = JSON.parse(action.message.data);
      if (newMessage.payload.from) {
        const stateMessages = state.get("messages");
        const mergedMessages = stateMessages.concat([newMessage.payload]);
        return state.merge({
          messages: mergedMessages
        });
        // eslint-disable-next-line no-else-return
      } else {
        return state;
      }
    default:
      return state;
  }
};
