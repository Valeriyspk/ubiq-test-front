import { WEBSOCKET_CONNECTION_OPEN } from "./types";

export default webSocket => {
  return {
    type: WEBSOCKET_CONNECTION_OPEN,
    webSocket
  };
};
