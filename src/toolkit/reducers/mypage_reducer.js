import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userList: [],
  diaryList: [],
  enterList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserList(state, action) {
      state.userList = action.payload.userList;
    },
  },
});

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    getDiaryList(state, action) {
      state.diaryList = action.payload.diaryList;
    },
  },
});

const enterSlice = createSlice({
  name: "enterlist",
  initialState,
  reducers: {
    getEnterList(state, action) {
      state.enterList = action.payload.enterList;
    },
  },
});

export const userReducers = userSlice.actions;
export const diaryReducers = diarySlice.actions;
export const enterReducers = enterSlice.actions;

//export default userSlice;
export const slice = { userSlice, diarySlice, enterSlice };
