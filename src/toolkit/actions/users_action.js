import axios from "axios";
import loginSlice, { loginReducers } from "../reducers/users_reducer";
import { algoActions } from "./algorithm_action";

function getLoginList(users) {
  return async (dispatch) => {
    const data = await axios
      .post("/login", users)
      .then((response) => {
        console.log("response : ", response);
        dispatch(loginReducers.getLoginList(response));
        //dispatch(algoActions.getAlgoList(response.data.email));

        var userAgent = navigator.userAgent;
        console.log(userAgent);

        // let jwtToken = response.headers.get("authorization");
        // localStorage.setItem("Authorization", jwtToken);
        // localStorage.setItem("email", response.data.email);
        // localStorage.setItem("name", response.data.name);
        // localStorage.setItem("isLogin", true);
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401)
          alert("아이디나 패스워드를 확인해주세요.");
      });
    // .catch((error) => {
    //   console.log(error);
    // });
  };
}

export const loginActions = { getLoginList };
