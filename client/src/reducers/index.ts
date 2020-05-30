
import { combineReducers } from '@reduxjs/toolkit';
import menuAnimationReducer from '../slices/menuAnimationSlice'
import lobbyPositionsReducer from '../slices/lobbySlice'
import dataReducer from '../slices/dataSlice'

const rootReducer = combineReducers({
  menuAnimationReducer,
  lobbyPositionsReducer,
  dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer