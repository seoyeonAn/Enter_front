import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  color: isActive ? "#be3455" : "",
  fontSize: isActive ? "1.2rem" : "",
});

const BaseLayout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
          {/* <div> */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" style={activeStyle} className="nav-link">
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to="/info/1" style={activeStyle} className="nav-link">
                INFO
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

      <hr />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
