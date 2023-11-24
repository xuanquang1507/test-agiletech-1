import React, { useState } from "react";
import logo from "../image/Logo.png";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handlePost = () => {
    navigate("/post");
  };

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-btn">
          {isLoggedIn ? (
            <>
              <button onClick={handlePost}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
