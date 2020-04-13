import { createSlice } from '@reduxjs/toolkit';

const lobbySlice = createSlice({
  name: 'lobby',
  initialState: {
    lobbyID: "",
    userRole: "",
    consoles: { 
      spartan: 0,
      cronus: 0,
      ethos: 0,
      bme: 0,
      flight: 0,
      capcom: 0
    }
  },
  reducers: {
    updateLobbyID(state, action) {
      state.lobbyID = action.payload.lobbyID
    },
    updateUserRole(state, action) {
      state.userRole = action.payload.userRole
    },
    updateConsoles(state, action) {
      state.consoles = action.payload.consoles
    }
  }
})

export const { updateConsoles, updateLobbyID, updateUserRole } = lobbySlice.actions;

export default lobbySlice.reducer;