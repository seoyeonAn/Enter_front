import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Use_Login.css";

const Use_Login = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const { email, password } = users;
  const handleValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/login", users)
      .then((response) => {
        console.log(response.data);
        let jwtToken = response.headers.get("authorization");
        console.log(jwtToken);

        localStorage.setItem("Authorization", jwtToken);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("authoRole", response.data.authoRole);
        localStorage.setItem("isLogin", true);

        setUsers({ email: "", password: "" });
      })
      .then((response) => {
        navigator("/");
        window.location.replace("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={onSubmit}>
        <div className="lg_area">
          <div className="form-group mb-1 userid">
            아이디
            <input
              type="email"
              className="form-control useid"
              name="email"
              value={email}
              placeholder="이메일"
              maxLength="50"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 userpass">
            비밀번호
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="비밀번호"
              onChange={handleValueChange}
            />
          </div>
          <div className="btnarea">
            <button type="submit" className="btn btn-primary Login">
              로그인
            </button>
            <Link className="btn btn-primary Join" to="/join">
              회원가입
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Use_Login;
