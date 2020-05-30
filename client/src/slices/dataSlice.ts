import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    time: ""
  },
  reducers: {
    updateTime(state, action) {
      state.time = action.payload.time
    }
  }
})

export const { updateTime } = dataSlice.actions;

export default dataSlice.reducer;