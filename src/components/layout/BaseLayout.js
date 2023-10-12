import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  color: isActive ? "#be3455" : "",
});

const BaseLayout = () => {
  return (
    <div className="total">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          {/* <div> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" style={activeStyle} className="nav-link logo">
                <img src="/images/main/logo.png" />
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink
                to="/info/1"
                style={activeStyle}
                className="nav-link search"
              >
                <img src="/images/main/1.png" />
              </NavLink>
            </li>

            {/*로그인의 조건식. 비로그인 시 로그인하도록 구현*/}

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

      {/* footer */}
      <div className="footer">
        <footer>
          <p>
            법인명(상호) : 주식회사 엔터미션 | 사업자등록번호: 110-81-123456
          </p>
          <p>주소 : 서울특별시 서초구 서초동 엔터미션</p>
          <p>고객행복센터 : 1588-1234 (월~토요일 오전 10시~오후 6시)</p>
        </footer>
      </div>
    </div>
  );
};

export default BaseLayout;
