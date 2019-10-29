import { connect } from "react-redux";

import { makeGetUserName } from "./reducer";

import { makeGetIsPending, makeGetLoginError } from "../../api/reducer";

import reqPostSignUpUser from "../../api/actions/REQ_POST_SIGN_UP_USER";
import changeUserName from "./actions/ON_CHANGE_USERNAME_INPUT";

import Login from "./login";

const mapStateToProps = () => {
  const getIsPending = makeGetIsPending();
  const getLoginError = makeGetLoginError();
  const getUserName = makeGetUserName();
  return state => ({
    data: {
      isPending: getIsPending(state),
      loginError: getLoginError(state),
      userName: getUserName(state)
    }
  });
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      signUp: userName => {
        dispatch(reqPostSignUpUser(userName));
      },
      changeUserName: userName => {
        dispatch(changeUserName(userName));
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
