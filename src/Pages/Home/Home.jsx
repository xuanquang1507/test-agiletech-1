import React from "react";
import Header from "../../component/Header";
import img1 from "../../image/image1 1.png";
import "./style.css";
import Features from "./Features";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="home">
        <div className="header-content">
          <div className="header-content__left">
            <h1>
              Save your data
              <br />
              storage here.
            </h1>
            <p>
              Data Warehouse is a data storage area that <br />
              has been tested for security, so you can store <br />
              your data here safely but not be afraid of <br />
              being stolen by others.
            </p>
            <div className="header-content__left-btn">
              <button>Learn more</button>
            </div>
          </div>
          <div className="header-content__right">
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
