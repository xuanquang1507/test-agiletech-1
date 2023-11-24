import React, { useState } from "react";
import "./Sign.css";
import logo from "../../image/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [accountInput, setAccountInput] = useState("");
  const handleHome = () => {
    navigate("/home");
  };
  const handleLogin = () => {
    axios
      .post("https://test-react.agiletech.vn/auth/login", {
        username: accountInput,
      })
      .then((response) => {
        if (response?.data?.code != 401) {
          localStorage.setItem("accessToken", response?.data?.accessToken);
          handleHome();
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  return (
    <div className="container signIn">
      <div className="logo" onClick={handleHome}>
        <img src={logo} alt="logo" />
      </div>
      <div className="login">
        <h2>Sign In</h2>
        <p>Username</p>
        <input
          type="text"
          value={accountInput}
          onChange={(e) => {
            setAccountInput(e.target.value);
          }}
        />
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
