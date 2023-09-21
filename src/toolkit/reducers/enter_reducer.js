import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  enterlist: [],
};

const enterSlice = createSlice({
  name: "enter",
  initialState,
  reducers: {
    getEnterList(state, action) {
      console.log("enterList(reducer): ", action.payload.data);
      //console.log("enterList(reducer): ", action.payload.data.enterlist);
      //state.enterlist = action.payload.data.enterlist;
      state.enterlist = action.payload.data;
      console.log("state: ", state.enterlist);
    },
  },
});

export const enterReducers = enterSlice.actions;
export default enterSlice;
