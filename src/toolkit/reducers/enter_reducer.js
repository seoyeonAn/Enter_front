import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  enterList: [],
};

const enterSlice = createSlice({
  name: "enterlist",
  initialState,
  reducers: {
    getEnterList(state, action) {
      //console.log("enterList(reducer): ", action.payload.data);
      console.log("enterList(reducer): ", action.payload.data.enterList);
      state.enterList = action.payload.data.enterList;
      //state.enterList = action.payload.data;
      console.log("state: ", state.enterList);
    },
  },
});

export const enterReducers = enterSlice.actions;
export default enterSlice;
