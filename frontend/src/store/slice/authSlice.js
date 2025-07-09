import { createSlice } from '@reduxjs/toolkit';
// import Cookies from "js-cookie";

// const token = Cookies.get("token"); 
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login,logout } = authSlice.actions;
export default authSlice.reducer;