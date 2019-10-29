import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const LoginButton = ({ userName, signUp, isPending }) => {
  const classes = useStyles();

  const handleLogin = () => {
    signUp(userName);
  };

  const disabled = isPending || userName.length === 0;

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Button
        disabled={disabled}
        variant="outlined"
        color="primary"
        className={classes.button}
        // endIcon
        onClick={handleLogin}
      >
        Login
      </Button>
    </form>
  );
};

LoginButton.propTypes = {
  userName: PropTypes.string.isRequired,
  signUp: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired
};

export default LoginButton;
