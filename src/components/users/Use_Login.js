import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/user.css";

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
    console.log("aa");
    await axios
      .post("/login", users)
      .then((response) => {
        console.log(response.data);
        let jwtToken = response.headers.get("authorization");
        console.log(jwtToken);

        localStorage.setItem("Authorization", jwtToken);
        localStorage.setItem("email", response.data.email);
        console.log("email" + response.data.email);
        localStorage.setItem("isLogin", true);

        //멤버정보 초기화
        setUsers({ email: "", password: "" });
      })
      .then((response) => {
        navigator("/");
        window.location.replace("/");
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401)
          alert("아이디나 패스워드를 확인해주세요.");
      });
  };

  return (
    <>
      <h1 className="title">로그인</h1>
      <form onSubmit={onSubmit}>
        <div className="lg_area">
          <div className="form-group mb-1 userid">
            아이디
            <input
              type="email"
              id="email"
              className="form-control useid"
              name="email"
              value={email}
              placeholder="이메일"
              maxLength="20"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 userpass">
            비밀번호
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={password}
              placeholder="비밀번호"
              onChange={handleValueChange}
            />
          </div>
          <div className="btnarea">
            <button type="submit" className="btn btn-primary">
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
