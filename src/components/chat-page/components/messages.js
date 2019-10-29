/* eslint-disable no-use-before-define */
import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
  message: {
    "margin-bottom": "10px",
    display: "grid",
    "grid-template-columns": "50px auto",
    "align-items": "center"
  }
}));

const Messages = ({ messages }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {messages.map((message, index) => {
        return getListItem(message, index, classes);
      })}
    </div>
  );
};

const getListItem = (message, index, classes) => {
  return (
    <div key={index} className={classes.message}>
      <Avatar>{message.from.charAt(0).toUpperCase()}</Avatar>
      <div className={classes.messageBody}>
        {`${message.from}: ${message.message}`}
      </div>
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Messages;
