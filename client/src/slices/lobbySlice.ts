import { createSlice } from '@reduxjs/toolkit';

const lobbySlice = createSlice({
  name: 'lobby',
  initialState: {
    lobbyID: "",
    userRole: "",
    consoles: { 
      cosmo: false,
      spartan: false,
      cronus: false,
      ethos: false,
      payload: false,
      ops: false,
      adco: false,
      robo: false,
      eva: false,
      bme: false,
      flight: false,
      capcom: false
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