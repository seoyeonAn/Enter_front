import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoSlice from "./reducers/info_reducer";
import { slice } from "./reducers/mypage_reducer";
import algoSlice from "./reducers/algorithm_reducer";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "./reducers/users_reducer";

import persistStore from "redux-persist/es/persistStore";
import { mslice } from "./reducers/mainTaster_reducer";
import calendarSlice from "./reducers/calendar_reducer";

const store = configureStore({
  reducer: {
    information: infoSlice.reducer,
    user: slice.userSlice.reducer,
    diary: slice.diarySlice.reducer,
    enterlist: slice.enterSlice.reducer,
    algorithm: algoSlice.reducer,
    login: loginSlice.reducer,
    exhibition: mslice.exhibitionSlice.reducer,
    show: mslice.showSlice.reducer,
    museum: mslice.museumSlice.reducer,
    //메인페이지 달력
    calendar: calendarSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const reducers = combineReducers({
//   information: infoSlice.reducer,
//   user: slice.userSlice.reducer,
//   diary: slice.diarySlice.reducer,
//   enterlist: slice.enterSlice.reducer,
//   algorithm: algoSlice.reducer,
//   login: loginSlice.reducer,
// });

//config 작성
// const persistConfig = {
//   key: "root",
//   storage, // 로컬 스토리지에 저장
//   whitelist: [
//     "information",
//     "user",
//     "diary",
//     "enterlist",
//     "algorithm",
//     "login",
//   ],
// };

// const  persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       // serializableCheck: {
//       //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       // },
//     }),
// });

export default store;
