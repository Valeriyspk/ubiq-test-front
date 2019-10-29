import { connect } from "react-redux";

import { makeGetMessage } from "./reducer";
import { makeGetMessages, makeGetWebsocket } from "../../api/reducer";

import changeMessage from "./actions/ON_CHANGE_MESSAGE_INPUT";

import Chat from "./chat";

const mapStateToProps = () => {
  const getMessage = makeGetMessage();
  const getMessages = makeGetMessages();
  const getWebsocket = makeGetWebsocket();

  return state => ({
    data: {
      message: getMessage(state),
      messages: getMessages(state),
      websocket: getWebsocket(state)
    }
  });
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      changeMessage: message => {
        dispatch(changeMessage(message));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
