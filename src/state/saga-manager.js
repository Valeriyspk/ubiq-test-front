import rootSaga from "./root-saga";

const sagas = [rootSaga];

export const CANCEL_SAGAS_HMR = "CANCEL_SAGAS_HMR";

const SagaManager = {
  startSagas(sagaMiddleware) {
    sagas.forEach(saga => sagaMiddleware.run(saga));
  },

  cancelSagas(store) {
    store.dispatch({ type: CANCEL_SAGAS_HMR });
  }
};

export default SagaManager;
