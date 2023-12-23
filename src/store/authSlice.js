import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      // Update state to reflect a successful login
      state.status = true;
      state.userData = action.payload;
    //   or;
      //   action.payload.userData
    },
    logout(state) {
      // Update state to reflect a logout
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
