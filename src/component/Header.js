import React from "react";
import logo from "../image/Logo.png";
import "./Style.css";

const Header = () => {
  const handleLogout = () => {};
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-btn">
          <button>Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Header;
