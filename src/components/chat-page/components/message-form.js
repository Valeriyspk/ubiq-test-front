import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const MessageForm = ({ message, changeMessage }) => {
  const classes = useStyles();

  const handleChange = () => event => {
    changeMessage(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="login-form"
        label="Message"
        helperText={"Please enter your message"}
        className={classes.textField}
        value={message}
        onChange={handleChange()}
        margin="normal"
      />
    </form>
  );
};

MessageForm.propTypes = {
  message: PropTypes.string.isRequired,
  changeMessage: PropTypes.func.isRequired
};

export default MessageForm;
