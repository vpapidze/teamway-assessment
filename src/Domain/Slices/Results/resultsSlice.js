import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  finished: false,
  answers: {}
}

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    updateResults(state, action) {
      state.finished = true;
      state.answers = action.payload;
    },
    clearResults(state, action) {
      state.finished = false;
      state.answers = initialState.answers;
    }
  }
})

export const { updateResults, clearResults } = resultsSlice.actions

export default resultsSlice.reducer;
