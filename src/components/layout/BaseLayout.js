import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  color: isActive ? "#be3455" : "",
  fontSize: isActive ? "1.2rem" : "",
});

const BaseLayout = () => {
  return (
    <div>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          {/* <div> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" style={activeStyle} className="nav-link">
                HOME
                {/*추후 로고이미지 삽입으로 이동*/}
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto">
            <li>
              <NavLink to="/info/1" style={activeStyle} className="nav-link">
                전시
              </NavLink>
            </li>
            <li>
              <NavLink to="/info/1" style={activeStyle} className="nav-link">
                공연
              </NavLink>
            </li>
            <li>
              <NavLink to="/info/1" style={activeStyle} className="nav-link">
                박물관
              </NavLink>
            </li>
            <li>
              <NavLink to="/info/1" style={activeStyle} className="nav-link">
                검색
                {/* <img src="../../images/main/search.png">검색</img> */}
              </NavLink>
            </li>
          </ul>
          {/*로그인의 조건식. 비로그인 시 로그인하도록 구현*/}
          <ul className="navbar-nav ml-auto">
            {localStorage.getItem("email") != null ? (
              <>
                <li>
                  <NavLink
                    to="/mypage"
                    style={activeStyle}
                    className="nav-link"
                  >
                    MYPAGE
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    style={activeStyle}
                    className="nav-link"
                    to="/logout"
                  >
                    LOGOUT
                  </NavLink>
                </li>
                {localStorage.getItem("email") !== null ? (
                  <li>{localStorage.getItem("name") + " 님"}</li>
                ) : null}
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/join" style={activeStyle} className="nav-link">
                    JOIN
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/login" style={activeStyle} className="nav-link">
                    LOGIN
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default BaseLayout;
