import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  header: {
    display: "grid",
    "justify-content": "space-between",
    "align-items": "center",
    "grid-gap": "30px",
    "grid-template-columns": "1px auto",
    backgroundColor: theme.palette.secondary
  },
  avatar: {
    display: "grid",
    "grid-template-columns": "50px auto",
    "align-items": "center"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Header = ({ data, actions }) => {
  const { userName } = data;
  const { signOut } = actions;
  const classes = useStyles();

  const handleLogout = () => {
    signOut();
  };
  return (
    <div className={classes.header}>
      <div className={classes.avatar}>
        <Avatar>{userName.charAt(0).toUpperCase()}</Avatar>
        <div className={classes.messageBody}>{userName}</div>
      </div>

      <form className={classes.container} noValidate autoComplete="off">
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </form>
    </div>
  );
};

const dataShape = {
  userName: PropTypes.string.isRequired
};

const actionsShape = {
  signOut: PropTypes.func.isRequired
};

Header.propTypes = {
  data: PropTypes.shape(dataShape).isRequired,
  actions: PropTypes.shape(actionsShape).isRequired
};

export default Header;
