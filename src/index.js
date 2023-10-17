import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import  store from "./toolkit/store";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { configureStore } from "@reduxjs/toolkit";
// import { createBrowserHistory } from "history";

//npm install react-router-dom

const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
   <Provider store={store}>
     {/* <PersistGate loading={null} persistor={persistor}>     */}
    
     <BrowserRouter>   
        <App />      
        </BrowserRouter>
       
     {/* </PersistGate> */}
       </Provider> 
 
 
);

// reportWebVitals();
