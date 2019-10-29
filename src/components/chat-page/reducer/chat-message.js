import { Map } from "immutable";
import * as types from "../actions/types";

const initState = Map({
  message: ""
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.ON_CHANGE_MESSAGE_INPUT:
      return state.merge({
        message: action.message
      });
    default:
      return state;
  }
};
