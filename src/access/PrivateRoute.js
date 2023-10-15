import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, RouteComponent }) => {
  const isLogin = localStorage.getItem("isLogin");
  console.log(isLogin);

  // isAuth : 인증에 반드시 필요한 페이지인데
  // isLogin : 인증이 된 페이지를 요청한 경우
  if (isAuth && isLogin) {
    return <RouteComponent />;
  }
  // 인증이 반드시 필요한 페이지인데 인증이 안된 페이지를 요청한 경우
  else if (isAuth && !isLogin) {
    return <Navigate to="/login" />;
  }

  // 인증이 필요하지 않은 페이지
  else {
    return <RouteComponent />;
  }

  //View는 필요없음
};

export default PrivateRoute;
