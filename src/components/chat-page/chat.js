import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import MessageForm from "./components/message-form";
import MessageSendButton from "./components/message-send-button";
import Messages from "./components/messages";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    "grid-gap": "10px",
    "grid-template-rows": "9fr 1fr",
    backgroundColor: theme.palette.background.paper
  }
}));

const Main = ({ data, actions }) => {
  const classes = useStyles();
  const { message, messages, websocket } = data;
  const { changeMessage } = actions;
  return (
    <div className={classes.container}>
      <Messages messages={messages} />
      <div>
        <MessageForm message={message} changeMessage={changeMessage} />
        <MessageSendButton message={message} websocket={websocket} />
      </div>
    </div>
  );
};

const dataShape = {
  message: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  websocket: PropTypes.object.isRequired
};

const actionsShape = {
  changeMessage: PropTypes.func.isRequired
};

Main.propTypes = {
  data: PropTypes.shape(dataShape).isRequired,
  actions: PropTypes.shape(actionsShape).isRequired
};

export default Main;
