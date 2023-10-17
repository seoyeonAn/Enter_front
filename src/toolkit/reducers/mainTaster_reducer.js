import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    exhibitionList: [],
  };

  const exhibitionSlice = createSlice({
    name: "exhibition",
    initialState,
    reducers: {
        getMainTasterList(state, action) {
            state.exhibitionList = action.payload.exhibitionList;
        },
    },
  });

  export const exhibitionReducers = exhibitionSlice.actions;

  export const slice = { exhibitionSlice };