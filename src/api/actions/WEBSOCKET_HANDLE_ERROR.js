import { WEBSOCKET_HANDLE_ERROR } from "./types";

export default error => {
  return {
    type: WEBSOCKET_HANDLE_ERROR,
    error
  };
};
