import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./reducers/info_reducer";

const store = configureStore({
  reducer: {
    information: infoSlice.reducer,
  },
});

export default store;
