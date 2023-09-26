import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  infoList: [],
  pv: { currentPage: 1 },
  infoDetail: {},
};

const infoSlice = createSlice({
  name: "information",
  initialState,
  reducers: {ij
    getInfoList(state, action) {
      state.infoList = action.payload.data.infoList;
      state.pv = action.payload.data.pv;
    },
    getInfoDetail(state, action) {
      //console.log("infoDetail(reducer): ", action.payload.data.infoDetail);
      state.infoDetail = action.payload.data;
    },
  },
});

export const infoReducers = infoSlice.actions;
export default infoSlice;
