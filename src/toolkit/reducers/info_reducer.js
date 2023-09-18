import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  infoList: [],
  pv: { currentPage: 1 },
};

const infoSlice = createSlice({
  name: "information",
  initialState,
  reducers: {
    getInfoList(state, action) {
      console.log("infoList(reducer): ", action.payload.data);
      state.infoList = action.payload.data.infoList;
      state.pv = action.payload.data.pv;
    },
  },
});

export const infoReducers = infoSlice.actions;
export default infoSlice;
