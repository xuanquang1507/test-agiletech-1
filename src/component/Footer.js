import React from "react";
import logo from "../image/Logo.png";
import brick from "../image/Rectangle 41.png";
import media from "../image/Ellipse 47.png";
import chat from "../image/Group 64.png";

const Footer = () => {
  return (
    <>
      <img src={brick} alt="" style={{ marginTop: "100px" }} />
      <div className="footer">
        <div className="footer-logo">
          <div className="footer-header">
            <div className="footer-header__top">
              <img src={logo} alt="" />
              <h4>DataWarehouse</h4>
            </div>
            <div className="footer-header__content">
              <h5>
                Warehouse Society, 234 <br />
                Bahagia Ave Street PRBW 29281
              </h5>
              <p>
                info@warehouse.project <br />
                1-232-3434 (Main)
              </p>
            </div>
          </div>
          <div className="footer-header">
            <div className="footer-header__top">
              <h4>About</h4>
            </div>
            <div className="footer-header__content-about">
              <p>
                Profile <br />
                Features <br />
                Careers <br />
                DW News
              </p>
            </div>
          </div>
          <div className="footer-header">
            <div className="footer-header__top">
              <h4>Help</h4>
            </div>
            <div className="footer-header__content-about">
              <p>
                Support <br />
                Sign up <br />
                Guide
                <br /> Reports <br />
                Q&A
              </p>
            </div>
          </div>
          <div className="footer-header">
            <div className="footer-header__top">
              <h4>Social Media</h4>
            </div>
            <div
              className="footer-header__content-about"
              style={{ display: "flex" }}
            >
              <img src={media} alt="media" style={{ marginRight: "10px" }} />
              <img src={media} alt="media" style={{ marginRight: "10px" }} />
              <img src={media} alt="media" />
            </div>
          </div>
        </div>
        <div className="footer-header__bt">
          <p>
            © Datawarehouse™, 2020. All rights reserved.
            <br />
            Company Registration Number: 21479524.
          </p>
          <img src={chat} alt="chat" />
        </div>
      </div>
    </>
  );
};

export default Footer;
