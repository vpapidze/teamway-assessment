import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import apiUrls from 'Config/api-urls';
import { REQUEST } from 'Domain/constants';
import { genActions, genInitState } from 'Domain/utils';
import request from 'Services/request';

export const getTests = createAsyncThunk('tests/getTests', async () => {
  const response = await request.get({
    route: apiUrls.api.tests.getTests,
    token: true,
  });
  return response;
});

const testsSlice = createSlice({
  name: 'auth',
  initialState: {
    ...genInitState('getTests', REQUEST),
    tests: [],
  },
  extraReducers: {
    ...genActions({
      namespace: 'getTests',
      asyncThunk: getTests,
      method: REQUEST,
      successFn: (state, action) => {
        state.tests = action.payload.data;
      },
    }),
  },
});

export default testsSlice.reducer;
