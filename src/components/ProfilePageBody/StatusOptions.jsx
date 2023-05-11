import React from "react";
import "./statusSection.css";

const StatusOptions = ({ icon, text }) => {
  return (
    <div className="d-flex align-items-center me-3 iconz justify-content-center">
      {icon}
      {text}
    </div>
  );
};

export default StatusOptions;
