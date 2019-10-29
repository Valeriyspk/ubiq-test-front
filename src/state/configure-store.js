import assign from "lodash/assign";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { take, cancel } from "redux-saga/effects";
import reducers from "./root-reducer";

function* actionHandlerFunc(action, handler) {
  // eslint-disable-next-line no-unused-expressions
  handler && handler(yield take(action));
}

function storeWrapper(state = {}, action) {
  return {
    reducers: reducers(state.reducers, action)
  };
}

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = compose;
  // if (DEVELOPMENT) {
  //     composeEnhancers = window
  //         .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // }
  const store = createStore(
    storeWrapper,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  return assign(store, {
    addActionHandler: (action, handler) =>
      sagaMiddleware.run(actionHandlerFunc, action, handler),
    removeActionHandler: actionHandler => cancel(actionHandler),
    runSaga: sagaMiddleware.run,
    close: () => store.dispatch(END)
  });
};
