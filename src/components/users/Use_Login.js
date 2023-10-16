import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/user.css";
import { useDispatch, useSelector } from "react-redux";
import { algoActions } from "../../toolkit/actions/algorithm_action";
import loginSlice from "../../toolkit/reducers/users_reducer";
import { loginActions } from "../../toolkit/actions/users_action";

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

  const loginList = useSelector((state) => state.login.loginList);

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("aa");
    //  const infoList = useSelector((state) => state.information.infoList);
     dispatch(loginActions.getLoginList(users));  
     dispatch(algoActions.getAlgoList(email));
     navigator("/");  
      //window.location.replace("/");
  };

  useEffect(()=>{
    
  },[loginList]);
  // await axios
  //   .post("/login", users)
  //   .then((response) => {
  //     dispatch(loginActions.getLoginList(response));
  // console.log(response.data);
  // let jwtToken = response.headers.get("authorization");
  // console.log(jwtToken);
  // console.log("ccccccccccccccc");
  // localStorage.setItem("Authorization", jwtToken);
  // localStorage.setItem("email", response.data.email);
  // localStorage.setItem("name", response.data.name);
  // console.log("email" + response.data.email);
  // localStorage.setItem("isLogin", true);
  // console.log("user  email=========================");
  //멤버정보 초기화
  //   setUsers({ email: "", password: "" });
  // })
  // .then((response) => {
  //   console.log("ddddddddddddddddddd");
  //   //dispatch(algoActions.getAlgoList(localStorage.getItem("email")));
  //   dispatch(algoActions.getAlgoList(loginList.email));
  // })
  // .then((response) => {
  //   //window.location.replace("/");
  //   // navigator("/");
  // })
  // .catch((error) => {
  //   console.error(error);
  //   if (error.response.status === 401)
  //     alert("아이디나 패스워드를 확인해주세요.");
  // });

  // Flask로 이메일 전송
  // console.log("flask email===================", email);
  //const email = localStorage.getItem("email");
  //await axios.post("http://127.0.0.1:5000/flask_login", { email }).then((response) => {
  //     console.log(response.data);
  // dispatch(algoActions.getAlgoList(localStorage.getItem("email")));
  //     localStorage.setItem("email", response.data.email);
  //     window.location.replace("/");
  //     navigator("/");
  //});
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div className="container pd-content-100">
      <form onSubmit={onSubmit} className="join-form">
        <h1 className="title">로그인</h1>
        <div className="container con">
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
          <div className="btn-area pd-top-40">
            <button type="submit" className="btn btn-origin login-btn">
              로그인
            </button>
            <Link className="btn btn-origin" to="/join">
              회원가입
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Use_Login;
