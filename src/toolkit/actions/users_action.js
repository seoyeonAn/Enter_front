import axios from "axios";
import loginSlice, { loginReducers } from "../reducers/users_reducer";

import { useNavigate } from "react-router-dom";

function getLoginList(users) {
  let response;
  return async (dispatch) => {
    const data = await axios
      .post("/login", users)
      .then((response) => {
        console.log("response : ", response);
        if(response.status === 200){
        dispatch(loginReducers.getLoginList(response));
        }
        // let jwtToken = response.headers.get("authorization");
        // localStorage.setItem("Authorization", jwtToken);
        // localStorage.setItem("email", response.data.email);
        // localStorage.setItem("name", response.data.name);
        // localStorage.setItem("isLogin", true);
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data.message);
        // if (error.response.status === 401)
        //   alert("아이디나 패스워드를 확인해주세요.");
      });
  };
}

export const loginActions = { getLoginList };
