import React, { useState } from "react";
import "./index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const Navigate = useNavigate();

  async function userRegister(e) {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/register", {
        userName: newUsername,
        password: newPassword,
        role: "user",
      });
      console.log(response.data);
      setNewUsername("");
      setNewPassword("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="page2">
      <h1 className="siteHeader">ISVEREN.AZ</h1>
        <form>
          <input
            type="text"
            placeholder="username..."
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="password..."
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={(e)=>{
            userRegister(e)
            Navigate("/login")
          }} >Register</button>
        </form>
      </div>
      <div className="LogInSector">
        <span className="logInText">Already have an account?</span>
        <button className="logInBtn" onClick={()=>Navigate("/login")} >Log in</button>
      </div>
    </>
  );
};

export default Register;
