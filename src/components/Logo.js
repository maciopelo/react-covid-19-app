import React from "react";
import "../styles/Logo.css";
import img1 from "../images/logo.png";

const Logo = ({ handleBackButton }) => {
  return (
    <div className="logo" onClick={handleBackButton}>
      <img src={img1} alt="covid_logo" />
    </div>
  );
};

export default Logo;
