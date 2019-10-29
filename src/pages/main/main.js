import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import HeaderContainer from "../../components/layout/header_container";
import LoginContainer from "../../components/login-page/login_container";
import ChatContainer from "../../components/chat-page/chat_container";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    padding: "20px",
    display: "grid",
    "grid-gap": "10px",
    "grid-template-rows": "50px 90%"
  }
}));

const Main = ({ isLogedIn }) => {
  const classes = useStyles(isLogedIn);

  return (
    <div className={classes.container}>
      {isLogedIn ? <HeaderContainer /> : null}
      {!isLogedIn ? <LoginContainer /> : <ChatContainer />}
    </div>
  );
};

Main.propTypes = {
  isLogedIn: PropTypes.bool.isRequired
};

export default Main;
