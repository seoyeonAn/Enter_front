import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("isLogin");
    localStorage.clear();
    window.location.replace("/");
  });
};

export default Logout;
