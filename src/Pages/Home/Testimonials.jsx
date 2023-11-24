import React, { useState } from "react";
import avt from "../../image/Ellipse 76.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageSlider = [
    {
      id: 1,
      name: "Hoàng Xuân Quang",
      mail: "alice@example.com",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: avt,
    },
    {
      id: 2,
      name: "Bob Smith",
      mail: "bob@example.com",
      title:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      img: avt,
    },
    {
      id: 3,
      name: "Eva Martinez",
      mail: "eva@example.com",
      title:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: avt,
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSlider.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imageSlider.length) % imageSlider.length
    );
  };

  return (
    <>
      <div className="testimonials">
        <h4>Testimonials</h4>
        <div className="testimonials-content">
          <div className="testimonials-avt">
            <img src={imageSlider[currentSlide].img} alt="avt" />
            <div className="avt-text">
              <h5>{imageSlider[currentSlide].name}</h5>
              <span>{imageSlider[currentSlide].mail}</span>
              <p>{imageSlider[currentSlide].title}</p>
            </div>
          </div>
        </div>
        <div className="back-next">
          <button className="back-btn" onClick={handlePrevSlide}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
          <button className="next-btn" onClick={handleNextSlide}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
