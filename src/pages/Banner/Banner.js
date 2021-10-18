import React from "react";
import bannerImg from "../../images/banner/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <img src={bannerImg} alt="" />
      </div>
      <div className="banner-info">
        <h2>Best Medical & Healthcare Service For Your Family</h2>
        <p className="mt-4 mb-3">
          Health Care exists to provide a better patient experience. We are a
          one-stop-shop for your health, offering caring doctors, world-class
          diagnostics, and much more.
        </p>
        <button className="banner-btn">Make Appoinment</button>
      </div>
    </div>
  );
};

export default Banner;
