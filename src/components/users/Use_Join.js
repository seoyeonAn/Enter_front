import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/user.css";

const Use_Join = () => {
  const navigator = useNavigate();
  const [users, setUsers] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const { password } = users;

  const [passwordText, setPasswordText] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("Authorization"),
    },
  };

  //email 유효성 검사
  const handleCheckEmail = (e) => {
    console.log("handleCheckEmail 함수 호출됨");
    e.preventDefault();
    checkEmail(e);
  };

  //${process.env.REACT_APP_API_URL}
  const checkEmail = async (e) => {
    const regExp = /^[a-zA-Z]+@[a-zA-Z.]{2,20}$/;
    if (!regExp.test(e.target.previousElementSibling.value)) {
      alert("이메일은 영어로 시작한 10-20자까지의 영어를 사용하세요.");
      return;
    }

    console.log("email" + users.email);

    //이메일 존재여부 체크 후 존재시 가입을 막음

    await axios.get(`/users/email?email=${users.email}`).then((res) => {
      const resMessge = res.data;
      console.log("email:" + res.data);
      if (resMessge === 1) {
        setIsEmailValid(true);
        alert("사용가능한 이메일입니다.");
      } else {
        setIsEmailValid(false);
        alert("이미 사용중인 이메일입니다.");
      }
    });
  };
  const [passwordCheck, setPasswordCheck] = useState("");

  /*초기엔 passeordCheck가 빈 문자열(null이 아님!!)이지만, 
 비밀번호 확인(input name="passwordCheck")에 input이 없을 때 passcheck함수가 호출되어
 <span className='passcheck'>{passwordCheck}</span>가 passwordCheck의 상태값을 대신해
'비밀번호 불일치'메세지가 들어가므로 null이 아니게 됨.
 따라서 setPasswordCheck("")를 추가해 초기화시켜주기. 
 여기서 null로 초기화 시키면 빈문자열일 때 문장이 나오지 않게 됨.
 따라서 null이 아닌 빈문자열 ""로 초기화.
 */

  const passCheck = (e) => {
    setPasswordText(e.target.value);
    if (e.target.value === "") {
      setPasswordCheck("");
    } else {
      if (password !== e.target.value) {
        setPasswordCheck("비밀번호 불일치");
      } else {
        setPasswordCheck("비밀번호 일치");
      }
      return;
    }
  };

  const handleValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  //로그인 정보를 넘겨줌
  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    const { email, password, name, phone } = users;

    if (!isEmailValid) {
      alert("이메일 중복확인을 해주세요.");
      return;
    }

    if (!email || !password || !name) {
      alert("모든 가입 정보를 입력해주세요.");
      return;
    }
    // if (!email || !password || !name || !phone) {
    //   alert("모든 가입 정보를 입력해주세요.");
    //   return;
    // }

    console.log(password, passwordText);
    if (password !== passwordText) {
      alert("비밀번호 불일치");
      return;
    }
    await axios
      .post("/join", users)
      .then((response) => {
        navigator("/login");
      })
      .catch((error) => {
        console.error(error);

        if (error.response.status === 500) {
          alert("가입정보를 확인해주세요");
        }
      });
  };

  return (
    <div className="container pd-content-100">
      <form onSubmit={handleJoinSubmit} className="join-form">
        <h1 className="title">회원가입</h1>
        <div className="container con">
          <div className="form-group mb-1 email_area">
            <span>이메일</span>
            <div className="email-input-area">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="예시) exam@example.com"
                onChange={handleValueChange}
              />
              <button
                type="submit"
                className="btn btn-origin"
                onClick={handleCheckEmail}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="form-group mb-1 users_name">
            이름
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="이름"
              autoComplete="name"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_pass">
            비밀번호
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="비밀번호"
              autoComplete="current-password"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_pass">
            비밀번호 확인
            <input
              type="password"
              className="form-control"
              name="passwordText"
              placeholder="비밀번호 확인"
              value={passwordText}
              onChange={passCheck}
            />
          </div>
          <div className="users_passchek">
            <span className="passcheck">{passwordCheck}</span>
          </div>

          {/* <div className="form-group mb-1 users_phone">
            휴대폰 번호
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="-를 빼고 입력해주세요."
              onChange={handleValueChange}
            />
          </div> */}

          <div className="btn-area pd-top-40">
            <button
              type="submit"
              className="btn btn-origin"
              onClick={handleJoinSubmit}
            >
              가입 완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Use_Join;
