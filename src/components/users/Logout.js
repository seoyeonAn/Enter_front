import React, { useEffect } from "react";
import { persist } from "../../toolkit/store";

const Logout = () => {
  
  // const  onCheckLogout = async()=>{
  //   await persist.purse();
  // }
  useEffect(() => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("isLogin");
    localStorage.clear();
  //  onCheckLogout();
    
    window.location.replace("/");
  });
};

export default Logout;
