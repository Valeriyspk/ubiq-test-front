import { eventChannel } from "redux-saga";
import { bindActionCreators } from "redux";
import { take, put, call } from "redux-saga/effects";

import config from "../config/websocket-config";

const connectSocket = () =>
  eventChannel(emitter => {
    const { socketURL, eventHandlers } = config;
    const ws = new window.WebSocket(socketURL);
    const boundEventHandlers = bindActionCreators(eventHandlers, emitter);
    ws.onopen = () => {
      boundEventHandlers.onopen(ws);
    };
    ws.onclose = boundEventHandlers.onclose;
    ws.onerror = boundEventHandlers.onerror;
    ws.onmessage = boundEventHandlers.onmessage;
    return ws.close;
  });

export default function*() {
  const socketChannel = yield call(connectSocket);
  while (true) {
    const eventAction = yield take(socketChannel);
    yield put(eventAction);
  }
}

// export function* handleWebsocketConnect() {
//   yield takeEvery(CONNECT_TO_WEBSOCKET, handleWebsocketConnectSaga);
// }

// export default function* startup() {
//   yield fork(handleWebsocketConnect);
// }
