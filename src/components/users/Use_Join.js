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

  // const userList = useSelector((state) => state.user.userList);
  const [emailErrMsg, setEmailErrMsg] = useState(""); //email error 메세지
  const [emailChekMsg, setEmailChekMsg] = useState(""); //email 사용가능 메세지

  const { email, password, name, phone } = users;

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
    if (e.target.value === "") {
      setPasswordCheck("");
      
    } else {
      if (password !== e.target.value) {
        setPasswordCheck("비밀번호 불일치");
      } else {
        setPasswordCheck("비밀번호 일치");
      }
    return;}
  };


  const handleJoinSubmit = async (e) => {
    e.preventDefault();
      // 필수 정보가 비어 있는지 확인(단순히 name만 적으면 define. users 객체를 읽어올 수 있도록 정의해주기)
      //else if로 조건문을 작성하면 둘 중 하나의 조건의 조건이 ture일 때 해당 문장을 수행.
      //그렇게 되면 모든 가입정보가 입력되어도 모든 문장이 true가 되어 return으로 멈춰도 alter의 조건이 유효하기에 if로 따로 작성.
      //else if로 return과 alert의 위치를 바꾸면 팝업창이 안뜨니 곱게 if문으로 끊어서 쓰자...^^는 왜 안 돼.....!!!
     if ( !users.email || !users.password ||!users.name|| !users.phone) {
         alert("모든 가입 정보를 입력해주세요.");
        return;
      }
      if(password !== passwordCheck){
        alert("패스워드를 확인해주세요");
        return;
      }
      
      await axios
        .post("/join", users)
        .then((response) => {
          navigator("/login");
        })
        .catch((error) => {
          console.error(error);
          if(error.response.status === 500){
            alert('가입정보를 확인해주세요');
          }
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
              name="passwordCheck"
              placeholder="비밀번호 확인"
              onChange={passCheck}
            /></div>
            <div className="users_passchek">
              <span className='passcheck'>{passwordCheck}</span>
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
