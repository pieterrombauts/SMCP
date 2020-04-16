import { createSlice } from '@reduxjs/toolkit';

const menuAnimationSlice = createSlice({
  name: 'menuAnimations',
  initialState: { home: 'show', join: 'hide', lobby: 'hide', game: 'hide'},
  reducers: {
    animateMenus(state, action) {
      state.home = action.payload.home;
      state.join = action.payload.join;
      state.lobby = action.payload.lobby;
      state.game = action.payload.game;
    }
  }
})

export const { animateMenus } = menuAnimationSlice.actions;

export default menuAnimationSlice.reducer;