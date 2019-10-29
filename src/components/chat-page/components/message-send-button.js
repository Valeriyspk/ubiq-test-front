import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const SendMessageButton = ({ message, websocket }) => {
  const classes = useStyles();

  const handleSendMessage = () => {
    if (websocket) websocket.send(message);
  };

  const disabled = message.length === 0;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Button
        disabled={disabled}
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </form>
  );
};

SendMessageButton.propTypes = {
  message: PropTypes.string.isRequired,
  websocket: PropTypes.object.isRequired
};

export default SendMessageButton;
