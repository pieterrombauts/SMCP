
import { combineReducers } from '@reduxjs/toolkit';
import menuAnimationReducer from '../slices/menuAnimationSlice'
import lobbyPositionsReducer from '../slices/lobbySlice'

const rootReducer = combineReducers({
  menuAnimationReducer,
  lobbyPositionsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer