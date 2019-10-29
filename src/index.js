/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./assets/themes/themes";

import MainContainer from "./pages/main/main_container";

import * as serviceWorker from "./libs/serviceWorker";

import configureStore from "./state/configure-store";
import makeRootSaga from "./state/root-saga";

const store = configureStore();
store.runSaga(makeRootSaga(store));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <MainContainer />
    </Provider>
  </ThemeProvider>,
  document.querySelector("#root")
);

serviceWorker.unregister();
