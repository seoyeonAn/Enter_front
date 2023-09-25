import axios from "axios";
import { diaryReducers, userReducers } from "../reducers/mypage_reducer";


function getUserList() {   
   
    return async (dispatch) => {       
        const data = await axios
        .get("/mypage")
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });     
        console.log(data);
        dispatch(userReducers.getUserList({data}));
    };
}

function getDiaryList() {
    return async (dispatch) => {
        const data = await axios
        .get("/mypage")
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
        dispatch(diaryReducers.getDiaryList({data}));
    }
    

}

export const mypageActions = {
    getUserList, getDiaryList
}