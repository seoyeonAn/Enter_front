import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    userList:[],
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

export const userReducers = userSlice.actions;
export default userSlice;