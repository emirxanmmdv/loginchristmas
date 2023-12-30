import React, { useContext, useState } from "react";
import axios from "axios"; // Import axios library
import "./index.scss";
import { jwtDecode } from "jwt-decode";
import UserContext from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const { token, setToken, user, setUser } = useContext(UserContext);

  async function LogIN(e) {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/login", {
        userName: username,
        password: password,
      });

      if (response.data.message) {
        console.log("fail");
      } else {
        console.log("succesfull");
      }
      setToken(response.data);
      const decoded = jwtDecode(response.data);
      setUser(decoded);
      setPassword("");
      setUsername("");
      Navigate("/user");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="page1">
        <h1 className="siteHeader">ISVEREN.AZ</h1>
        <form>
          <input
            type="text"
            placeholder="username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update the event handler
          />
          <input
            type="text"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update the event handler
          />
          <button onClick={LogIN} className="logIN">
            Login
          </button>
        </form>
      </div>
      <div className="signInSector">
        <span className="signInText">Don't have an account?</span>
        <button className="signInBtn" onClick={()=>Navigate("/register")}>sign in</button>
      </div>
    </>
  );
};

export default Login;
