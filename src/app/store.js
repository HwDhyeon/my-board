import { configureStore, createSlice } from '@reduxjs/toolkit';

const userStatus = createSlice({
  name: 'UserStatusReducer',
  initialState: {
    isLoggedIn: false,
    user: {
      name: null,
      email: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = '';
    },
  },
});

export const { login, logout } = userStatus.actions;

export default configureStore({ reducer: userStatus.reducer });
