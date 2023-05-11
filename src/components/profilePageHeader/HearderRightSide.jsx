import React from "react";
// import { FaHome } from "react-icons/fa";
import "./headerRightSide.css";

const HearderRightSide = ({ avatar, icon, title }) => {
  return (
    <div className="d-flex flex-column align-items-center  mx-3 wrapper">
      {icon}
      {avatar}
      <p className="icon-title">{title}</p>
    </div>
  );
};

export default HearderRightSide;
