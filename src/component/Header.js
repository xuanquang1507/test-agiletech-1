import React from "react";
import logo from "../image/Logo.png";
import "./Style.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-btn">
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Header;
