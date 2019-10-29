import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import LoginForm from "./components/login-form";
import LoginButton from "./components/login-button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    "justify-items": "center",
    "align-items": "center",
    backgroundColor: theme.palette.background.paper
  }
}));

const Login = ({ data, actions }) => {
  const { userName, loginError, isPending } = data;
  const { changeUserName, signUp } = actions;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <LoginForm
          userName={userName}
          changeUserName={changeUserName}
          loginError={loginError}
        />
        <LoginButton
          userName={userName}
          signUp={signUp}
          isPending={isPending}
        />
      </div>
    </div>
  );
};

const dataShape = {
  isPending: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  userName: PropTypes.string.isRequired
};

const actionsShape = {
  signUp: PropTypes.func.isRequired,
  changeUserName: PropTypes.func.isRequired
};

Login.propTypes = {
  data: PropTypes.shape(dataShape).isRequired,
  actions: PropTypes.shape(actionsShape).isRequired
};

export default Login;
