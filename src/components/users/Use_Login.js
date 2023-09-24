import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/Use_Login.css"

const Use_Login = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState({
    Id: "",
    usersPass: "",
  });

  const { usersEmail, usersPass } = users;
  const handleValueChange = (e) => {
    setUsers({ ...users[e.target.name] });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/login", users)
      .then((response) => {
        navigator("/");
        window.location.replace("/"); //현재 페이지가 루트 경로로 리디렉션되어 현재 페이지의 내용은 제거되고 새로운 페이지가 로드
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form>
      <h1>로그인</h1>
      <div className="lg_area">
        <div className="form-group mb-1 userid">
          아이디
          <input
            type="email"
            className="form-control useid"
            name="email"
            onChange={handleValueChange}
          />
        </div>
        <div className="form-group mb-1 userpass">
          비밀번호
          <input
            type="password"
            className="form-control"
            name="usersPass"
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
