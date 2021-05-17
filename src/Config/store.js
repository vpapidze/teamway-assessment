import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

import rootReducer from 'Domain/rootReducer';
import { FAILURE_ACTION_TYPE, REQUEST_ACTION_TYPE, SUCCESS_ACTION_TYPE } from 'Domain/constants';

const middleware = [
  ...getDefaultMiddleware(),
  loadingBarMiddleware({
    promiseTypeSuffixes: [REQUEST_ACTION_TYPE, SUCCESS_ACTION_TYPE, FAILURE_ACTION_TYPE],
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
