import { Map } from "immutable";
import * as types from "../actions/types";

const initState = Map({
  isLogedIn: false,
  isPending: false,
  loginError: null
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.REQ_POST_SIGN_UP_USER:
      return state.merge({
        isPending: true,
        loginError: null
      });
    case types.RES_POST_SIGN_UP_USER:
      return state.merge({
        isLogedIn: true,
        isPending: false,
        loginError: null
      });
    case types.ERR_POST_SIGN_UP_USER:
      return state.merge({
        isPending: false,
        loginError: action.error.error
      });
    case types.REQ_POST_SIGN_OUT_USER:
      return state.merge({
        isPending: true,
        loginError: null
      });
    case types.RES_POST_SIGN_OUT_USER:
      return initState;
    case types.ERR_POST_SIGN_OUT_USER:
      return state.merge({
        isPending: false,
        loginError: action.error
      });
    default:
      return state;
  }
};
