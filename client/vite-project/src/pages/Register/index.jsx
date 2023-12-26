import React, { useState } from "react";
import "./index.scss";
import axios from "axios"; 

const Register = () => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function userRegister(e) {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/register", {
        userName: newUsername,
        password: newPassword,
        role: "user"
      });
      console.log(response.data);
      setNewUsername("");
      setNewPassword("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="page2">
      <form>
        <input
          type="text"
          placeholder="username..."
          value={newUsername} onChange={(e)=>setNewUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password..."
          value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
        />
        <button onClick={userRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
