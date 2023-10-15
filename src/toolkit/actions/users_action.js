import axios from "axios";
import loginSlice, { loginReducers } from "../reducers/users_reducer";

function getLoginList(users) {
  return async (dispatch) => {
    const data = await axios
      .post("/login", users)
      .then((response) => {
        console.log(response);
        dispatch(loginReducers.getLoginList(response));
        // let jwtToken = response.headers.get("authorization");
        // localStorage.setItem("Authorization", jwtToken);
        // localStorage.setItem("email", response.data.email);
        // localStorage.setItem("name", response.data.name);
        // localStorage.setItem("isLogin", true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const loginActions = { getLoginList };
