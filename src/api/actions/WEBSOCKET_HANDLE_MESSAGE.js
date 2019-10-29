import { WEBSOCKET_HANDLE_MESSAGE } from "./types";

export default message => {
  return {
    type: WEBSOCKET_HANDLE_MESSAGE,
    message
  };
};
