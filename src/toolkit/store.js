import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./reducers/info_reducer";
import enterSlice from "./reducers/enter_reducer";
import userSlice from "./reducers/mypage_reducer"

const store = configureStore({
  reducer: {
    information: infoSlice.reducer,
    enterlist: enterSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
