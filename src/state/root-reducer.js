import { combineReducers } from "redux";

import api from "../api/reducer";
import loginPage from "../components/login-page/reducer";
import chatPage from "../components/chat-page/reducer";

export default combineReducers({ api, loginPage, chatPage });
