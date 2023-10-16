import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  loginList: [],
  jwtToken: "",
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLoginList(state, action) {
      // console.log("payload", action.payload.headers);
      // console.log("auth", action.payload.headers.authorization);
      state.loginList = action.payload.data;
      state.jwtToken = action.payload.headers.authorization;
    },
  },
});

export const loginReducers = loginSlice.actions;

export default loginSlice;
