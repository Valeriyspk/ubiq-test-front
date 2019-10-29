import socketOpen from "../actions/WEBSOCKET_CONNECTION_OPEN";
import socketClose from "../actions/WEBSOCKET_CONNECTION_CLOSED";
import socketError from "../actions/WEBSOCKET_HANDLE_ERROR";
import socketMessage from "../actions/WEBSOCKET_HANDLE_MESSAGE";

export default {
  // Create-react-app have bug related with websockets connection proxying. Provided workarounds didn't worked for me,
  // and due time limit I had no option to dig deeper.
  // Next line is temporary soluton for dev and should be revised.
  // Bug description: https://github.com/facebook/create-react-app/issues/5280
  socketURL: "ws://localhost:8080/socket",
  subscribeData: "mayday",
  eventHandlers: {
    onopen: socketOpen,
    onclose: socketClose,
    onerror: socketError,
    onmessage: socketMessage
  }
};
