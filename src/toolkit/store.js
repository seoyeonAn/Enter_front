import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./reducers/info_reducer";
import { slice } from "./reducers/mypage_reducer";
import algoSlice from "./reducers/algorithm_reducer";

const store = configureStore({
  reducer: {
    information: infoSlice.reducer,
    user: slice.userSlice.reducer,
    diary: slice.diarySlice.reducer,
    enterlist: slice.enterSlice.reducer,
    algorithm: algoSlice.reducer,
  },
});

export default store;
