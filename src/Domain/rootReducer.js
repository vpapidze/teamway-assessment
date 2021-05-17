import { combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import tests from './Slices/Tests/testsSlice';
import results from './Slices/Results/resultsSlice';

const rootReducer = combineReducers({
  tests,
  results,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
