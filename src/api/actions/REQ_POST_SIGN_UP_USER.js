import { REQ_POST_SIGN_UP_USER } from "./types";

export default userName => ({
  type: REQ_POST_SIGN_UP_USER,
  userName
});
