import React, { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./index.scss";
import UserContext from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import "./index.scss"

const UserNavbar = () => {
  const { token, setToken, user, setUser } = useContext(UserContext);
  const Navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME PAGE</NavLink>
        </li>
        <button onClick={() => {
          setToken(null)
          setUser(null)
          Navigate("/login")
        }}className="logOutBtn">LOG OUT</button>
      </ul>
    </nav>
  );
};

export default UserNavbar;
