import React, { useState } from "react";
import "./Sign.css";
import axios from "axios";
import logo from "../../image/Logo.png";

const SignIn = () => {
  const [username, setUsername] = useState("");
  return (
    <div className="container signIn">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login">
        <h2>Sign In</h2>
        <p>Username</p>
        <input type="text" />
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
