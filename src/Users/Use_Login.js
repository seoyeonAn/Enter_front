import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Use_Login.css";

const Use_Login = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState({
    Id: "",
    usersPass: "",
  });

  const handleValueChange = (e) => {
    setUsers({ ...users[e.targer.name] });
  };

  return (
    <form>
      <h1>로그인</h1>
      <div className="lg_area">
        <div className="form-group mb-1 userid">
          아이디
          <input
            type="usersid"
            className="form-control useid"
            name="userid"
            onChange={handleValueChange}
          />
        </div>
        <div className="form-group mb-1 userpass">
          비밀번호
          <input
            type="password"
            className="form-control"
            name="usersName"
            onChange={handleValueChange}
          />
        </div>
        <div className="btnarea">
          <button type="submit" className="btn btn-primary Login">
            로그인
          </button>
          <button type="submit" className="btn btn-primary Join">
            회원가입
          </button>
        </div>
      </div>
    </form>
  );
};

export default Use_Login;
