import { Map } from "immutable";
import * as types from "../actions/types";

const initState = Map({
  userName: ""
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.ON_CHANGE_USERNAME_INPUT:
      return state.merge({
        userName: action.userName
      });
    default:
      return state;
  }
};
