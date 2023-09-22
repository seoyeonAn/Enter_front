import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./reducers/info_reducer";
import enterSlice from "./reducers/enter_reducer";

const store = configureStore({
  reducer: {
    information: infoSlice.reducer,
    enterlist: enterSlice.reducer,
  },
});

export default store;
