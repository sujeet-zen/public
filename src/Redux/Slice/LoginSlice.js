import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    username: null
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      console.log('state, action.payload', state, action.payload);            
      state.isLoggedIn = action.payload;
    },
    setLoggedInUser: (state, action) => {
      state.username = action.payload;
    },    
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const {setIsLoggedIn, setLoggedInUser, loginSuccess, logout} = loginSlice.actions;
export default loginSlice.reducer;
