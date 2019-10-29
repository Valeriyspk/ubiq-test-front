import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  // container: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const LoginForm = ({ userName, changeUserName, loginError }) => {
  const classes = useStyles();

  const handleChange = () => event => {
    changeUserName(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        error={!!loginError}
        id="login-form"
        label="Username"
        helperText={loginError || "Please enter your username"}
        className={classes.textField}
        value={userName}
        onChange={handleChange()}
        margin="normal"
      />
    </form>
  );
};

LoginForm.propTypes = {
  userName: PropTypes.string.isRequired,
  changeUserName: PropTypes.func.isRequired,
  loginError: PropTypes.string
};

export default LoginForm;
