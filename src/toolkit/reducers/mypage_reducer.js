import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    userList:[],
    diaryList: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserList(state, action) {
            state.userList = action.payload.data.userList;
        }
    }
})

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        getDiaryList(state, action) {
            state.diaryList = action.payload.data.diaryList;
        }
    }
})

export const userReducers = userSlice.actions;
export const diaryReducers = diarySlice.actions;

//export default userSlice;
export const slice = { userSlice, diarySlice };