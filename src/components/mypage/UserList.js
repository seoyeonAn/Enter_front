import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/common.css";
import { mypageActions } from "../../toolkit/actions/mypage_action";
import { loginActions } from "../../toolkit/actions/users_action";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState({
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.user.userList);
  console.log("userList:", userList);
  const loginList = useSelector((state) => state.login.loginList);
  const jwtToken = useSelector((state) => state.login.jwtToken);
  const navigator = useNavigate();
  const { email, password, name } = users;

  const config = {
    headers: {
      "Content-Type": "application/json",
      //Authorization: localStorage.getItem("Authorization"),
      Authorization: jwtToken,
    },
  };

  const handleValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const [passwordCheck, setPasswordCheck] = useState("");

  const passChange = (e) => {
    if (password !== e.target.value) setPasswordCheck("비밀번호 불일치");
    else setPasswordCheck("비밀번호 일치");
  };

  // const info = async () => {
  //     await axios
  //         .get("/mypage", config)
  //         .then((response) => {
  //             console.log(response.data);
  //            // setUsers({ ...response.data, password: "" });
  //            setUsers({...response.data.userList});
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // };

  // useEffect(() => {
  //     info();
  // }, []);

  console.log("function");
  useEffect(() => {
    console.log("useEffect");
    setUsers({ ...userList });
  }, [userList.email]); //userList

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (!password) {
    //   alert("비밀번호를 입력하세요.");
    //   return;
    // }
    alert("변경이 완료 되었습니다.")
    // else {
    //   alert("변경이 완료 되었습니다.")
    //   return;
    // }

    console.log("user:", users);
    setUsers({ ...users, email: email });
    await axios
      .post("/mypage/updateuser", users, config)
      .then((response) => {
        //localStorage.setItem("name", name);
        // setUsers({ name: loginList.name });
        //window.location.replace("/mypage");
        //window.location.reload();
        dispatch(loginActions.getLoginList(users));
      })
      .then((response) => {
        navigator("/mypage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="user-info-email user-info-desc">
          <span className="user-info-desc-l">이메일</span>
          <span className="user-info-desc-r">{users.email}</span>
        </div>
        <div className="user-info-name user-info-desc">
          <span className="user-info-desc-l">이름</span>
          <input
            type="text"
            className="user-info-desc-r"
            name="name"
            value={name}
            onChange={handleValueChange}
          />
        </div>
        <div className="user-info-pass user-info-desc">
          <span className="user-info-desc-l">비밀번호</span>
          <input
            type="password"
            className="user-info-desc-r"
            name="password"
            onChange={handleValueChange}
          />
        </div>
        <div className="user-info-pass">
          <div className="user-info-desc">
            <span className="user-info-desc-l">비밀번호 확인</span>
            <input
              type="password"
              className="user-info-desc-r"
              name="password2"
              onChange={passChange}
            />
          </div>
          <div className="users_passchek">
            <span className="passcheck">{passwordCheck}</span>
          </div>
        </div>
        {/* <div className="user-info-phone user-info-desc">
          <span className="user-info-desc-l">전화번호</span>
          <input
            type="text"
            className="user-info-desc-r"
            name="phone"
            value={phone}
            onChange={handleValueChange}
          />
        </div> */}
        <div className="btn-area user-info-desc-btn pd-top-60">
          <button type="submit" className="btn btn-origin">
            변경하기
          </button>
        </div>
      </form>
    </>
  );
};

export default UserList;
