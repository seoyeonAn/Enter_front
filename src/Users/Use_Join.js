import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Use_join.css";

const Use_Join = () => {
  // const 키워드를 사용하여 변수 users를 선언합니다.
  // 이 변수는 나중에 상태 값을 저장할 때 사용됩니다.
  const navigator = useNavigate();
  const [users, setUsers] = useState({
    // useState 함수를 사용하여 초기 상태를 설정합니다.
    // 이 상태 객체는 다음과 같은 속성을 가지며, 빈 문자열로 초기화됩니다.
    usersEmail: "",
    usersPass: "",
    usersName: "",
    usersPhone: "",
  });

  const handleValueChange = (e) => {
    setUsers({ ...users[e.targer.name] });
  };

  return (
    <div className="container">
      <form>
        <h1>회원가입</h1>
        <div className="container con">
          <div className="form-group mb-1 email_area">
            이메일
            <input
              type="usersid"
              className="form-control"
              name="usersid"
              placeholder="예시)example@gmail.com"
              onChange={handleValueChange}
            />
            <button type="submit" className="btn btn-primary">
              중복확인
            </button>
          </div>
          <div className="form-group mb-1 users_name">
            이름
            <input
              type="text"
              className="form-control"
              name="usersName"
              placeholder="이름"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_pass">
            비밀번호
            <input
              type="password"
              className="form-control"
              name="usersPass"
              placeholder="비밀번호"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_pass">
            비밀번호 확인
            <input
              type="password"
              className="form-control"
              name="usersPass"
              placeholder="비밀번호 확인"
              onChange={handleValueChange}
            />
          </div>
          <div className="form-group mb-1 users_phone">
            휴대폰 번호
            <input
              type="text"
              className="form-control"
              name="usersPhone"
              placeholder="-를 빼고 입력해주세요."
              onChange={handleValueChange}
            />
          </div>

          <div className="btn">
            <button type="submit" className="btn btn-primary">
              가입 완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Use_Join;
