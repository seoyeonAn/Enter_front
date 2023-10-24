import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  calendarList: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    getCalendarList(state, action) {
      state.calendarList = action.payload.data;
    },
  },
});

export const calendarReducers = calendarSlice.actions;

export default calendarSlice;
