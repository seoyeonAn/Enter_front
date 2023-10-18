import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  algoList: [],
};

const algoSlice = createSlice({
  name: "algorithm",
  initialState,
  reducers: {
    getAlgoList(state, action) {
      console.log("action", action.payload.data);
      state.algoList = action.payload.data;
    },
  },
});

export const algoReducers = algoSlice.actions;

export default algoSlice;
