import startsWith from 'lodash/startsWith';
import get from 'lodash/get';

import { error, processed, processing, REQUEST } from './constants';

export const genInitState = (namespace, method) => ({
  [namespace + processing[method]]: false,
  [namespace + processed[method]]: false,
  [namespace + error[method]]: null,
});

/* eslint-disable no-param-reassign */
export const genActions = ({
  namespace,
  asyncThunk,
  requestFn = () => {},
  successFn = () => {},
  failureFn = () => {},
  method = REQUEST,
}) => ({
  [asyncThunk.pending]: (state, action) => {
    state[namespace + processing[method]] = true;
    state[namespace + processed[method]] = false;
    state[namespace + error[method]] = null;
    requestFn(state, action);
  },
  [asyncThunk.fulfilled]: (state, action) => {
    state[namespace + processing[method]] = false;
    state[namespace + processed[method]] = true;
    successFn(state, action);
  },
  [asyncThunk.rejected]: (state, action) => {
    state[namespace + processing[method]] = false;
    state[namespace + error[method]] = action;
    failureFn(state, action);
  },
});
/* eslint-enable no-param-reassign */

export const isActionType = (action = '', actionType) => action.endsWith(actionType);
export const isResponseOk = response => !startsWith(String(response?.payload?.status), '4');
export const getErrorMsg = response => get(response, 'payload.data.description', '');
