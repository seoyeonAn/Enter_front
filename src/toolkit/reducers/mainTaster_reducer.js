import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    exhibitionList: [],
    showList: [],
    museum: [],
};

const exhibitionSlice = createSlice({
    name: "exhibition",
    initialState,
    reducers: {
        getExhibitionList(state, action) {
            state.exhibitionList = action.payload.exhibitionList;
        },
    },
});

const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        getShowList(state, action) {
            state.showList = action.payload.showList;
        },
    },
});

const museumSlice = createSlice({
    name: "museum",
    initialState,
    reducers: {
        getMuseumList(state, action) {
            state.museumList = action.payload.museumList;
        },
    },
});

export const exhibitionReducers = exhibitionSlice.actions;
export const showReducers = showSlice.actions;
export const museumReducers = museumSlice.actions;

export const mslice = { 
    exhibitionSlice, 
    showSlice, 
    museumSlice };