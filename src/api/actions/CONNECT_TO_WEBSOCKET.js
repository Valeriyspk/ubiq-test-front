import { CONNECT_TO_WEBSOCKET } from "./types";

export default config => {
  return {
    type: CONNECT_TO_WEBSOCKET,
    config: {
      socketURL: config.socketURL,
      subscribeData: config.subscribeData,
      eventHandlers: config.eventHandlers
    }
  };
};
