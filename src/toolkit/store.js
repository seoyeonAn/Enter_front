
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import infoSlice from "./reducers/info_reducer";
import { slice } from "./reducers/mypage_reducer";
import algoSlice from "./reducers/algorithm_reducer";
import { persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import persistStore from "redux-persist/es/persistStore";

import logger from 'redux-logger'


// const store = configureStore({
//   reducer: {
//     information: infoSlice.reducer,
//     user: slice.userSlice.reducer,
//     diary: slice.diarySlice.reducer,
//     enterlist: slice.enterSlice.reducer,
//     algorithm: algoSlice.reducer,
//   },
// });

const reducers = combineReducers({
  information: infoSlice.reducer,
  user: slice.userSlice.reducer,
  diary: slice.diarySlice.reducer,
  enterlist: slice.enterSlice.reducer,
  algorithm: algoSlice.reducer,
});

// config 작성
const persistConfig = {
  key: "root",
  storage, // 로컬 스토리지에 저장
  whitelist: ["information", "user", "diary", "enterlist", "algorithm"],
};

const persistedReducer = persistReducer(persistConfig, reducers);



const store = configureStore({
  reducer: persistedReducer,
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
  
 });



export default store; 
