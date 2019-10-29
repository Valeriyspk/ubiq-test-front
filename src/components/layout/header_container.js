import { connect } from "react-redux";

import { makeGetUserName } from "../login-page/reducer";

import reqPostSignOutUser from "../../api/actions/REQ_POST_SIGN_OUT_USER";

import Header from "./header";

const mapStateToProps = () => {
  const getUserName = makeGetUserName();
  return state => ({
    data: {
      userName: getUserName(state)
    }
  });
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      signOut: () => {
        dispatch(reqPostSignOutUser());
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
