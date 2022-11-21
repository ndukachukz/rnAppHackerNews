/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const AppSlice = createSlice({
  name: 'appSlice',
  initialState: {
    isLoading: false,
    refreshing: false,
    content: [],
  },
  reducers: {
    toggleRefreshing(state, action) {
      state.refreshing = action.payload;
    },
    toggleIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setContent(state, action) {
      state.content = [...action.payload];
    },
  },
});

export const {toggleIsLoading, toggleRefreshing, setContent} = AppSlice.actions;

export default AppSlice.reducer;
