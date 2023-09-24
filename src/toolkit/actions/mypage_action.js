import axios from "axios"
import { userReducers } from "../reducers/mypage_reducer";

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

export const mypageActions = {
    getUserList
}