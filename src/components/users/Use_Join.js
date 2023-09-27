import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../css/Use_join.css";

const Use_Join = () => {
  // const 키워드를 사용하여 변수 users를 선언합니다.
  // 이 변수는 나중에 상태 값을 저장할 때 사용됩니다.
  const navigator = useNavigate();
  const [users, setUsers] = useState({
    // useState 함수를 사용하여 초기 상태를 설정합니다.
    // 이 상태 객체는 다음과 같은 속성을 가지며, 빈 문자열로 초기화됩니다.
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const [emailErrMsg, setEmailErrMsg] = useState(""); //email error 메세지
  const [emailChekMsg, setEmailChekMsg] = useState(""); //email 사용가능 메세지

  //email 유효성 검사
  const handleCheckEmail = (e) => {
    console.log("handleCheckEmail 함수 호출됨");
    e.preventDefault();
    checkEmail(e);
  };

  //${process.env.REACT_APP_API_URL}
  const checkEmail = async (e) => {
    const regExp = /^[a-zA-Z]+@[a-zA-Z0-9.]{2,20}$/;
    if (!regExp.test(e.target.previousElementSibling.value)) {
      setEmailErrMsg("이메일은 10-20자까지의 영어, 숫자를 사용하세요.");
      return;
    }

    await axios.get(`/users/email?email=${users.email}`).then((res) => {
      const resMessge = res.data;

      if (resMessge === 1) {
        alert("사용가능한 이메일입니다.");
      } else {
        alert("이미 사용중인 이메일입니다.");
      }
    });
  };

  //회원가입 시 form에 값을 저장하고 로그인페이지로 넘어감
  const handleValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleJoinSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/join", users)
      .then((response) => {
        navigator("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleJoinSubmit}>
        <h1>회원가입</h1>
        <div className="container con">
          <div className="form-group mb-1 email_area">
            이메일
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="예시) exam@example.com"
              onChange={handleValueChange}
            />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleCheckEmail}
            >
              중복확인
            </button>
          </div>
          <div className="form-group mb-1 users_name">
            이름
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="이름"
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
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_pass">
            비밀번호 확인
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="비밀번호 확인"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_phone">
            휴대폰 번호
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="-를 빼고 입력해주세요."
              onChange={handleValueChange}
            />
          </div>

          <div className="btn">
            <button
              type="submit"
              className="btn btn-primary"
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
