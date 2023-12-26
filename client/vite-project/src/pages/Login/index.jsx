import React, { useState } from "react";
import axios from "axios"; // Import axios library
import "./index.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function LogIN(e) {
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:3000/login', {
        userName: username,
        password: password
      });

      if (response.data.message) {
        console.log("fail");
      }
      else{
        console.log("succesfull");
      }
      setPassword("")
      setUsername("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page1">
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
        <button onClick={LogIN}>Login</button>
      </form>
    </div>
  );
};

export default Login;
