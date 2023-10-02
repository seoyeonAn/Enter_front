import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  color: isActive ? "#be3455" : "",
  fontSize: isActive ? "1.2rem" : "",
});

const BaseLayout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

            <li>
              <NavLink to="/enter" style={activeStyle} className="nav-link">
                ENTERLIST
              </NavLink>
            </li>
            <li>
              <NavLink to="/mypage" style={activeStyle} className="nav-link">
                MYPAGE
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
